<?php
include_once '../../../../../model/BaseConnection.php';
include_once '../../../../../model/BaseConnectionRemote.php';

if(isset($_POST['remotemodificationrecommandation']))
{
    $modifier = 'modifie';

    $liste = array();
    $requete = $dbase->prepare(" SELECT * FROM recommandation WHERE modifier=:modifier");
    $requete->bindParam(':modifier', $modifier);
    $requete->execute();

    while($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_recommandation = $row['id_recommandation'];
        $date_recommandation =  $row['date_recommandation'];
        $probleme =  $row['probleme'];
        $recommandation =  $row['recommandation'];
        $id_reception =  $row['id_reception'];

        $liste[] = array('id'=>$id_recommandation,'idr'=>$id_reception);

        $requete1 =  $dbaseremote->prepare("UPDATE r_recommandation SET date_recommandation=:date_recommandation, probleme=:probleme, recommandation=:recommandation, id_reception=:id_reception  WHERE id_recommandation=:id_recommandation");
        $requete1->bindParam(':id_recommandation', $id_recommandation);
        $requete1->bindParam(':date_recommandation', $date_recommandation);
        $requete1->bindParam(':probleme', $probleme);
        $requete1->bindParam(':recommandation', $recommandation);
        $requete1->bindParam(':id_reception', $id_reception);
        $requete1->execute();

        $modifierok = 'non modifie';
        $requete2 = $dbase->prepare(" UPDATE recommandation SET modifier=:modifier WHERE  id_reception=:id_reception");
        $requete2->bindParam(':id_reception', $id_reception);
        $requete2->bindParam(':modifier', $modifierok);
        $requete2->execute();
    }

}

