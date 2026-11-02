import { describe, expect, it } from "vitest";

import en from "../i18n/locales/en.json";
import es from "../i18n/locales/es.json";
import { navKeyForLabel, PAGE_GUIDE_ROUTES, pageGuideKeyForPath, sectionKeyForLabel } from "./ui-guidance";

const SIDEBAR_LABELS = [
  "New Task", "Search", "Dashboard", "Inbox", "Chat", "Decisions", "Status", "Conference Room", "Tasks",
  "Projects", "Routines", "Artifacts", "Cases", "Goals", "Workspaces", "Agents", "Skills", "Connectors",
  "Audit", "Activity", "Org", "Timeline", "Costs", "Commentary", "Settings",
];

describe("ui guidance", () => {
  it("gives every primary sidebar button a label and a permanent hint in English and Spanish", () => {
    for (const label of SIDEBAR_LABELS) {
      const key = navKeyForLabel(label);
      expect(key, label).not.toBeNull();
      for (const messages of [en, es]) {
        const entry = (messages.nav as unknown as Record<string, { label: string; hint: string }>)[key!];
        expect(entry?.label, `${label} label`).toBeTruthy();
        expect(entry?.hint, `${label} hint`).toBeTruthy();
      }
    }
  });

  it("translates the sidebar section headers", () => {
    for (const label of ["Work", "Org", "Organization"]) {
      expect(es.nav.sections[sectionKeyForLabel(label) as keyof typeof es.nav.sections]).toBeTruthy();
    }
  });

  it("has a bilingual page guide with button explanations for every guided route", () => {
    for (const route of PAGE_GUIDE_ROUTES) {
      const key = route.replace(/[/-]/g, "_");
      for (const messages of [en, es]) {
        const guide = (messages.guide as unknown as Record<string, { title: string; description: string; buttons: Record<string, string> }>)[key];
        expect(guide?.title, `${route} title`).toBeTruthy();
        expect(guide?.description, `${route} description`).toBeTruthy();
        expect(Object.keys(guide?.buttons ?? {}).length, `${route} buttons`).toBeGreaterThan(0);
      }
    }
  });

  it("matches company-relative list routes and skips detail pages", () => {
    expect(pageGuideKeyForPath("/dashboard")).toBe("dashboard");
    expect(pageGuideKeyForPath("/company/settings")).toBe("company_settings");
    expect(pageGuideKeyForPath("/agents/active")).toBe("agents");
    expect(pageGuideKeyForPath("/issues/CLN-12")).toBeNull();
  });
});
