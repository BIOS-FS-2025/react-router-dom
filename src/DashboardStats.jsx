import { useEffect } from "react";
import { useState } from "react";

function DashboardStats() {
  const [stats, setStats] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL);
        console.log('Se hizo la petición');
        console.log('Estas es la respuesta de la petición', response);
        if (!response.ok) {
          throw new Error('No se pudo obtener la respuesta del servidor');
        }

        const data = await response.json();
        setStats(data);

      } catch (error) {
        console.log("Error al obtener las estadísticas", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchStats();
  }, [])

  if (isLoading) {
    return <p>Cargando estadísticas...</p>
  }

  if (error) {
    return <p>Error al obtener las estadísticas, este es el error: {error}</p>
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Estadísticas Clave</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.length > 0 ? (
          stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-slate-700 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-medium text-slate-300">
                {stat.name}
              </h3>
              <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
            </div>
          ))
        ) : (
          <p className="text-slate-400">No hay estadísticas disponibles</p>
        )}
      </div>
    </div>
  );
}

export default DashboardStats;
