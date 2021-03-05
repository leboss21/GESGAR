<?php

$hostname = "freespirit.com";
$username = "root";
$password = "";
global $dbase;
try
{
    $dbase = new PDO("mysql:host=$hostname; dbname=gesgar",$username, $password);
    $dbase->exec('SET CHARACTER SET utf8');
    $dbase->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    ini_set('max_execution_time',0);
}
catch (PDOException $e) {

    ?>
    <script>
        $(document).ready(function () {
            var e = <?php echo json_encode( $e->getMessage()); ?>;
            if($("#nomIdUser").val().length!=0 && $("#passIdUser").val().length!=0)
            {
                $("#dbConnect").text("Une erreur s'est produite. Veillez v\351rifier votre connexion internet.");
                $("#dbConnect").fadeIn("show");
                $("#dbConnect").fadeOut(10000);
            }
        });
    </script>
    <?php

}

?>