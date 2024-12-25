import React from "react";
import { useTranslation } from "react-i18next";
import DownloadButton from "./DownloadButton";
import ContactUs from "./ContactUs";

function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="main-section mt-3" id="home">
        <div className="container d-flex align-items-center p-3">
          <div className="row">
            <div className="col-lg-8">
              <div className="title px-lg-5 text-white">
                <h1>{t("main.title")}</h1>
                <p>{t("main.description")}</p>
                <div className="mt-4 col-sm-6 col-8">
                  <DownloadButton />
                </div>
                <div className="d-flex mt-3">
                  <a href="https://x.com/wahaj_top?mx=2" className="btn" target="_blank">
                    <img src="images/icons/twitter.svg" alt="" />
                  </a>
                  <a href="https://www.tiktok.com/@wahaj.top?_t=8sKMaIo4fuD&_r=1" target="_blank" className="btn">
                    <img src="images/icons/tiktok-2.svg" alt="" />
                  </a>
                  <a href="https://www.instagram.com/wahaj.top/?igsh=aHh2emM5bzR0bXhr" target="_blank" className="btn">
                    <img src="images/icons/instagram-2.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="services mt-5 pt-5 " id="services">
        <div className="container">
          <div className="title text-center">
            <h6 className="text-h6">{t("services.title")}</h6>
            <h2 className="text-h2">{t("services.description")}</h2>
          </div>
          <div className="row my-5">
            <div className="col-lg-4 col-md-6 mb-3">
              <a href="#" className="btn box d-block text-center">
                <img src="images/icons/search-status.svg" className="img-fluid mb-3" alt="icon" />
                <h4>{t("services.card.description")}</h4>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <a href="#" className="btn box d-block text-center">
                <img src="images/icons/note-favorite.svg" className="img-fluid mb-3" alt="icon" />
                <h4>{t("services.card.description2")}</h4>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <a href="#" className="btn box d-block text-center">
                <img src="images/icons/tag-2.svg" className="img-fluid mb-3" alt="icon" />
                <h4>{t("services.card.description3")}</h4>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="destinations mt-5 pt-5" id="destinations">
        <div className="container">
          <div className="title text-center">
            <h6 className="text-h6">{t("destinations.title")}</h6>
            <h2 className="fw-bolder text-h2">{t("destinations.description")}</h2>
          </div>
          <div className="row mt-5">
            <div className="col-lg-5 col-md-6 mb-3">
              <div className="box position-relative">
                <a href="#">
                  <img src="images/destination-1.png" className="img-fluid w-100" alt="" />
                </a>
                <div className="desc px-3">
                  <p className="m-0">{t("destinations.card.subtitle")}</p>
                  <p className="m-0">{t("destinations.card.city")}</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-7">
                  <div className="box position-relative h-100">
                    <a href="#">
                      <img src="images/destination-2.png" className="img-fluid h-100" alt="" />
                    </a>
                    <div className="desc px-3">
                      <p className="m-0">{t("destinations.card.kingdom")}</p>
                      <p className="m-0">{t("destinations.card.city")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-5">
                  <div className="box position-relative">
                    <a href="#">
                      <img src="images/destination-3.png" className="img-fluid" alt="" />
                    </a>
                    <div className="desc px-3">
                      <p className="m-0">{t("destinations.card.market")}</p>
                      <p className="m-0">{t("destinations.card.city")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <div className="box position-relative">
                <a href="#">
                  <img src="images/destination-4.png" className="img-fluid" alt="" />
                </a>
                <div className="desc px-3">
                  <p className="m-0">{t("destinations.card.date")}</p>
                  <p className="m-0">{t("destinations.card.city")}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <div className="d-lg-block d-flex align-content-center gap-3">
                <div className="box position-relative">
                  <a href="#">
                    <img src="images/destination-5.png" className="img-fluid" alt="" />
                  </a>
                  <div className="desc px-3">
                    <p className="m-0">{t("destinations.card.park")}</p>
                    <p className="m-0">{t("destinations.card.city")}</p>
                  </div>
                </div>
                <div className="box position-relative mt-lg-3">
                  <a href="#">
                    <img src="images/destination-6.png" className="img-fluid" alt="" />
                  </a>
                  <div className="desc px-3">
                    <p className="m-0">{t("destinations.card.palace")}</p>
                    <p className="m-0">{t("destinations.card.city")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="categories mt-5 pt-5" id="categories">
        <div className="container">
          <div className="title text-center">
            <h6 className="text-h6">{t("categories.title")}</h6>
            <h2 className="fw-bolder text-h2">{t("categories.description")}</h2>
          </div>
          <div className="owl-carousel owl-theme mt-5">
            <div className="item text-center">
              <img src="images/slider/img-1.png" className="img-fluid" alt="" />
              <h5>{t("categories.card.name1")}</h5>
            </div>
            <div className="item text-center">
              <img src="images/slider/img-2.png" className="img-fluid" alt="" />
              <h5>{t("categories.card.name2")}</h5>
            </div>
            <div className="item text-center">
              <img src="images/slider/img-3.png" className="img-fluid" alt="" />
              <h5>{t("categories.card.name3")}</h5>
            </div>
            <div className="item text-center">
              <img src="images/slider/img-4.png" className="img-fluid" alt="" />
              <h5>{t("categories.card.name4")}</h5>
            </div>
            <div className="item text-center">
              <img src="images/slider/img-5.png" className="img-fluid" alt="" />
              <h5>{t("categories.card.name5")}</h5>
            </div>
            <div className="item text-center">
              <img src="images/slider/img-6.png" className="img-fluid" alt="" />
              <h5>{t("categories.card.name6")}</h5>
            </div>
            <div className="item text-center">
              <img src="images/slider/img-3.png" className="img-fluid" alt="" />
              <h5>{t("categories.card.name7")}</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="features mt-5 pt-5" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 mb-4">
              <div className="title">
                <h6 className="text-h6">{t("features.title")}</h6>
                <h2 className="fw-bolder text-h2">{t("features.description")}</h2>
                <p>{t("features.desc")}</p>
                <a href="#" className="btn rounded-3 btn-primary px-5 p-3 downloadButton">
                  {t("features.button")}
                </a>
              </div>
            </div>
            <div className="col-lg-6 mb-4 d-flex justify-content-end">
              <div className="box-img position-relative">
                <img src="images/mockup 1.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features mt-5 pt-5" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 mb-4 d-flex justify-content-end">
              <div className="box-img position-relative">
                <img src="images/mockup 2.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="title">
                <h6 className="text-h6">{t("features.title")}</h6>
                <h2 className="fw-bolder text-h2">{t("features.description")}</h2>
                <p>{t("features.desc")}</p>
                <a href="#" className="btn rounded-3 btn-primary px-5 p-3 downloadButton">
                  {t("features.button")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="explore mt-5 pt-5" data-aos="fade-up">
        <div className="container">
          <div className="title pt-5 text-center text-white">
            <h2 className="pt-5 mt-lg-4 mt-5 display-3 fw-bolder">{t("media.title")}</h2>
            <h6 className="fs-3">{t("media.desc")}</h6>
          </div>
          <div className="social-media d-flex justify-content-center mt-5 gap-3">
            <a href="https://www.instagram.com/wahaj.top/?igsh=aHh2emM5bzR0bXhr" target="_blank" className="icon">
              <img src="images/icons/instagram.svg" className="img-fluid" alt="" />
            </a>
            <a href="https://www.tiktok.com/@wahaj.top?_t=8sKMaIo4fuD&_r=1" className="icon" target="_blank">
              <img src="images/icons/tiktok.svg" className="img-fluid" alt="" />
            </a>
            <a href="https://x.com/wahaj_top?mx=2" className="icon" target="_blank">
              <img src="images/icons/twitter-x.svg" className="img-fluid" alt="" />
            </a>
          </div>
        </div>
      </section>

      <ContactUs />
    </div>
  );
}

export default Home;
