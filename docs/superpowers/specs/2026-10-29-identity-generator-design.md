# Identity generator

Date: 2026-10-29

## Goal

A client-side workbench tool that generates one fake person at a time so a developer can copy names, contact fields, and related test data. Locale is English or Vietnamese. Refresh replaces the whole person. No network. No credit-card numbers.

## Surface

- Path: `/identity-generator`
- Category: Data
- Name: Identity generator
- Icon: Tabler `User`
- Shows as new (`createdAt: 2026-10-29`)
- Glass workbench already in `tool.layout.vue`
- Locale switch: EN / VI
- One identity per refresh
- Each field is a labeled copyable input
- Extra action: copy the identity as JSON
- Email, username, and password are derived from the generated first/last name so one row is one coherent person

## Fields (in this order)

firstName, lastName, fullName, username, email, phone, gender, birthday, address, city, zip, country, job, company, password, uuid, userAgent

Birthday is `YYYY-MM-DD`. UUID is v4.

## Engine

`@faker-js/faker` with `en` and `vi` locales. `generateIdentity(locale, seed?)` lives in `identity-generator.service.ts` and is the only place faker is called. Optional seed makes tests deterministic.

## UI

Follow existing generator tools: `c-buttons-select` for locale, `n-input-group` + `InputCopyable` for fields, Refresh + Copy JSON buttons. i18n keys in `locales/en.yml` and `locales/vi.yml`.

## Tests

Service tests: required keys present, email contains `@`, uuid matches v4 shape, same seed returns the same identity, different locales can differ.

## Out of scope

Batch generation, credit cards, extra locales, API fetch, restyling cards/buttons.
