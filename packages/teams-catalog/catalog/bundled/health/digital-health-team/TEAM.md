---
name: Digital Health & Telemedicine
description: Health team for digital-health products and telemedicine services: a Digital Health Lead, a Clinical Safety officer who reviews risks of features that affect patients, and a Patient Experience designer for accessible, bilingual flows.
schema: agentcompanies/v1
slug: digital-health-team
category: health
key: paperclipai/bundled/health/digital-health-team
manager: agents/digital-health-lead/AGENTS.md
includes:
  - agents/clinical-safety/AGENTS.md
  - agents/patient-experience/AGENTS.md
  - projects/digital-health-product/PROJECT.md
defaultInstall: false
recommendedForCompanyTypes:
  - health
  - digital-health
  - telemedicine
  - software
tags:
  - health
  - digital-health
  - telemedicine
  - safety
requiredSkills:
  - paperclipai/bundled/health/health-data-privacy
  - paperclipai/bundled/health/clinical-evidence-review
  - paperclipai/bundled/health/patient-communication
  - paperclipai/bundled/paperclip-operations/task-planning
---

# Digital Health & Telemedicine

For teams building patient apps, portals, remote monitoring or telemedicine. Pair it with the software-development teams when you also need engineers.

## Contents

- `DigitalHealthLead` — owns the product roadmap for apps, portals and telemedicine services.
- `ClinicalSafety` — clinical risk assessment of features, hazard logs and safe-use checks.
- `PatientExperience` — accessible, bilingual patient flows: onboarding, booking, video visits and reminders.
- `digital-health-product` project — Roadmap, requirements, clinical-safety reviews and patient flows.
- `biweekly-safety-review` routine — clinical-safety and privacy review of features about to ship.

## Safety

Agents in this team support licensed professionals. They do not diagnose, prescribe, or decide on care; patient-facing output always needs clinician approval, and identifiable patient data stays out of tasks unless the organization runs a compliant setup.
