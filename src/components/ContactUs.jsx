import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone_number: formData.phone,
      message: formData.message,
    };

    // console.log("Data Sent to api:", payload);

    try {
      const response = await axios.post("https://wahaj.dbs.com.sa/contact-us/add-contact-us", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200 || response.status === 201) {
        setSuccess(t("contact.form.successfully"));
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError(`Error: ${response.statusText || "Failed to send message."}`);
      }
    } catch (err) {
      if (err.response) {
        setError(`Error: ${err.response.data.message || "Server error occurred."}`);
      } else if (err.request) {
        setError("Error: No response from server. Please try again.");
      } else {
        setError(`Error: ${err.message || "An unknown error occurred."}`);
      }
    } finally {
      setLoading(false);
    }
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
              {success && <div className="alert alert-success">{success}</div>}
              {error && <div className="alert alert-danger">{error}</div>}
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
                <button className="btn btn-primary text-white w-100 p-3 mt-4" type="submit" disabled={loading}>
                  {loading ? "Sending..." : t("contact.form.button")}
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
