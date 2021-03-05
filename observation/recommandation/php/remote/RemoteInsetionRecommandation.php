<?php
include_once '../../../../../model/BaseConnection.php';
include_once '../../../../../model/BaseConnectionRemote.php';

if(isset($_POST['remoteinsertionrecommandation']))
{
    $charger = 'non charge';

    $liste = array();
    $requete = $dbase->prepare(" SELECT * FROM recommandation WHERE charger=:charger");
    $requete->bindParam(':charger', $charger);
    $requete->execute();

    while($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_recommandation = $row['id_recommandation'];
        $date_recommandation =  $row['date_recommandation'];
        $probleme =  $row['probleme'];
        $recommandation =  $row['recommandation'];
        $id_reception =  $row['id_reception'];

        $requete1 =  $dbaseremote->prepare("INSERT INTO r_recommandation (id_recommandation, date_recommandation, probleme, recommandation, id_reception) VALUES (:id_recommandation, :date_recommandation, :probleme, :recommandation, :id_reception)");
        $requete1->bindParam(':id_recommandation', $id_recommandation);
        $requete1->bindParam(':date_recommandation', $date_recommandation);
        $requete1->bindParam(':probleme', $probleme);
        $requete1->bindParam(':recommandation', $recommandation);
        $requete1->bindParam(':id_reception', $id_reception);
        $requete1->execute();

        $chargerok = 'charge';
        $requete2 = $dbase->prepare(" UPDATE recommandation SET charger=:charger WHERE  id_reception=:id_reception");
        $requete2->bindParam(':id_reception', $id_reception);
        $requete2->bindParam(':charger', $chargerok);
        $requete2->execute();
    }

}

