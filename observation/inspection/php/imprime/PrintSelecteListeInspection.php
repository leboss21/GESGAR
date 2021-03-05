<?php
require '../../../../../model/Initial.php';

if (isset($_POST['inspectionselectedateavant']))
{
    $date = htmlspecialchars(trim($_POST['inspectionselectedateavant']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM inspection WHERE date_inspection<:date_inspection");
    $requete->bindParam(':date_inspection',$date);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_inspection'];
        $kilo = $row['kilometrage_inspection'];
        $numpd = $row['num_p_d_inspection'];
        $nompd = $row['nom_p_d_inspection'];
        $qte = $row['quantite_p_d_inspection'];
        $numcom = $row['num_com_inspection'];
        $result = $row['resultat_inspection'];
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

        $requete3 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete3->bindParam(':id_client',$idclient);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $client = $row3['nom_raison_sociale'];
        }


        $liste[] = array('date'=>$date, 'kilometrage'=>$kilo, 'numpd'=>$numpd, 'nompd'=>$nompd, 'quantite'=>$qte, 'numcom'=>$numcom, 'resultat'=>$result, 'reception'=>$reception, 'vehicule'=>$vehicule, 'client'=>$client);
    }
    echo json_encode($liste);
}

if (isset($_POST['inspectionselectedateapres']))
{
    $date = htmlspecialchars(trim($_POST['inspectionselectedateapres']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM inspection WHERE date_inspection>:date_inspection");
    $requete->bindParam(':date_inspection',$date);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_inspection'];
        $kilo = $row['kilometrage_inspection'];
        $numpd = $row['num_p_d_inspection'];
        $nompd = $row['nom_p_d_inspection'];
        $qte = $row['quantite_p_d_inspection'];
        $numcom = $row['num_com_inspection'];
        $result = $row['resultat_inspection'];
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

        $requete3 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete3->bindParam(':id_client',$idclient);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $client = $row3['nom_raison_sociale'];
        }


        $liste[] = array('date'=>$date, 'kilometrage'=>$kilo, 'numpd'=>$numpd, 'nompd'=>$nompd, 'quantite'=>$qte, 'numcom'=>$numcom, 'resultat'=>$result, 'reception'=>$reception, 'vehicule'=>$vehicule, 'client'=>$client);
    }
    echo json_encode($liste);
}

if (isset($_POST['inspectionselectedateextreme']))
{
    $date = htmlspecialchars(trim($_POST['inspectionselectedateextreme']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM inspection WHERE date_inspection>:date_inspection OR date_inspection<:date_inspection");
    $requete->bindParam(':date_inspection',$date);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_inspection'];
        $kilo = $row['kilometrage_inspection'];
        $numpd = $row['num_p_d_inspection'];
        $nompd = $row['nom_p_d_inspection'];
        $qte = $row['quantite_p_d_inspection'];
        $numcom = $row['num_com_inspection'];
        $result = $row['resultat_inspection'];
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

        $requete3 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete3->bindParam(':id_client',$idclient);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $client = $row3['nom_raison_sociale'];
        }

        $liste[] = array('date'=>$date, 'kilometrage'=>$kilo, 'numpd'=>$numpd, 'nompd'=>$nompd, 'quantite'=>$qte, 'numcom'=>$numcom, 'resultat'=>$result, 'reception'=>$reception, 'vehicule'=>$vehicule, 'client'=>$client);
    }
    echo json_encode($liste);
}

if (isset($_POST['inspectionselectedateextreme']))
{
    $date = htmlspecialchars(trim($_POST['inspectionselectedateextreme']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM inspection WHERE date_inspection>:date_inspection OR date_inspection<:date_inspection");
    $requete->bindParam(':date_inspection',$date);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_inspection'];
        $kilo = $row['kilometrage_inspection'];
        $numpd = $row['num_p_d_inspection'];
        $nompd = $row['nom_p_d_inspection'];
        $qte = $row['quantite_p_d_inspection'];
        $numcom = $row['num_com_inspection'];
        $result = $row['resultat_inspection'];
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

        $requete3 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete3->bindParam(':id_client',$idclient);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $client = $row3['nom_raison_sociale'];
        }


        $liste[] = array('date'=>$date, 'kilometrage'=>$kilo, 'numpd'=>$numpd, 'nompd'=>$nompd, 'quantite'=>$qte, 'numcom'=>$numcom, 'resultat'=>$result, 'reception'=>$reception, 'vehicule'=>$vehicule, 'client'=>$client);
    }
    echo json_encode($liste);
}

if (isset($_POST['inspectionselectedateinf']) AND isset($_POST['inspectionselectedatesup']))
{
    $dateinf = htmlspecialchars(trim($_POST['inspectionselectedateinf']));
    $datesup = htmlspecialchars(trim($_POST['inspectionselectedatesup']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM inspection WHERE date_inspection BETWEEN :dateinf AND :datesup");
    $requete->bindParam(':dateinf',$dateinf);
    $requete->bindParam(':datesup',$datesup);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_inspection'];
        $kilo = $row['kilometrage_inspection'];
        $numpd = $row['num_p_d_inspection'];
        $nompd = $row['nom_p_d_inspection'];
        $qte = $row['quantite_p_d_inspection'];
        $numcom = $row['num_com_inspection'];
        $result = $row['resultat_inspection'];
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

        $requete3 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete3->bindParam(':id_client',$idclient);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $client = $row3['nom_raison_sociale'];
        }


        $liste[] = array('date'=>$date, 'kilometrage'=>$kilo, 'numpd'=>$numpd, 'nompd'=>$nompd, 'quantite'=>$qte, 'numcom'=>$numcom, 'resultat'=>$result, 'reception'=>$reception, 'vehicule'=>$vehicule, 'client'=>$client);
    }
    echo json_encode($liste);
}

if (isset($_POST['inspectionselectedateadmise']))
{
    $dateadmise = array();
    $liste = array();
    $dateadmise = $_POST['inspectionselectedateadmise'];
    $dateadmiseLong = count($dateadmise);

    for ($i = 0; $i < $dateadmiseLong; $i++)
    {
        $requete =  $dbase->prepare(" SELECT * FROM inspection WHERE date_inspection=:date_inspection");
        $requete->bindParam(':date_inspection',$dateadmise[$i]);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $date = $row['date_inspection'];
            $kilo = $row['kilometrage_inspection'];
            $numpd = $row['num_p_d_inspection'];
            $nompd = $row['nom_p_d_inspection'];
            $qte = $row['quantite_p_d_inspection'];
            $numcom = $row['num_com_inspection'];
            $result = $row['resultat_inspection'];
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

            $requete3 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
            $requete3->bindParam(':id_client',$idclient);
            $requete3->execute();
            while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
            {
                $client = $row3['nom_raison_sociale'];
            }

            $liste[] = array('date'=>$date, 'kilometrage'=>$kilo, 'numpd'=>$numpd, 'nompd'=>$nompd, 'quantite'=>$qte, 'numcom'=>$numcom, 'resultat'=>$result, 'reception'=>$reception, 'vehicule'=>$vehicule, 'client'=>$client);
        }

    }

    echo json_encode($liste);
}

if (isset($_POST['inspectionselectedateexclut'])) {
    $dateexclut = array();
    $liste = array();
    $dateexclut = $_POST['inspectionselectedateexclut'];
    $dateexclutLong = count($dateexclut);

    $requete =  $dbase->prepare(" SELECT * FROM inspection");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_inspection'];
        $kilo = $row['kilometrage_inspection'];
        $numpd = $row['num_p_d_inspection'];
        $nompd = $row['nom_p_d_inspection'];
        $qte = $row['quantite_p_d_inspection'];
        $numcom = $row['num_com_inspection'];
        $result = $row['resultat_inspection'];
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
            $liste[] = array('date'=>$date, 'kilometrage'=>$kilo, 'numpd'=>$numpd, 'nompd'=>$nompd, 'quantite'=>$qte, 'numcom'=>$numcom, 'resultat'=>$result, 'reception'=>$reception, 'vehicule'=>$vehicule, 'client'=>$client);
        }
    }

    echo json_encode($liste);
}

if (isset($_POST['option']) AND isset($_POST['valeur']))
{
    $option = htmlspecialchars(trim($_POST['option']));
    $valeur = htmlspecialchars(trim($_POST['valeur']));
    $liste = array();

    if($option == 'N° Réception')
    {
        $requete5 =  $dbase->prepare(" SELECT * FROM reception WHERE num_reception=:num_reception");
        $requete5->bindParam(':num_reception',$valeur);
        $requete5->execute();
        while ($row5 = $requete5->fetch(PDO::FETCH_ASSOC))
        {
            $id_reception = $row5['id_reception'];
        }


        $requete =  $dbase->prepare(" SELECT * FROM inspection WHERE id_reception=:id_reception");
        $requete->bindParam(':id_reception',$id_reception);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $date = $row['date_inspection'];
            $kilo = $row['kilometrage_inspection'];
            $numpd = $row['num_p_d_inspection'];
            $nompd = $row['nom_p_d_inspection'];
            $qte = $row['quantite_p_d_inspection'];
            $numcom = $row['num_com_inspection'];
            $result = $row['resultat_inspection'];
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

            $requete3 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
            $requete3->bindParam(':id_client',$idclient);
            $requete3->execute();
            while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
            {
                $client = $row3['nom_raison_sociale'];
            }

            $liste[] = array('date'=>$date, 'kilometrage'=>$kilo, 'numpd'=>$numpd, 'nompd'=>$nompd, 'quantite'=>$qte, 'numcom'=>$numcom, 'resultat'=>$result, 'reception'=>$reception, 'vehicule'=>$vehicule, 'client'=>$client);
        }
    }
    if($option == 'N° Plaque')
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

            $requete =  $dbase->prepare(" SELECT * FROM inspection WHERE id_reception=:id_reception");
            $requete->bindParam(':id_reception',$id_reception);
            $requete->execute();
            while ($row = $requete->fetch(PDO::FETCH_ASSOC))
            {
                $date = $row['date_inspection'];
                $kilo = $row['kilometrage_inspection'];
                $numpd = $row['num_p_d_inspection'];
                $nompd = $row['nom_p_d_inspection'];
                $qte = $row['quantite_p_d_inspection'];
                $numcom = $row['num_com_inspection'];
                $result = $row['resultat_inspection'];
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

                $requete3 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
                $requete3->bindParam(':id_client',$idclient);
                $requete3->execute();
                while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
                {
                    $client = $row3['nom_raison_sociale'];
                }

                $liste[] = array('date'=>$date, 'kilometrage'=>$kilo, 'numpd'=>$numpd, 'nompd'=>$nompd, 'quantite'=>$qte, 'numcom'=>$numcom, 'resultat'=>$result, 'reception'=>$reception, 'vehicule'=>$vehicule, 'client'=>$client);
            }
        }

    }
    if($option == 'Client')
    {
        $requete3 =  $dbase->prepare(" SELECT * FROM client WHERE nom_raison_sociale=:nom_raison_sociale");
        $requete3->bindParam(':nom_raison_sociale',$valeur);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $id_client = $row3['id_client'];
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

                $requete =  $dbase->prepare(" SELECT * FROM inspection WHERE id_reception=:id_reception");
                $requete->bindParam(':id_reception',$id_reception);
                $requete->execute();
                while ($row = $requete->fetch(PDO::FETCH_ASSOC))
                {
                    $date = $row['date_inspection'];
                    $kilo = $row['kilometrage_inspection'];
                    $numpd = $row['num_p_d_inspection'];
                    $nompd = $row['nom_p_d_inspection'];
                    $qte = $row['quantite_p_d_inspection'];
                    $numcom = $row['num_com_inspection'];
                    $result = $row['resultat_inspection'];
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

                    $requete3 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
                    $requete3->bindParam(':id_client',$idclient);
                    $requete3->execute();
                    while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
                    {
                        $client = $row3['nom_raison_sociale'];
                    }

                    $liste[] = array('date'=>$date, 'kilometrage'=>$kilo, 'numpd'=>$numpd, 'nompd'=>$nompd, 'quantite'=>$qte, 'numcom'=>$numcom, 'resultat'=>$result, 'reception'=>$reception, 'vehicule'=>$vehicule, 'client'=>$client);
                }
            }
        }
    }

    echo json_encode($liste);
}
