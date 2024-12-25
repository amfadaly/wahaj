import React from "react";
import { useTranslation } from "react-i18next";

function Policy() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div>
      <div className={`privacy mt-5 ${currentLanguage === "en" ? "lang-en" : "lang-ar"}`}>
        <div className="container">
          <div className="title text-center">
            <h2 className="text-h2">{t("policy.title")}</h2>
          </div>
          <div className="item mt-5 p-md-0 p-3">
            <h3>{t("policy.item1.title")}</h3>
            <p>{t("policy.item1.desc")}</p>
          </div>
          <div className="item mt-5 p-md-0 p-3">
            <h3>{t("policy.item2.title")}</h3>
            <p>{t("policy.item2.desc")}</p>
          </div>
          <div className="item mt-5 p-md-0 p-3">
            <h3>{t("policy.item3.title")}</h3>
            <p>{t("policy.item3.desc")}</p>
          </div>
          <div className="item mt-5 p-md-0 p-3">
            <h3>{t("policy.item4.title")}</h3>
            <p>{t("policy.item4.desc")}</p>
          </div>
          <div className="item mt-5 p-md-0 p-3">
            <h3>{t("policy.item5.title")}</h3>
            <p>{t("policy.item5.desc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Policy;
