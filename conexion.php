<?php
require 'setting.php';

class Conexion
{
    private $conector = null;

    public function getConection()
    {
        try {
            $this->conector = new PDO("sqlsrv:server=" . SERVIDOR . ";database=" . DATABASE, USUARIO, PASSWORD);
            $this->conector->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $this->conector;
        } catch (PDOException $e) {
            echo "Error de conexión: " . $e->getMessage();
            return null;
        }
    }

    public function getArticulos()
    {
        try {
            $conexion = $this->getConection();
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

// No se ejecuta nada aquí, simplemente define la clase para ser usada en otros archivos
