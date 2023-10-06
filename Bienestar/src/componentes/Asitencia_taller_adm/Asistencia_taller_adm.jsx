import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Tabla_asistencia from "../Tabla_asistencia.jsx/Tabla_asistencia";
import Buscador_asis_taller from "../Buscador_asis_taller/Buscador_asis_taller";

const Asistencia_taller_adm =()=>{
    return(
        <>
        <Header/>
        <Buscador_asis_taller/>
        <Tabla_asistencia/>
        <Footer/>
        </>
    );
};
export default Asistencia_taller_adm;