import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import ServicePage from "./pages/Service";
import PageTransition from "./components/PageTransition";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import Blog from "./pages/BlogPage";
import ConsultationBooking from "./pages/Booking";
import StudyAboard from "./pages/StudyAboard";
import ServiceDetail from "./pages/ServideDetail";

function App() {
  return (
    <AnimatePresence>
      <Analytics />
      <Router>
        <div>
          <ScrollToTop />
          <div className="fixed top-0 z-50 w-full">
            <Navbar />
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/service"
              element={
                <PageTransition>
                  <ServicePage />
                </PageTransition>
              }
            />
            <Route
              path="/service-detail/:id"
              element={
                <PageTransition>
                  <ServiceDetail />
                </PageTransition>
              }
            />
            <Route
              path="/booking"
              element={
                <PageTransition>
                  <ConsultationBooking />
                </PageTransition>
              }
            />
            <Route
              path="/study-abroad"
              element={
                <PageTransition>
                  <StudyAboard />
                </PageTransition>
              }
            />
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
        </div>
        <Footer classData="bg-footer" />
      </Router>
    </AnimatePresence>
  );
}

export default App;
