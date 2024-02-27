import React from "react";
import Pacientes from "./Pacientes";

export default function ListadoPacientes({pacientes}) {
   return (
      <div className="md:w-1/2 lg:w-3/5 ">
         <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
         <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-indigo font-bold">Pacientes y Citas</span>
         </p>
         <div className="h-screen md:overflow-y-scroll ">
            {pacientes.map((paciente) => (
               <Pacientes key={paciente.id} paciente={paciente} />
            ))}
         </div>
      </div>
   );
}
