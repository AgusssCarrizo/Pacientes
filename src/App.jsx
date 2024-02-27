import {useState} from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
   const [pacientes, setPacientes] = useState([]);
   return (
      <div className="container mx-auto mt-auto">
         <Header />
         <div className="mt-12 flex flex-col md:flex-row ">
            <Formulario pacientes={pacientes} setPacientes={setPacientes} />
            <ListadoPacientes pacientes={pacientes} />
         </div>
      </div>
   );
}

export default App;
