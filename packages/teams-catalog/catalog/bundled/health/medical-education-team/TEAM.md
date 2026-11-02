---
name: Medical Education & Content
description: Health team for medical education and content: an Education Director who plans courses, a Medical Writer for evidence-based articles and scripts, and a Course Designer for lessons, quizzes and bilingual material.
schema: agentcompanies/v1
slug: medical-education-team
category: health
key: paperclipai/bundled/health/medical-education-team
manager: agents/education-director/AGENTS.md
includes:
  - agents/medical-writer/AGENTS.md
  - agents/course-designer/AGENTS.md
  - projects/education-program/PROJECT.md
defaultInstall: false
recommendedForCompanyTypes:
  - health
  - education
  - content
tags:
  - health
  - education
  - content
  - bilingual
requiredSkills:
  - paperclipai/bundled/health/health-data-privacy
  - paperclipai/bundled/health/clinical-evidence-review
  - paperclipai/bundled/health/patient-communication
  - paperclipai/bundled/paperclip-operations/task-planning
---

# Medical Education & Content

For physicians, societies, universities and health creators producing courses and content for professionals or patients. Clinical case material must be fictional or fully de-identified.

## Contents

- `EducationDirector` — plans curricula, courses and content calendars for professionals or patients.
- `MedicalWriter` — evidence-based articles, scripts, slides and newsletters with verified references.
- `CourseDesigner` — lesson structure, clinical cases (fictional), quizzes and assessments.
- `education-program` project — Courses, articles, videos and patient-education material.
- `weekly-content-plan` routine — weekly content calendar and review of drafts awaiting expert approval.

## Safety

Agents in this team support licensed professionals. They do not diagnose, prescribe, or decide on care; patient-facing output always needs clinician approval, and identifiable patient data stays out of tasks unless the organization runs a compliant setup.
