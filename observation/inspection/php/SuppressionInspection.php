<?php
require '../../../../model/Initial.php';

if (isset($_POST['postidinspectionandremoveinspectwhenidissend']) AND !empty($_POST['postidinspectionandremoveinspectwhenidissend']))
{
    $id_inspect = htmlspecialchars(trim($_POST['postidinspectionandremoveinspectwhenidissend']));

    $supEf= $SupInspect->SuppreInspect($id_inspect);

    echo $supEf;
}