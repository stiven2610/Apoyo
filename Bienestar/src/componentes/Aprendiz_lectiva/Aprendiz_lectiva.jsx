import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Tabla_lectiva from "../Tabla_lectiva/Tabla_lectiva";
import Buscador_sencillo from "../Buscador/Buscador_sencillo";
const Aprendiz_lectiva = () => {
    return (
        <>
            <Header/>
            <Buscador_sencillo/>
            <Tabla_lectiva/>
            <Footer/>
        </>
    );
};
export default Aprendiz_lectiva;