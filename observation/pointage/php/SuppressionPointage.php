<?php
require '../../../../model/Initial.php';

if (isset($_POST['postidpointageandremovepointagewhenidissend']) AND !empty($_POST['postidpointageandremovepointagewhenidissend']))
{
    $id_pointage = htmlspecialchars(trim($_POST['postidpointageandremovepointagewhenidissend']));

    $supEf= $SupPoint->SupprePointage($id_pointage);

    echo $supEf;
}