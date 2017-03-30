<?php
// FICHERO: rest/get/login.php

$METODO = $_SERVER['REQUEST_METHOD'];
// EL METODO DEBE SER GET. SI NO LO ES, NO SE HACE NADA.
if($METODO<>'GET') exit();
// PETICIONES GET ADMITIDAS:
//   rest/login/{LOGIN}  -> devuelve true o false en función de si el login está disponible o no, respectivamente.
// =================================================================================
// =================================================================================
// INCLUSION DE LA CONEXION A LA BD
   require_once('../configbd.php');
// =================================================================================
// =================================================================================
$RECURSO = explode("/", $_GET['prm']);
$PARAMS  = array_slice($_GET, 1, count($_GET) - 1,true);
$LOGIN   = $RECURSO[0];
// =================================================================================
// CONFIGURACION DE SALIDA JSON Y CORS PARA PETICIONES AJAX
// =================================================================================
header("Access-Control-Allow-Orgin: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json");
// =================================================================================
// Se prepara la respuesta
// =================================================================================
$R             = [];  // Almacenará el resultado.
$RESPONSE_CODE = 200; // código de respuesta por defecto: 200 - OK
$mysql         = '';
// =================================================================================
if(isset($LOGIN))
{ // Se devuelve si el login está disponible o no
	$mysql  = 'select LOGIN from usuario where login="' . sanatize($LOGIN) . '"';
	if( ($res = mysqli_query($link, $mysql)) && mysqli_num_rows($res)>0 )
		$R = array("RESULTADO" => "ok", 'CODIGO' => '200', "DISPONIBLE" => "false");
	else
		$R = array("RESULTADO" => "ok", 'CODIGO' => '200', "DISPONIBLE" => "true");
}
else
{
	$RESPONSE_CODE = 400; // Los parámetros no son correctos
	$R = array("RESULTADO" => "error", 'CODIGO' => '400', "DESCRIPCION" => "Los parámetros no son correctos");
}
// =================================================================================
// SE HACE LA CONSULTA
// =================================================================================
if( strlen($mysql)>0 && count($R)==0 && $res = mysqli_query( $link, $mysql ) )
{
  if( substr($mysql, 0, 6) == "select" )
  {
    while( $row = mysqli_fetch_assoc( $res ) )
      $R[] = $row;
    mysqli_free_result( $res );
  }
  else $R[] = $res;
}
// =================================================================================
// SE CIERRA LA CONEXION CON LA BD
// =================================================================================
mysqli_close($link);
// =================================================================================
// SE DEVUELVE EL RESULTADO DE LA CONSULTA
// =================================================================================
try {
    // Here: everything went ok. So before returning JSON, you can setup HTTP status code too
    http_response_code($RESPONSE_CODE);
    print json_encode($R);
}
catch (SomeException $ex) {
    $rtn = array('RESULTADO' => 'error', 'CODIGO' => '500', 'DESCRIPCION' => "Se ha producido un error al devolver los datos.");
    http_response_code(500);
    print json_encode($rtn);
}
?>