<?php

$hostnameremote = "freespirit.com";
$usernameremote = "root";
$passwordremote = "";
global $dbaseremote;
try
{
    $dbaseremote = new PDO("mysql:host=$hostnameremote; dbname=gesgar_client",$usernameremote, $passwordremote);
    $dbaseremote->exec('SET CHARACTER SET utf8');
    $dbaseremote->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    ini_set('max_execution_time',0);
}
catch (PDOException $e) {

    ?>
    <script>
        $(document).ready(function () {
            $('.messageh6').text('Erreur de conexion \341 la base distante. Veuillez verrifier votre conexion internet. ');
            ConfirmationLose();
        });
    </script>
    <?php
}
