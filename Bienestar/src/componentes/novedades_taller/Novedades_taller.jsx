import "./styles.css"
const Novedades_taller = () => {
    return (
        <><div className="contenedor_check p-4 ">
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label class="form-check-label" for="flexSwitchCheckDefault">El aprendiz cumple con las actividades correspondientes de su formación</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                <label class="form-check-label" for="flexSwitchCheckChecked">El aprendiz presenta a tiempo sus evidencias de su aprendizaje</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" />
                <label class="form-check-label" for="flexSwitchCheckDisabled">El aprendiz ha asistido a comité académico</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" />
                <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">El aprendiz ha asistido a comité académico

                </label>
            </div>
            </div>
        </>
    );
};

export default Novedades_taller;
