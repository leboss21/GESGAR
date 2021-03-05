<?php
require '../../../../model/Initial.php';

if (isset($_POST['postidreclamationnandremovereclamewhenidissend']) AND !empty($_POST['postidreclamationnandremovereclamewhenidissend']))
{
    $id_reclam = htmlspecialchars(trim($_POST['postidreclamationnandremovereclamewhenidissend']));

    $supEf= $SupReclam->SuppreReclamation($id_reclam);

    echo $supEf;
}