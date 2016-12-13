CREATE USER usuario@localhost IDENTIFIED BY 'usuario';
grant insert,update,delete,select on proyecto.alumnos to usuario@localhost;
grant insert,update,delete,select on proyecto.asignaturas to usuario@localhost;
grant insert,update,delete,select on proyecto.matriculas to usuario@localhost;
grant execute on function proyecto.obtener_media to usuario@localhost;