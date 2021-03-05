<?php
require '../../../model/Initial.php';

if (isset($_POST['postidlivraisonandremoverelivrewhenidissend']) AND !empty($_POST['postidlivraisonandremoverelivrewhenidissend']))
{
    $id_livrle = htmlspecialchars(trim($_POST['postidlivraisonandremoverelivrewhenidissend']));

    $supEf= $SupLivre->SuppreLivraison($id_livrle);

    echo $supEf;
}