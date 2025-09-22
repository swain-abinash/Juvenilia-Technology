import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ResponsiveNavbar from '../components/ResponsiveNavbar'
import Topbar from '../components/Topbar'
import { ThemeProvider } from '../context/ThemeContext'
import ScrollToTopButton from '../components/ScrollToTopButton'

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
       <ScrollToTopButton />
    </div>
    </ThemeProvider>
  )
}


