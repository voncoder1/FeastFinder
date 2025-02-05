<?php

$servername = "localhost";
$username = "root";
$password = "brandon123";
$dbname = "feastfinder";
$conn = "";

try{

    $conn =  mysqli_connect($servername, $username, $password, $dbname);

}

catch(mysqli_sql_exception){

    echo "Could not connect";
}


if ($conn) {
   echo"you are connected";
}

?>
