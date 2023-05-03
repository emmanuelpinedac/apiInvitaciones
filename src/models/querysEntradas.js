export const querysEntradas = {

  //C
  crearEntrada:
    "INSERT INTO Entrada VALUES (@nombre_entrada, @detalle_entrada);",

      //R - ejemplo simple
  getEntradas:
   "SELECT * FROM Entrada",
   // aqui para produccion, se puede utilizar un store procedure con una vista, 
   //en lugar de llamar a la tabla Entrada

     //R - Ejemplo con parametro
  getEntradaById: 
  "SELECT * FROM Entrada WHERE id_entrada = @id  ",

    //U   - Update
  actualizarEntrada:
  "UPDATE Entrada SET  nombre_Entrada = @nombre_Entrada, detalle_entrada = @detalle_entrada WHERE id_entrada = @id",

  // D   -  Delete
  borrarEntradaById:
   "DELETE Entrada where id_entrada = @id",

};