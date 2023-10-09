import "./styles.css"
const Footer = () => {
  return (
    <footer className="py-6 footer">
      <div className="container ">
        <div className="row">
          <div className="col-md-5">
            <h2  className="mb-3"><a href="https://www.sena.edu.co/es-co/comunidades/aprendices/Paginas/bienestarAprendiz.aspx">¿QUIÉNES SOMOS?</a></h2>
            <p>
              Estrategia institucional para contribuir en la permanencia y el
              desempeño exitoso de los aprendices de la entidad en su proceso
              formativo con enfoque territorial y diferencial.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              className="img-fluid"
              src="/images/logo.png"
              alt="logo bienestar"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
