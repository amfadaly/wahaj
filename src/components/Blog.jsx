import React from "react";
import { useTranslation } from "react-i18next";

function Blog() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="blog-banner d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="title text-center text-white mt-5">
            <h2 className="fw-bolder display-4">{t("blog.title")}</h2>
            <p className="fs-3">{t("blog.desc")}</p>
          </div>
        </div>
      </div>

      <div className="blog-cards mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="box bg-white border p-3 rounded-3">
                <a href="#" className="text-decoration-none">
                  <img src="images/blog/blog-1.png" className="img-fluid w-100 mb-3" alt="" />
                  <h3>{t("blog.card.title")}</h3>
                  <p>{t("blog.card.desc")}</p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="box bg-white border p-3 rounded-3">
                <a href="#" className="text-decoration-none">
                  <img src="images/blog/blog-2.png" className="img-fluid w-100 mb-3" alt="" />
                  <h3>{t("blog.card2.title")}</h3>
                  <p>{t("blog.card2.desc")}</p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="box bg-white border p-3 rounded-3">
                <a href="#" className="text-decoration-none">
                  <img src="images/blog/blog-3.png" className="img-fluid w-100 mb-3" alt="" />
                  <h3>{t("blog.card3.title")}</h3>
                  <p>{t("blog.card3.desc")}</p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="box bg-white border p-3 rounded-3">
                <a href="#" className="text-decoration-none">
                  <img src="images/blog/blog-4.png" className="img-fluid w-100 mb-3" alt="" />
                  <h3>{t("blog.card4.title")}</h3>
                  <p>{t("blog.card4.desc")}</p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="box bg-white border p-3 rounded-3">
                <a href="#" className="text-decoration-none">
                  <img src="images/blog/blog-5.png" className="img-fluid w-100 mb-3" alt="" />
                  <h3>{t("blog.card5.title")}</h3>
                  <p>{t("blog.card5.desc")}</p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="box bg-white border py-4 p-3 rounded-3">
                <a href="#" className="text-decoration-none">
                  <img src="images/blog/blog-6.png" className="img-fluid w-100 mb-3" alt="" />
                  <h3>{t("blog.card6.title")}</h3>
                  <p>{t("blog.card6.desc")}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
