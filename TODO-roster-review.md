# TODO: Staff Roster — Executive Review Required

> **Status:** HOLD — Do not publish or act on this file until the CEO / attending dentist provides written sign-off on the final staffing transition.

This file documents discrepancies between the **staging site roster** (currently live on the website) and the **legacy payroll/records**. It must be reviewed and resolved before the staff page is considered production-accurate.

---

## Current Staging Roster (12 people)

| Name | Role |
|---|---|
| Don | Office Manager |
| Eva | Assistant Manager |
| Gabbie | Treatment Coordinator |
| Jannet | Scheduling Coordinator |
| Michelle | Scheduling Coordinator |
| Cassie | Hygienist |
| Stephenie | Hygienist |
| Maggie | Lead Dental Assistant |
| Maria | Dental Assistant |
| Olga | Dental Assistant |
| Noemi | Dental Assistant |
| Sema | Hygiene Assistant |

---

## Discrepancies vs. Legacy Payroll

### Omitted from staging — need confirmation
- **Cathy R.** — Clinic Manager and 23-year Hygienist. Absent from the staging roster with no explanation. Requires explicit confirmation of current employment status before the site goes live.
- **Natalie F.** — Dental Assistant. No legacy documentation for removal.
- **Cheryl** — Dental Assistant. No legacy documentation for removal.

### Role discrepancy
- **Eva C.** — Listed as **Assistant Manager** in the staging roster. Legacy records designate her role as **Dental Assistant**. Requires clarification before the title is published.

### New additions with no legacy documentation
- **Noemi** — Dental Assistant. No prior record found.
- **Sema** — Hygiene Assistant. No prior record found.

---

## Action Required

1. CEO or attending dentist must confirm the final headcount and roles in writing.
2. Resolve Cathy R., Natalie F., and Cheryl omissions.
3. Confirm Eva C.'s correct title.
4. Verify Noemi and Sema are active employees.
5. Once confirmed, update `app/[locale]/about/meet-the-team/page.tsx` → `TEAM_MEMBERS` array and remove this file.
