import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Docs from "./pages/Docs";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import FAQ from "./pages/FAQ";
import Review from "./pages/Review";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="review" element={<Review />} />
        <Route path="blog" element={<Blog />} />
        <Route path="docs" element={<Docs />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="register" element={<Register />} />
        {/* Redirect old Indonesian slugs */}
        <Route path="fitur" element={<Navigate to="/features" replace />} />
        <Route path="tentang" element={<Navigate to="/about" replace />} />
        <Route path="kontak" element={<Navigate to="/contact" replace />} />
        <Route path="dokumentasi" element={<Navigate to="/docs" replace />} />
        <Route path="privasi" element={<Navigate to="/privacy" replace />} />
        <Route path="syarat" element={<Navigate to="/terms" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
