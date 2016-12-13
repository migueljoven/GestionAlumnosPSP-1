CREATE TABLE IF NOT EXISTS alumnos (
dni varchar(9) NOT NULL primary key,
nombre varchar(50) DEFAULT NULL,
apellidos varchar(50) DEFAULT NULL
); 

CREATE TABLE IF NOT EXISTS asignaturas (
codigo varchar(20) NOT NULL primary key,
nombre varchar(50) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS matriculas (
dni_alumno varchar(9) NOT NULL,
codigo_asignatura varchar(20) NOT NULL,
nota double default 0,
fecha date default null,
PRIMARY KEY (dni_alumno, codigo_asignatura, fecha),
FOREIGN KEY (dni_alumno) REFERENCES alumnos(dni) on delete cascade on update cascade,
FOREIGN KEY (codigo_asignatura) REFERENCES asignaturas(codigo) on delete cascade on update cascade
); 
