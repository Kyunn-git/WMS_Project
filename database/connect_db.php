<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'coffeeroll';

$conn = new mysqli($servername, $username, $password,$dbname);


if(!$conn){
    echo "connection not created!";

}
else{
    echo"connection created";
}

?>