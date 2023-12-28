<?php
// obtener_datos.php

require 'conexion.php';

// Función para guardar los datos en caché
function guardarEnCache($datos)
{
    $file = 'cache/data.json';
    file_put_contents($file, json_encode($datos)); // Guardar $datos en un archivo
}

// Función para obtener los datos desde el caché
function obtenerDesdeCache()
{
    $file = 'cache/data.json';
    if (file_exists($file)) {
        return json_decode(file_get_contents($file), true);
    } else {
        return null;
    }
}

// Verificar si han pasado más de 6 horas desde la última actualización
$file = 'cache/last_updated.txt';
if (file_exists($file)) {
    $lastUpdatedTime = file_get_contents($file);
    if (time() - $lastUpdatedTime > 6 * 60 * 60) { // Si han pasado más de 6 horas
        // Obtener datos de la base de datos
        $con = new Conexion();
        $articulos = $con->getArticulos();

        // Guardar datos en caché y actualizar el tiempo de última actualización
        guardarEnCache($articulos);
        file_put_contents($file, time());
    }
}

// Obtener datos desde el caché
$datosDesdeCache = obtenerDesdeCache();

header('Content-Type: application/json');
echo json_encode($datosDesdeCache);
