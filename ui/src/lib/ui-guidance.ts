import { useSyncExternalStore } from "react";

const GUIDE_MODE_STORAGE_KEY = "galeno.guideMode";
const listeners = new Set<() => void>();

// Guide mode is on by default for people; the test suite starts with it off so
// existing label assertions stay exact, and guidance tests opt in explicitly.
const GUIDE_MODE_DEFAULT = import.meta.env?.MODE !== "test";

function readGuideMode(): boolean {
  try {
    const stored = globalThis.localStorage?.getItem(GUIDE_MODE_STORAGE_KEY);
    return stored ? stored === "on" : GUIDE_MODE_DEFAULT;
  } catch {
    return GUIDE_MODE_DEFAULT;
  }
}

let guideModeEnabled = readGuideMode();

export function setGuideModeEnabled(enabled: boolean) {
  guideModeEnabled = enabled;
  try {
    globalThis.localStorage?.setItem(GUIDE_MODE_STORAGE_KEY, enabled ? "on" : "off");
  } catch {
    // Storage may be unavailable; keep the in-memory value.
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useGuideMode(): boolean {
  return useSyncExternalStore(subscribe, () => guideModeEnabled, () => GUIDE_MODE_DEFAULT);
}

/** Maps the English sidebar labels to their `nav.<key>` translation entries. */
const NAV_LABEL_KEYS: Record<string, string> = {
  "New Task": "newTask",
  Search: "search",
  Dashboard: "dashboard",
  Inbox: "inbox",
  Chat: "chats",
  Decisions: "decisions",
  Status: "status",
  "Conference Room": "boardChat",
  Tasks: "issues",
  Projects: "projects",
  Routines: "routines",
  Artifacts: "artifacts",
  Cases: "cases",
  Goals: "goals",
  Workspaces: "workspaces",
  Agents: "agents",
  Skills: "skills",
  Connectors: "apps",
  Audit: "audit",
  Activity: "activity",
  Org: "org",
  Timeline: "timeline",
  Costs: "costs",
  Commentary: "commentary",
  Settings: "settings",
  Teams: "teams",
};

export function navKeyForLabel(label: string): string | null {
  return NAV_LABEL_KEYS[label] ?? null;
}

const SECTION_LABEL_KEYS: Record<string, string> = {
  Work: "work",
  Org: "org",
  Organization: "organization",
  Projects: "projects",
  Agents: "agents",
};

export function sectionKeyForLabel(label: string): string | null {
  return SECTION_LABEL_KEYS[label] ?? null;
}

/** Company-relative routes that show a permanent page guide (`guide.<key>`). */
export const PAGE_GUIDE_ROUTES = [
  "dashboard",
  "inbox",
  "issues",
  "projects",
  "routines",
  "artifacts",
  "agents",
  "skills",
  "apps",
  "activity",
  "org",
  "costs",
  "goals",
  "company/settings",
  "search",
  "chats",
] as const;

export function pageGuideKeyForPath(relativePath: string): string | null {
  const normalized = relativePath.replace(/^\/+|\/+$/g, "");
  const match = PAGE_GUIDE_ROUTES.find(
    (route) => normalized === route || (route === "agents" && /^agents\/(all|active|paused|error)$/.test(normalized)),
  );
  return match ? match.replace("/", "_") : null;
}
