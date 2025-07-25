const DashboardSettings = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Configuración</h2>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-slate-300"
          >
            Nombre de Usuario
          </label>
          <input
            type="text"
            id="username"
            name="username"
            defaultValue="John Doe"
            className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-slate-300"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue="john.doe@example.com"
            className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        <div className="flex items-center">
          <input
            id="notifications"
            name="notifications"
            type="checkbox"
            className="h-4 w-4 text-green-600 bg-slate-700 border-slate-600 rounded focus:ring-green-500"
          />
          <div className="ml-3 text-sm">
            <label
              htmlFor="notifications"
              className="font-medium text-white"
            >
              Recibir notificaciones por correo electrónico
            </label>
            <p className="text-slate-400">Recibirás un correo cuando haya actualizaciones importantes.</p>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-green-500"
          >
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default DashboardSettings;
