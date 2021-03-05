<?php
require '../../../../../model/Initial.php';

if (isset($_POST['reclamationselectedateavant']))
{
    $date = htmlspecialchars(trim($_POST['reclamationselectedateavant']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM reclamation WHERE date_reclamation<:date_reclamation");
    $requete->bindParam(':date_reclamation',$date);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_reclamation'];
        $reclam = $row['reclamation'];
        $client = $row['reclamateur'];
        $anal = $row['analyse'];
        $cause = $row['cause'];
        $prop = $row['proposition'];
        $dobs = $row['date_observation'];
        $obs = $row['observateur'];
        $idliv = $row['id_livraison'];

        $requete3 =  $dbase->prepare(" SELECT * FROM livraison WHERE id_livraison=:id_livraison");
        $requete3->bindParam(':id_livraison',$idliv);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $id_reception= $row3['id_reception'];
        }

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
        }


        $liste[] = array('date'=>$date, 'reclamation'=>$reclam, 'client'=>$client, 'analyse'=>$anal, 'cause'=>$cause, 'proposition'=>$prop, 'dateobservation'=>$dobs, 'observation'=>$obs, 'reception'=>$reception, 'vehicule'=>$vehicule);
    }
    echo json_encode($liste);
}

if (isset($_POST['reclamationselectedateapres']))
{
    $date = htmlspecialchars(trim($_POST['reclamationselectedateapres']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM reclamation WHERE date_reclamation>:date_reclamation");
    $requete->bindParam(':date_reclamation',$date);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_reclamation'];
        $reclam = $row['reclamation'];
        $client = $row['reclamateur'];
        $anal = $row['analyse'];
        $cause = $row['cause'];
        $prop = $row['proposition'];
        $dobs = $row['date_observation'];
        $obs = $row['observateur'];
        $idliv = $row['id_livraison'];

        $requete3 =  $dbase->prepare(" SELECT * FROM livraison WHERE id_livraison=:id_livraison");
        $requete3->bindParam(':id_livraison',$idliv);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $id_reception= $row3['id_reception'];
        }

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
        }


        $liste[] = array('date'=>$date, 'reclamation'=>$reclam, 'client'=>$client, 'analyse'=>$anal, 'cause'=>$cause, 'proposition'=>$prop, 'dateobservation'=>$dobs, 'observation'=>$obs, 'reception'=>$reception, 'vehicule'=>$vehicule);
    }
    echo json_encode($liste);
}

if (isset($_POST['reclamationselectedateextreme']))
{
    $date = htmlspecialchars(trim($_POST['reclamationselectedateextreme']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM reclamation WHERE date_reclamation>:date_reclamation OR date_reclamation<:date_reclamation");
    $requete->bindParam(':date_reclamation',$date);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_reclamation'];
        $reclam = $row['reclamation'];
        $client = $row['reclamateur'];
        $anal = $row['analyse'];
        $cause = $row['cause'];
        $prop = $row['proposition'];
        $dobs = $row['date_observation'];
        $obs = $row['observateur'];
        $idliv = $row['id_livraison'];

        $requete3 =  $dbase->prepare(" SELECT * FROM livraison WHERE id_livraison=:id_livraison");
        $requete3->bindParam(':id_livraison',$idliv);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $id_reception= $row3['id_reception'];
        }

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
        }

        $liste[] = array('date'=>$date, 'reclamation'=>$reclam, 'client'=>$client, 'analyse'=>$anal, 'cause'=>$cause, 'proposition'=>$prop, 'dateobservation'=>$dobs, 'observation'=>$obs, 'reception'=>$reception, 'vehicule'=>$vehicule);
    }
    echo json_encode($liste);
}

if (isset($_POST['reclamationselectedateextreme']))
{
    $date = htmlspecialchars(trim($_POST['reclamationselectedateextreme']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM reclamation WHERE date_reclamation>:date_reclamation OR date_reclamation<:date_reclamation");
    $requete->bindParam(':date_reclamation',$date);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_reclamation'];
        $reclam = $row['reclamation'];
        $client = $row['reclamateur'];
        $anal = $row['analyse'];
        $cause = $row['cause'];
        $prop = $row['proposition'];
        $dobs = $row['date_observation'];
        $obs = $row['observateur'];
        $idliv = $row['id_livraison'];

        $requete3 =  $dbase->prepare(" SELECT * FROM livraison WHERE id_livraison=:id_livraison");
        $requete3->bindParam(':id_livraison',$idliv);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $id_reception= $row3['id_reception'];
        }

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
        }


        $liste[] = array('date'=>$date, 'reclamation'=>$reclam, 'client'=>$client, 'analyse'=>$anal, 'cause'=>$cause, 'proposition'=>$prop, 'dateobservation'=>$dobs, 'observation'=>$obs, 'reception'=>$reception, 'vehicule'=>$vehicule);
    }
    echo json_encode($liste);
}

if (isset($_POST['reclamationselectedateinf']) AND isset($_POST['reclamationselectedatesup']))
{
    $dateinf = htmlspecialchars(trim($_POST['reclamationselectedateinf']));
    $datesup = htmlspecialchars(trim($_POST['reclamationselectedatesup']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM reclamation WHERE date_reclamation BETWEEN :dateinf AND :datesup");
    $requete->bindParam(':dateinf',$dateinf);
    $requete->bindParam(':datesup',$datesup);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_reclamation'];
        $reclam = $row['reclamation'];
        $client = $row['reclamateur'];
        $anal = $row['analyse'];
        $cause = $row['cause'];
        $prop = $row['proposition'];
        $dobs = $row['date_observation'];
        $obs = $row['observateur'];
        $idliv = $row['id_livraison'];

        $requete3 =  $dbase->prepare(" SELECT * FROM livraison WHERE id_livraison=:id_livraison");
        $requete3->bindParam(':id_livraison',$idliv);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $id_reception= $row3['id_reception'];
        }

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
        }


        $liste[] = array('date'=>$date, 'reclamation'=>$reclam, 'client'=>$client, 'analyse'=>$anal, 'cause'=>$cause, 'proposition'=>$prop, 'dateobservation'=>$dobs, 'observation'=>$obs, 'reception'=>$reception, 'vehicule'=>$vehicule);
    }
    echo json_encode($liste);
}

if (isset($_POST['reclamationselectedateadmise']))
{
    $dateadmise = array();
    $liste = array();
    $dateadmise = $_POST['reclamationselectedateadmise'];
    $dateadmiseLong = count($dateadmise);

    for ($i = 0; $i < $dateadmiseLong; $i++)
    {
        $requete =  $dbase->prepare(" SELECT * FROM reclamation WHERE date_reclamation=:date_reclamation");
        $requete->bindParam(':date_reclamation',$dateadmise[$i]);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $date = $row['date_reclamation'];
            $reclam = $row['reclamation'];
            $client = $row['reclamateur'];
            $anal = $row['analyse'];
            $cause = $row['cause'];
            $prop = $row['proposition'];
            $dobs = $row['date_observation'];
            $obs = $row['observateur'];
            $idliv = $row['id_livraison'];

            $requete3 =  $dbase->prepare(" SELECT * FROM livraison WHERE id_livraison=:id_livraison");
            $requete3->bindParam(':id_livraison',$idliv);
            $requete3->execute();
            while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
            {
                $id_reception= $row3['id_reception'];
            }

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
            }

            $liste[] = array('date'=>$date, 'reclamation'=>$reclam, 'client'=>$client, 'analyse'=>$anal, 'cause'=>$cause, 'proposition'=>$prop, 'dateobservation'=>$dobs, 'observation'=>$obs, 'reception'=>$reception, 'vehicule'=>$vehicule);
        }

    }

    echo json_encode($liste);
}

if (isset($_POST['reclamationselectedateexclut'])) {
    $dateexclut = array();
    $liste = array();
    $dateexclut = $_POST['reclamationselectedateexclut'];
    $dateexclutLong = count($dateexclut);

    $requete =  $dbase->prepare(" SELECT * FROM reclamation");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_reclamation'];
        $reclam = $row['reclamation'];
        $client = $row['reclamateur'];
        $anal = $row['analyse'];
        $cause = $row['cause'];
        $prop = $row['proposition'];
        $dobs = $row['date_observation'];
        $obs = $row['observateur'];
        $idliv = $row['id_livraison'];


        $requete3 =  $dbase->prepare(" SELECT * FROM livraison WHERE id_livraison=:id_livraison");
        $requete3->bindParam(':id_livraison',$idliv);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $id_reception= $row3['id_reception'];
        }

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
            $liste[] = array('date'=>$date, 'reclamation'=>$reclam, 'client'=>$client, 'analyse'=>$anal, 'cause'=>$cause, 'proposition'=>$prop, 'dateobservation'=>$dobs, 'observation'=>$obs, 'reception'=>$reception, 'vehicule'=>$vehicule);
        }
    }

    echo json_encode($liste);
}


if (isset($_POST['option']) AND isset($_POST['valeur']))
{
    $option = htmlspecialchars(trim($_POST['option']));
    $valeur = htmlspecialchars(trim($_POST['valeur']));
    $liste = array();

    if($option == 'N° Plaque')
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


            $requete3 =  $dbase->prepare(" SELECT * FROM livraison WHERE id_reception=:id_reception");
            $requete3->bindParam(':id_reception',$idreception);
            $requete3->execute();
            while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
            {
                $idlivraison= $row3['id_livraison'];
            }

            $requete =  $dbase->prepare(" SELECT * FROM reclamation WHERE id_livraison=:id_livraison");
            $requete->bindParam(':id_livraison',$idlivraison);
            $requete->execute();
            while ($row = $requete->fetch(PDO::FETCH_ASSOC))
            {
                $date = $row['date_reclamation'];
                $reclam = $row['reclamation'];
                $client = $row['reclamateur'];
                $anal = $row['analyse'];
                $cause = $row['cause'];
                $prop = $row['proposition'];
                $dobs = $row['date_observation'];
                $obs = $row['observateur'];
                $idliv = $row['id_livraison'];

                $requete3 =  $dbase->prepare(" SELECT * FROM livraison WHERE id_livraison=:id_livraison");
                $requete3->bindParam(':id_livraison',$idliv);
                $requete3->execute();
                while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
                {
                    $id_reception= $row3['id_reception'];
                }

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
                }


                $liste[] = array('date'=>$date, 'reclamation'=>$reclam, 'client'=>$client, 'analyse'=>$anal, 'cause'=>$cause, 'proposition'=>$prop, 'dateobservation'=>$dobs, 'observation'=>$obs, 'reception'=>$reception, 'vehicule'=>$vehicule);
            }
        }

    }
    if($option == 'Client')
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


                $requete3 =  $dbase->prepare(" SELECT * FROM livraison WHERE id_reception=:id_reception");
                $requete3->bindParam(':id_reception',$idreception);
                $requete3->execute();
                while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
                {
                    $idlivraison= $row3['id_livraison'];
                }

                $requete =  $dbase->prepare(" SELECT * FROM reclamation WHERE id_livraison=:id_livraison");
                $requete->bindParam(':id_livraison',$idlivraison);
                $requete->execute();
                while ($row = $requete->fetch(PDO::FETCH_ASSOC))
                {
                    $date = $row['date_reclamation'];
                    $reclam = $row['reclamation'];
                    $client = $row['reclamateur'];
                    $anal = $row['analyse'];
                    $cause = $row['cause'];
                    $prop = $row['proposition'];
                    $dobs = $row['date_observation'];
                    $obs = $row['observateur'];
                    $idliv = $row['id_livraison'];

                    $requete3 =  $dbase->prepare(" SELECT * FROM livraison WHERE id_livraison=:id_livraison");
                    $requete3->bindParam(':id_livraison',$idliv);
                    $requete3->execute();
                    while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
                    {
                        $id_reception= $row3['id_reception'];
                    }

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
                    }


                    $liste[] = array('date'=>$date, 'reclamation'=>$reclam, 'client'=>$client, 'analyse'=>$anal, 'cause'=>$cause, 'proposition'=>$prop, 'dateobservation'=>$dobs, 'observation'=>$obs, 'reception'=>$reception, 'vehicule'=>$vehicule);
                }
            }
        }

    }


    echo json_encode($liste);
}

