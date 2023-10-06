import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen,} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Tabla_adjudicados = () => {
  return (
    <div className="container_body">
      <div className="table-container">
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Editar datos Aprendiz</th>
                <th>convocatoria</th>
                <th>tipo de documento</th>
                <th>número de documento</th>
                <th>nombre completo</th>
                <th>código ficha</th>
                <th>fecha adjudicación</th>
                <th>correo electrónico</th>
                <th>teléfono fijo</th>
                <th>teléfono móvil</th>
                <th>dirección de residencia</th>
                <th>nombre del programa</th>
                <th>modalidad de formación</th>
                <th>nivel de formación</th>
                <th>instructor líder</th>
                <th>correo instructor</th>
                <th>fecha inicio ficha</th>
                <th>fecha fin lectiva</th>
                <th>fecha inicio etapa productiva</th>
                <th>fecha fin etapa productiva</th>
                <th>modalidad elegida para etapa productiva</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="iconos_gestion h-100 d-flex flex-column align-items-center ">
                    <Link to="/gestiondatosaprendiz">
                      {" "}
                      <FontAwesomeIcon icon={faPen} className="mt-3 mb-3" />
                    </Link>
                  </div>
                </td>
                <td>numero 1</td>
                <td>tarjeta de identidad</td>
                <td>1094778783</td>
                <td>yeison stiven gutierrez rozo</td>
                <td>2619701</td>
                <td>03/04/2023</td>
                <td>stivenrozo1@gmail.com</td>
                <td>432343232</td>
                <td>3103558222</td>
                <td>calle 23 #90-32</td>
                <td>adso</td>
                <td>tarde</td>
                <td>tecnologia</td>
                <td>carlos eduardo perez</td>
                <td>cperez23@gmail.com</td>
                <td>06/10/2022</td>
                <td>01/09/2023</td>
                <td>01/01/2025</td>
                <td>03/20/2024</td>
                <td>Taller Mensual</td>
              </tr>
              <tr>
                <td>
                  <div className="iconos_gestion h-100 d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faPen} className=" mb-3 " />
                  </div>
                </td>
                <td>numero 2</td>
                <td>cedula de ciudadanía</td>
                <td>123456789</td>
                <td>maria gonzalez</td>
                <td>7890123</td>
                <td>15/05/2023</td>
                <td>mgonzalez@gmail.com</td>
                <td>543210987</td>
                <td>3101234567</td>
                <td>calle 45 #67-89</td>
                <td>ventas</td>
                <td>mañana</td>
                <td>tecnólogo</td>
                <td>luis fernando rodriguez</td>
                <td>lfr@gmail.com</td>
                <td>20/11/2022</td>
                <td>02/12/2023</td>
                <td>01/01/2025</td>
                <td>Reunión Semanal</td>
              </tr>
              <tr>
                <td>
                  <div className="iconos_gestion d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faPen} className=" mb-3" />
                  </div>
                </td>
                <td>numero 3</td>
                <td>tarjeta de identidad</td>
                <td>987654321</td>
                <td>ana perez</td>
                <td>4567890</td>
                <td>10/07/2023</td>
                <td>aperez@gmail.com</td>
                <td>123456789</td>
                <td>3156789012</td>
                <td>calle 56 #12-34</td>
                <td>producción</td>
                <td>tarde</td>
                <td>tecnólogo</td>
                <td>laura gomez</td>
                <td>lgomez@gmail.com</td>
                <td>15/09/2022</td>
                <td>03/03/2023</td>
                <td>01/01/2025</td>
                <td>05/10/2024</td>
                <td>Plan de Actividades</td>
              </tr>
              <tr>
                <td>
                  <div className="iconos_gestion h-100 d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faPen} className="mb-3" />
                  </div>
                </td>
                <td>numero 4</td>
                <td>cedula de ciudadanía</td>
                <td>567890123</td>
                <td>javier lopez</td>
                <td>2345678</td>
                <td>22/09/2023</td>
                <td>jlopez@gmail.com</td>
                <td>9876543210</td>
                <td>3178901234</td>
                <td>calle 78 #45-67</td>
                <td>marketing</td>
                <td>mañana</td>
                <td>tecnólogo</td>
                <td>diana rodriguez</td>
                <td>drodriguez@gmail.com</td>
                <td>10/12/2022</td>
                <td>04/20/2023</td>
                <td>01/01/2025</td>
                <td>Proyecto Productivo</td>
              </tr>
              <tr>
                <td>
                  <div className="iconos_gestion h-100 d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faPen} className="mb-3" />
                  </div>
                </td>
                <td>numero 5</td>
                <td>tarjeta de identidad</td>
                <td>543210987</td>
                <td>susana ramirez</td>
                <td>3456789</td>
                <td>28/09/2023</td>
                <td>sramirez@gmail.com</td>
                <td>876543210</td>
                <td>3123456789</td>
                <td>calle 90 #34-56</td>
                <td>ventas</td>
                <td>tarde</td>
                <td>tecnólogo</td>
                <td>andres ortega</td>
                <td>aortega@gmail.com</td>
                <td>18/11/2022</td>
                <td>05/15/2023</td>
                <td>01/01/2025</td>
                <td>Entrevista de Empleo</td>
              </tr>
              <tr>
                <td>
                  <div className="iconos_gestion h-100 d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faPen} className="mb-3" />
                  </div>
                </td>
                <td>numero 6</td>
                <td>cedula de ciudadanía</td>
                <td>456789012</td>
                <td>lucas fernandez</td>
                <td>7890123</td>
                <td>10/10/2023</td>
                <td>lfernandez@gmail.com</td>
                <td>2345678901</td>
                <td>3145678901</td>
                <td>calle 12 #56-78</td>
                <td>recursos humanos</td>
                <td>mañana</td>
                <td>tecnólogo</td>
                <td>maria lopez</td>
                <td>mlopez@gmail.com</td>
                <td>15/12/2022</td>
                <td>06/20/2023</td>
                <td>01/01/2025</td>
                <td>Plan de Actividades</td>
              </tr>
              <tr>
                <td>
                  <div className="iconos_gestion h-100 d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faPen} className="mb-3" />
                  </div>
                </td>
                <td>numero 7</td>
                <td>tarjeta de identidad</td>
                <td>9876543210</td>
                <td>mariana castillo</td>
                <td>1234567</td>
                <td>05/11/2023</td>
                <td>mcastillo@gmail.com</td>
                <td>5678901234</td>
                <td>3101234567</td>
                <td>calle 67 #23-45</td>
                <td>finanzas</td>
                <td>tarde</td>
                <td>tecnólogo</td>
                <td>jose ramirez</td>
                <td>jramirez@gmail.com</td>
                <td>25/09/2022</td>
                <td>07/30/2023</td>
                <td>01/01/2025</td>
                <td>Taller Mensual</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tabla_adjudicados;
