---
name: Clinic & Medical Practice
description: Health team for a clinic or medical practice: a Medical Director who leads, a Patient Coordinator for scheduling and follow-up, a Health Communications lead for patient education and social media, and a Privacy & Compliance officer for LOPDP/HIPAA.
schema: agentcompanies/v1
slug: clinic-team
category: health
key: paperclipai/bundled/health/clinic-team
manager: agents/medical-director/AGENTS.md
includes:
  - agents/patient-coordinator/AGENTS.md
  - agents/health-communications/AGENTS.md
  - agents/privacy-officer/AGENTS.md
  - projects/clinic-operations/PROJECT.md
defaultInstall: false
recommendedForCompanyTypes:
  - health
  - clinic
  - medical-practice
tags:
  - health
  - clinic
  - patients
  - compliance
requiredSkills:
  - paperclipai/bundled/health/health-data-privacy
  - paperclipai/bundled/health/clinical-evidence-review
  - paperclipai/bundled/health/patient-communication
  - paperclipai/bundled/paperclip-operations/task-planning
---

# Clinic & Medical Practice

A ready-to-install team for clinics, medical offices and aesthetic-medicine practices. It covers operations, patient communication and data protection — not clinical decision-making.

## Contents

- `MedicalDirector` — team lead; sets clinical priorities, reviews protocols and approves anything patient-facing.
- `PatientCoordinator` — appointment reminders, waiting-list follow-up, no-show reduction and patient journey improvements.
- `HealthCommunications` — patient education, leaflets, website and social media content aligned with advertising rules.
- `PrivacyOfficer` — data-protection reviews, consent forms, records of processing and breach checklists.
- `clinic-operations` project — Rolling backlog for patient experience, protocols, communications and compliance.
- `weekly-clinic-review` routine — weekly review of open work, patient-experience metrics and compliance items.

## Safety

Agents in this team support licensed professionals. They do not diagnose, prescribe, or decide on care; patient-facing output always needs clinician approval, and identifiable patient data stays out of tasks unless the organization runs a compliant setup.
