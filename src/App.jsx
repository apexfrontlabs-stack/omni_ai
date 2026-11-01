import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/Forget";
import ResetPassword from "./pages/auth/ResetPassword";
import TermsAndConditions from "./pages/legal/TermsAndConditions";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";

import Checkout from "./pages/CheckOut";
import PageLayout from "./components/common/PageLayout";
import ScrollToTop from "./components/common/ScrollToTop";
import About from "./components/sections/About";
import Industries from "./components/sections/Industries";
import Features from "./components/sections/Features";
import Pricing from "./components/sections/Pricing";
import CTA from "./components/sections/CTA";
import Contact from "./components/sections/Contact";


export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        
        <Route path="/about" element={<PageLayout><About /></PageLayout>} />
        <Route path="/industries" element={<PageLayout><Industries /></PageLayout>} />
        <Route path="/features" element={<PageLayout><Features /></PageLayout>} />
        <Route path="/pricing" element={<PageLayout><Pricing /></PageLayout>} />
        <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />
        <Route path="/checkout" element ={<Checkout/>}/>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/term" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

      </Routes>
    </>
  );
}