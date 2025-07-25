function DashboardStats() {
  const stats = [
    { id: 1, name: "Usuarios Registrados", value: "1,250" },
    { id: 2, name: "Visitas Hoy", value: "4,820" },
    { id: 3, name: "Ingresos Mensuales", value: "$12,345" },
    { id: 4, name: "Nuevos Comentarios", value: "87" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Estadísticas Clave</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-slate-700 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-slate-300">{stat.name}</h3>
            <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardStats;
