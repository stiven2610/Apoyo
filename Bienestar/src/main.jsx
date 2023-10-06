import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Aprendiz_lectiva from './componentes/Aprendiz_lectiva/Aprendiz_lectiva';
import Asistencia_taller_adm from './componentes/Asitencia_taller_adm/Asistencia_taller_adm';
import Login from './componentes/login/Login';
import Beneficio from './componentes/Beneficio/Beneficio';
import Aprendices_adjudicados from './componentes/Aprendices_ajudicados/Aprendices_adjudicados';
import Cargue_excel_adj from './componentes/Cargue_excel/Cargue_excel_adj';
import Cargue_formato_seguimiento from './componentes/Cargue_formato_seguimiento/Cargue_formato_seguimiento';
import FormRegistro from './componentes/formulario de registros/formularioRegistroAsistencia';
import Formulario_Gestion_aprendiz from './componentes/Formulario_gestion_aprendiz/Gestion_aprendiz';
const router = createBrowserRouter([
  {
    path:"/",
    element: <Login/>,
    errorElement:<h1>error</h1>
  },
  {
    path:"/beneficio",
    element: <Beneficio/>,
    errorElement:<h1>error</h1>
  },
  { 
    path: "/cargueadjudicados",
    element: <Cargue_excel_adj/>,
    errorElement:<h1>error</h1>
  },

  {
    path:"/adjudicados",
    element:<Aprendices_adjudicados/>,
    errorElement:<h1>error</h1>
  },
  {
    path:"/tablalectiva",
    element:<Aprendiz_lectiva/>,
    errorElement:<h1>error</h1>
  },
  {
    path:"/tablaproductiva",
    element:<Aprendiz_lectiva/>,
    errorElement:<h1>error</h1>
  },
  {
    path:"/registroasistencia",
    element:<Asistencia_taller_adm/>,
    errorElement:<h1>error</h1>
  },
  {
    path:"/formatoseguimiento",
    element:<Cargue_formato_seguimiento/>,
    errorElement:<h1>error</h1>
  },

  {
    path:"/gestiondatosaprendiz",
    element: <Formulario_Gestion_aprendiz />,
    errorElement:<h1>error</h1>
  },
  {
    path:"/formularioregistro",
    element:<FormRegistro/>,
    errorElement:<h1>error</h1>
  },

])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);
