<?php
require '../../../../model/Initial.php';

if (isset($_POST['postidrecommandationandremoverecommandewhenidissend']) AND !empty($_POST['postidrecommandationandremoverecommandewhenidissend']))
{
    $id_recom = htmlspecialchars(trim($_POST['postidrecommandationandremoverecommandewhenidissend']));

    $supEf= $SupRecom->SuppreRecommandation($id_recom);

    echo $supEf;
}