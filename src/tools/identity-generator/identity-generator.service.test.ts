import { describe, expect, it } from 'vitest';
import { generateIdentity, IDENTITY_FIELDS } from './identity-generator.service';

describe('identity-generator', () => {
  it('returns every field as a non-empty string', () => {
    const identity = generateIdentity('en', 1);

    for (const field of IDENTITY_FIELDS) {
      expect(identity[field]).toEqual(expect.any(String));
      expect(identity[field].length).toBeGreaterThan(0);
    }
  });

  it('keeps name and email coherent', () => {
    const identity = generateIdentity('en', 1);

    expect(identity.fullName).toContain(identity.firstName);
    expect(identity.fullName).toContain(identity.lastName);
    expect(identity.email).toContain('@');
    expect(identity.email.toLowerCase()).toContain(identity.firstName.toLowerCase());
  });

  it('returns a uuid v4', () => {
    const identity = generateIdentity('en', 1);

    expect(identity.uuid).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    );
  });

  it('is deterministic for the same seed', () => {
    expect(generateIdentity('en', 42)).toEqual(generateIdentity('en', 42));
  });

  it('can produce a different person for a different seed', () => {
    expect(generateIdentity('en', 1)).not.toEqual(generateIdentity('en', 2));
  });

  it('keeps username and email ascii for vietnamese names', () => {
    const identity = generateIdentity('vi', 7);

    expect(identity.username).toMatch(/^[a-z0-9]+$/);
    expect(identity.email.split('@')[0]).toMatch(/^[a-z.0-9]+$/);
  });
});
