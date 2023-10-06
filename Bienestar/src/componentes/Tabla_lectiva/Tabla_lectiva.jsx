const Tabla_lectiva = () => {
  return (
    <div className="table-container m-4 h-100vh">
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Nombre Completo del Aprendiz</th>
              <th>Codigo Ficha</th>
              <th>Número de Documento</th>
              <th>Fecha Culminacion Etapa lectiva</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>yeison stiven gutierrez rozo</td>
              <td>2619701</td>
              <td>1094778783</td>
              <td>26/10/2023</td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>1234567</td>
              <td>987654321</td>
              <td>15/09/2023</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>7654321</td>
              <td>123456789</td>
              <td>20/09/2023</td>
            </tr>
            <tr>
              <td>Michael Johnson</td>
              <td>9876543</td>
              <td>345678901</td>
              <td>22/09/2023</td>
            </tr>
            <tr>
              <td>Sarah Williams</td>
              <td>5432109</td>
              <td>567890123</td>
              <td>25/09/2023</td>
            </tr>
            <tr>
              <td>David Brown</td>
              <td>4567890</td>
              <td>234567890</td>
              <td>28/09/2023</td>
            </tr>
            <tr>
              <td>Lisa Davis</td>
              <td>6789012</td>
              <td>456789012</td>
              <td>30/09/2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Tabla_lectiva;
