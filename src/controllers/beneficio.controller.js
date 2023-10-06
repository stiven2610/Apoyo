const pool = require("../db.js");
const xlsx = require("xlsx");
const moment = require('moment');
const crearBeneficio = async (req, res, next) => {
  const {
    codigo_beneficio,
    cupos_beneficio,
    fecha_inicio_beneficio,
    fecha_fin_beneficio,
    archivo_excel,
  } = req.body;

  // Ruta del archivo de Excel
  const filePath = archivo_excel; // Reemplaza esto con la ruta de tu archivo
  try {
    // Verificar si el beneficio ya existe en la base de datos
    const validarBeneficio = await pool.query(
      "SELECT * FROM beneficio WHERE codigo_beneficio = $1",
      [codigo_beneficio]
    );

    if (validarBeneficio.rows.length === 0) {
      // Insertar el beneficio en la tabla 'beneficio'
      const result = await pool.query(
        "INSERT INTO beneficio (codigo_beneficio, cupos_beneficio, fecha_inicio_beneficio, fecha_fin_beneficio) VALUES ($1, $2, $3, $4) RETURNING *",
        [
          codigo_beneficio,
          cupos_beneficio,
          fecha_inicio_beneficio,
          fecha_fin_beneficio,
        ]
      );

      try {
        // Leer el archivo de Excel
        const workbook = xlsx.readFile(filePath);

        // Obtener la primera hoja del libro de Excel
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];

        // Convertir la hoja de Excel a JSON
        const jsonData = xlsx.utils.sheet_to_json(worksheet, {
          raw: false,
        });

        // Eliminar espacios en blanco al principio de las claves en el objeto JSON
        jsonData.forEach((row) => {
          
          for (const key in row) {
            if (Object.hasOwnProperty.call(row, key)) {
              const newKey = key.trim();
              row[newKey] = row[key];
              if (newKey !== key) {
                delete row[key];
              }
            }
          }
        });

        // Iterar sobre los datos extraídos y guardarlos en la base de datos
        jsonData.forEach(async (row) => {

          const {
            'NUMERO_DOCUMENTO': numero_documento_aprendiz,
            'CODIGO_BENEFICIO': codigo_beneficio,
            'CODIGO_FICHA': codigo_ficha,
            'TIPO_DOCUMENTO': tipo_documento,
            'NOMBRE_COMPLETO': nombre_completo_aprendiz,
            'FECHA_ADJUDICACION': fecha_adjudicacion,
            'CORREO ELECTRONICO': email_aprendiz,
            'TELEFONO FIJO': numero_telefono_fijo,
            'TELEFONO MOVIL': numero_telefono_movil,
            'DIRECCION DE RESIDENCIA': direccion_residencia_aprendiz,
            'FECHA INICIO FICHA': fecha_inicio_ficha,
            'FECHA FIN FICHA': fecha_fin_ficha,
            'NOMBRE DEL PROGRAMA': nombre_programa

          } = row;
          const tablaFicha = await pool.query(
            "INSERT INTO ficha (codigo_ficha,numero_documento_aprendiz,fecha_inicio_ficha,fecha_fin_ficha,nombre_programa) VALUES ($1,$2,$3,$4,$5) RETURNING *",[
              codigo_ficha,
              numero_documento_aprendiz,
              fecha_inicio_ficha,
              fecha_fin_ficha,
              nombre_programa
            ]
          )
          // Realizar la inserción en la tabla 'aprendiz' con los valores obtenidos
          const tablaAprendiz = await pool.query(
            "INSERT INTO aprendiz (numero_documento_aprendiz, codigo_beneficio, codigo_ficha, tipo_documento, nombre_completo_aprendiz, fecha_adjudicacion, email_aprendiz, numero_telefono_fijo, numero_telefono_movil, direccion_residencia_aprendiz) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
            [
              numero_documento_aprendiz,
              codigo_beneficio,
              codigo_ficha,
              tipo_documento,
              nombre_completo_aprendiz,
              fecha_adjudicacion,
              email_aprendiz,
              numero_telefono_fijo,
              numero_telefono_movil,
              direccion_residencia_aprendiz,
            ]
          );

          // Imprimir los datos del aprendiz recién insertado
          console.log("Datos del aprendiz insertado:");
          console.log(tablaAprendiz.rows[0]); // Debes adaptar esto según la estructura de tu resultado
        });

        // Imprimir los datos obtenidos
        console.log("Datos extraídos del archivo Excel:");
        console.log(jsonData);

        // Enviar respuesta exitosa
        res.status(200).json({ success: true, message: "Beneficio creado exitosamente" });
      } catch (error) {
        console.error("Error al leer el archivo de Excel:", error.message);
        // Enviar respuesta de error si falla la lectura del archivo
        res.status(500).json({ success: false, message: "Error al leer el archivo de Excel" });
      }
    } else {
      // Enviar respuesta de error si el beneficio ya existe
      res.status(400).json({
        success: false,
        message: "El beneficio ya existe...",
        field: "codigo_beneficio",
      });
      // Puedes hacer lo que necesites con jsonData, como guardarlos en una base de datos
      // Imprimir los datos obtenidos
      console.log("Datos extraídos del archivo Excel:");
      console.log(jsonData);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  crearBeneficio,
};
