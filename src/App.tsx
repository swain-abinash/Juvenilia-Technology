import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Career from "./pages/Career";
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
