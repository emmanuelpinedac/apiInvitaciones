

export const querysConfirmaciones = {

  //C
  crearConfirmacion:
    "INSERT INTO Confirmacion VALUES (@fecha_confirmacion, @id_invitado, @id_entrada, @id_PlatoFuerte, @asistencia, @mensaje);",

      //R - ejemplo simple
  getConfirmaciones:
   "SELECT * FROM Confirmacion",
   // aqui para produccion, se puede utilizar un store procedure con una vista, 
   //en lugar de llamar a la tabla Confirmacion

     //R - Ejemplo con parametro
  getConfirmacionById: 
  "SELECT * FROM Confirmacion WHERE id_confirmacion = @id  ",

    //U   - Update
  actualizarConfirmacion:
  "UPDATE Confirmacion SET fecha_confirmacion = @fecha_confirmacion, id_invitado = @id_invitado, id_entrada = @id_entrada, id_PlatoFuerte = @id_PlatoFuerte, asistencia = @asistencia, mensaje = @mensaje WHERE id_confirmacion = @id",


  // D   -  Delete
  borrarConfirmacionById:
   "DELETE Confirmacion where id_confirmacion = @id",

};