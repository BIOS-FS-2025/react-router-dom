import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <nav className="flex space-x-4 border-b-2 border-slate-700 pb-2 mb-4">
        <NavLink 
          to="/dashboard" 
          end 
          className={({ isActive }) => isActive ? "text-green-400": ""}
        >
          Estadísticas
        </NavLink>

        <NavLink 
          to="/dashboard/settings" 
          end 
          className={({ isActive }) => isActive ? "text-green-400": ""}
        >
          Configuración
        </NavLink>
      </nav>
      <main className="bg-slate-800 p-4 rounded-lg">
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout;