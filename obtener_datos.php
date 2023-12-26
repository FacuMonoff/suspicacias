<?php
require 'conexion.php';

$con = new Conexion();
$articulos = $con->getArticulos();

header('Content-Type: application/json');
echo json_encode($articulos);
