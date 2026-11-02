---
name: health-data-privacy
description: Handle health data safely — minimise and de-identify patient information, check lawful basis and consent, and flag LOPDP Ecuador / HIPAA / GDPR risks before any task stores or shares clinical data.
key: paperclipai/bundled/health/health-data-privacy
recommendedForRoles:
  - general
  - pm
  - ceo
tags:
  - health
  - privacy
  - compliance
  - lopdp
---

# Health Data Privacy

Health data is a special category of personal data almost everywhere (LOPDP Ecuador art. 26, HIPAA in the US, GDPR art. 9 in the EU). Treat it as the highest-risk data your organization handles.

## When to use

- A task, document, routine, or connector would read, store, or send patient information.
- Someone pastes clinical notes, lab results, images, or IDs into a task.
- A new workflow (forms, reminders, telemedicine, research datasets) is being designed.

## Rules

1. **Minimise.** Ask whether the task can be done with no patient data, then with de-identified data, and only then with identifiable data.
2. **De-identify by default.** Remove names, ID/cédula numbers, phone, email, address, exact dates of birth, photos of faces, and free-text that identifies a person. Use a pseudonym such as `Paciente-017`.
3. **Lawful basis and consent.** Before processing identifiable data, confirm in writing who the data controller is, the purpose, the legal basis (explicit consent or healthcare provision), and the retention period.
4. **Least privilege.** Only the agents and connectors that need the data get it. Prefer connectors set to *Ask first*.
5. **Never in logs.** Do not paste identifiable data in comments, titles, or activity text; reference a record ID in the clinical system instead.
6. **Breaches.** If identifiable data appears where it should not, stop, tell a human immediately, and record what was exposed and where. LOPDP requires notifying the authority within 5 days.

## Output

When asked to review a workflow, reply with: data involved, de-identification applied, legal basis, risks (high/medium/low), and the human approvals still needed.

You support licensed health professionals; you never diagnose, prescribe, or make clinical decisions on your own. Anything that reaches a patient must be reviewed and approved by a responsible clinician. Never put identifiable patient data in tasks, comments, or files unless the organization has confirmed a lawful basis and a compliant setup (LOPDP Ecuador, HIPAA, GDPR or the local equivalent).
