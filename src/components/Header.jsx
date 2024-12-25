import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header py-2 ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav>
          <div className="navbar navbar-expand-lg">
            <Link className="navbar-brand logo m-0" to="/">
              <img src="images/logo.svg" className="img-fluid" alt="logo" />
            </Link>
            <button className="navbar-toggler" data-bs-toggle="offcanvas" href="#slideheader" aria-controls="slideheader">
              <i className="fa-solid fa-bars fa-xl"></i>
            </button>
            <div className="offcanvas offcanvas-end offcanvas-slide" tabIndex="-1" id="slideheader">
              <div className="offcanvas-header justify-content-end">
                <button type="button" className="btn Close" data-bs-dismiss="offcanvas" aria-label="Close">
                  <i className="fa-solid fa-xmark fa-2xl"></i>
                </button>
              </div>
              <div className="offcanvas-body align-items-center">
                <ul className="list navbar-nav m-auto text-center">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      {t("navbar.home")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#services">
                      {t("navbar.services")}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#destinations">
                      {t("navbar.destinations")}
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="/blog" className="nav-link">
                      {t("navbar.blog")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contant">
                      {t("navbar.contact")}
                    </a>
                  </li>
                </ul>
                <div className="d-flex align-items-baseline justify-content-center">
                  <a className="btn d-flex gap-2" onClick={() => changeLanguage("ar")}>
                    <span>Ar</span>
                    <img src="images/Flags.svg" className="img-fluid" alt="" />
                  </a>
                  <span>|</span>
                  <a className="btn d-flex gap-2" onClick={() => changeLanguage("en")}>
                    <span>En</span>
                    <img src="images/Flags-en.svg" className="img-fluid" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
