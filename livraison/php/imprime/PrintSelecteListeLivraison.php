<?php
require '../../../../model/Initial.php';

if (isset($_POST['livraisonselectedateavant']))
{
    $date = htmlspecialchars(trim($_POST['livraisonselectedateavant']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM livraison WHERE date_livraison<:date_livraison");
    $requete->bindParam(':date_livraison',$date);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_livraison'];
        $heure = $row['heure_livraison'];
        $taffait = $row['traveaux_fait'];
        $tafnonfait = $row['traveaux_non_fait'];
        $kilo = $row['kilometrage'];
        $garantie = $row['date_finG'];
        $facture = $row['num_facture'];
        $montant = $row['montant'];
        $id_reception = $row['id_reception'];


        $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
        $requete1->bindParam(':id_reception',$id_reception);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $reception = $row1['num_reception'];
            $idvehicule = $row1['fk_id_vehicule'];
        }

        $requete2 =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete2->bindParam(':id_vehicule',$idvehicule);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
        {
            $vehicule = $row2['immatriculation'];
            $idclient = $row2['id_client'];
        }

        $requete3 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete3->bindParam(':id_client',$idclient);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $client = $row3['nom_raison_sociale'];
        }


        $liste[] = array('date'=>$date, 'heure'=>$heure, 'taffait'=>$taffait, 'tafnonfait'=>$tafnonfait, 'kilometrage'=>$kilo, 'garantie'=>$garantie, 'facture'=>$facture, 'montant'=>$montant, 'reception'=>$reception, 'vehicule'=>$vehicule, 'client'=>$client);
    }
    echo json_encode($liste);
}

if (isset($_POST['livraisonselectedateapres']))
{
    $date = htmlspecialchars(trim($_POST['livraisonselectedateapres']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM livraison WHERE date_livraison>:date_livraison");
    $requete->bindParam(':date_livraison',$date);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_livraison'];
        $heure = $row['heure_livraison'];
        $taffait = $row['traveaux_fait'];
        $tafnonfait = $row['traveaux_non_fait'];
        $kilo = $row['kilometrage'];
        $garantie = $row['date_finG'];
        $facture = $row['num_facture'];
        $montant = $row['montant'];
        $id_reception = $row['id_reception'];


        $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
        $requete1->bindParam(':id_reception',$id_reception);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $reception = $row1['num_reception'];
            $idvehicule = $row1['fk_id_vehicule'];
        }

        $requete2 =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete2->bindParam(':id_vehicule',$idvehicule);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
        {
            $vehicule = $row2['immatriculation'];
            $idclient = $row2['id_client'];
        }

        $requete3 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete3->bindParam(':id_client',$idclient);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $client = $row3['nom_raison_sociale'];
        }


        $liste[] = array('date'=>$date, 'heure'=>$heure, 'taffait'=>$taffait, 'tafnonfait'=>$tafnonfait, 'kilometrage'=>$kilo, 'garantie'=>$garantie, 'facture'=>$facture, 'montant'=>$montant, 'reception'=>$reception, 'vehicule'=>$vehicule, 'client'=>$client);
    }
    echo json_encode($liste);
}

if (isset($_POST['livraisonselectedateextreme']))
{
    $date = htmlspecialchars(trim($_POST['livraisonselectedateextreme']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM livraison WHERE date_livraison>:date_livraison OR date_livraison<:date_livraison");
    $requete->bindParam(':date_livraison',$date);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_livraison'];
        $heure = $row['heure_livraison'];
        $taffait = $row['traveaux_fait'];
        $tafnonfait = $row['traveaux_non_fait'];
        $kilo = $row['kilometrage'];
        $garantie = $row['date_finG'];
        $facture = $row['num_facture'];
        $montant = $row['montant'];
        $id_reception = $row['id_reception'];


        $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
        $requete1->bindParam(':id_reception',$id_reception);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $reception = $row1['num_reception'];
            $idvehicule = $row1['fk_id_vehicule'];
        }

        $requete2 =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete2->bindParam(':id_vehicule',$idvehicule);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
        {
            $vehicule = $row2['immatriculation'];
            $idclient = $row2['id_client'];
        }

        $requete3 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete3->bindParam(':id_client',$idclient);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $client = $row3['nom_raison_sociale'];
        }

        $liste[] = array('date'=>$date, 'heure'=>$heure, 'taffait'=>$taffait, 'tafnonfait'=>$tafnonfait, 'kilometrage'=>$kilo, 'garantie'=>$garantie, 'facture'=>$facture, 'montant'=>$montant, 'reception'=>$reception, 'vehicule'=>$vehicule, 'client'=>$client);
    }
    echo json_encode($liste);
}

if (isset($_POST['livraisonselectedateextreme']))
{
    $date = htmlspecialchars(trim($_POST['livraisonselectedateextreme']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM livraison WHERE date_livraison>:date_livraison OR date_livraison<:date_livraison");
    $requete->bindParam(':date_livraison',$date);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_livraison'];
        $heure = $row['heure_livraison'];
        $taffait = $row['traveaux_fait'];
        $tafnonfait = $row['traveaux_non_fait'];
        $kilo = $row['kilometrage'];
        $garantie = $row['date_finG'];
        $facture = $row['num_facture'];
        $montant = $row['montant'];
        $id_reception = $row['id_reception'];


        $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
        $requete1->bindParam(':id_reception',$id_reception);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $reception = $row1['num_reception'];
            $idvehicule = $row1['fk_id_vehicule'];
        }

        $requete2 =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete2->bindParam(':id_vehicule',$idvehicule);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
        {
            $vehicule = $row2['immatriculation'];
            $idclient = $row2['id_client'];
        }

        $requete3 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete3->bindParam(':id_client',$idclient);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $client = $row3['nom_raison_sociale'];
        }


        $liste[] = array('date'=>$date, 'heure'=>$heure, 'taffait'=>$taffait, 'tafnonfait'=>$tafnonfait, 'kilometrage'=>$kilo, 'garantie'=>$garantie, 'facture'=>$facture, 'montant'=>$montant, 'reception'=>$reception, 'vehicule'=>$vehicule, 'client'=>$client);
    }
    echo json_encode($liste);
}

if (isset($_POST['livraisonselectedateinf']) AND isset($_POST['livraisonselectedatesup']))
{
    $dateinf = htmlspecialchars(trim($_POST['livraisonselectedateinf']));
    $datesup = htmlspecialchars(trim($_POST['livraisonselectedatesup']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM livraison WHERE date_livraison BETWEEN :dateinf AND :datesup");
    $requete->bindParam(':dateinf',$dateinf);
    $requete->bindParam(':datesup',$datesup);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_livraison'];
        $heure = $row['heure_livraison'];
        $taffait = $row['traveaux_fait'];
        $tafnonfait = $row['traveaux_non_fait'];
        $kilo = $row['kilometrage'];
        $garantie = $row['date_finG'];
        $facture = $row['num_facture'];
        $montant = $row['montant'];
        $id_reception = $row['id_reception'];


        $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
        $requete1->bindParam(':id_reception',$id_reception);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $reception = $row1['num_reception'];
            $idvehicule = $row1['fk_id_vehicule'];
        }

        $requete2 =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete2->bindParam(':id_vehicule',$idvehicule);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
        {
            $vehicule = $row2['immatriculation'];
            $idclient = $row2['id_client'];
        }

        $requete3 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete3->bindParam(':id_client',$idclient);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $client = $row3['nom_raison_sociale'];
        }


        $liste[] = array('date'=>$date, 'heure'=>$heure, 'taffait'=>$taffait, 'tafnonfait'=>$tafnonfait, 'kilometrage'=>$kilo, 'garantie'=>$garantie, 'facture'=>$facture, 'montant'=>$montant, 'reception'=>$reception, 'vehicule'=>$vehicule, 'client'=>$client);
    }
    echo json_encode($liste);
}

if (isset($_POST['livraisonselectedateadmise']))
{
    $dateadmise = array();
    $liste = array();
    $dateadmise = $_POST['livraisonselectedateadmise'];
    $dateadmiseLong = count($dateadmise);

    for ($i = 0; $i < $dateadmiseLong; $i++)
    {
        $requete =  $dbase->prepare(" SELECT * FROM livraison WHERE date_livraison=:date_livraison");
        $requete->bindParam(':date_livraison',$dateadmise[$i]);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $date = $row['date_livraison'];
            $heure = $row['heure_livraison'];
            $taffait = $row['traveaux_fait'];
            $tafnonfait = $row['traveaux_non_fait'];
            $kilo = $row['kilometrage'];
            $garantie = $row['date_finG'];
            $facture = $row['num_facture'];
            $montant = $row['montant'];
            $id_reception = $row['id_reception'];


            $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
            $requete1->bindParam(':id_reception',$id_reception);
            $requete1->execute();
            while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
            {
                $reception = $row1['num_reception'];
                $idvehicule = $row1['fk_id_vehicule'];
            }

            $requete2 =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
            $requete2->bindParam(':id_vehicule',$idvehicule);
            $requete2->execute();
            while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
            {
                $vehicule = $row2['immatriculation'];
                $idclient = $row2['id_client'];
            }

            $requete3 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
            $requete3->bindParam(':id_client',$idclient);
            $requete3->execute();
            while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
            {
                $client = $row3['nom_raison_sociale'];
            }

            $liste[] = array('date'=>$date, 'heure'=>$heure, 'taffait'=>$taffait, 'tafnonfait'=>$tafnonfait, 'kilometrage'=>$kilo, 'garantie'=>$garantie, 'facture'=>$facture, 'montant'=>$montant, 'reception'=>$reception, 'vehicule'=>$vehicule, 'client'=>$client);
        }

    }

    echo json_encode($liste);
}

if (isset($_POST['livraisonselectedateexclut'])) {
    $dateexclut = array();
    $liste = array();
    $dateexclut = $_POST['livraisonselectedateexclut'];
    $dateexclutLong = count($dateexclut);

    $requete =  $dbase->prepare(" SELECT * FROM livraison");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_livraison'];
        $heure = $row['heure_livraison'];
        $taffait = $row['traveaux_fait'];
        $tafnonfait = $row['traveaux_non_fait'];
        $kilo = $row['kilometrage'];
        $garantie = $row['date_finG'];
        $facture = $row['num_facture'];
        $montant = $row['montant'];
        $id_reception = $row['id_reception'];


        $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
        $requete1->bindParam(':id_reception',$id_reception);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $reception = $row1['num_reception'];
            $idvehicule = $row1['fk_id_vehicule'];
        }

        $requete2 =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete2->bindParam(':id_vehicule',$idvehicule);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
        {
            $vehicule = $row2['immatriculation'];
            $idclient = $row2['id_client'];
        }

        $requete3 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete3->bindParam(':id_client',$idclient);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $client = $row3['nom_raison_sociale'];
        }



        $exclut = 'non';

        for ($i = 0; $i < $dateexclutLong; $i++)
        {
            if($dateexclut[$i] == $date)
            {
                $exclut = 'oui';
                $i = $dateexclutLong;
            }
        }

        if($exclut == 'non')
        {
            $liste[] = array('date'=>$date, 'heure'=>$heure, 'taffait'=>$taffait, 'tafnonfait'=>$tafnonfait, 'kilometrage'=>$kilo, 'garantie'=>$garantie, 'facture'=>$facture, 'montant'=>$montant, 'reception'=>$reception, 'vehicule'=>$vehicule, 'client'=>$client);
        }
    }

    echo json_encode($liste);
}

if (isset($_POST['option']) AND isset($_POST['valeur']))
{
    $option = htmlspecialchars(trim($_POST['option']));
    $valeur = htmlspecialchars(trim($_POST['valeur']));
    $liste = array();

    if($option == 'N° Réception' OR $option == 'Type de Réception' OR $option == 'Mode de Payement')
    {
        if ($option == 'N° Réception')$option = 'num_reception';
        if ($option == 'Type de Réception')$option = 'type_reception';
        if ($option == 'Mode de Payement')$option = 'mode_de_payement';


        $requete5 =  $dbase->prepare(" SELECT * FROM reception WHERE ".$option."=:".$option." ");
        $requete5->bindParam(':'.$option,$valeur);
        $requete5->execute();
        while ($row5 = $requete5->fetch(PDO::FETCH_ASSOC))
        {
            $idreception = $row5['id_reception'];

            $requete =  $dbase->prepare(" SELECT * FROM livraison WHERE id_reception=:id_reception");
            $requete->bindParam(':id_reception',$idreception);
            $requete->execute();
            while ($row = $requete->fetch(PDO::FETCH_ASSOC))
            {
                $date = $row['date_livraison'];
                $heure = $row['heure_livraison'];
                $taffait = $row['traveaux_fait'];
                $tafnonfait = $row['traveaux_non_fait'];
                $kilo = $row['kilometrage'];
                $garantie = $row['date_finG'];
                $facture = $row['num_facture'];
                $montant = $row['montant'];
                $id_reception = $row['id_reception'];

                $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
                $requete1->bindParam(':id_reception',$id_reception);
                $requete1->execute();
                while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
                {
                    $reception = $row1['num_reception'];
                    $idvehicule = $row1['fk_id_vehicule'];
                }

                $requete2 =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
                $requete2->bindParam(':id_vehicule',$idvehicule);
                $requete2->execute();
                while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
                {
                    $vehicule = $row2['immatriculation'];
                    $idclient = $row2['id_client'];
                }

                $requete3 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
                $requete3->bindParam(':id_client',$idclient);
                $requete3->execute();
                while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
                {
                    $client = $row3['nom_raison_sociale'];
                }

                $liste[] = array('date'=>$date, 'heure'=>$heure, 'taffait'=>$taffait, 'tafnonfait'=>$tafnonfait, 'kilometrage'=>$kilo, 'garantie'=>$garantie, 'facture'=>$facture, 'montant'=>$montant, 'reception'=>$reception, 'vehicule'=>$vehicule, 'client'=>$client);
            }
        }

    }
    else if($option == 'N° Plaque')
    {
        $requete5 =  $dbase->prepare(" SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
        $requete5->bindParam(':immatriculation',$valeur);
        $requete5->execute();
        while ($row5 = $requete5->fetch(PDO::FETCH_ASSOC))
        {
            $id_vehicule = $row5['id_vehicule'];
        }

        $requete6 =  $dbase->prepare(" SELECT * FROM reception WHERE fk_id_vehicule=:fk_id_vehicule");
        $requete6->bindParam(':fk_id_vehicule',$id_vehicule);
        $requete6->execute();
        while ($row6 = $requete6->fetch(PDO::FETCH_ASSOC))
        {
            $idreception = $row6['id_reception'];

            $requete =  $dbase->prepare(" SELECT * FROM livraison WHERE id_reception=:id_reception");
            $requete->bindParam(':id_reception',$idreception);
            $requete->execute();
            while ($row = $requete->fetch(PDO::FETCH_ASSOC))
            {
                $date = $row['date_livraison'];
                $heure = $row['heure_livraison'];
                $taffait = $row['traveaux_fait'];
                $tafnonfait = $row['traveaux_non_fait'];
                $kilo = $row['kilometrage'];
                $garantie = $row['date_finG'];
                $facture = $row['num_facture'];
                $montant = $row['montant'];
                $id_reception = $row['id_reception'];

                $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
                $requete1->bindParam(':id_reception',$id_reception);
                $requete1->execute();
                while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
                {
                    $reception = $row1['num_reception'];
                    $idvehicule = $row1['fk_id_vehicule'];
                }

                $requete2 =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
                $requete2->bindParam(':id_vehicule',$idvehicule);
                $requete2->execute();
                while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
                {
                    $vehicule = $row2['immatriculation'];
                    $idclient = $row2['id_client'];
                }

                $requete3 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
                $requete3->bindParam(':id_client',$idclient);
                $requete3->execute();
                while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
                {
                    $client = $row3['nom_raison_sociale'];
                }


                $liste[] = array('date'=>$date, 'heure'=>$heure, 'taffait'=>$taffait, 'tafnonfait'=>$tafnonfait, 'kilometrage'=>$kilo, 'garantie'=>$garantie, 'facture'=>$facture, 'montant'=>$montant, 'reception'=>$reception, 'vehicule'=>$vehicule, 'client'=>$client);
            }
        }

    }
    else if($option == 'Client')
    {
        $requete7 =  $dbase->prepare(" SELECT * FROM client WHERE nom_raison_sociale=:nom_raison_sociale");
        $requete7->bindParam(':nom_raison_sociale',$valeur);
        $requete7->execute();
        while ($row7 = $requete7->fetch(PDO::FETCH_ASSOC))
        {
            $id_client = $row7['id_client'];
        }

        $requete5 =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_client=:id_client");
        $requete5->bindParam(':id_client',$id_client);
        $requete5->execute();
        while ($row5 = $requete5->fetch(PDO::FETCH_ASSOC))
        {
            $id_vehicule = $row5['id_vehicule'];

            $requete6 =  $dbase->prepare(" SELECT * FROM reception WHERE fk_id_vehicule=:fk_id_vehicule");
            $requete6->bindParam(':fk_id_vehicule',$id_vehicule);
            $requete6->execute();
            while ($row6 = $requete6->fetch(PDO::FETCH_ASSOC))
            {
                $idreception = $row6['id_reception'];

                $requete =  $dbase->prepare(" SELECT * FROM livraison WHERE id_reception=:id_reception");
                $requete->bindParam(':id_reception',$idreception);
                $requete->execute();
                while ($row = $requete->fetch(PDO::FETCH_ASSOC))
                {
                    $date = $row['date_livraison'];
                    $heure = $row['heure_livraison'];
                    $taffait = $row['traveaux_fait'];
                    $tafnonfait = $row['traveaux_non_fait'];
                    $kilo = $row['kilometrage'];
                    $garantie = $row['date_finG'];
                    $facture = $row['num_facture'];
                    $montant = $row['montant'];
                    $id_reception = $row['id_reception'];

                    $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
                    $requete1->bindParam(':id_reception',$id_reception);
                    $requete1->execute();
                    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
                    {
                        $reception = $row1['num_reception'];
                        $idvehicule = $row1['fk_id_vehicule'];
                    }

                    $requete2 =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
                    $requete2->bindParam(':id_vehicule',$idvehicule);
                    $requete2->execute();
                    while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
                    {
                        $vehicule = $row2['immatriculation'];
                        $idclient = $row2['id_client'];
                    }

                    $requete3 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
                    $requete3->bindParam(':id_client',$idclient);
                    $requete3->execute();
                    while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
                    {
                        $client = $row3['nom_raison_sociale'];
                    }


                    $liste[] = array('date'=>$date, 'heure'=>$heure, 'taffait'=>$taffait, 'tafnonfait'=>$tafnonfait, 'kilometrage'=>$kilo, 'garantie'=>$garantie, 'facture'=>$facture, 'montant'=>$montant, 'reception'=>$reception, 'vehicule'=>$vehicule, 'client'=>$client);
                }
            }
        }

    }

    echo json_encode($liste);
}

