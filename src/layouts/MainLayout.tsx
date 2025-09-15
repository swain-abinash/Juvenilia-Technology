import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ResponsiveNavbar from '../components/ResponsiveNavbar'

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <ResponsiveNavbar />
      <main className="flex-1">
        <Outlet />  
      </main>
      <Footer />
    </div>
  )
}


