import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const DownloadButton = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const androidLink = "https://play.google.com/store/apps/details?id=com.wahaj.app";
    const iosLink = "https://apps.apple.com/us/app/wahaj-%D9%88%D9%87%D8%AC/id6499275613";

    function detectOS() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const platform = navigator.platform.toLowerCase();

      if (/android/i.test(userAgent)) {
        return androidLink;
      } else if (/iPad|iPhone|iPod/i.test(userAgent)) {
        return iosLink;
      } else if (platform.indexOf("mac") !== -1) {
        return iosLink;
      } else {
        return androidLink;
      }
    }

    const downloadLink = detectOS();

    const downloadButtons = document.querySelectorAll(".downloadButton");
    downloadButtons.forEach((button) => {
      button.href = downloadLink;
    });
  }, []);

  return (
    <div>
      <a href="#" className="btn text-white rounded-3 btn-primary px-5 p-3 w-100 downloadButton">
        {t("main.button")}
      </a>
    </div>
  );
};

export default DownloadButton;
