import React from "react";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";
function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <footer className="footer mt-5 py-5 pt-5" id="contact">
        <div className="container">
          <div className="col-lg-9 row mt-5 justify-content-between">
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <div className="logo">
                <img src="images/logo.svg" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <h5 className="fw-bold mb-3">{t("footer.contact")}</h5>
              <ul className="link list-unstyled mt-2">
                <li>
                  <a href="mailto:info@wahaj.top">
                    <img src="images/icons/sms.svg" alt="" className="mx-1" />
                    info@wahaj.top
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/0534004666" target="_blank">
                    <img src="images/icons/whatsapp.svg" alt="" className="mx-1" />
                    0534004666
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 mb-3">
              <h5 className="fw-bold mb-3">{t("footer.title")}</h5>
              <p className="col-lg-10">{t("footer.address")}</p>
            </div>
          </div>
          <div className="copyrightd d-block d-md-flex justify-content-between align-items-center">
            <div className="item">
              <a href="#">{t("footer.rights")}</a>
            </div>
            <div className="d-flex gap-3">
              <Link to="/policy">{t("footer.privacy")}</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
