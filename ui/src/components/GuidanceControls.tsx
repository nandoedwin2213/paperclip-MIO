import { Languages, Lightbulb, LightbulbOff } from "lucide-react";

import { cn } from "@/lib/utils";
import { setUiLocale, UI_LOCALES, useTranslation, type UiLocale } from "@/i18n";
import { setGuideModeEnabled, useGuideMode } from "../lib/ui-guidance";

export function LanguageToggle({ className }: { className?: string }) {
  const { t, i18n } = useTranslation();
  const current = (UI_LOCALES as readonly string[]).includes(i18n.language) ? (i18n.language as UiLocale) : "en";
  return (
    <div
      role="group"
      aria-label={t("ui.language", { defaultValue: "Language" })}
      className={cn("inline-flex items-center gap-0.5 rounded-lg border border-border bg-background p-0.5", className)}
    >
      <Languages className="mx-1 h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
      {UI_LOCALES.map((locale) => (
        <button
          key={locale}
          type="button"
          aria-pressed={current === locale}
          onClick={() => setUiLocale(locale)}
          className={cn(
            "rounded-md px-2 py-0.5 text-(length:--text-micro) font-semibold uppercase transition-colors",
            current === locale ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent hover:text-foreground",
          )}
        >
          {locale}
        </button>
      ))}
    </div>
  );
}

export function GuideModeToggle({ className }: { className?: string }) {
  const { t } = useTranslation();
  const enabled = useGuideMode();
  const Icon = enabled ? Lightbulb : LightbulbOff;
  return (
    <button
      type="button"
      aria-pressed={enabled}
      onClick={() => setGuideModeEnabled(!enabled)}
      title={enabled ? t("ui.helpModeOn") : t("ui.helpModeOff")}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg border px-2 py-1 text-(length:--text-micro) font-medium transition-colors",
        enabled
          ? "border-primary/40 bg-primary/10 text-foreground"
          : "border-border text-muted-foreground hover:bg-accent hover:text-foreground",
        className,
      )}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {t("ui.helpMode", { defaultValue: "Guide mode" })}
    </button>
  );
}

export function GuidanceControls({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-1.5", className)}>
      <LanguageToggle />
      <GuideModeToggle />
    </div>
  );
}
