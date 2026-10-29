# Identity generator Implementation Plan

> **For agentic workers:** Implement inline in this session. Do not commit unless the user asks.

**Goal:** Add a Data-category workbench tool that generates one fake identity (EN/VI) with copyable fields and JSON copy.

**Architecture:** `@faker-js/faker` behind `generateIdentity(locale, seed?)`. Vue refreshes via `computedRefreshable`. Register in `src/tools/index.ts` Data category.

**Tech Stack:** Vue 3, existing glass workbench, InputCopyable, c-buttons-select, vue-i18n, Vitest.

---

### Task 1: Service (TDD)

- Create: `src/tools/identity-generator/identity-generator.service.test.ts`
- Create: `src/tools/identity-generator/identity-generator.service.ts`
- Add: `@faker-js/faker`

- [ ] Failing tests for keys, email, uuid v4, seed determinism
- [ ] `generateIdentity` + `IDENTITY_FIELDS`
- [ ] Tests pass with jsdom/node vitest

### Task 2: Tool shell

- Create: `src/tools/identity-generator/index.ts`
- Create: `src/tools/identity-generator/identity-generator.vue`
- Modify: `src/tools/index.ts` Data category
- Modify: `locales/en.yml`, `locales/vi.yml`

- [ ] Locale switch, copyable fields, Refresh, Copy JSON
- [ ] Verify `/identity-generator` in the browser (dark + light, EN + VI, refresh, copy)
