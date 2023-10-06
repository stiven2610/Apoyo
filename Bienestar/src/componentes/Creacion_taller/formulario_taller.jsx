const Formulario_taller = () => {
    return(
        <div className = "padre p-4" >
            <div className="container  d-flex justify-content-center ">
                <div className="col-md-5">
                    <div className="container_form bg-light p-4 rounded text-center">
                        <p className="titulo_beneficio text-success font-weight-bold">
                            BENEFICIO
                        </p>
                        <form>
                            <div className="form-group mb-2 text-center">
                                <label htmlFor="numeroTaller" className="form_label mb-3">
                                    Numero Taller
                                </label>
                                <input
                                    type="number"
                                    className="form-control form_input"
                                    id="numeroTaller"
                                />
                            </div>
                            <div className="form-group mb-2 text-center">
                                <label htmlFor="temaTaller" className="form_label mb-3">
                                      Tema taller
                                </label>
                                <input
                                    type="text"
                                    className="form-control form_input"
                                    id="temaTaller"
                                />
                            </div>
                            <div className="form-group mb-2 text-center">
                                <label htmlFor="fechaTaller" className="form_label mb-3">
                                    Fecha taller
                                </label>
                                <input
                                    type="date"
                                    className="form-control form_input"
                                    id="fechaTaller"
                                />
                            </div>
                            <div className="form-group mb-2 text-center">
                                <label htmlFor="ContraseñaTaller" className="form_label mb-3">
                                      Contraseña Taller
                                </label>
                                <input
                                    type="text"
                                    className="form-control form_input"
                                    id="ContraseñaTaller"
                                />
                            </div>
                            <button className="btn boton_crear m-4 btn-success" type="submit">
                                CREAR
                            </button>
                        </form>
                    </div>
                </div>
            </div>
    </div >
    );
};
export default Formulario_taller;