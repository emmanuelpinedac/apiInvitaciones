export const querysInvitados = {

  //C
  crearInvitado:
    "INSERT INTO Invitado VALUES (@nombre_invitado, @id_familia);",

      //R - ejemplo simple
  getInvitados:
   "SELECT * FROM Invitado",
   // aqui para produccion, se puede utilizar un store procedure con una vista, 
   //en lugar de llamar a la tabla invitado

     //R - Ejemplo con parametro
  getInvitadoById: 
  "SELECT * FROM Invitado WHERE id_invitado = @id  ",

    //U   - Update
  actualizarInvitado:
  "UPDATE Invitado SET id_familia = @id_familia, nombre_invitado = @nombre_invitado WHERE id_invitado = @id",

  // D   -  Delete
  borrarInvitadoById:
   "DELETE Invitado where id_invitado = @id",

};