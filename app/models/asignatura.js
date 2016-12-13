var db=require('./db');

//obtener todas las asignaturas
module.exports.getAsignaturas = function(req, res){ 
    db.query('SELECT * from asignaturas', function(err, rows, fields) {
        if (err) throw err;
        if(rows.length>0){
            res.json(rows);
        }else{
            res.json({"message":"no hay asignaturas en la base de datos con el codigo "});
        }
  });
 }

//obtener una asignatura
 module.exports.getAsignatura = function(req, res){ 
    var codigo=req.params.codigo;
    db.query('SELECT * from asignaturas where codigo=?',[codigo], function(err, rows, fields) {
        if (err) throw err;
        if(rows.length>0){
            res.json(rows);
        }else{
            res.json({"message":"no hay asignaturas en la base de datos con el codigo "+codigo});
        }
  });
};

//crear una asignatura
module.exports.postAsignaturas = function(req, res){ 
    if(req.body.codigo!=undefined && req.body.nombre!=undefined){
        db.query('insert into asignaturas set ?',[req.body], function(err, rows, fields) {
            if (err){
                res.status(500).json({"message":"se ha producido un error al crear la asignatura"});
            }else{
                res.status(201).json({"message":"insertada asignatura con codigo: "+req.body.codigo+" y con nombre: "+req.body.nombre});
            }
        });
    }else{
        res.status(409).json({"message":"los datos introducidos no son correctos"});
    }
 }

//borrar una asignatura
 module.exports.deleteAsignatura = function(req, res){ 
    var codigo=req.params.codigo;
    db.query('delete from asignaturas where codigo=?',[codigo], function(err, rows, fields) {
        if (err) throw err;
            if(rows.affectedRows>0){
                res.json({"message":"la asignatura con codigo: "+codigo+" ha sido eliminada"});
            }else{
                res.json({"message":"no existe ninguna asignatura con el codigo: "+codigo});
            }
    });
};

//actualizar una asignatura
module.exports.putAsignatura = function(req, res){ 
    var codigo=req.params.codigo;
    if(req.body.codigo!=undefined && req.body.nombre!=undefined){
        db.query('UPDATE asignaturas SET ? WHERE codigo = ?',[req.body,codigo], function(err, rows, fields) {
            if (err) res.status(500).json({"message":"se ha producido un error al actualizar la asignatura"});
            if(rows.affectedRows>0){
                res.json({"message":"la asignatura con codigo: "+codigo+" se ha actualizado correctamente"});
            }else{
                res.json({"message":"no existe ninguna asignatura con el codigo: "+codigo});
            }
        });
    }else{
        res.status(409).json({"message":"los datos introducidos no son correctos"});
    }
};