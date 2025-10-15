# DEVINARCH Repository Blueprint

## Monorepo Layout

```
devinarch/
├─ apps/
│  ├─ web/                         # Next.js (or Remix) app for admins + staff + volunteers
│  │  ├─ app/                      # routes (RSC), layouts, server actions
│  │  ├─ components/
│  │  ├─ features/                 # feature-sliced folders (cohesive UI + hooks)
│  │  │  ├─ people/
│  │  │  ├─ groups/
│  │  │  ├─ messaging/
│  │  │  ├─ attendance-checkin/
│  │  │  ├─ events-registrations/
│  │  │  ├─ worship-scheduling/
│  │  │  ├─ giving/
│  │  │  ├─ accounting/
│  │  │  ├─ connect-portal/        # public site/app builder (cards, forms, directory)
│  │  │  ├─ automations/
│  │  │  ├─ projects-tasks/
│  │  │  ├─ reports/
│  │  │  ├─ settings/
│  │  ├─ lib/                      # shared client libs (api client, auth, utils)
│  │  ├─ public/
│  │  └─ tests/
│  ├─ connect/                     # React Native/Expo app for members (PWA+native)
│  │  ├─ app/                      # Expo Router, screens: Home, Give, Events, Forms, Directory
│  │  ├─ components/
│  │  ├─ lib/                      # push, deep links, offline cache
│  │  └─ tests/
│  └─ admin-api-gateway/           # optional BFF for web+mobile (GraphQL/REST proxy)
│
├─ services/                       # microservices (modular monorepo w/ Nx or Turbo)
│  ├─ identity/                    # users, roles, sessions, SSO, 2FA
│  ├─ people/                      # people, families, member statuses, custom fields
│  ├─ groups/                      # groups + smart lists + permissions scoping
│  ├─ messaging/                   # email, SMS, voice, push; templates; throttling
│  ├─ attendance/                  # events attendance, live mode, quick entry
│  ├─ checkin/                     # kiosk, iPad app endpoints, labels, QR, security
│  ├─ events/                      # calendars, recurring/clone, public calendar embed
│  ├─ registrations/               # forms, capacities/caps, tickets/payments
│  ├─ worship/                     # services, runsheets, songs, CCLI/SongSelect
│  ├─ scheduling/                  # teams, roles, invites, availability, reminders
│  ├─ giving/                      # batches, pledges, statements, text-to-give, Stripe
│  ├─ accounting/                  # fund accounting, budgets, register, recon, checks
│  ├─ automations/                 # triggers, actions, chained workflows, recipes
│  ├─ storage/                     # file storage, sharing, S3/GCS backends
│  ├─ projects/                    # internal PM: projects, tasks, assignees
│  ├─ reporting/                   # scheduled reports, PDFs, exports
│  └─ cms-connect/                 # “Connect” builder: cards, forms, directory, app branding
│
├─ packages/
│  ├─ ui/                          # design system (shadcn/ui, Tailwind, Radix), email components
│  ├─ utils/                       # date, money, validation, i18n (en/es at minimum)
│  ├─ printing/                    # label formats (DYMO/Zebra), badges, checks
│  ├─ pdfkit/                      # contribution statements, directories, reports
│  ├─ auth-sdk/                    # client auth helpers (OAuth/JWT/passkeys)
│  └─ sdk/                         # typed client for all services (ts + openapi)
│
├─ infra/
│  ├─ terraform/                   # clouds, VPC, DBs, queues, object storage, CDN
│  ├─ k8s/                         # deployments, HPAs, secrets
│  ├─ ci/                          # GitHub Actions: build, test, lint, migrations
│  └─ observability/               # OpenTelemetry, Grafana dashboards, alert rules
│
├─ database/
│  ├─ migrations/                  # Prisma/Drizzle migrations per service
│  ├─ seed/
│  └─ schemas/                     # ERDs, JSON Schemas, OpenAPI specs
│
├─ docs/
│  ├─ product-specs/
│  ├─ api/
│  ├─ compliance/                  # SOC2-lite, GDPR, data retention, audit trails
│  └─ playbooks/                   # support, incident, data import, rollbacks
└─ SECURITY.md
```

## Feature Parity and Terminology

The DEVINARCH platform maps directly to ChurchTrac’s feature set so that teams can migrate confidently while gaining strategic advantages. Each feature module listed above is scoped to match the ChurchTrac vocabulary (People, Smart Lists, Groups, Messaging, Church Connect, Attendance & Check-In, Events, Registrations, Giving, Accounting, Worship Planning, Automations, File Storage, Projects & Tasks, Permissions, Integrations). This structure keeps implementation boundaries crisp and makes it clear which service or package owns a given capability.

## Data Model Overview

High-level entities tracked across the services include: People, Families, Addresses, Communications (email/phone), CustomFields, Groups, GroupMemberships, SmartLists (SavedQueries), Events, Calendars, Registrations, RegistrationForms, AttendanceRecords, CheckinSessions, Labels/PrintJobs, Songs, Services (ServicePlans, Items, Attachments), Teams, Roles, Assignments, Availability, Messages (Email/SMS/Push/Voice) plus Templates, Donations (Batches, Gifts, Pledges, Funds, Categories, Deposits), Accounting (Accounts, Funds, Budgets, Transactions, Reconciliations, Checks), Automations (Triggers, Actions, Workflows, Runs), Files, Projects, Tasks, Users, Roles, Permissions, and AuditLogs.

## Differentiators

DEVINARCH can leapfrog ChurchTrac by emphasizing:

- **Open API + Webhooks** for third-party integrations and workflow tools.
- **Advanced registration commerce** with waitlists, discount codes, and payment schedules.
- **Visual automation studio** with recipes, dedupe protections, and per-channel rate limits.
- **Offline-first check-in** flows with resilient printer handling.
- **Operational observability** dashboards covering messaging, automations, and data health.

## Next Steps

This blueprint can be extended into feature-level specs or ERDs for each service. Converting the structure into an Nx/Turbo repo scaffold with shared tooling is a logical next milestone.
