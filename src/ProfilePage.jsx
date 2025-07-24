import { useParams } from "react-router-dom";

const ProfilePage = function() {
  const { id } = useParams(); // 'username' es el nombre del parámetro de la ruta
  return (
    <div className="bg-slate-900 min-h-screen flex justify-center items-center">
      <h1 className="text-5xl font-bold text-white underline">Este es el perfil de alguien con el siguiente id: <span className="font-bold capitalize text-yellow-400">{id}</span></h1>
    </div>
  )
}

export default ProfilePage;