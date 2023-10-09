const xlsx = require("xlsx");

// Ruta del archivo de Excel
const filePath = "C:/Users/stive/OneDrive/Escritorio/adjudicados.xlsx"; // Reemplaza con la ruta de tu archivo

// Leer el archivo de Excel
const workbook = xlsx.readFile(filePath);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
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

// Iterar sobre los datos extraídos
for (const row of jsonData) {
  const {
    'NUMERO_DOCUMENTO': numero_documento_aprendiz,
    'CODIGO_FICHA': codigo_ficha,
    'TIPO_DOCUMENTO': tipo_documento,
    'NOMBRE_COMPLETO': nombre_completo_aprendiz,
    'FECHA ADJUDICACION': fecha_adjudicacion,
    'CORREO ELECTRONICO': email_aprendiz,
    'TELEFONO FIJO': numero_telefono_fijo,
    'TELEFONO MOVIL': numero_telefono_movil,
    'DIRECCION DE RESIDENCIA': direccion_residencia_aprendiz,
    'FECHA INICIO FICHA': fecha_inicio_ficha,
    'FECHA FIN FICHA': fecha_fin_ficha,
    'NOMBRE DEL PROGRAMA': nombre_programa
  } = row;
  console.log('Número de Documento:', fecha_adjudicacion);
  // Aquí puedes hacer lo que desees con los datos extraídos
}
