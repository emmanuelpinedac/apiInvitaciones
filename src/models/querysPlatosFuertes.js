export const querysPlatosFuertes = {

  //C
  crearPlatoFuerte:
    "INSERT INTO PlatoFuerte VALUES (@nombre_PlatoFuerte, @detalle_PlatoFuerte);",

      //R - ejemplo simple
  getPlatosFuertes:
   "SELECT * FROM PlatoFuerte",
   // aqui para produccion, se puede utilizar un store procedure con una vista, 
   //en lugar de llamar a la tabla PlatoFuerte

     //R - Ejemplo con parametro
  getPlatoFuerteById: 
  "SELECT * FROM PlatoFuerte WHERE id_PlatoFuerte = @id  ",

    //U   - Update
  actualizarPlatoFuerte:
  "UPDATE PlatoFuerte SET  nombre_PlatoFuerte = @nombre_PlatoFuerte, detalle_PlatoFuerte = @detalle_PlatoFuerte WHERE id_PlatoFuerte = @id",

  // D   -  Delete
  borrarPlatoFuerteById:
   "DELETE PlatoFuerte where id_PlatoFuerte = @id",

};