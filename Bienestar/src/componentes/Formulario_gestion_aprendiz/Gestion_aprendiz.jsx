import { Link } from "react-router-dom";

const Formulario_Gestion_aprendiz = () => {
  return (
    <div className="container mt-5">
      <h1>Gestion de Datos</h1>
      <form className="bg-light p-5 shadow-lg m-4">
        <div className="form-group mb-3 ">
          <label htmlFor="NumeroDocumento" className="form_label mb-3">
            TIPO_DOCUMENTO
          </label>
          <select className="form-select" aria-label="Default select example">
            <option value="1">Tarjeta de Identidad</option>
            <option value="2">Cedula de Ciudadania</option>
            <option value="3">Cedula de Extranjeria</option>
            <option value="4">PEP</option>
            <option value="5">Permiso de Proteccion Temporal</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="numeroDocumento" className="form-label">
            NUMERO_DOCUMENTO
          </label>
          <input
            type="text"
            className="form-control"
            id="numeroDocumento"
            name="numeroDocumento"
            value="1094778783"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="nombreCompleto" className="form-label">
            NOMBRE_COMPLETO
          </label>
          <input
            type="text"
            className="form-control"
            id="nombreCompleto"
            name="nombreCompleto"
            value="yeison stiven gutierrez rozo"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="codigoFicha" className="form-label">
            CODIGO_FICHA
          </label>
          <input
            type="text"
            className="form-control"
            id="codigoFicha"
            name="codigoFicha"
            value = "2619701"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="fechaAdjudicacion" className="form-label">
            FECHA ADJUDICACION
          </label>
          <input
            type="date"
            className="form-control"
            id="fechaAdjudicacion"
            name="fechaAdjudicacion"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="correoElectronico" className="form-label">
            CORREO ELECTRONICO
          </label>
          <input
            type="email"
            className="form-control"
            id="correoElectronico"
            name="correoElectronico"
            value="stivenrozo1@gmail.com"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="telefonoFijo" className="form-label">
            TELEFONO FIJO
          </label>
          <input
            type="tel"
            className="form-control"
            id="telefonoFijo"
            name="telefonoFijo"
            value="3103558222"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="telefonoMovil" className="form-label">
            TELEFONO MOVIL
          </label>
          <input
            type="tel"
            className="form-control"
            id="telefonoMovil"
            name="telefonoMovil"
            value = "321342"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="direccionResidencia" className="form-label">
            DIRECCION DE RESIDENCIA
          </label>
          <input
            type="text"
            className="form-control"
            id="direccionResidencia"
            name="direccionResidencia"
            value="calle 29 # 10-98"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="nombrePrograma" className="form-label">
            NOMBRE DEL PROGRAMA
          </label>
          <input
            type="text"
            className="form-control"
            id="nombrePrograma"
            name="nombrePrograma"
            value="ADSO"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="modalidadFormacion" className="form-label">
            MODALIDAD DE FORMACIÓN (PRESENCIAL - VIRTUAL)
          </label>
          <select
            className="form-select"
            id="modalidadFormacion"
            name="modalidadFormacion"
          >
            <option value="presencial">Presencial</option>
            <option value="virtual">Virtual</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="nivelFormacion" className="form-label">
            NIVEL DE FORMACIÓN
          </label>
          <input
            type="text"
            className="form-control"
            id="nivelFormacion"
            name="nivelFormacion"
            value="tecnologo"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="nombreInstructor" className="form-label">
            NOMBRE DEL INSTRUCTOR LIDER
          </label>
          <input
            type="text"
            className="form-control"
            id="nombreInstructor"
            name="nombreInstructor"
            value="carlos eduardo perez rueda"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="correoInstructor" className="form-label">
            CORREO ELECTRONICO INSTRUCTOR LÍDER DE FICHA
          </label>
          <input
            type="email"
            className="form-control"
            id="correoInstructor"
            name="correoInstructor"
            value="cpperez23@gmail.com"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="fechaInicioFicha" className="form-label">
            FECHA INICIO FICHA
          </label>
          <input
            type="date"
            className="form-control"
            id="fechaInicioFicha"
            name="fechaInicioFicha"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="fechaFinLectiva" className="form-label">
            FECHA FIN LECTIVA
          </label>
          <input
            type="date"
            className="form-control"
            id="fechaFinLectiva"
            name="fechaFinLectiva"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="fechaInicioEtapa" className="form-label">
            FECHA INICIO ETAPA PRODUCTIVA
          </label>
          <input
            type="date"
            className="form-control"
            id="fechaInicioEtapa"
            name="fechaInicioEtapa"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="fechaFinFicha" className="form-label">
            FECHA FIN FICHA
          </label>
          <input
            type="date"
            className="form-control"
            id="fechaFinFicha"
            name="fechaFinFicha"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="modalidadEtapa" className="form-label">
            MODALIDAD ELEGIDA PARA ETAPA PRODUCTIVA
          </label>
          <select
            className="form-select"
            id="modalidadEtapa"
            name="modalidadEtapa"
          >
            <option value="1">Contrato de aprendizaje</option>
            <option value="2">Proyecto productivo</option>
            <option value="3">Pasantia</option>
            <option value="4">Apoyo a la unidad familiar</option>
          </select>
        </div>
          <Link to="/adjudicados"> 
          <button type="submit" className="btn btn-primary">
          Actualizar Datos
        </button>
          </Link>
      
      </form>
    </div>
  );
};
export default Formulario_Gestion_aprendiz;
