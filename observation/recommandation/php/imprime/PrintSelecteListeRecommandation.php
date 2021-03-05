<?php
require '../../../../../model/Initial.php';

if (isset($_POST['recommandationselectedateavant']))
{
    $date = htmlspecialchars(trim($_POST['recommandationselectedateavant']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM recommandation WHERE date_recommandation<:date_recommandation");
    $requete->bindParam(':date_recommandation',$date);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_recommandation'];
        $pro = $row['probleme'];
        $recom = $row['recommandation'];
        $idtech = $row['fk_id_tech'];
        $idrecep = $row['id_reception'];


        $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
        $requete1->bindParam(':id_reception',$idrecep);
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

        $requete4 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete4->bindParam(':id_client',$idclient);
        $requete4->execute();
        while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC))
        {
            $client = $row4['nom_raison_sociale'];
        }

        $requete3 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
        $requete3->bindParam(':id_technicien',$idtech);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $nomtech = $row3['nom_technicien'];
            $pnomtech = $row3['prenom_technicien'];
            $tech = $nomtech.' '.$pnomtech;
        }



        $liste[] = array('date'=>$date, 'probleme'=>$pro, 'recommandation'=>$recom, 'reception'=>$reception, 'vehicule'=>$vehicule, 'technicien'=>$tech, 'client'=>$client);
    }
    echo json_encode($liste);
}

if (isset($_POST['recommandationselectedateapres']))
{
    $date = htmlspecialchars(trim($_POST['recommandationselectedateapres']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM recommandation WHERE date_recommandation>:date_recommandation");
    $requete->bindParam(':date_recommandation',$date);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_recommandation'];
        $pro = $row['probleme'];
        $recom = $row['recommandation'];
        $idtech = $row['fk_id_tech'];
        $idrecep = $row['id_reception'];


        $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
        $requete1->bindParam(':id_reception',$idrecep);
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

        $requete4 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete4->bindParam(':id_client',$idclient);
        $requete4->execute();
        while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC))
        {
            $client = $row4['nom_raison_sociale'];
        }

        $requete3 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
        $requete3->bindParam(':id_technicien',$idtech);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $nomtech = $row3['nom_technicien'];
            $pnomtech = $row3['prenom_technicien'];
            $tech = $nomtech.' '.$pnomtech;
        }



        $liste[] = array('date'=>$date, 'probleme'=>$pro, 'recommandation'=>$recom, 'reception'=>$reception, 'vehicule'=>$vehicule, 'technicien'=>$tech, 'client'=>$client);
    }
    echo json_encode($liste);
}

if (isset($_POST['recommandationselectedateextreme']))
{
    $date = htmlspecialchars(trim($_POST['recommandationselectedateextreme']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM recommandation WHERE date_recommandation>:date_recommandation OR date_recommandation<:date_recommandation");
    $requete->bindParam(':date_recommandation',$date);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_recommandation'];
        $pro = $row['probleme'];
        $recom = $row['recommandation'];
        $idtech = $row['fk_id_tech'];
        $idrecep = $row['id_reception'];


        $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
        $requete1->bindParam(':id_reception',$idrecep);
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

        $requete4 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete4->bindParam(':id_client',$idclient);
        $requete4->execute();
        while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC))
        {
            $client = $row4['nom_raison_sociale'];
        }

        $requete3 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
        $requete3->bindParam(':id_technicien',$idtech);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $nomtech = $row3['nom_technicien'];
            $pnomtech = $row3['prenom_technicien'];
            $tech = $nomtech.' '.$pnomtech;
        }


        $liste[] = array('date'=>$date, 'probleme'=>$pro, 'recommandation'=>$recom, 'reception'=>$reception, 'vehicule'=>$vehicule, 'technicien'=>$tech, 'client'=>$client);
    }
    echo json_encode($liste);
}

if (isset($_POST['recommandationselectedateextreme']))
{
    $date = htmlspecialchars(trim($_POST['recommandationselectedateextreme']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM recommandation WHERE date_recommandation>:date_recommandation OR date_recommandation<:date_recommandation");
    $requete->bindParam(':date_recommandation',$date);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_recommandation'];
        $pro = $row['probleme'];
        $recom = $row['recommandation'];
        $idtech = $row['fk_id_tech'];
        $idrecep = $row['id_reception'];


        $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
        $requete1->bindParam(':id_reception',$idrecep);
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

        $requete4 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete4->bindParam(':id_client',$idclient);
        $requete4->execute();
        while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC))
        {
            $client = $row4['nom_raison_sociale'];
        }

        $requete3 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
        $requete3->bindParam(':id_technicien',$idtech);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $nomtech = $row3['nom_technicien'];
            $pnomtech = $row3['prenom_technicien'];
            $tech = $nomtech.' '.$pnomtech;
        }



        $liste[] = array('date'=>$date, 'probleme'=>$pro, 'recommandation'=>$recom, 'reception'=>$reception, 'vehicule'=>$vehicule, 'technicien'=>$tech, 'client'=>$client);
    }
    echo json_encode($liste);
}

if (isset($_POST['recommandationselectedateinf']) AND isset($_POST['recommandationselectedatesup']))
{
    $dateinf = htmlspecialchars(trim($_POST['recommandationselectedateinf']));
    $datesup = htmlspecialchars(trim($_POST['recommandationselectedatesup']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM recommandation WHERE date_recommandation BETWEEN :dateinf AND :datesup");
    $requete->bindParam(':dateinf',$dateinf);
    $requete->bindParam(':datesup',$datesup);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_recommandation'];
        $pro = $row['probleme'];
        $recom = $row['recommandation'];
        $idtech = $row['fk_id_tech'];
        $idrecep = $row['id_reception'];


        $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
        $requete1->bindParam(':id_reception',$idrecep);
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

        $requete4 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete4->bindParam(':id_client',$idclient);
        $requete4->execute();
        while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC))
        {
            $client = $row4['nom_raison_sociale'];
        }

        $requete3 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
        $requete3->bindParam(':id_technicien',$idtech);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $nomtech = $row3['nom_technicien'];
            $pnomtech = $row3['prenom_technicien'];
            $tech = $nomtech.' '.$pnomtech;
        }



        $liste[] = array('date'=>$date, 'probleme'=>$pro, 'recommandation'=>$recom, 'reception'=>$reception, 'vehicule'=>$vehicule, 'technicien'=>$tech, 'client'=>$client);
    }
    echo json_encode($liste);
}

if (isset($_POST['recommandationselectedateadmise']))
{
    $dateadmise = array();
    $liste = array();
    $dateadmise = $_POST['recommandationselectedateadmise'];
    $dateadmiseLong = count($dateadmise);

    for ($i = 0; $i < $dateadmiseLong; $i++)
    {
        $requete =  $dbase->prepare(" SELECT * FROM recommandation WHERE date_recommandation=:date_recommandation");
        $requete->bindParam(':date_recommandation',$dateadmise[$i]);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $date = $row['date_recommandation'];
            $pro = $row['probleme'];
            $recom = $row['recommandation'];
            $idtech = $row['fk_id_tech'];
            $idrecep = $row['id_reception'];


            $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
            $requete1->bindParam(':id_reception',$idrecep);
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

            $requete4 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
            $requete4->bindParam(':id_client',$idclient);
            $requete4->execute();
            while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC))
            {
                $client = $row4['nom_raison_sociale'];
            }

            $requete3 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
            $requete3->bindParam(':id_technicien',$idtech);
            $requete3->execute();
            while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
            {
                $nomtech = $row3['nom_technicien'];
                $pnomtech = $row3['prenom_technicien'];
                $tech = $nomtech.' '.$pnomtech;
            }


            $liste[] = array('date'=>$date, 'probleme'=>$pro, 'recommandation'=>$recom, 'reception'=>$reception, 'vehicule'=>$vehicule, 'technicien'=>$tech, 'client'=>$client);
        }

    }

    echo json_encode($liste);
}

if (isset($_POST['recommandationselectedateexclut'])) {
    $dateexclut = array();
    $liste = array();
    $dateexclut = $_POST['recommandationselectedateexclut'];
    $dateexclutLong = count($dateexclut);

    $requete =  $dbase->prepare(" SELECT * FROM recommandation");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_recommandation'];
        $pro = $row['probleme'];
        $recom = $row['recommandation'];
        $idtech = $row['fk_id_tech'];
        $idrecep = $row['id_reception'];


        $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
        $requete1->bindParam(':id_reception',$idrecep);
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

        $requete4 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete4->bindParam(':id_client',$idclient);
        $requete4->execute();
        while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC))
        {
            $client = $row4['nom_raison_sociale'];
        }

        $requete3 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
        $requete3->bindParam(':id_technicien',$idtech);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $nomtech = $row3['nom_technicien'];
            $pnomtech = $row3['prenom_technicien'];
            $tech = $nomtech.' '.$pnomtech;
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
            $liste[] = array('date'=>$date, 'probleme'=>$pro, 'recommandation'=>$recom, 'reception'=>$reception, 'vehicule'=>$vehicule, 'technicien'=>$tech, 'client'=>$client);
        }
    }

    echo json_encode($liste);
}

if (isset($_POST['option']) AND isset($_POST['valeur']))
{
    $option = htmlspecialchars(trim($_POST['option']));
    $valeur = htmlspecialchars(trim($_POST['valeur']));
    $liste = array();

    if($option == 'Technicien' )
    {
        $valeurL = strlen($valeur);
        $valeurCharLow = '';
        $lowerPos = 0;
        for ($i = 0; $i < $valeurL; $i++)
        {
            $valeurCharLow = $valeur{$i};
            $lowerPos++;
            if (preg_match('/^[a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ.]$/',$valeurCharLow)==true)$i = $valeurL;
        }

        $nom = substr($valeur,0,$lowerPos-3);
        $prenom = substr($valeur,$lowerPos-2,$valeurL);

        $requete5 =  $dbase->prepare(" SELECT * FROM technicien WHERE nom_technicien=:nom_technicien AND  prenom_technicien=:prenom_technicien");
        $requete5->bindParam(':nom_technicien',$nom);
        $requete5->bindParam(':prenom_technicien',$prenom);
        $requete5->execute();
        while ($row5 = $requete5->fetch(PDO::FETCH_ASSOC))
        {
            $id_tech = $row5['id_technicien'];
        }


        $requete =  $dbase->prepare(" SELECT * FROM recommandation WHERE fk_id_tech=:fk_id_tech");
        $requete->bindParam(':fk_id_tech',$id_tech);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $date = $row['date_recommandation'];
            $pro = $row['probleme'];
            $recom = $row['recommandation'];
            $idtech = $row['fk_id_tech'];
            $idrecep = $row['id_reception'];


            $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
            $requete1->bindParam(':id_reception',$idrecep);
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

            $requete4 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
            $requete4->bindParam(':id_client',$idclient);
            $requete4->execute();
            while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC))
            {
                $client = $row4['nom_raison_sociale'];
            }

            $requete3 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
            $requete3->bindParam(':id_technicien',$idtech);
            $requete3->execute();
            while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
            {
                $nomtech = $row3['nom_technicien'];
                $pnomtech = $row3['prenom_technicien'];
                $tech = $nomtech.' '.$pnomtech;
            }

            $liste[] = array('date'=>$date, 'probleme'=>$pro, 'recommandation'=>$recom, 'reception'=>$reception, 'vehicule'=>$vehicule, 'technicien'=>$tech, 'client'=>$client);
        }
    }
    elseif($option == 'N° Réception')
    {
        $requete5 =  $dbase->prepare(" SELECT * FROM reception WHERE num_reception=:num_reception");
        $requete5->bindParam(':num_reception',$valeur);
        $requete5->execute();
        while ($row5 = $requete5->fetch(PDO::FETCH_ASSOC))
        {
            $id_reception = $row5['id_reception'];
        }

        $requete =  $dbase->prepare(" SELECT * FROM recommandation WHERE id_reception=:id_reception");
        $requete->bindParam(':id_reception',$id_reception);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $date = $row['date_recommandation'];
            $pro = $row['probleme'];
            $recom = $row['recommandation'];
            $idtech = $row['fk_id_tech'];
            $idrecep = $row['id_reception'];


            $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
            $requete1->bindParam(':id_reception',$idrecep);
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

            $requete4 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
            $requete4->bindParam(':id_client',$idclient);
            $requete4->execute();
            while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC))
            {
                $client = $row4['nom_raison_sociale'];
            }

            $requete3 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
            $requete3->bindParam(':id_technicien',$idtech);
            $requete3->execute();
            while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
            {
                $nomtech = $row3['nom_technicien'];
                $pnomtech = $row3['prenom_technicien'];
                $tech = $nomtech.' '.$pnomtech;
            }



            $liste[] = array('date'=>$date, 'probleme'=>$pro, 'recommandation'=>$recom, 'reception'=>$reception, 'vehicule'=>$vehicule, 'technicien'=>$tech, 'client'=>$client);
        }
    }
    elseif($option == 'N° Plaque')
    {
        $requete6 =  $dbase->prepare(" SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
        $requete6->bindParam(':immatriculation',$valeur);
        $requete6->execute();
        while ($row6 = $requete6->fetch(PDO::FETCH_ASSOC))
        {
            $id_vehicule = $row6['id_vehicule'];
        }

        $requete5 =  $dbase->prepare(" SELECT * FROM reception WHERE fk_id_vehicule=:fk_id_vehicule");
        $requete5->bindParam(':fk_id_vehicule',$id_vehicule);
        $requete5->execute();
        while ($row5 = $requete5->fetch(PDO::FETCH_ASSOC))
        {
            $id_reception = $row5['id_reception'];

            $requete =  $dbase->prepare(" SELECT * FROM recommandation WHERE id_reception=:id_reception");
            $requete->bindParam(':id_reception',$id_reception);
            $requete->execute();
            while ($row = $requete->fetch(PDO::FETCH_ASSOC))
            {
                $date = $row['date_recommandation'];
                $pro = $row['probleme'];
                $recom = $row['recommandation'];
                $idtech = $row['fk_id_tech'];
                $idrecep = $row['id_reception'];


                $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
                $requete1->bindParam(':id_reception',$idrecep);
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

                $requete4 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
                $requete4->bindParam(':id_client',$idclient);
                $requete4->execute();
                while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC))
                {
                    $client = $row4['nom_raison_sociale'];
                }

                $requete3 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
                $requete3->bindParam(':id_technicien',$idtech);
                $requete3->execute();
                while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
                {
                    $nomtech = $row3['nom_technicien'];
                    $pnomtech = $row3['prenom_technicien'];
                    $tech = $nomtech.' '.$pnomtech;
                }

                $liste[] = array('date'=>$date, 'probleme'=>$pro, 'recommandation'=>$recom, 'reception'=>$reception, 'vehicule'=>$vehicule, 'technicien'=>$tech, 'client'=>$client);
            }
        }

    }
    elseif($option == 'Client')
    {
        $requete7 =  $dbase->prepare(" SELECT * FROM client WHERE nom_raison_sociale=:nom_raison_sociale");
        $requete7->bindParam(':nom_raison_sociale',$valeur);
        $requete7->execute();
        while ($row7 = $requete7->fetch(PDO::FETCH_ASSOC))
        {
            $id_client = $row7['id_client'];
        }

        $requete6 =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_client=:id_client");
        $requete6->bindParam(':id_client',$id_client);
        $requete6->execute();
        while ($row6 = $requete6->fetch(PDO::FETCH_ASSOC))
        {
            $id_vehicule = $row6['id_vehicule'];

            $requete5 =  $dbase->prepare(" SELECT * FROM reception WHERE fk_id_vehicule=:fk_id_vehicule");
            $requete5->bindParam(':fk_id_vehicule',$id_vehicule);
            $requete5->execute();
            while ($row5 = $requete5->fetch(PDO::FETCH_ASSOC))
            {
                $id_reception = $row5['id_reception'];

                $requete =  $dbase->prepare(" SELECT * FROM recommandation WHERE id_reception=:id_reception");
                $requete->bindParam(':id_reception',$id_reception);
                $requete->execute();
                while ($row = $requete->fetch(PDO::FETCH_ASSOC))
                {
                    $date = $row['date_recommandation'];
                    $pro = $row['probleme'];
                    $recom = $row['recommandation'];
                    $idtech = $row['fk_id_tech'];
                    $idrecep = $row['id_reception'];


                    $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
                    $requete1->bindParam(':id_reception',$idrecep);
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

                    $requete4 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
                    $requete4->bindParam(':id_client',$idclient);
                    $requete4->execute();
                    while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC))
                    {
                        $client = $row4['nom_raison_sociale'];
                    }

                    $requete3 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
                    $requete3->bindParam(':id_technicien',$idtech);
                    $requete3->execute();
                    while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
                    {
                        $nomtech = $row3['nom_technicien'];
                        $pnomtech = $row3['prenom_technicien'];
                        $tech = $nomtech.' '.$pnomtech;
                    }

                    $liste[] = array('date'=>$date, 'probleme'=>$pro, 'recommandation'=>$recom, 'reception'=>$reception, 'vehicule'=>$vehicule, 'technicien'=>$tech, 'client'=>$client);
                }
            }
        }
    }

    echo json_encode($liste);
}
