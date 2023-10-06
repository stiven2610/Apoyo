import "./styles.css";
const buscador_aprendiz = () => {
  return (
    <div className="container_form bg-light p-4 rounded text-center">
      <p className="titulo_beneficio text-success font-weight-bold">formato</p>
      <form>
        <div className="form-group mb-2 text-center">
          <label htmlFor="NumeroDocumento" className="form_label mb-3">
            Tipo de Documento
          </label>
          <select className="form-select" aria-label="Default select example">
            <option value="1">Cedula de Ciudadania</option>
            <option value="2">Tarjeta de Identida</option>
            <option value="3">Cedula de Extranjeria</option>
            <option value="4">PEP</option>
            <option value="5">Permiso de Proteccion Temporal</option>
          </select>
        </div>
        <div className="form-group mb-2 text-center">
          <label htmlFor="codigoBeneficio" className="form_label mb-3">
            Numero Documento
          </label>
          <input
            type="number"
            className="form-control form_input"
            id="codigoBeneficio"
          />
        </div>

        <button className="btn boton_crear m-4 btn-success" type="submit">
          BUSCAR
        </button>
      </form>
    </div>
  );
};

export default buscador_aprendiz;
