<?php
include_once '../../../../model/BaseConnection.php';
include_once '../../../../model/BaseConnectionRemote.php';

if(isset($_POST['remoteinsertionlivraison']))
{
    $charger = 'non charge';

    $liste = array();
    $requete = $dbase->prepare(" SELECT * FROM livraison WHERE charger=:charger ");
    $requete->bindParam(':charger', $charger);
    $requete->execute();

    while($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_livraison = $row['id_livraison'];
        $date_livraison =  $row['date_livraison'];
        $heure_livraison =  $row['heure_livraison'];
        $traveaux_fait =  $row['traveaux_fait'];
        $traveaux_non_fait =  $row['traveaux_non_fait'];
        $kilometrage =  $row['kilometrage'];
        $date_finG =  $row['date_finG'];
        $num_facture =  $row['num_facture'];
        $montant =  $row['montant'];
        $id_reception =  $row['id_reception'];

        $requete1 =  $dbaseremote->prepare("INSERT INTO r_livraison (id_livraison, date_livraison, heure_livraison, traveaux_fait, traveaux_non_fait,kilometrage,date_finG,num_facture,montant,id_reception ) VALUES (:id_livraison, :date_livraison, :heure_livraison, :traveaux_fait, :traveaux_non_fait,:kilometrage,:date_finG,:num_facture,:montant,:id_reception)");
        $requete1->bindParam(':id_livraison', $id_livraison);
        $requete1->bindParam(':date_livraison', $date_livraison);
        $requete1->bindParam(':heure_livraison', $heure_livraison);
        $requete1->bindParam(':traveaux_fait', $traveaux_fait);
        $requete1->bindParam(':traveaux_non_fait', $traveaux_non_fait);
        $requete1->bindParam(':kilometrage', $kilometrage);
        $requete1->bindParam(':date_finG', $date_finG);
        $requete1->bindParam(':num_facture', $num_facture);
        $requete1->bindParam(':montant', $montant);
        $requete1->bindParam(':id_reception', $id_reception );
        $requete1->execute();

        $chargerok = 'charge';
        $requete2 = $dbase->prepare(" UPDATE livraison SET charger=:charger WHERE  id_reception=:id_reception");
        $requete2->bindParam(':id_reception', $id_reception);
        $requete2->bindParam(':charger', $chargerok);
        $requete2->execute();
    }
}
