var db=require('./db');

//obtener todos los alumnos
module.exports.getAlumnos=function(callback){
    db.query('SELECT * from alumnos', function(err, rows, fields) {
        if (err) throw err;
        callback(rows);
  });
}

//obtener un alumno
module.exports.getAlumno = function(dni,callback){ 
    db.query('SELECT * from alumnos where dni=?',[dni], function(err, rows, fields) {
        if (err) throw err;
        callback(rows);
  });
};

//crear alumno
module.exports.postAlumnos = function(alumno,callback){   
        db.query('insert into alumnos set ?',[alumno], function(err, rows, fields) {
            if(err){
                callback({"message":"se ha producido un error al crear el alumno"},500);
            }else{
                callback({"message":"insertado el alumno con dni: "+alumno.dni+", nombre: "+alumno.nombre+" y apellidos: "+alumno.apellidos},201);
            }
        });
 }

//borrar alumno
 module.exports.deleteAlumno = function(dni,callback){ 
    
    db.query('delete from alumnos where dni=?',[dni], function(err, rows, fields) {
        if (err) throw err;
        callback(rows);
  });
};

//actualizar alumno
module.exports.putAlumno = function(alumno,dni,callback){ 
        db.query('UPDATE alumnos SET ? WHERE dni = ?',[alumno,dni], function(err, rows, fields) {
            if (err) callback({"message":"se ha producido un error al actualizar el alumno"},500);
            else
                callback(rows,200);
        });
};

//obtener la media de todos los alumnos
module.exports.getMediaAlumnos = function(callback){ 
    db.query('select obtener_media()', function(err, rows, fields) {
        if (err) callback({"message":"se ha producido un error al obtener la media"},500);
        rows = JSON.stringify(rows).replace("()", ''); // convertimos el json a string para poder quitarle () a obtener_media()
        rows = JSON.parse(rows);
        callback(rows);
  });
};