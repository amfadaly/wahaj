import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";
import Policy from "./components/Policy";
import BlogPage from "./components/BlogPage";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div style={{ direction: i18n.language === "ar" ? "rtl" : "ltr", textAlign: i18n.language === "ar" ? "right" : "left" }}>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogPage/:id" element={<BlogPage />}/>
          <Route path="/policy" element={<Policy />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
