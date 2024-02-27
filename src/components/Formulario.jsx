import {useState, useEffect} from "react";
import Error from "./Error";

export default function Formulario({pacientes, setPacientes}) {
   const [nombre, setNombre] = useState(" ");
   const [propietario, setPropetario] = useState(" ");
   const [email, setEmail] = useState(" ");
   const [fecha, setFecha] = useState("");
   const [sintomas, setSintomas] = useState(" ");

   const [error, setError] = useState(false);

   const generarId = () => {
      const random = Math.random().toString(36).substring(2);
      const fecha = Date.now().toString(36);
      return random + fecha;
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      //Validación del formulario
      if ([nombre, propietario, email, fecha, sintomas].includes(" ")) {
         setError(true);
         return;
      }
      setError(false);

      //Pacientes
      const objetoPaciente = {
         nombre,
         propietario,
         email,
         fecha,
         sintomas,
         id: generarId(),
      };
      setPacientes([...pacientes, objetoPaciente]);

      //reiniciar el form
      setNombre(" ");
      setEmail(" ");
      setPropetario(" ");
      setFecha(" ");
      setSintomas(" ");
   };

   return (
      <div className="md:w-1/2 lg:w-2/5">
         <h2 className="font-black text-3xl text-center">
            Seguimiento Pacientes
         </h2>
         <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y{" "}
            <span className="text-indigo-600 font-bold">administralos</span>
         </p>
         <form
            className="bg-white shadow-md rounded-lg py-10 px-5"
            onSubmit={handleSubmit}>
            {error && (
               <Error>
                  <p>Todos los campos son obligatorios </p>
               </Error>
            )}
            <div>
               <label
                  htmlFor="mascota"
                  className="block text-slate-700 uppercase font-bold">
                  Nombre Mascota
               </label>
               <input
                  id="mascota"
                  className="border-2 w-full p-2 mt-2 mb-5"
                  type="text"
                  placeholder="Nombre mascota"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
               />
            </div>
            <div>
               <label
                  htmlFor="propietario"
                  className="block text-slate-700 uppercase font-bold">
                  Nombre Propietario
               </label>
               <input
                  id="propietario"
                  className="border-2 w-full p-2 mt-2 mb-5"
                  type="text"
                  placeholder="Nombre propietario"
                  value={propietario}
                  onChange={(e) => setPropetario(e.target.value)}
               />
            </div>
            <div>
               <label
                  htmlFor="email"
                  className="block text-slate-700 uppercase font-bold">
                  Email
               </label>
               <input
                  id="email"
                  className="border-2 w-full p-2 mt-2 mb-5"
                  type="email"
                  placeholder="Email propietario"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
            </div>
            <div>
               <label
                  htmlFor="alta"
                  className="block text-slate-700 uppercase font-bold">
                  Alta
               </label>
               <input
                  id="alta"
                  className="border-2 w-full p-2 mt-2 mb-5"
                  type="date"
                  placeholder="Alta"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
               />
            </div>
            <div>
               <label
                  htmlFor="sintomas"
                  className="block text-slate-700 uppercase font-bold">
                  Alta
               </label>
               <textarea
                  id="sintomas"
                  className="border-2 w-full p-2 mt-2 rounded-md"
                  placeholder="Describe tus sintomas"
                  value={sintomas}
                  onChange={(e) => setSintomas(e.target.value)}
               />
            </div>
            <input
               type="submit"
               className="w-full p-3 hover:bg-indigo-700 bg-indigo-600 cursor-pointer transition duration-300 rounded-lg mt-5 text-white uppercase font-bold"
               value="Agregar Paciente"
            />
         </form>
      </div>
   );
}
