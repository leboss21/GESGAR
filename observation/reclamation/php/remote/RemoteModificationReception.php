<?php
include_once '../../../../../model/BaseConnection.php';
include_once '../../../../../model/BaseConnectionRemote.php';

if(isset($_POST['remotemodificationreception']))
{
    $modifier = 'modifie';


    $liste = array();
    $requete = $dbase->prepare(" SELECT * FROM reception WHERE modifier=:modifier");
    $requete->bindParam(':modifier', $modifier);
    $requete->execute();

    while($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_reception = $row['id_reception'];
        $num_reception =  $row['num_reception'];
        $date_reception =  $row['date_reception'];
        $heure_reception =  $row['heure_reception'];
        $kilometrage =  $row['kilometrage'];
        $tache =  $row['tache'];
        $tache_effectif =  $row['tache_effectif'];
        $mode_de_payement =  $row['mode_de_payement'];
        $id_vehicule =  $row['fk_id_vehicule'];

        $requete1 =  $dbaseremote->prepare("UPDATE r_reception SET num_reception=:num_reception, date_reception=:date_reception, heure_reception=:heure_reception, kilometrage=:kilometrage, tache=:tache, tache_effectif=:tache_effectif, mode_de_payement=:mode_de_payement, id_vehicule=:id_vehicule WHERE id_reception=:id_reception");
        $requete1->bindParam(':id_reception', $id_reception);
        $requete1->bindParam(':num_reception', $num_reception);
        $requete1->bindParam(':date_reception', $date_reception);
        $requete1->bindParam(':heure_reception', $heure_reception);
        $requete1->bindParam(':kilometrage', $kilometrage);
        $requete1->bindParam(':tache', $tache);
        $requete1->bindParam(':tache_effectif', $tache_effectif);
        $requete1->bindParam(':mode_de_payement', $mode_de_payement);
        $requete1->bindParam(':id_vehicule', $id_vehicule);
        $requete1->execute();

        $modifierok = 'non modifie';
        $requete2 = $dbase->prepare(" UPDATE reception SET modifier=:modifier WHERE  id_reception=:id_reception");
        $requete2->bindParam(':id_reception', $id_reception);
        $requete2->bindParam(':modifier', $modifierok);
        $requete2->execute();
    }

}