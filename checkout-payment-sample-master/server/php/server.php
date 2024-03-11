<?php

require __DIR__  . '../../../vendor/autoload.php';

MercadoPago\SDK::setAccessToken("APP_USR-8974501914594065-100914-839de895143d41535263e84eb536c22d-321551085");

$json = file_get_contents("php://input");
$data = json_decode($json);

$preference = new MercadoPago\Preference();

$item = new MercadoPago\Item();
$item->title = $data->description;
$item->quantity = $data->quantity;
$item->unit_price = $data->price;

$preference->items = array($item);

$preference->back_urls = array(
    "success" => "http://webapprueba.azurewebsites.net/feedback",
    "failure" => "http://webapprueba.azurewebsites.net/feedback",
    "pending" => "http://webapprueba.azurewebsites.net/feedback"
);
$preference->auto_return = "approved";

$preference->save();

$response = array(
    'id' => $preference->id,
);
echo json_encode($response);
