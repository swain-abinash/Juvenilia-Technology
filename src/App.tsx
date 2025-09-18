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

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />

        {/* Industries (Dynamic) */}
        {/* {industryRoutes.map((route, i) => (
          <Route key={i} path={route.path} element={route.element} />
        ))} */}
      </Route>
    </Routes>
  );
}

export default App;
