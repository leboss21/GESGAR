<?php
session_start();
unset($_SESSION["nomUtilisateur"]);
$url = "Login.php";
header("Location: $url");
?>