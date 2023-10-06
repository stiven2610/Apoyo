import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Boton_cargue_exc from "../Boton_excel/Boton_excel";
import Buscador_aprendiz from "../Buscador/Buscador_aprendiz";
import Tabla_formato_seguimiento from "../Tabla_formato_seguimiento/Tabla_formato_seguimiento";
import Novedades_taller from "../novedades_taller/Novedades_taller";
import "./styles.css";
const Cargue_formato_seguimiento = () => {
  return (
    <>
      <Header />
      <div className="contenedor_componentes">
        <div className="contenedor_buscador">
          <Buscador_aprendiz />
        </div>
        <div className="contenedor_hijo">
          <Tabla_formato_seguimiento />
          <Novedades_taller/>
          <Boton_cargue_exc  />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Cargue_formato_seguimiento;
