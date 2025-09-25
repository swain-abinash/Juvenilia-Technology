import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ResponsiveNavbar from '../components/ResponsiveNavbar'
import Topbar from '../components/Topbar'
import { ThemeProvider } from '../context/ThemeContext'
import ScrollToTopButton from '../components/ScrollToTopButton'
import ChatBot from '../pages/chatbot/ChatBot'
export default function MainLayout() {
  return (
    <ThemeProvider>

    <div className="min-h-screen flex flex-col">
      {/*Top bar */}
      <Topbar />
      {/* <Navbar /> */}
      <ResponsiveNavbar />
      <main className="flex-1">
        <Outlet />  
      </main>
      <Footer />
    {/* Floating buttons */}
    <div className="fixed bottom-4 right-4 flex flex-col gap-4 z-50">
      <ChatBot />
      <ScrollToTopButton />
    </div>
    </div>
    </ThemeProvider>
  )
}


