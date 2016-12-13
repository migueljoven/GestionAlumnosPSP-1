var db=require('./db');

//obtener todas las matriculas
module.exports.getMatriculas = function(req, res){ 
    db.query('SELECT * from matriculas', function(err, rows, fields) {
        if (err) throw err;
        if(rows.length>0){
            res.json(rows);
        }else{
            res.json({"message":"no hay matriculas en la base de datos"});
        }
    });
 }

//obtener las matriculas de un alumno
 module.exports.getMatricula = function(req, res){ 
    var dni_alumno=req.params.dni_alumno;
    db.query('SELECT * from matriculas where dni_alumno=?',[dni_alumno], function(err, rows, fields) {
        if (err) throw err;
        if(rows.length>0){
            res.json(rows);
        }else{
            res.json({"message":"el alumno con el dni: "+dni_alumno+" no esta matriculado de ninguna asignatura"});
        }
  });
};

//crear matricula
 module.exports.postMatriculas = function(req, res){ 
    if(req.body.dni_alumno!=undefined && req.body.codigo_asignatura!=undefined && req.body.nota!=undefined && req.body.fecha!=undefined){
        db.query('insert into matriculas set ?',[req.body], function(err, rows, fields) {
            if (err){
                res.status(500).json({"message":"se ha producido un error al crear la matricula"});
            }else{
                res.status(201).json({"message":"alumno con dni: "+req.body.dni_alumno+" matriculado correctamente en la asignatura con codigo: "+req.body.codigo_asignatura});
            }
        });
    }else{
        res.status(409).json({"message":"los datos introducidos no son correctos"});
    }
 }

//borrar matricula
module.exports.deleteMatricula = function(req, res){ 
    var codigo_asignatura=req.params.codigo_asignatura;
    var fecha = req.params.fecha;
    var dni_alumno=req.params.dni_alumno;
    db.query('delete from matriculas where dni_alumno=? and codigo_asignatura = ? and fecha like ?"%"',[dni_alumno,codigo_asignatura,fecha], function(err, rows, fields) {
        if (err) throw err;
        if(rows.affectedRows>0){
            res.json({"message":"la matricula se ha eliminado correctamente"});
        }else{
            res.json({"message":"el alumno con dni: "+dni_alumno+" no esta matriculado en la asignatura "+codigo_asignatura+" en la fecha "+fecha});
        }
    });
};

//actualizar matricula
module.exports.putMatricula = function(req, res){ 
    var fecha = req.params.fecha;
    var codigo_asignatura=req.params.codigo_asignatura;
    var dni_alumno=req.params.dni_alumno;
    if(dni_alumno!=undefined && codigo_asignatura!=undefined && req.body.nota!=undefined && fecha!=undefined){
        db.query('UPDATE matriculas SET ? WHERE dni_alumno = ? and codigo_asignatura = ? and fecha like ?"%"',[req.body,dni_alumno,codigo_asignatura,fecha], function(err, rows, fields) {
            if (err) res.json({"message":"se ha producido un error al actualizar la matricula"});
            if(rows.affectedRows>0){
                res.json({"message":"la matricula se ha actualizado correctamente"});
            }else{
                res.json({"message":"el alumno con dni: "+dni_alumno+" no esta matriculado en la asignatura "+codigo_asignatura+" en la fecha "+fecha});
            }
        });
    }else{
        res.status(409).json({"message":"los datos introducidos no son correctos"});
    }
};