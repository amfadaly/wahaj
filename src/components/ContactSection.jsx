import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data: ", formData);
  };

  return (
    <section className="contant mt-5 py-5 " id="contant">
      <div className="container">
        <div className="row justify-content-evenly align-items-center py-5">
          <div className="col-lg-5 mb-3">
            <div className="img">
              <img src="images/contant.png" className="img-fluid" alt={t("contact.alt")} />
            </div>
          </div>
          <div className="col-lg-5 mb-3">
            <div className="contact-desc text-white">
              <div className="text-center col-lg-11 m-auto">
                <h2 className="fw-bolder">{t("contact.title")}</h2>
                <p className="lead">{t("contact.desc")}</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    {t("contact.form.phone")}
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    {t("contact.form.help")}
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button className="btn btn-primary text-white w-100 p-3 mt-4" type="submit">
                  {t("contact.form.button")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
