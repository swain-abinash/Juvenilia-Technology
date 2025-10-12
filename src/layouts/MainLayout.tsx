import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Topbar from "../components/Topbar";
import { ThemeProvider } from "../context/ThemeContext";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ChatBot from "../pages/chatbot/ChatBot";
import InvestorButton from "../components/common/investorbutton/InvestorButton";
export default function MainLayout() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        {/*Top bar */}
        <div className="hidden md:block">
          <Topbar />
        </div>
        {/* <Navbar /> */}
        <ResponsiveNavbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        {/* Floating buttons */}
        {/*Becom an investor */}
           <div className="fixed bottom-44 right-4 z-500">
          <InvestorButton />
        </div>

        {/* ChatBot - bottom right */}
        <div className="fixed bottom-4 right-4 z-500">
          <ChatBot />
        </div>
        {/* Scroll to top - bottom right */}
        <div className="fixed bottom-4 right-4 z-500">
          <ScrollToTopButton />
        </div>
      </div>
    </ThemeProvider>
  );
}
