import React from "react";
import "./Footer.css";
import "./FooterQuery.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__text">
            <h5 className="footer__text-title">{t("footer_title")}</h5>
            <p className="footer__text-subtitle">
            {t("footer_desc")}
            </p>
          </div>
          <div className="footer__btn btn">
            <a href="#">{t("footer_btn")}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
