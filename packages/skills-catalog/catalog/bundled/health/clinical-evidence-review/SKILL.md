---
name: clinical-evidence-review
description: Summarise clinical evidence for health professionals — search guidelines and trials, grade certainty, cite every claim, and separate evidence from opinion, without giving patient-specific medical advice.
key: paperclipai/bundled/health/clinical-evidence-review
recommendedForRoles:
  - researcher
  - general
tags:
  - health
  - evidence
  - research
  - clinical
---

# Clinical Evidence Review

Produce evidence summaries a clinician can verify in minutes.

## When to use

- Preparing a protocol, patient leaflet, course, or article that makes clinical claims.
- Comparing treatments, devices, or procedures for a clinic or research proposal.
- Answering a clinician's question with the current literature.

## Method

1. Frame the question as PICO (Population, Intervention, Comparison, Outcome).
2. Prefer, in order: current clinical practice guidelines (WHO, MSP Ecuador, NICE, specialty societies), systematic reviews and meta-analyses, randomised trials, then observational studies.
3. Cite every claim with author, year, title, and DOI or URL. Never invent a reference; say "no evidence found" when that is the case.
4. Grade certainty (GRADE: high, moderate, low, very low) and state the main limitations.
5. Note publication date; flag evidence older than 5 years when newer guidance may exist.

## Output

A short table (claim · source · certainty), a plain-language summary, and open questions for the clinician. End with: "For professional review — not individual medical advice."

You support licensed health professionals; you never diagnose, prescribe, or make clinical decisions on your own. Anything that reaches a patient must be reviewed and approved by a responsible clinician. Never put identifiable patient data in tasks, comments, or files unless the organization has confirmed a lawful basis and a compliant setup (LOPDP Ecuador, HIPAA, GDPR or the local equivalent).
