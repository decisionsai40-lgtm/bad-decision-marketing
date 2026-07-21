# Branch Strategy

## Main Branches

- **`main`** — Production. Only merged from `develop` via PR. Deploys to production (Vercel).
- **`develop`** — Integration branch. All feature/fix branches merge here first.

## Supporting Branches

- **`fix/*`** — Bug fixes and audit fixes. Branch from `develop`, merge back to `develop`.
- **`feat/*`** — New features. Branch from `develop`, merge back to `develop`.
- **`chore/*`** — Maintenance tasks (dependency updates, CI changes, etc.).

## Workflow

1. Create a branch from `develop`: `fix/xxx`, `feat/xxx`, or `chore/xxx`.
2. Make changes, commit, and push.
3. Open a PR to `develop`.
4. After review and CI passes, merge to `develop`.
5. Periodically, `develop` is merged to `main` for production deployment.

## Commit Convention

Use conventional commits:
- `fix:` for bug fixes
- `feat:` for new features
- `chore:` for maintenance
- `docs:` for documentation
- `refactor:` for code restructuring

## Environment

- Production: https://baddecision.app (Vercel, from `main`)
- Dashboard: https://dashboard.baddecision.app (separate app)
- API: https://api.baddecision.app (separate app)
