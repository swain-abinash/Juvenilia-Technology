import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Services from "./pages/service/Services";
import ServiceDetail from "./pages/service/ServiceDetail";
import Products from "./pages/products/Products";
import Career from "./pages/career/Career";
// import industryRoutes from "./routes/industryRoutes"; // import here

import "./App.css";
import Plan from "./pages/plans/Plan";


import Terms from "./pages/terms/Terms";
import Privacy from "./pages/privacy/Privacy";
import Helps from "./pages/helps/Helps";
import Faqs from "./pages/faqs/Faqs";
import Mou from "./pages/mou/Mou";
import News_Article from "./pages/news-article/News_Article";
import SiteMap from "./pages/site-map/SiteMap";
// import FreeResources from "./pages/home/sections/FreeResources";
// import Testimonials from "./pages/home/sections/Testimonials";
// import CaseStudies from "./pages/home/sections/CaseStudies";


import ScrollToTop from "./components/common/ScrollToTop";


function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/plans" element={<Plan />} />
          <Route path="/mou" element={<Mou />} />


          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/helps" element={<Helps />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/news-article" element={<News_Article />} />
          <Route path="/site-map" element={<SiteMap />} />
        
          {/* Industries (Dynamic) */}
          {/* {industryRoutes.map((route, i) => (
          <Route key={i} path={route.path} element={route.element} />
        ))} */}
        </Route>
      </Routes>
    </HelmetProvider>

  );
}

export default App;
