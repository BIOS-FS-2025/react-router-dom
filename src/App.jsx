import { Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import AboutPage from "./AboutPage"
import ProfilePage from "./ProfilePage"
import Navbar from "./Navbar"

// SPA: Single Page Application
function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen p-10">
      <Navbar />
      {/* Aquí está la navegación */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Ruta raíz */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App
