---
name: Clinical Research
description: Health team for clinical research: a Principal Investigator assistant who coordinates, an Evidence Analyst for literature and protocol support, and a Research Ethics & Data officer for consent, ethics-committee files and de-identified datasets.
schema: agentcompanies/v1
slug: clinical-research-team
category: health
key: paperclipai/bundled/health/clinical-research-team
manager: agents/research-lead/AGENTS.md
includes:
  - agents/evidence-analyst/AGENTS.md
  - agents/research-ethics/AGENTS.md
  - projects/research-program/PROJECT.md
defaultInstall: false
recommendedForCompanyTypes:
  - health
  - research
  - hospital
tags:
  - health
  - research
  - evidence
  - ethics
requiredSkills:
  - paperclipai/bundled/health/health-data-privacy
  - paperclipai/bundled/health/clinical-evidence-review
  - paperclipai/bundled/health/patient-communication
  - paperclipai/bundled/paperclip-operations/task-planning
---

# Clinical Research

Supports investigators, residents and research units with the organisational work of a study. Scientific and ethical decisions always remain with the human investigator and the ethics committee.

## Contents

- `ResearchLead` — coordinates studies, timelines and deliverables for the principal investigator.
- `EvidenceAnalyst` — literature reviews, PICO questions, evidence tables and manuscript drafts with verified citations.
- `ResearchEthics` — informed-consent drafts, ethics-committee checklists, de-identification and data-management plans.
- `research-program` project — Protocols, literature reviews, ethics submissions and publications.
- `monthly-literature-watch` routine — monthly scan of new guidelines and trials in the program's topics.

## Safety

Agents in this team support licensed professionals. They do not diagnose, prescribe, or decide on care; patient-facing output always needs clinician approval, and identifiable patient data stays out of tasks unless the organization runs a compliant setup.
