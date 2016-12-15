var db=require('./db');

//obtener todas las asignaturas
module.exports.getAsignaturas = function(callback){ 
    db.query('SELECT * from asignaturas', function(err, rows, fields) {
        if (err) throw err;
        callback(rows);
    });
 }

//obtener una asignatura
 module.exports.getAsignatura = function(codigo,callback){ 
    db.query('SELECT * from asignaturas where codigo=?',[codigo], function(err, rows, fields) {
        if (err) throw err;
        callback(rows);
    });
};

//crear una asignatura
module.exports.postAsignaturas = function(asignatura,callback){ 
    db.query('insert into asignaturas set ?',[asignatura], function(err, rows, fields) {
        if (err){
            callback({"message":"se ha producido un error al crear la asignatura"},500);
        }else{
            callback({"message":"insertada asignatura con codigo: "+asignatura.codigo+" y con nombre: "+asignatura.nombre},201)
        }
    });
 }

//borrar una asignatura
 module.exports.deleteAsignatura = function(codigo,callback){ 
    db.query('delete from asignaturas where codigo=?',[codigo], function(err, rows, fields) {
        if (err) throw err;
        callback(rows);
    });
};

//actualizar una asignatura
module.exports.putAsignatura = function(codigo,asignatura,callback){ 
    db.query('UPDATE asignaturas SET ? WHERE codigo = ?',[asignatura,codigo], function(err, rows, fields) {
        if (err) callback({"message":"se ha producido un error al actualizar la asignatura"},500);
        else
            callback(rows,200);
    });
};