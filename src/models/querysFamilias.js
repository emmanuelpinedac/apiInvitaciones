export const querysFamilias = {

  //C
  crearFamilia:
    "INSERT INTO Familia VALUES (@nombre_familia);",

      //R - ejemplo simple
  getFamilias:
   "SELECT * FROM Familia",
   // aqui para produccion, se puede utilizar un store procedure con una vista, 
   //en lugar de llamar a la tabla Familia

     //R - Ejemplo con parametro
  getFamiliaById: 
  "SELECT * FROM Familia WHERE id_familia = @id  ",

    //U   - Update
  actualizarFamilia:
  "UPDATE Familia SET nombre_familia = @nombre_familia WHERE id_familia = @id",

  // D   -  Delete
  borrarFamiliaById:
   "DELETE Familia where id_Familia = @id",

};