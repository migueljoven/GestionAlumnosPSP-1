var db=require('./db');

//obtener todas las matriculas
module.exports.getMatriculas = function(callback){ 
    db.query('SELECT * from matriculas', function(err, rows, fields) {
        if (err) throw err;
        callback(rows);
    });
 }

//obtener las matriculas de un alumno
 module.exports.getMatricula = function(dni,callback){ 
    db.query('SELECT * from matriculas where dni_alumno=?',[dni], function(err, rows, fields) {
        if (err) throw err;
       callback(rows);
  });
};

//crear matricula
 module.exports.postMatriculas = function(datos,callback){
        db.query('insert into matriculas set ?',[datos], function(err, rows, fields) {
            if (err){
                callback({"message":"se ha producido un error al crear la matricula"},500);
            }else{
                callback({"message":"alumno con dni: "+datos.dni_alumno+" matriculado correctamente en la asignatura con codigo: "+datos.codigo_asignatura},201);
            }
        });
 }

//borrar matricula
module.exports.deleteMatricula = function(parametros, callback){
    var codigo_asignatura=parametros.codigo_asignatura;
    var fecha = parametros.fecha;
    var dni_alumno=parametros.dni_alumno;
    db.query('delete from matriculas where dni_alumno=? and codigo_asignatura = ? and fecha like ?"%"',[dni_alumno,codigo_asignatura,fecha], function(err, rows, fields) {
        if (err) throw err;
        callback(rows);
    });
};

//actualizar matricula
module.exports.putMatricula = function(parametros,matricula,callback){ 
    var fecha = parametros.fecha;
    var codigo_asignatura=parametros.codigo_asignatura;
    var dni_alumno=parametros.dni_alumno;
        db.query('UPDATE matriculas SET ? WHERE dni_alumno = ? and codigo_asignatura = ? and fecha like ?"%"',[matricula,dni_alumno,codigo_asignatura,fecha], function(err, rows, fields) {
            if (err){
                 callback({"message":"se ha producido un error al actualizar la matricula"},500);
            }else{
                callback(rows,200);
            }
            
        });
};