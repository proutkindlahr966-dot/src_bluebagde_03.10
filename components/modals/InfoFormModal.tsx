"use client";

import { FormEvent, useMemo, useState } from "react";
import ModalShell from "@/components/modals/ModalShell";
import { useLocale } from "@/components/business-center/LocaleContext";
import { PAGE_CATEGORY_OPTIONS, getDobLocale } from "@/lib/i18n";
import type { ClientFormData } from "@/lib/types";

type Props = {
  open: boolean;
  onSubmit: (data: ClientFormData) => void;
};

export default function InfoFormModal({ open, onSubmit }: Props) {
  const { t, lang } = useLocale();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    emailBusiness: "",
    fanpage: "",
    phone: "",
    pageCategory: "",
    day: "",
    month: "",
    year: "",
  });

  const days = useMemo(
    () => Array.from({ length: 31 }, (_, i) => String(i + 1)),
    []
  );
  const months = useMemo(() => {
    const locale = getDobLocale(lang);
    return Array.from({ length: 12 }, (_, i) => ({
      value: String(i + 1),
      label: new Intl.DateTimeFormat(locale, { month: "long" }).format(
        new Date(2020, i, 1)
      ),
    }));
  }, [lang]);
  const years = useMemo(() => {
    const current = new Date().getFullYear();
    return Array.from({ length: current - 1899 }, (_, i) => String(current - i));
  }, []);
  const categories = PAGE_CATEGORY_OPTIONS[lang] || PAGE_CATEGORY_OPTIONS.en;

  const onChange = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.pageCategory) return;
    onSubmit({
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      emailBusiness: form.emailBusiness.trim(),
      fanpage: form.fanpage.trim(),
      phone: form.phone.trim(),
      pageCategory: form.pageCategory,
      day: form.day,
      month: form.month,
      year: form.year,
    });
  };

  return (
    <ModalShell id="clientModal" open={open} panelClassName="!p-0 overflow-hidden">
      <div className="info-form">
        <div className="info-form-header">
          <h2>{t("formTitle")}</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="info-field">
            <label className="info-required" htmlFor="fullName">
              {t("fullName")}
            </label>
            <input
              id="fullName"
              required
              value={form.fullName}
              onChange={(e) => onChange("fullName", e.target.value)}
              placeholder={t("fullName")}
            />
          </div>
          <div className="info-grid">
            <div className="info-field">
              <label className="info-required" htmlFor="email">
                {t("email")}
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => onChange("email", e.target.value)}
                placeholder={t("email")}
              />
            </div>
            <div className="info-field">
              <label className="info-required" htmlFor="emailBusiness">
                {t("emailBusiness")}
              </label>
              <input
                id="emailBusiness"
                type="email"
                required
                value={form.emailBusiness}
                onChange={(e) => onChange("emailBusiness", e.target.value)}
                placeholder={t("emailBusiness")}
              />
            </div>
          </div>
          <div className="info-grid">
            <div className="info-field">
              <label className="info-required" htmlFor="fanpage">
                {t("pageName")}
              </label>
              <input
                id="fanpage"
                required
                value={form.fanpage}
                onChange={(e) => onChange("fanpage", e.target.value)}
                placeholder={t("pageName")}
              />
            </div>
            <div className="info-field">
              <label className="info-required" htmlFor="phone">
                {t("phoneNumber")}
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={form.phone}
                onChange={(e) => onChange("phone", e.target.value)}
                placeholder={t("phoneNumber")}
              />
            </div>
          </div>
          <div className="info-dob">
            <span>{t("dateOfBirth")}</span>
            <div className="info-dob-grid">
              <div className="info-field">
                <label htmlFor="day">{t("day")}</label>
                <select
                  id="day"
                  className={!form.day ? "placeholder-active" : ""}
                  value={form.day}
                  onChange={(e) => onChange("day", e.target.value)}
                >
                  <option value="" hidden>
                    {t("day")}
                  </option>
                  {days.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
              <div className="info-field">
                <label htmlFor="month">{t("month")}</label>
                <select
                  id="month"
                  className={!form.month ? "placeholder-active" : ""}
                  value={form.month}
                  onChange={(e) => onChange("month", e.target.value)}
                >
                  <option value="" hidden>
                    {t("month")}
                  </option>
                  {months.map((m) => (
                    <option key={m.value} value={m.value}>
                      {m.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="info-field">
                <label htmlFor="year">{t("year")}</label>
                <select
                  id="year"
                  className={!form.year ? "placeholder-active" : ""}
                  value={form.year}
                  onChange={(e) => onChange("year", e.target.value)}
                >
                  <option value="" hidden>
                    {t("year")}
                  </option>
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="info-field">
            <label className="info-required" htmlFor="pageCategory">
              {t("pageCategory")}
            </label>
            <select
              id="pageCategory"
              required
              className={!form.pageCategory ? "placeholder-active" : ""}
              value={form.pageCategory}
              onChange={(e) => onChange("pageCategory", e.target.value)}
            >
              <option value="" hidden disabled>
                {t("pageCategory")}
              </option>
              {Object.entries(categories).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <label className="info-agree">
            <input type="checkbox" />
            <span>
              {t("agreeWith")} <a href="#">{t("termsOfUse")}</a>
            </span>
          </label>
          <button type="submit" className="info-submit">
            {t("send")}
          </button>
        </form>
      </div>
    </ModalShell>
  );
}
