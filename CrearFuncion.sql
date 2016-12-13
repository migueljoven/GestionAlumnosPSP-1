DROP FUNCTION IF EXISTS obtener_media;
DELIMITER //
CREATE FUNCTION obtener_media()
RETURNS double(4,2)
BEGIN
DECLARE media double DEFAULT 0;
DECLARE alumnos int DEFAULT 0;
SELECT SUM(nota) into media FROM matriculas;
SELECT count(*) into alumnos FROM matriculas;
RETURN media/alumnos;
END;
//
DELIMITER ;
