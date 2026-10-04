"use client";

import { MORE_LABELS } from "@/lib/i18n";
import { useLocale } from "@/components/business-center/LocaleContext";

const FOOTER_LANGS = [
  { code: "en", label: "English (US)" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "zh-tw", label: "中文(台灣)" },
  { code: "ko", label: "한국어" },
  { code: "ja", label: "日本語" },
  { code: "fr", label: "Français (France)" },
  { code: "th", label: "ภาษาไทย" },
];

type Props = {
  onMore: () => void;
  onLangChange: (lang: string) => void;
};

export default function FooterLanguages({ onMore, onLangChange }: Props) {
  const { lang, setLang, tp } = useLocale();

  return (
    <div className="page-footer">
      <div id="footerLanguages" className="footer-langs">
        {FOOTER_LANGS.map((item) => (
          <button
            key={item.code}
            type="button"
            className={`footer-lang${item.code === lang ? " is-active" : ""}`}
            data-lang={item.code}
            onClick={() => {
              if (item.code === lang) return;
              setLang(item.code);
              onLangChange(item.code);
            }}
          >
            {item.label}
          </button>
        ))}
        <button
          type="button"
          className="footer-lang footer-lang-more"
          onClick={onMore}
        >
          {MORE_LABELS[lang] || MORE_LABELS.en}
        </button>
      </div>
      <div className="footer-links">
        <a href="#">{tp("helpCenter")}</a>
        <a href="#">{tp("privacyPolicy")}</a>
        <a href="#">{tp("termsOfService")}</a>
        <a href="#">{tp("communityStandards")}</a>
        <a href="#">{tp("copyright")}</a>
      </div>
    </div>
  );
}
