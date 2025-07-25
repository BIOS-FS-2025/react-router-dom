import { Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import AboutPage from "./AboutPage"
import NavigationBar from "./Navbar"
import DashboardLayout from "./DashboardLayout"
import DashboardStats from "./DashboardStats"
import DashboardSettings from "./DashboardSettings"

// SPA: Single Page Application
function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen p-10">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/dashboard" element={<DashboardLayout />} >
          <Route index element={<DashboardStats />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
