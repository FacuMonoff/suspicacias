<?php
require 'setting.php';

class Conexion
{
    private static $conexion = null;

    public static function getConection()
    {
        if (self::$conexion === null) {
            try {
                self::$conexion = new PDO("sqlsrv:server=" . SERVIDOR . ";database=" . DATABASE, USUARIO, PASSWORD);
                self::$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch (PDOException $e) {
                echo "Error de conexión: " . $e->getMessage();
            }
        }
        return self::$conexion;
    }

    public function getArticulos()
    {
        try {
            $conexion = self::getConection();
            if ($conexion !== null) {
                $query = $conexion->prepare("SELECT [artId], [artDescripcion], [artPrecio], [artPrecioDto], [artStock], [artPeso], [artDescripAdic], [artRubro] FROM [Suspicacias].[dbo].[Articulos]");
                $query->execute();
                $articulos = $query->fetchAll(PDO::FETCH_ASSOC);
                return $articulos;
            } else {
                return null;
            }
        } catch (PDOException $e) {
            echo "Error al obtener los datos: " . $e->getMessage();
            return null;
        }
    }
}
