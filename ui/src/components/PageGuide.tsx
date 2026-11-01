import { Info, ShieldCheck } from "lucide-react";

import { useLocation } from "@/lib/router";
import { useTranslation } from "@/i18n";
import { toCompanyRelativePath } from "../lib/company-routes";
import { pageGuideKeyForPath, useGuideMode } from "../lib/ui-guidance";

/** Permanent, bilingual explanation of the current page and its main buttons. */
export function PageGuide() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const guideMode = useGuideMode();
  const key = pageGuideKeyForPath(toCompanyRelativePath(location.pathname));
  if (!guideMode || !key || !i18n.exists(`guide.${key}.title`)) return null;

  const buttons: string[] = [];
  for (let index = 0; i18n.exists(`guide.${key}.buttons.${index}`); index += 1) {
    buttons.push(t(`guide.${key}.buttons.${index}`));
  }

  return (
    <section
      data-testid="page-guide"
      aria-label={t(`guide.${key}.title`)}
      className="mb-5 rounded-xl border border-primary/20 bg-primary/5 p-4"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
          <Info className="h-4 w-4" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1 space-y-2">
          <p className="text-sm leading-relaxed text-foreground">
            <span className="font-semibold">{t(`guide.${key}.title`)}: </span>
            {t(`guide.${key}.description`)}
          </p>
          {buttons.length > 0 ? (
            <div>
              <p className="mb-1 text-(length:--text-nano) font-medium uppercase tracking-widest text-muted-foreground">
                {t("ui.buttonsHere")}
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {buttons.map((text) => (
                  <li
                    key={text}
                    className="rounded-md border border-border bg-background px-2 py-1 text-xs text-muted-foreground"
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <p className="flex items-start gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {t("ui.healthNotice")}
          </p>
        </div>
      </div>
    </section>
  );
}
