<?php
    require '../model/Initial.php';

    if (isset($_POST['postListeCodeClient']))
    {
        $liste = array();
        $element = 0;
        $requete =  $dbase->query(" SELECT * FROM client");
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $liste[$element] = $row['code_client'];
            $element++;
        }
        echo json_encode($liste);
    }

    if (isset($_POST['postListeTypeModele']))
    {
        $liste = array();
        $element = 0;
        $requete =  $dbase->query(" SELECT * FROM type_modele_vehicule");
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $liste[$element] = $row['libelle'];
            $element++;
        }
        echo json_encode($liste);
    }

    if (isset($_POST['postCodeClientReturnClient']) AND !empty($_POST['postCodeClientReturnClient']))
    {
        $code = htmlspecialchars(trim($_POST['postCodeClientReturnClient']));

        $requete =  $dbase->prepare(" SELECT * FROM client WHERE code_client=:code_client");
        $requete->bindParam(':code_client',$code);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $client = $row['nom_raison_sociale'];
        }
        echo $client;
    }

if (isset($_POST['postCodeClientReturnClientDiver']) AND !empty($_POST['postCodeClientReturnClientDiver']))
{
    $code = htmlspecialchars(trim($_POST['postCodeClientReturnClientDiver']));
    $indix = 0;
    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM client WHERE code_client=:code_client");
    $requete->bindParam(':code_client',$code);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $liste[$indix] = $row['nom_raison_sociale'];
        $indix++;
    }
    echo json_encode($liste);
}

    if (isset($_POST['postListClient']) AND !empty($_POST['postListClient']))
    {
        $liste = array();
        $element = 0;
        $requete =  $dbase->query(" SELECT * FROM client");
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $liste[$element] = $row['nom_raison_sociale'];
            $element++;
        }
        echo json_encode($liste);
    }

    if (isset($_POST['postClientReturnImmatriculation']) AND !empty($_POST['postClientReturnImmatriculation']))
    {
        $client = htmlspecialchars(trim($_POST['postClientReturnImmatriculation']));

        $requete =  $dbase->prepare(" SELECT * FROM client WHERE nom_raison_sociale=:nom_raison_sociale");
        $requete->bindParam(':nom_raison_sociale',$client);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_client = $row['id_client'];
        }

        $liste = array();
        $element = 0;
        $requete1 =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_client=:id_client");
        $requete1->bindParam(':id_client',$id_client);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $id_vehicule = $row1['id_vehicule'];
            $imm= $row1['immatriculation'];
            $existeO = 'non';
            $requete2 =  $dbase->prepare(" SELECT * FROM programmation WHERE fk_id_vehicule=:fk_id_vehicule ORDER BY id_programmation DESC LIMIT 1");
            $requete2->bindParam(':fk_id_vehicule',$id_vehicule);
            $requete2->execute();
            while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
            {
                $existeO = 'oui';
                $observation = $row2['tache_prog'];
            }

            if($existeO == 'non')$observation = '';

            $liste[]=array('imm'=>$imm,'observe'=>$observation);
        }

        echo json_encode($liste);
    }

    if(isset($_POST['postImmtReturnClient']) AND !empty($_POST['postImmtReturnClient']))
    {
        $imm = htmlspecialchars(trim($_POST['postImmtReturnClient']));

        $requete =  $dbase->prepare(" SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
        $requete->bindParam(':immatriculation',$imm);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_client = $row['id_client'];
        }

        $requete1 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete1->bindParam(':id_client',$id_client);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $client = $row1['nom_raison_sociale'];
        }
        echo $client;
    }

 if(isset($_POST['postImmreturnObservationclient']))
 {
     $imm = htmlspecialchars(trim($_POST['postImmreturnObservationclient']));

     $existeO = 'non';
     $requete =  $dbase->prepare(" SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
     $requete->bindParam(':immatriculation',$imm);
     $requete->execute();
     while ($row = $requete->fetch(PDO::FETCH_ASSOC))
     {
         $id_vehicule = $row['id_vehicule'];
     }

     $requete1 =  $dbase->prepare(" SELECT * FROM programmation WHERE fk_id_vehicule=:fk_id_vehicule ORDER BY id_programmation LIMIT 1");
     $requete1->bindParam(':fk_id_vehicule',$id_vehicule);
     $requete1->execute();
     while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
     {
         $existeO = 'oui';
         $observation = $row1['tache_prog'];
     }

     if ($existeO == 'non')$observation = '';
     echo $observation;
 }


if(isset($_POST['postClientReturnCodeClient']) AND !empty($_POST['postClientReturnCodeClient']))
{
    $client = htmlspecialchars(trim($_POST['postClientReturnCodeClient']));

    $requete =  $dbase->prepare(" SELECT * FROM client WHERE nom_raison_sociale=:nom_raison_sociale");
    $requete->bindParam(':nom_raison_sociale',$client);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $code_client = $row['code_client'];
    }

    echo $code_client;
}

    if(isset($_POST['postListimmtall']) AND !empty($_POST['postListimmtall']))
    {
        $liste = array();
        $element = 0;
        $requete1 =  $dbase->prepare(" SELECT * FROM vehicule");
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $liste[$element] = $row1['immatriculation'];
            $element++;
        }
        echo json_encode($liste);
    }

    if(isset($_POST['openmodalvehiculeandautocomplet'])AND !empty($_POST['openmodalvehiculeandautocomplet']))
    {
        $requete =  $dbase->prepare(" SELECT id_client FROM client ORDER BY id_client DESC LIMIT 1");
        $requete->execute();

        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_client  = $row['id_client'];
        }

        $liste = array();
        $element = 0;
        $requete1 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete1->bindParam(':id_client',$id_client);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $liste[$element] = $row1['code_client'];
            $element++;
            $liste[$element] = $row1['nom_raison_sociale'];
            $element++;
        }
        echo json_encode($liste);

    }

if(isset($_POST['openmodalprogandautocomplet'])AND !empty($_POST['openmodalprogandautocomplet']))
{
    $requete =  $dbase->prepare(" SELECT id_vehicule FROM vehicule ORDER BY id_vehicule DESC LIMIT 1");
    $requete->execute();

    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_vehicule  = $row['id_vehicule'];
    }

    $liste = array();
    $element = 0;
    $requete1 =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
    $requete1->bindParam(':id_vehicule',$id_vehicule);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $liste[$element] = $row1['immatriculation'];
        $element++;
        $id_client = $row1['id_client'];
        $requete2=  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete2->bindParam(':id_client',$id_client);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
        {
            $liste[$element] = $row2['nom_raison_sociale'];
        }
        $element++;
    }
    echo json_encode($liste);

}

if(isset($_POST['openmodalrecepandautocomplet'])AND !empty($_POST['openmodalrecepandautocomplet']))
{
    $requete =  $dbase->prepare(" SELECT * FROM programmation ORDER BY id_programmation DESC LIMIT 1");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_prog  = $row['id_programmation'];
        $tache = $row['tache_prog'];
    }

    $requete2 =  $dbase->prepare(" SELECT * FROM programmation WHERE id_programmation=:id_programmation");
    $requete2->bindParam(':id_programmation',$id_prog);
    $requete2->execute();
    while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
    {
        $id_vehicule  = $row2['fk_id_vehicule'];
    }

    $liste = array();
    $element = 0;
    $requete1 =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
    $requete1->bindParam(':id_vehicule',$id_vehicule);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $liste[$element] = $row1['immatriculation'];
        $element++;
        $id_client = $row1['id_client'];
        $requete3=  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete3->bindParam(':id_client',$id_client);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $liste[$element] = $row3['nom_raison_sociale'];
        }
        $element++;
        $liste[$element] = $tache;
    }
    echo json_encode($liste);

}

if(isset($_POST['postsectionreturnsectionlibelle']) AND !empty($_POST['postsectionreturnsectionlibelle']))
{
    $liste = array();
    $element = 0;
    $requete =  $dbase->prepare(" SELECT * FROM specialite_technicien");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $liste[$element] = $row['libelle'];
        $element++;
    }
    echo json_encode($liste);
}


if(isset($_POST['postsectionreturntechnicien']) AND !empty($_POST['postsectionreturntechnicien']))
{
    $spec = htmlspecialchars(trim($_POST['postsectionreturntechnicien']));
    $liste = array();
    $element = 0;
    $requete =  $dbase->prepare(" SELECT * FROM specialite_technicien WHERE libelle=:libelle");
    $requete->bindParam(':libelle',$spec);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_sepec = $row['id_specialite'];
    }

    $requete1 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_specialite=:id_specialite");
    $requete1->bindParam(':id_specialite',$id_sepec);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $techN = $row1['nom_technicien'];
        $techP = $row1['prenom_technicien'];
        $tech = $techN.' '.$techP;
        $liste[$element] = $tech;
        $element++;
    }
    echo json_encode($liste);
}

if(isset($_POST['posttechreturntech']) AND !empty($_POST['posttechreturntech']))
{
    $liste = array();
    $element = 0;
    $requete =  $dbase->prepare(" SELECT * FROM technicien");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $techN = $row['nom_technicien'];
        $techP = $row['prenom_technicien'];
        $tech = $techN.' '.$techP;
        $liste[$element] = $tech;
        $element++;
    }
    echo json_encode($liste);
}

if(isset($_POST['posttechreturnspec']) AND !empty($_POST['posttechreturnspec']))
{
    $tech = htmlspecialchars(trim($_POST['posttechreturnspec']));

    $techL = strlen($tech);
    $charNum = 0;
    $charNum1 = 0;
    for ($i = 0; $i<$techL; $i++)
    {
        $char = $tech{$i};
        $charNum++;
        if (ctype_lower($char) or $char == '.')$i = $techL;
    }

    for ($i = $charNum-1; $i>=0; $i--)
    {
        $char1 = $tech{$i};
        $charNum1 = $i;
        if ($char1 == ' ')$i = -1;
    }

    $techN = substr($tech, 0,$charNum1);
    $techP = substr($tech,$charNum1+1);

    $requete =  $dbase->prepare("SELECT * FROM technicien WHERE nom_technicien=:nom_technicien AND prenom_technicien=:prenom_technicien");
    $requete->bindParam(':nom_technicien',$techN);
    $requete->bindParam(':prenom_technicien',$techP);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_sepec = $row['id_specialite'];
    }

    $requete1 =  $dbase->prepare(" SELECT * FROM specialite_technicien WHERE id_specialite=:id_specialite");
    $requete1->bindParam(':id_specialite',$id_sepec);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $spec = $row1['libelle'];
    }
    echo $spec;
}

if (isset($_POST['postClientReturnVehicule']) AND !empty($_POST['postClientReturnVehicule']))
{
    $client = htmlspecialchars(trim($_POST['postClientReturnVehicule']));
    $liste = array();
    $element = 0;
    $requete =  $dbase->prepare(" SELECT * FROM client WHERE nom_raison_sociale=:nom_raison_sociale");
    $requete->bindParam(':nom_raison_sociale',$client);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_client = $row['id_client'];

        $requete1 =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_client=:id_client");
        $requete1->bindParam(':id_client',$id_client);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $id_veh = $row1['id_vehicule'];
            $imm = $row1['immatriculation'];
            $chassis = $row1['chassis'];
            $couleur = $row1['couleur'];
            $id_type = $row1['id_modele'];

            $requete2 =  $dbase->prepare(" SELECT * FROM type_modele_vehicule WHERE id_modele=:id_modele");
            $requete2->bindParam(':id_modele',$id_type);
            $requete2->execute();
            while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
            {
                $id_type = $row2['libelle'];
            }
            $liste[] = array('immatricule'=>$imm,'chassis'=>$chassis,'couleur'=>$couleur,'typeModel'=>$id_type);
        }

    }

    echo json_encode($liste);
}

if (isset($_POST['postnumreceptionreturnreception']) AND !empty($_POST['postnumreceptionreturnreception']))
{
    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM reception");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_reception = $row['id_reception'];
        $num_reception = $row['num_reception'];
        $type_reception = $row['type_reception'];
        $date_reception = $row['date_reception'];
        $heure_reception = $row['heure_reception'];
        $kilometrage_reception = $row['kilometrage'];
        $tache_reception = $row['tache'];
        $vehicule_reception = $row['fk_id_vehicule'];

        $liste[]=array('id'=>$id_reception,'num'=>$num_reception,'type'=>$type_reception,'date'=>$date_reception,'heure'=>$heure_reception,'km'=>$kilometrage_reception,'tache'=>$tache_reception,'id_vehicule'=>$vehicule_reception);
    }

    echo json_encode($liste);
}

if (isset($_POST['postnumreceptionreturnreceptionfornouse']) AND !empty($_POST['postnumreceptionreturnreceptionfornouse']))
{
    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM reception");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $existe = 'non';

        $id_reception = $row['id_reception'];
        $num_reception = $row['num_reception'];
        $type_reception = $row['type_reception'];
        $date_reception = $row['date_reception'];
        $heure_reception = $row['heure_reception'];
        $kilometrage_reception = $row['kilometrage'];
        $tache_reception = $row['tache'];
        $vehicule_reception = $row['fk_id_vehicule'];

        $requete1 =  $dbase->prepare(" SELECT * FROM livraison WHERE id_reception=:id_reception");
        $requete1->bindParam(':id_reception',$id_reception);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $existe = 'oui';
        }

        if($existe == 'non')
        {
            $liste[]=array('id'=>$id_reception,'num'=>$num_reception,'type'=>$type_reception,'date'=>$date_reception,'heure'=>$heure_reception,'km'=>$kilometrage_reception,'tache'=>$tache_reception,'id_vehicule'=>$vehicule_reception);
        }
    }

    echo json_encode($liste);
}

if (isset($_POST['postnumreceptionreturnclientandvehicule']) AND !empty($_POST['postnumreceptionreturnclientandvehicule']))
{

    $num_reception = htmlspecialchars(trim($_POST['postnumreceptionreturnclientandvehicule']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM reception WHERE num_reception=:num_reception");
    $requete->bindParam(':num_reception',$num_reception);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_vehicule = $row['fk_id_vehicule'];
    }

    $requete1 =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
    $requete1->bindParam(':id_vehicule',$id_vehicule);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $id_client = $row1['id_client'];
        $id_typeModele = $row1['id_modele'];
        $imm = $row1['immatriculation'];
        $chassis = $row1['chassis'];
        $couleur = $row1['couleur'];
    }

    $requete2 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
    $requete2->bindParam(':id_client',$id_client);
    $requete2->execute();
    while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
    {
        $client = $row2['nom_raison_sociale'];
    }

    $requete3=  $dbase->prepare(" SELECT * FROM type_modele_vehicule WHERE id_modele=:id_modele");
    $requete3->bindParam(':id_modele',$id_typeModele);
    $requete3->execute();
    while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
    {
        $typeModele = $row3['libelle'];
    }

    $liste[]=array('clients'=>$client,'typeModele'=>$typeModele,'imm'=>$imm);

    echo json_encode($liste);
}

if (isset($_POST['postnumreceptionreturntravauxexecute']) AND !empty($_POST['postnumreceptionreturntravauxexecute']))
{

    $num_reception = htmlspecialchars(trim($_POST['postnumreceptionreturntravauxexecute']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM reception WHERE num_reception=:num_reception");
    $requete->bindParam(':num_reception',$num_reception);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_reception = $row['id_reception'];
        $tache = $row['tache_effectif'];
    }

//    $requete1 =  $dbase->prepare(" SELECT * FROM programmation_activite WHERE id_reception=:id_reception");
//    $requete1->bindParam(':id_reception',$id_reception);
//    $requete1->execute();
//    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
//    {
//        $tache_activite= $row1['tache'];
//        $date_activite = $row1['date_activite'];
//        $liste[]=array('tache_activite'=>$tache_activite,'date_activite'=>$date_activite);
//    }

    $liste[]=array('tache'=>$tache);

    echo json_encode($liste);
}

if (isset($_POST['postcontrollvalidelivraison']))
{
    $id_reception = htmlspecialchars(trim($_POST['postcontrollvalidelivraison']));
    $livraisonExiste = 'non';
    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM livraison WHERE id_reception=:id_reception ORDER BY id_livraison DESC LIMIT 1");
    $requete->bindParam(':id_reception',$id_reception);
    $requete->execute();
    while($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date_livraison = $row['date_livraison'];
        $heure_livraison = $row['heure_livraison'];
        $livraisonExiste = 'oui';
    }
    if( $livraisonExiste = 'non')
    {
        $date_livraison = '1000-10-10';
        $heure_livraison = '00:00:00';
    }

    $liste[] = array('date_livraison'=>$date_livraison,'heure_livraison'=>$heure_livraison);
    echo json_encode($liste);
}

if(isset($_POST['postListvehicule']) AND !empty($_POST['postListvehicule']))
{
    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM vehicule");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $liste[] = array('imm'=>$row['immatriculation'],'chassis'=>$row['chassis'],'couleur'=>$row['couleur'],'id_vehicule'=>$row['id_vehicule'],'id_client'=>$row['id_client']) ;
    }
    echo json_encode($liste);
}

if(isset($_POST['postListvehiculeandreturnnouseforlivraisonreception']) AND !empty($_POST['postListvehiculeandreturnnouseforlivraisonreception']))
{
    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM vehicule");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $existe = 'non';
        $existeR = 'non';
        $id_vehicule = $row['id_vehicule'];
        $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE fk_id_vehicule=:fk_id_vehicule ORDER BY id_reception DESC LIMIT 1");
        $requete1->bindParam(':fk_id_vehicule',$id_vehicule);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $id_reception = $row1['id_reception'];
            $existeR = 'oui';
        }

        $requete2 =  $dbase->prepare(" SELECT * FROM livraison WHERE id_reception=:id_reception");
        $requete2->bindParam(':id_reception',$id_reception);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
        {
            $existe = 'oui';
        }

        if ($existe == 'non' AND $existeR == 'oui')
        {
            $liste[] = array('imm'=>$row['immatriculation'],'chassis'=>$row['chassis'],'couleur'=>$row['couleur'],'id_vehicule'=>$row['id_vehicule'],'id_client'=>$row['id_client']) ;
        }
    }
    echo json_encode($liste);
}

if(isset($_POST['postListvehiculereturnreceptionandlivraison']) AND !empty($_POST['postListvehiculereturnreceptionandlivraison']))
{
    $id_vehicule = htmlspecialchars(trim($_POST['postListvehiculereturnreceptionandlivraison']));

    $liste = array();
    $Reception = 'non';
    $Livraison = 'non';

    $requete2 =  $dbase->prepare(" SELECT * FROM reception WHERE fk_id_vehicule=:fk_id_vehicule ORDER BY id_reception DESC LIMIT 1");
    $requete2->bindParam(':fk_id_vehicule',$id_vehicule);
    $requete2->execute();
    while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
    {
        $id_reception = $row2['id_reception'];
        $date_reception = $row2['date_reception'];
        $heure_reception = $row2['heure_reception'];
        $tache_reception = $row2['tache'];
        $Reception = 'oui';
    }


    $requete =  $dbase->prepare(" SELECT * FROM livraison WHERE id_reception=:id_reception ORDER BY id_livraison DESC LIMIT 1");
    $requete->bindParam(':id_reception',$id_reception);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date_livraison = $row['date_livraison'];
        $heure_livraison = $row['heure_livraison'];
        $Livraison = 'oui';
    }

    if($Livraison == 'non')$date_livraison = '1000-10-10';
    if($Reception == 'non')$date_reception = '1000-10-10';

    $liste[] = array('date_livraison'=>$date_livraison,'date_reception'=>$date_reception);

    echo json_encode($liste);
}

if(isset($_POST['postimmatriculereturntypemodelclientreception']) AND !empty($_POST['postimmatriculereturntypemodelclientreception']))
{
    $immatricule = htmlspecialchars(trim($_POST['postimmatriculereturntypemodelclientreception']));
    $liste = array();
    $requete1 =  $dbase->prepare(" SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
    $requete1->bindParam(':immatriculation',$immatricule);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $id_vehicule = $row1['id_vehicule'];
        $id_client = $row1['id_client'];
        $id_typeModele = $row1['id_modele'];
    }

    $requete2 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
    $requete2->bindParam(':id_client',$id_client);
    $requete2->execute();
    while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
    {
        $client = $row2['nom_raison_sociale'];
    }

    $requete3=  $dbase->prepare(" SELECT * FROM type_modele_vehicule WHERE id_modele=:id_modele");
    $requete3->bindParam(':id_modele',$id_typeModele);
    $requete3->execute();
    while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
    {
        $typeModele = $row3['libelle'];
    }

    $requete =  $dbase->prepare(" SELECT * FROM reception WHERE fk_id_vehicule=:fk_id_vehicule ORDER BY id_reception DESC LIMIT 1");
    $requete->bindParam(':fk_id_vehicule',$id_vehicule);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $num_reception = $row['num_reception'];
    }

    $liste[] = array('numm_recept'=>$num_reception,'typeModele'=>$typeModele,'clients'=>$client);
    echo json_encode($liste);
}

if (isset($_POST['postclientreturnclientandgenre']))
{
    $liste = array();
    $element = 0;
    $requete =  $dbase->query(" SELECT * FROM client");
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_genre = $row['id_genre'];

        $requete1 =  $dbase->prepare(" SELECT * FROM genre_client WHERE id_genre=:id_genre");
        $requete1->bindParam(':id_genre',$id_genre);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $genre = $row1['libelle'];
        }

        $liste[] = array('id_client'=>$row['id_client'],'code_client'=>$row['code_client'],'genre_client'=>$genre,'nom_client'=>$row['nom_raison_sociale'],'tel_fix'=>$row['tel_fixe'],'tel_cel'=>$row['tel_cellulaire'],'tel_dirct'=>$row['tel_ligne_directe'],'adraisse_client'=>$row['adresse'],'mail_client'=>$row['mail'],'date_client'=>$row['date_creation']);
    }
    echo json_encode($liste);
}

if (isset($_POST['postidclientreturnvehiculereceptionlivraison']))
{
    $id_client = htmlspecialchars(trim($_POST['postidclientreturnvehiculereceptionlivraison']));

    $liste = array();

    $requete1 =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_client=:id_client");
    $requete1->bindParam(':id_client',$id_client);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $id_vehicule = $row1['id_vehicule'];
        $imm = $row1['immatriculation'];
        $chassis = $row1['chassis'];
        $couleur = $row1['couleur'];
        $id_typeModele = $row1['id_modele'];

        $Reception = 'non';
        $Livraison = 'non';

        $requete3=  $dbase->prepare(" SELECT * FROM type_modele_vehicule WHERE id_modele=:id_modele");
        $requete3->bindParam(':id_modele',$id_typeModele);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $typeModele = $row3['libelle'];
        }

        $requete2 =  $dbase->prepare(" SELECT * FROM reception WHERE fk_id_vehicule=:fk_id_vehicule ORDER BY id_reception DESC LIMIT 1");
        $requete2->bindParam(':fk_id_vehicule',$id_vehicule);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
        {
            $num_reception = $row2['num_reception'];
            $date_reception = $row2['date_reception'];
            $heure_reception = $row2['heure_reception'];
            $Reception = 'oui';
        }

        $requete =  $dbase->prepare(" SELECT * FROM livraison WHERE id_vehicule=:id_vehicule ORDER BY id_livraison DESC LIMIT 1");
        $requete->bindParam(':id_vehicule',$id_vehicule);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $date_livraison = $row['date_livraison'];
            $heure_livraison = $row['heure_livraison'];
            $Livraison = 'oui';
        }

        if($Reception == 'oui' AND $Livraison == 'oui')
        {
            $liste[] = array('num_reception'=>$num_reception,'date_reception'=>$date_reception,'date_livraison'=>$date_livraison,'immatricule'=>$imm,'id_vehicule'=>$id_vehicule,'type_model'=>$typeModele);
        }
        else
        {
            $liste[] = array('num_reception'=>$Reception,'date_reception'=>$Reception,'date_livraison'=>$Livraison,'immatricule'=>$imm,'id_vehicule'=>$id_vehicule,'type_model'=>$typeModele);

        }
    }

    echo json_encode($liste);

}

if(isset($_POST['postlisttechnicien']))
{
    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM technicien");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $techN = $row['nom_technicien'];
        $techP = $row['prenom_technicien'];
        $techTel = $row['contact'];
        $techAdre = $row['adresse'];
        $techId = $row['id_technicien'];
        $tech = $techN.' '.$techP;

        $liste[]=array('tech'=>$tech,'tech_tel'=>$techTel,'tech_addr'=>$techAdre,'tech_id'=>$techId);
    }

    echo json_encode($liste);

}

if(isset($_POST['receptionkilometrage']))
{
    $liste = array('4000','10000','16000','22000','28000','34000','40000','46000','52000','58000','64000','70000','76000','82000','88000','94000','100000','106000','112000','118000');
    echo json_encode($liste);
}

if(isset($_POST['postImmatriculation']))
{
    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM vehicule");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_vehicule = $row['id_vehicule'];
        $imm = $row['immatriculation'];
        $chassis = $row['chassis'];

        $liste[]=array('id_vehicule'=>$id_vehicule,'imm'=>$imm,'chassis'=>$chassis);
    }

    echo json_encode($liste);
}

if(isset($_POST['postimmatriculationreturnnouse']))
{
    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM vehicule");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $existeR = 'non';
        $existeL = 'non';

        $id_vehicule = $row['id_vehicule'];
        $imm = $row['immatriculation'];
        $chassis = $row['chassis'];

        $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE fk_id_vehicule=:fk_id_vehicule");
        $requete1->bindParam(':fk_id_vehicule',$id_vehicule);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $existeR = 'oui';
            $id_reception = $row1['id_reception'];
        }

        if($existeR == 'oui')
        {
            $requete2 =  $dbase->prepare(" SELECT * FROM livraison WHERE id_reception=:id_reception");
            $requete2->bindParam(':id_reception',$id_reception);
            $requete2->execute();
            while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
            {
                $existeL = 'oui';
            }
        }

        if($existeL == 'oui')
        {
            $liste[]=array('id_vehicule'=>$id_vehicule,'imm'=>$imm,'chassis'=>$chassis);
        }
    }

    echo json_encode($liste);
}

if(isset($_POST['postimmatriculereturntypemodelclient']) AND !empty($_POST['postimmatriculereturntypemodelclient'])) {
    $immatricule = htmlspecialchars(trim($_POST['postimmatriculereturntypemodelclient']));

    $liste = array();
    $requete1 = $dbase->prepare(" SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
    $requete1->bindParam(':immatriculation', $immatricule);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {
        $chassis = $row1['chassis'];
        $couleur = $row1['couleur'];
        $id_vehicule = $row1['id_vehicule'];
        $id_typeMoteur = $row1['id_moteur'];
        $id_client = $row1['id_client'];
        $id_typeModele = $row1['id_modele'];
    }

    $requete3=  $dbase->prepare(" SELECT * FROM type_modele_vehicule WHERE id_modele=:id_modele");
    $requete3->bindParam(':id_modele',$id_typeModele);
    $requete3->execute();
    while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
    {
        $typeModele = $row3['libelle'];
    }

    $requete4=  $dbase->prepare(" SELECT * FROM type_moteur_vehicule WHERE id_moteur=:id_moteur");
    $requete4->bindParam(':id_moteur',$id_typeMoteur);
    $requete4->execute();
    while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC))
    {
        $typeMoteur = $row4['libelle'];
    }

    $requete2 = $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
    $requete2->bindParam(':id_client', $id_client);
    $requete2->execute();
    while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC)) {
        $client = $row2['nom_raison_sociale'];
        $tel_fix = $row2['tel_fixe'];
        $tel_cel = $row2['tel_cellulaire'];
        $tel_dir = $row2['tel_ligne_directe'];

    }

    $liste[]=array('telD'=>$tel_dir,'telC'=>$tel_cel,'telF'=>$tel_fix,'type_model'=>$typeModele,'chassis'=>$chassis,'couleur'=>$couleur,'type_moteur'=>$typeMoteur,'client'=>$client);
    echo json_encode($liste);
}

if(isset($_POST['postidinspectionanreturninspection']))
{
    $id_inspect = htmlspecialchars(trim($_POST['postidinspectionanreturninspection']));
    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM inspection WHERE id_inspection=:id_inspection");
    $requete->bindParam(':id_inspection',$id_inspect);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_inspection'];
        $km = $row['kilometrage_inspection'];
        $num_dp = $row['num_p_d_inspection'];
        $nom_dp = $row['nom_p_d_inspection'];
        $q_dp = $row['quantite_p_d_inspection'];
        $num_com = $row['num_com_inspection'];
        $result = $row['resultat_inspection'];
        $id_reception = $row['id_reception'];

    }

    $requete1 = $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
    $requete1->bindParam(':id_reception', $id_reception);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {
        $id_vehicule = $row1['fk_id_vehicule'];
    }

    $requete2 = $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
    $requete2->bindParam(':id_vehicule', $id_vehicule);
    $requete2->execute();
    while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC)) {
        $imm = $row2['immatriculation'];
        $id_client = $row2['id_client'];
    }

    $requete4=  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
    $requete4->bindParam(':id_client',$id_client);
    $requete4->execute();
    while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC))
    {
        $client= $row4['nom_raison_sociale'];
    }

    $liste[]=array('date'=>$date,'km'=>$km,'num_dp'=>$num_dp,'nom_dp'=>$nom_dp,'qte'=>$q_dp,'num_com'=>$num_com,'resultat'=>$result,'imm'=>$imm,'client'=>$client);

    echo json_encode($liste);
}


if(isset($_POST['postidrecomandreturnrecom']))
{
    $id_recom = htmlspecialchars(trim($_POST['postidrecomandreturnrecom']));
    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM recommandation WHERE id_recommandation=:id_recommandation");
    $requete->bindParam(':id_recommandation',$id_recom);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_recommandation'];
        $probleme = $row['probleme'];
        $recom = $row['recommandation'];
        $id_tech = $row['fk_id_tech'];
        $id_reception = $row['id_reception'];
    }

    $requete2 = $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
    $requete2->bindParam(':id_technicien', $id_tech);
    $requete2->execute();
    while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC)) {
        $techN = $row2['nom_technicien'];
        $techP = $row2['prenom_technicien'];
        $tech = $techN.' '.$techP;
    }

    $requete0=  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
    $requete0->bindParam(':id_reception',$id_reception);
    $requete0->execute();
    while ($row0 = $requete0->fetch(PDO::FETCH_ASSOC))
    {
        $id_vehicule= $row0['fk_id_vehicule'];
    }

    $requete4=  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
    $requete4->bindParam(':id_vehicule',$id_vehicule);
    $requete4->execute();
    while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC))
    {
        $id_client= $row4['id_client'];
        $imm= $row4['immatriculation'];
    }


    $requete5=  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
    $requete5->bindParam(':id_client',$id_client);
    $requete5->execute();
    while ($row5 = $requete5->fetch(PDO::FETCH_ASSOC))
    {
        $client= $row5['nom_raison_sociale'];
    }

    $liste[]=array('date'=>$date,'probleme'=>$probleme,'recom'=>$recom,'tech'=>$tech,'imm'=>$imm,'client'=>$client);

    echo json_encode($liste);
}


if(isset($_POST['postidreclamationandreturnreclamation'])) {
    $id_reclam = htmlspecialchars(trim($_POST['postidreclamationandreturnreclamation']));

    $liste = array();
    $requete = $dbase->prepare(" SELECT * FROM reclamation WHERE id_reclamation=:id_reclamation");
    $requete->bindParam(':id_reclamation', $id_reclam);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC)) {
        $date_reclamation = $row['date_reclamation'];
        $reclamation = $row['reclamation'];
        $reclamateur = $row['reclamateur'];
        $analyse = $row['analyse'];
        $cause = $row['cause'];
        $proposition = $row['proposition'];
        $date_observation = $row['date_observation'];
        $observateur = $row['observateur'];
        $id_livraison = $row['id_livraison'];
        $etat = $row['etat'];
    }

    $requete1 =  $dbase->prepare(" SELECT * FROM livraison WHERE id_livraison=:id_livraison");
    $requete1->bindParam(':id_livraison',$id_livraison);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $date_livraison = $row1['date_livraison'];
        $heure_livraison = $row1['heure_livraison'];
        $traveaux_fait = $row1['traveaux_fait'];
        $traveaux_non_fait = $row1['traveaux_non_fait'];
        $kilometrage = $row1['kilometrage'];
        $num_facture = $row1['num_facture'];
        $id_reception = $row1['id_reception'];
    }


    $requete0=  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
    $requete0->bindParam(':id_reception',$id_reception);
    $requete0->execute();
    while ($row0 = $requete0->fetch(PDO::FETCH_ASSOC))
    {
        $id_vehicule= $row0['fk_id_vehicule'];
    }


    $requete2=  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
    $requete2->bindParam(':id_vehicule',$id_vehicule);
    $requete2->execute();
    while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
    {
        $id_client= $row2['id_client'];
        $id_typeModele= $row2['id_modele'];
        $imm= $row2['immatriculation'];
        $chassis= $row2['chassis'];
    }

    $requete3 = $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
    $requete3->bindParam(':id_client', $id_client);
    $requete3->execute();
    while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC)) {
        $client = $row3['nom_raison_sociale'];
        $tel_fix = $row3['tel_fixe'];
        $tel_cel = $row3['tel_cellulaire'];
        $tel_dir = $row3['tel_ligne_directe'];
        $date_client = $row3['date_creation'];
    }

    $requete4=  $dbase->prepare(" SELECT * FROM type_modele_vehicule WHERE id_modele=:id_modele");
    $requete4->bindParam(':id_modele',$id_typeModele);
    $requete4->execute();
    while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC))
    {
        $typeModele = $row4['libelle'];
    }

    $liste[]=array('etat'=>$etat,'client'=>$client,'d_c'=>$date_client,'tel_fix'=>$tel_fix,'tel_cel'=>$tel_cel,'tel_dir'=>$tel_dir,'type_model'=>$typeModele,'imm'=>$imm,'chassis'=>$chassis,'d_l'=>$date_livraison,'t_f'=>$traveaux_fait,'km'=>$kilometrage,'num_f'=>$num_facture,'d_r'=>$date_reclamation,'reclamation'=>$reclamation,'reclamateur'=>$reclamateur,'analyse'=>$analyse,'cause'=>$cause,'proposition'=>$proposition,'d_ob'=>$date_observation,'observateur'=>$observateur);

    echo json_encode($liste);
}

if(isset($_POST['postImmtReturnvehiculeclientlivraison'])) {
    $imm = htmlspecialchars(trim($_POST['postImmtReturnvehiculeclientlivraison']));
    $receptE = 'non';
    $liveE = 'non';
    $liste = array();
    $requete=  $dbase->prepare(" SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
    $requete->bindParam(':immatriculation',$imm);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_client= $row['id_client'];
        $id_typeModele= $row['id_modele'];
        $id_vehicule = $row['id_vehicule'];
        $chassis= $row['chassis'];

    }

    $requete1=  $dbase->prepare(" SELECT * FROM type_modele_vehicule WHERE id_modele=:id_modele");
    $requete1->bindParam(':id_modele',$id_typeModele);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $typeModele = $row1['libelle'];
    }

    $requete2 = $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
    $requete2->bindParam(':id_client', $id_client);
    $requete2->execute();
    while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC)) {
        $client = $row2['nom_raison_sociale'];
        $tel_fix = $row2['tel_fixe'];
        $tel_cel = $row2['tel_cellulaire'];
        $tel_dir = $row2['tel_ligne_directe'];
        $date_client = $row2['date_creation'];
    }

    $requete4 =  $dbase->prepare(" SELECT * FROM reception WHERE fk_id_vehicule=:fk_id_vehicule ORDER BY id_reception LIMIT 1");
    $requete4->bindParam(':fk_id_vehicule',$id_vehicule);
    $requete4->execute();
    while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC))
    {
        $receptE = 'oui';
        $date_recept = $row4['date_reception'];
        $id_reception = $row4['id_reception'];

    }

    $requete3 =  $dbase->prepare(" SELECT * FROM livraison WHERE id_reception=:id_reception");
    $requete3->bindParam(':id_reception',$id_reception);
    $requete3->execute();
    while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
    {
        $liveE = 'oui';
        $date_livraison = $row3['date_livraison'];
        $heure_livraison = $row3['heure_livraison'];
        $traveaux_fait = $row3['traveaux_fait'];
        $traveaux_non_fait = $row3['traveaux_non_fait'];
        $kilometrage = $row3['kilometrage'];
        $num_facture = $row3['num_facture'];
    }

    if($receptE == 'oui' AND $liveE == 'oui')
    {
        $liste[] = array('d_c'=>$date_client,'t_d'=>$tel_dir,'t_c'=>$tel_cel,'t_f'=>$tel_fix,'client'=>$client,'d_l'=>$date_livraison,'h_l'=>$heure_livraison,'trav_f'=>$traveaux_fait,'trav_nf'=>$traveaux_non_fait,'km'=>$kilometrage,'num_facture'=>$num_facture,'date_recept'=>$date_recept,'chassis'=>$chassis,'type_modele'=>$typeModele);
    }
    elseif ($receptE == 'non' AND $liveE == 'oui')
    {
        $liste[] = array('d_c'=>$date_client,'t_d'=>$tel_dir,'t_c'=>$tel_cel,'t_f'=>$tel_fix,'client'=>$client,'d_l'=>$date_livraison,'h_l'=>$heure_livraison,'trav_f'=>$traveaux_fait,'trav_nf'=>$traveaux_non_fait,'km'=>$kilometrage,'num_facture'=>$num_facture,'date_recept'=>'non','chassis'=>$chassis,'type_modele'=>$typeModele);
    }
    elseif ($liveE == 'non' AND $receptE=='oui')
    {
        $liste[] = array('d_c'=>$date_client,'t_d'=>$tel_dir,'t_c'=>$tel_cel,'t_f'=>$tel_fix,'client'=>$client,'d_l'=>'non','h_l'=>'non','trav_f'=>'non','trav_nf'=>'non','km'=>'non','num_facture'=>'non','date_recept'=>$date_recept,'chassis'=>$chassis,'type_modele'=>$typeModele);
    }
    else
    {
        $liste[] = array('d_c'=>$date_client,'t_d'=>$tel_dir,'t_c'=>$tel_cel,'t_f'=>$tel_fix,'client'=>$client,'d_l'=>'non','h_l'=>'non','trav_f'=>'non','trav_nf'=>'non','km'=>'non','num_facture'=>'non','date_recept'=>'non','chassis'=>$chassis,'type_modele'=>$typeModele);
    }

    echo json_encode($liste);
}


if(isset($_POST['postnomclientreturnvehiculeandlivraisonandreception'])) {
    $client = htmlspecialchars(trim($_POST['postnomclientreturnvehiculeandlivraisonandreception']));

    $liveE = 'non';
    $receptE = 'non';


    $liste = array();
    $requete = $dbase->prepare(" SELECT * FROM client WHERE nom_raison_sociale=:nom_raison_sociale");
    $requete->bindParam(':nom_raison_sociale', $client);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC)) {
        $id_client = $row['id_client'];
        $tel_fix = $row['tel_fixe'];
        $tel_cel = $row['tel_cellulaire'];
        $tel_dir = $row['tel_ligne_directe'];
        $date_client = $row['date_creation'];
    }


    $requete1 =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_client=:id_client");
    $requete1->bindParam(':id_client',$id_client);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $id_vehicule = $row1['id_vehicule'];
        $imm = $row1['immatriculation'];
        $id_typeModel = $row1['id_modele'];
        $chassis = $row1['chassis'];

        $requete3 =  $dbase->prepare(" SELECT * FROM type_modele_vehicule WHERE id_modele=:id_modele");
        $requete3->bindParam(':id_modele',$id_typeModel);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $typeModel = $row3['libelle'];
        }

        $requete2 =  $dbase->prepare(" SELECT * FROM reception WHERE fk_id_vehicule=:fk_id_vehicule ORDER BY id_reception LIMIT 1");
        $requete2->bindParam(':fk_id_vehicule',$id_vehicule);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
        {
            $receptE = 'oui';
            $date_recept = $row2['date_reception'];
            $id_reception =  $row2['id_reception'];
        }


        $requete4 =  $dbase->prepare(" SELECT * FROM livraison WHERE id_reception=:id_reception");
        $requete4->bindParam(':id_reception',$id_reception);
        $requete4->execute();
        while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC))
        {
            $liveE = 'oui';
            $date_livraison = $row4['date_livraison'];
            $heure_livraison = $row4['heure_livraison'];
            $traveaux_fait = $row4['traveaux_fait'];
            $traveaux_non_fait = $row4['traveaux_non_fait'];
            $kilometrage = $row4['kilometrage'];
            $num_facture = $row4['num_facture'];
        }

        if($receptE == 'oui' AND $liveE == 'oui')
        {
            $liste[] = array('d_c'=>$date_client,'t_c'=>$tel_cel,'t_d'=>$tel_dir,'t_f'=>$tel_fix,'d_l'=>$date_livraison,'trav_f'=>$traveaux_fait,'km'=>$kilometrage,'num_facture'=>$num_facture,'date_recept'=>$date_recept,'immatricule'=>$imm,'chassis'=>$chassis,'type_modele'=>$typeModel);
        }
        elseif ($receptE == 'non' AND $liveE == 'oui')
        {
            $liste[] = array('d_c'=>$date_client,'t_c'=>$tel_cel,'t_d'=>$tel_dir,'t_f'=>$tel_fix,'d_l'=>$date_livraison,'trav_f'=>$traveaux_fait,'km'=>$kilometrage,'num_facture'=>$num_facture,'date_recept'=>'non','immatricule'=>$imm,'chassis'=>$chassis,'type_modele'=>$typeModel);
        }
        elseif ($liveE == 'non' AND $receptE=='oui')
        {
            $liste[] = array('d_c'=>$date_client,'t_c'=>$tel_cel,'t_d'=>$tel_dir,'t_f'=>$tel_fix,'d_l'=>'non','trav_f'=>'non','km'=>'non','num_facture'=>'non','date_recept'=>$date_recept,'immatricule'=>$imm,'chassis'=>$chassis,'type_modele'=>$typeModel);
        }
        else
        {
            $liste[] = array('d_c'=>$date_client,'t_c'=>$tel_cel,'t_d'=>$tel_dir,'t_f'=>$tel_fix,'d_l'=>'non','trav_f'=>'non','km'=>'non','num_facture'=>'non','date_recept'=>'non','immatricule'=>$imm,'chassis'=>$chassis,'type_modele'=>$typeModel);
        }

    }

    echo json_encode($liste);

}

if(isset($_POST['postidlivraisonandreturnlivraison'])) {
    $id_livraison = htmlspecialchars(trim($_POST['postidlivraisonandreturnlivraison']));

    $liste = array();

    $requete1 =  $dbase->prepare(" SELECT * FROM livraison WHERE id_livraison=:id_livraison");
    $requete1->bindParam(':id_livraison',$id_livraison);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $date_livraison = $row1['date_livraison'];
        $heure_livraison = $row1['heure_livraison'];
        $date_fg = $row1['date_finG'];
        $num_facture = $row1['num_facture'];
        $montant = $row1['montant'];
        $kilometrage = $row1['kilometrage'];
        $traveaux_fait = $row1['traveaux_fait'];
        $traveaux_non_fait = $row1['traveaux_non_fait'];
        $id_reception = $row1['id_reception'];
    }

    $requete0=  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
    $requete0->bindParam(':id_reception',$id_reception);
    $requete0->execute();
    while ($row0 = $requete0->fetch(PDO::FETCH_ASSOC))
    {
        $num_reception = $row0['num_reception'];
        $id_vehicule= $row0['fk_id_vehicule'];
    }


    $requete2=  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
    $requete2->bindParam(':id_vehicule',$id_vehicule);
    $requete2->execute();
    while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
    {
        $id_client= $row2['id_client'];
        $id_typeModele= $row2['id_modele'];
        $imm= $row2['immatriculation'];
        $chassis= $row2['chassis'];
    }

    $requete3 = $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
    $requete3->bindParam(':id_client', $id_client);
    $requete3->execute();
    while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC)) {
        $client = $row3['nom_raison_sociale'];
        $tel_fix = $row3['tel_fixe'];
        $tel_cel = $row3['tel_cellulaire'];
        $tel_dir = $row3['tel_ligne_directe'];
        $date_client = $row3['date_creation'];
    }

    $requete4=  $dbase->prepare(" SELECT * FROM type_modele_vehicule WHERE id_modele=:id_modele");
    $requete4->bindParam(':id_modele',$id_typeModele);
    $requete4->execute();
    while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC))
    {
        $typeModele = $row4['libelle'];
    }

    $liste[]=array('num_r'=>$num_reception,'client'=>$client,'type_model'=>$typeModele,'imm'=>$imm,'d_fg'=>$date_fg,'h_l'=>$heure_livraison,'d_l'=>$date_livraison,'t_f'=>$traveaux_fait,'t_nf'=>$traveaux_non_fait,'km'=>$kilometrage,'num_f'=>$num_facture,'montant'=>$montant);

    echo json_encode($liste);
}

if(isset($_POST['postidprogandreturnprog'])) {
    $id_prog = htmlspecialchars(trim($_POST['postidprogandreturnprog']));

    $liste = array();
    $requete1 = $dbase->prepare(" SELECT * FROM programmation WHERE id_programmation=:id_programmation");
    $requete1->bindParam(':id_programmation', $id_prog);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {
        $date = $row1['date_programmation'];
        $heure = $row1['heure_programmation'];
        $ob = $row1['tache_prog'];
        $id_vehicule = $row1['fk_id_vehicule'];
    }

    $requete2=  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
    $requete2->bindParam(':id_vehicule',$id_vehicule);
    $requete2->execute();
    while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
    {
        $id_client= $row2['id_client'];
        $id_typeModele= $row2['id_modele'];
        $imm= $row2['immatriculation'];
        $chassis= $row2['chassis'];
    }

    $requete3 = $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
    $requete3->bindParam(':id_client', $id_client);
    $requete3->execute();
    while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC)) {
        $client = $row3['nom_raison_sociale'];
        $tel_fix = $row3['tel_fixe'];
        $tel_cel = $row3['tel_cellulaire'];
        $tel_dir = $row3['tel_ligne_directe'];
        $date_client = $row3['date_creation'];
    }

    $liste[]=array('date'=>$date,'heure'=>$heure,'client'=>$client,'imm'=>$imm,'ob'=>$ob);

    echo json_encode($liste);
}

if(isset($_POST['postidclientandreturnclient'])) {
    $id_client = htmlspecialchars(trim($_POST['postidclientandreturnclient']));

    $liste = array();
    $requete1 = $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
    $requete1->bindParam(':id_client', $id_client);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {
        $code_client = $row1['code_client'];
        $client = $row1['nom_raison_sociale'];
        $tel_fix = $row1['tel_fixe'];
        $tel_cel = $row1['tel_cellulaire'];
        $tel_dir = $row1['tel_ligne_directe'];
        $mail = $row1['mail'];
        $adresse = $row1['adresse'];
        $date_client = $row1['date_creation'];
        $id_genre = $row1['id_genre'];
    }

    $requete =  $dbase->prepare(" SELECT * FROM genre_client WHERE id_genre=:id_genre");
    $requete->bindParam(':id_genre',$id_genre);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $genre = $row['libelle'];
    }

    $liste[]=array('cd'=>$code_client,'client'=>$client,'tf'=>$tel_fix,'tc'=>$tel_cel,'td'=>$tel_dir,'mail'=>$mail,'ad'=>$adresse,'date'=>$date_client,'genre'=>$genre);

    echo json_encode($liste);
}

if(isset($_POST['postidvehiculeandreturnvehicule'])) {
    $id_vehicule = htmlspecialchars(trim($_POST['postidvehiculeandreturnvehicule']));

    $liste = array();

    $requete=  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
    $requete->bindParam(':id_vehicule',$id_vehicule);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_client= $row['id_client'];
        $id_typeModele= $row['id_modele'];
        $id_typeMoteur= $row['id_moteur'];
        $imm= $row['immatriculation'];
        $chassis= $row['chassis'];
        $couleur= $row['couleur'];
        $date_livraison= $row['date_livraison'];
        $garantie= $row['garantie'];
    }

    $requete1 = $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
    $requete1->bindParam(':id_client', $id_client);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {
        $client = $row1['nom_raison_sociale'];
        $code_client = $row1['code_client'];
        $tel_fix = $row1['tel_fixe'];
        $tel_cel = $row1['tel_cellulaire'];
        $tel_dir = $row1['tel_ligne_directe'];
        $date_client = $row1['date_creation'];
    }

    $requete2=  $dbase->prepare(" SELECT * FROM type_modele_vehicule WHERE id_modele=:id_modele");
    $requete2->bindParam(':id_modele',$id_typeModele);
    $requete2->execute();
    while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
    {
        $typeModele = $row2['libelle'];
    }

    $requete3=  $dbase->prepare(" SELECT * FROM type_moteur_vehicule WHERE id_moteur=:id_moteur");
    $requete3->bindParam(':id_moteur',$id_typeMoteur);
    $requete3->execute();
    while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
    {
        $typeMoteur = $row3['libelle'];
    }

    $liste[]=array('imm'=>$imm,'chassis'=>$chassis,'couleur'=>$couleur,'client'=>$client,'code'=>$code_client,'type'=>$typeModele,'moteur'=>$typeMoteur,'date_livraison'=>$date_livraison,'garantie'=>$garantie);

    echo json_encode($liste);
}

if(isset($_POST['postidtechandreturntech']))
{
    $id_tech = htmlspecialchars(trim($_POST['postidtechandreturntech']));

    $liste = array();
    $requete1 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
    $requete1->bindParam(':id_technicien',$id_tech);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $techN = $row1['nom_technicien'];
        $techP = $row1['prenom_technicien'];
        $contact = $row1['contact'];
        $adresse = $row1['adresse'];
        $date = $row1['date_embauche'];
        $id_statut = $row1['id_statut'];
        $id_specialite = $row1['id_specialite'];
    }


    $requete =  $dbase->prepare(" SELECT * FROM specialite_technicien WHERE id_specialite=:id_specialite");
    $requete->bindParam(':id_specialite',$id_specialite);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $spec = $row['libelle'];
    }

    $requete2 =  $dbase->prepare(" SELECT * FROM statut_technicien WHERE id_statut=:id_statut");
    $requete2->bindParam(':id_statut',$id_statut);
    $requete2->execute();
    while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
    {
        $statut = $row2['libelle'];
    }

    $liste[]= array('nom'=>$techN,'prnom'=>$techP,'cont'=>$contact,'ad'=>$adresse,'date'=>$date,'st'=>$statut,'sp'=>$spec);

    echo json_encode($liste);
}

if(isset($_POST['postidevolutionandsendevolution']))
{
    $id_evolution = htmlspecialchars(trim($_POST['postidevolutionandsendevolution']));

    $liste = array();
    $requete1 =  $dbase->prepare(" SELECT * FROM evolution_travaux WHERE id_evolution_travaux=:id_evolution_travaux");
    $requete1->bindParam(':id_evolution_travaux',$id_evolution);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $etat1 = $row1['etat1'];
        $detat1 = $row1['date_etat1'];
        $etat2 = $row1['etat2'];
        $detat2 = $row1['date_etat2'];
        $etat3 = $row1['etat3'];
        $detat3 = $row1['date_etat3'];
        $etat4 = $row1['etat4'];
        $detat4 = $row1['date_etat4'];
        $etat5 = $row1['etat5'];
        $detat5 = $row1['date_etat5'];
        $observation = $row1['observation'];
        $facture = $row1['facture'];
        $date_livraison = $row1['date_livraison'];
        $heure_livraison = $row1['heure_livraison'];
    }

    $liste[]=array('e1'=>$etat1,'de1'=>$detat1,'e2'=>$etat2,'de2'=>$detat2,'e3'=>$etat3,'de3'=>$detat3,'e4'=>$etat4,'de4'=>$detat4,'e5'=>$etat5,'de5'=>$detat5,'ob'=>$observation,'fac'=>$facture,'dl'=>$date_livraison,'hl'=>$heure_livraison);

    echo json_encode($liste);
}

if(isset($_POST['postidreceptionandsendrecommandaton']))
{
    $id_reception = htmlspecialchars(trim($_POST['postidreceptionandsendrecommandaton']));

    $liste = array();
    $requete1 =  $dbase->prepare(" SELECT * FROM recommandation WHERE id_reception=:id_reception");
    $requete1->bindParam(':id_reception',$id_reception);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $dr = $row1['date_recommandation'];
        $pr = $row1['probleme'];
        $recom = $row1['recommandation'];
        $liste[]=array('dr'=>$dr,'pr'=>$pr,'recom'=>$recom);

    }

    echo json_encode($liste);
}

if(isset($_POST['postListClientWereReceptionExistNew']))
{
    $nouvauClient = '';
    $ancienClient = '';

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM vehicule");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $existe = 'non';
        $existeR = 'non';
        $id_vehicule = $row['id_vehicule'];
        $id_client = $row['id_client'];
        $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE fk_id_vehicule=:fk_id_vehicule ORDER BY id_reception DESC LIMIT 1");
        $requete1->bindParam(':fk_id_vehicule',$id_vehicule);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $id_reception = $row1['id_reception'];
            $existeR = 'oui';
        }

        $requete2 =  $dbase->prepare(" SELECT * FROM livraison WHERE id_reception=:id_reception");
        $requete2->bindParam(':id_reception',$id_reception);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
        {
            $existe = 'oui';
        }

        $requete3 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete3->bindParam(':id_client',$id_client);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
        {
            $nom = $row3['nom_raison_sociale'];
        }

        $nouvauClient = $id_client;

        if ($existe == 'non' AND $existeR == 'oui' AND $ancienClient != $nouvauClient)
        {
            $liste[] = array('client'=>$nom) ;
            $ancienClient = $nouvauClient;
        }


    }

    echo json_encode($liste);
}

if(isset($_POST['postClientReturnImmatriculationValide']))
{
    $client = $_POST['postClientReturnImmatriculationValide'];

    $liste = array();

    $requete3 =  $dbase->prepare(" SELECT * FROM client WHERE nom_raison_sociale=:nom_raison_sociale");
    $requete3->bindParam(':nom_raison_sociale',$client);
    $requete3->execute();
    while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
    {
        $id_client = $row3['id_client'];
    }

    $requete =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_client=:id_client");
    $requete->bindParam(':id_client',$id_client);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $existe = 'non';
        $existeR = 'non';
        $id_vehicule = $row['id_vehicule'];
        $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE fk_id_vehicule=:fk_id_vehicule ORDER BY id_reception DESC LIMIT 1");
        $requete1->bindParam(':fk_id_vehicule',$id_vehicule);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $id_reception = $row1['id_reception'];
            $existeR = 'oui';
        }

        $requete2 =  $dbase->prepare(" SELECT * FROM livraison WHERE id_reception=:id_reception");
        $requete2->bindParam(':id_reception',$id_reception);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
        {
            $existe = 'oui';
        }

        if ($existe == 'non' AND $existeR == 'oui')
        {
            $liste[] = array('imm'=>$row['immatriculation']);
        }

    }
    echo json_encode($liste);
}

if(isset($_POST['postidactiviteandreturnactivite']))
{
    $id_activite = htmlspecialchars(trim($_POST['postidactiviteandreturnactivite']));

    $liste = array();

    $requete3 =  $dbase->prepare(" SELECT * FROM programmation_activite WHERE id_activite=:id_activite");
    $requete3->bindParam(':id_activite',$id_activite);
    $requete3->execute();
    while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
    {
        $d = $row3['date_activite'];
        $hd = $row3['heure_debut_activite'];
        $hf = $row3['heure_fin_activite'];
        $tache = $row3['tache'];
        $id_technicien = $row3['id_technicien'];
        $id_reception = $row3['id_reception'];
    }


    $requete1 =  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
    $requete1->bindParam(':id_reception',$id_reception);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
       $id_vehicule = $row1['fk_id_vehicule'];
    }

    $requete2 =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
    $requete2->bindParam(':id_vehicule',$id_vehicule);
    $requete2->execute();
    while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
    {
        $imm = $row2['immatriculation'];
    }


    $requete =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
    $requete->bindParam(':id_technicien',$id_technicien);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $techN = $row['nom_technicien'];
        $techP = $row['prenom_technicien'];
        $tech = $techN.' '.$techP;
    }

    $liste[] = array('imm'=>$imm,'d'=>$d,'hd'=>$hd,'hf'=>$hf,'t'=>$tache,'tn'=>$tech);
    echo json_encode($liste);
}

if(isset($_POST['postidpointagereturnpointage']))
{
    $id_pointage = htmlspecialchars(trim($_POST['postidpointagereturnpointage']));

    $liste = array();

    $requete3 =  $dbase->prepare(" SELECT * FROM pointage WHERE id_pointage=:id_pointage");
    $requete3->bindParam(':id_pointage',$id_pointage);
    $requete3->execute();
    while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
    {
        $id_technicien = $row3['fk_id_technicien'];
        $num_or = $row3['num_or'];
        $designation = $row3['designation'];
        $date_pointage = $row3['date_pointage'];
        $objectif_pointage = $row3['objectif_pointage'];
        $hr_aut_pointage = $row3['hr_aut_pointage'];
        $travaux_execute_pointage = $row3['travaux_execute_pointage'];
        $heure_d_pointage = $row3['heure_d_pointage'];
        $heure_f_pointage = $row3['heure_f_pointage'];
    }

    $requete =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
    $requete->bindParam(':id_technicien',$id_technicien);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_specialite = $row['id_specialite'];
        $techN = $row['nom_technicien'];
        $techP = $row['prenom_technicien'];
        $tech = $techN.' '.$techP;
    }

    $requete1 =  $dbase->prepare(" SELECT * FROM specialite_technicien WHERE id_specialite=:id_specialite");
    $requete1->bindParam(':id_specialite',$id_specialite);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $techSpetial = $row1['libelle'];
    }

    $liste[] = array('techSpetial'=>$techSpetial,'tech'=>$tech,'heure_f_pointage'=>$heure_f_pointage,'heure_d_pointage'=>$heure_d_pointage,'travaux_execute_pointage'=>$travaux_execute_pointage,'num_or'=>$num_or,'designation'=>$designation,'date_pointage'=>$date_pointage,'objectif_pointage'=>$objectif_pointage,'hr_aut_pointage'=>$hr_aut_pointage);
    echo json_encode($liste);
}

if(isset($_POST['postlistactiviteuniquenumreception']))
{
    $liste = array();

    $requete =  $dbase->prepare(" SELECT * FROM reception");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
       $liste[] = array('idreception'=>$row['id_reception'], 'numreception'=>$row['num_reception']);
    }

    echo json_encode($liste);
}

if(isset($_POST['postreceptionreturnprogrammationactivite']))
{
    $num_reception = htmlspecialchars(trim($_POST['postreceptionreturnprogrammationactivite']));

    $liste = array();

    $requete =  $dbase->prepare(" SELECT * FROM reception WHERE num_reception=:num_reception");
    $requete->bindParam(':num_reception',$num_reception);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_reception = $row['id_reception'];
    }

    $requete1 =  $dbase->prepare(" SELECT * FROM programmation_activite WHERE id_reception=:id_reception");
    $requete1->bindParam(':id_reception',$id_reception);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $id_tech = $row1['id_technicien'];

        $requete2 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
        $requete2->bindParam(':id_technicien',$id_tech);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
        {
            $techN = $row2['nom_technicien'];
            $techP = $row2['prenom_technicien'];
            $tech = $techN.' '.$techP;
        }

        $liste[] = array('idactivite'=>$row1['id_activite'],'date'=>$row1['date_activite'], 'hd'=>$row1['heure_debut_activite'], 'hf'=>$row1['heure_fin_activite'], 'tech'=>$tech,'tache'=>$row1['tache']);
    }

    echo json_encode($liste);
}

if(isset($_POST['postidrevisionandreturnrevision']) AND !empty($_POST['postidrevisionandreturnrevision']))
{
    $id_revision = htmlspecialchars(trim($_POST['postidrevisionandreturnrevision']));

    $liste = array();

    $requete =  $dbase->prepare(" SELECT * FROM revision WHERE id_revision=:id_revision");
    $requete->bindParam(':id_revision',$id_revision);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_vehicule = $row['id_vehicule'];
        $date= $row['date_revision'];
        $duree= $row['duree'];

        $requete1 =  $dbase->prepare("SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete1->bindParam(':id_vehicule',$id_vehicule);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $imm = $row1['immatriculation'];
        }

        $liste[] = array('imm'=>$imm,'date'=>$date,'duree'=>$duree);
    }

    echo json_encode($liste);
}

if(isset($_POST['postidvisiteandreturnvisite']) AND !empty($_POST['postidvisiteandreturnvisite']))
{
    $id_visite = htmlspecialchars(trim($_POST['postidvisiteandreturnvisite']));

    $liste = array();

    $requete =  $dbase->prepare(" SELECT * FROM visite WHERE id_visite=:id_visite");
    $requete->bindParam(':id_visite',$id_visite);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_vehicule = $row['id_vehicule'];
        $date= $row['date_visite'];
        $duree= $row['duree'];

        $requete1 =  $dbase->prepare("SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete1->bindParam(':id_vehicule',$id_vehicule);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $imm = $row1['immatriculation'];
        }

        $liste[] = array('imm'=>$imm,'date'=>$date,'duree'=>$duree);
    }

    echo json_encode($liste);
}

if(isset($_POST['postidassuranceandreturnassurance']) AND !empty($_POST['postidassuranceandreturnassurance']))
{
    $id_assurance = htmlspecialchars(trim($_POST['postidassuranceandreturnassurance']));

    $liste = array();

    $requete =  $dbase->prepare(" SELECT * FROM assurance WHERE id_assurance=:id_assurance");
    $requete->bindParam(':id_assurance',$id_assurance);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_vehicule = $row['id_vehicule'];
        $date= $row['date_assurance'];
        $duree= $row['duree'];

        $requete1 =  $dbase->prepare("SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete1->bindParam(':id_vehicule',$id_vehicule);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $imm = $row1['immatriculation'];
        }

        $liste[] = array('imm'=>$imm,'date'=>$date,'duree'=>$duree);
    }

    echo json_encode($liste);
}

if(isset($_POST['postidgarantieandreturngarantie']) AND !empty($_POST['postidgarantieandreturngarantie']))
{
    $id_garantie = htmlspecialchars(trim($_POST['postidgarantieandreturngarantie']));

    $liste = array();

    $requete =  $dbase->prepare(" SELECT * FROM garantie WHERE id_garantie=:id_garantie");
    $requete->bindParam(':id_garantie',$id_garantie);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_vehicule = $row['id_vehicule'];
        $date= $row['date_garantie'];
        $duree= $row['duree'];

        $requete1 =  $dbase->prepare("SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete1->bindParam(':id_vehicule',$id_vehicule);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $imm = $row1['immatriculation'];
        }

        $liste[] = array('imm'=>$imm,'date'=>$date,'duree'=>$duree);
    }

    echo json_encode($liste);
}

if(isset($_POST['postidmaintstandandreturnmaintstand']) AND !empty($_POST['postidmaintstandandreturnmaintstand']))
{
    $id_garantie = htmlspecialchars(trim($_POST['postidmaintstandandreturnmaintstand']));

    $liste = array();

    $requete =  $dbase->prepare(" SELECT * FROM maintenance_standard WHERE id_maintenance_standard=:id_maintenance_standard");
    $requete->bindParam(':id_maintenance_standard',$id_garantie);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_vehicule = $row['id_vehicule'];
        $kilometrage = $row['kilometrage'];
        $dates = $row['dates'];
        $tache = $row['tache'];

        $requete1 =  $dbase->prepare("SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete1->bindParam(':id_vehicule',$id_vehicule);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $imm = $row1['immatriculation'];
            $id_client = $row1['id_client'];
        }

        $requete2 =  $dbase->prepare("SELECT * FROM client WHERE id_client=:id_client");
        $requete2->bindParam(':id_client',$id_client);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
        {
            $client = $row2['nom_raison_sociale'];
        }

        $kilometrage = str_replace(' Km','',$kilometrage);

        $tache = '['.$tache.']';

        $liste[] = array('client'=>$client,'imm'=>$imm,'dates'=>$dates,'kilometrage'=>$kilometrage,'taches'=>$tache);
    }

    echo json_encode($liste);
}