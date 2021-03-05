<?php
require '../model/Initial.php';
if(isset($_POST['ClientPlusNbrListSelect']) AND isset($_POST['ClientPlusElementNombreParcourir']))
{
    $nbrListSelect = htmlspecialchars(trim($_POST['ClientPlusNbrListSelect']));
    $elementNombreParcourir = htmlspecialchars(trim($_POST['ClientPlusElementNombreParcourir']));
    $elementNombreParcourirT = htmlspecialchars(trim($_POST['ClientPlusElementNombreParcourir']));

    $liste = array();
    $elementNombreT = 0;
    $requeteT = $dbase->prepare("SELECT * FROM client ORDER BY id_client DESC");
    $requeteT->execute();
    while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}

    $elementNombre = 0;
    $requete = $dbase->prepare("SELECT * FROM client ORDER BY id_client DESC LIMIT ".$nbrListSelect." OFFSET ".$elementNombreParcourir." ");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC)) {

        $id_genre = $row['id_genre'];
        $elementNombreParcourirT++;

        $requete1 = $dbase->prepare("SELECT * FROM genre_client WHERE id_genre=:id_genre");
        $requete1->bindParam(':id_genre', $id_genre);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {
            $genre = $row1['libelle'];
        }

       $liste[] = array('elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'id_client'=>$row['id_client'],'code_client'=>$row["code_client"],'genre'=>$genre,'nom_raison_sociale'=>$row["nom_raison_sociale"],'tel_fixe'=>$row["tel_fixe"],'tel_cellulaire'=>$row["tel_cellulaire"],'tel_ligne_directe'=>$row["tel_ligne_directe"],'mail'=>$row["mail"],'adresse'=>$row["adresse"],'matricule'=>$row["num_matricule"]);
    }

    echo json_encode($liste);
}

if(isset($_POST['ClientMoinNbrListSelect']) AND isset($_POST['ClientMoinElementNombreParcourir']))
{
    $nbrListSelect = htmlspecialchars(trim($_POST['ClientMoinNbrListSelect']));

    $elementNombreParcourirT = htmlspecialchars(trim($_POST['ClientMoinElementNombreParcourir']));

    $elementNombreParcourirt = htmlspecialchars(trim($_POST['ClientMoinElementNombreParcourir']));
    $elementNombreT = htmlspecialchars(trim($_POST['ClientMoinElementNombreT']));


    $equival = $elementNombreT - $elementNombreParcourirt;

    if($equival > 0)
    {
        $elementNombreParcourir = htmlspecialchars(trim($_POST['ClientMoinElementNombreParcourir'])) - ($nbrListSelect*2);
        $elementNombreParcourirT = $elementNombreParcourirT - $nbrListSelect;
    }
    else
    {
        $rest = $elementNombreParcourirT%$nbrListSelect;
        if($rest==0)
        {
            $elementNombreParcourir = htmlspecialchars(trim($_POST['ClientMoinElementNombreParcourir'])) - ($nbrListSelect*2);
            $elementNombreParcourirT = $elementNombreParcourirT - $nbrListSelect;
        }
        else
        {
            $elementNombreParcourir = htmlspecialchars(trim($_POST['ClientMoinElementNombreParcourir'])) - ($nbrListSelect+$rest);
            $elementNombreParcourirT = $elementNombreParcourirT - $rest;
        }
    }

    $liste = array();
    $elementNombreT = 0;
    $requeteT = $dbase->prepare("SELECT * FROM client ORDER BY id_client DESC");
    $requeteT->execute();
    while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}

    $elementNombre = 0;
    $requete = $dbase->prepare("SELECT * FROM client ORDER BY id_client DESC LIMIT ".$nbrListSelect." OFFSET ".$elementNombreParcourir." ");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC)) {

        $id_genre = $row['id_genre'];

        $requete1 = $dbase->prepare("SELECT * FROM genre_client WHERE id_genre=:id_genre");
        $requete1->bindParam(':id_genre', $id_genre);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {
            $genre = $row1['libelle'];
        }

        $liste[] = array('elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'id_client'=>$row['id_client'],'code_client'=>$row["code_client"],'genre'=>$genre,'nom_raison_sociale'=>$row["nom_raison_sociale"],'tel_fixe'=>$row["tel_fixe"],'tel_cellulaire'=>$row["tel_cellulaire"],'tel_ligne_directe'=>$row["tel_ligne_directe"],'mail'=>$row["mail"],'adresse'=>$row["adresse"],'matricule'=>$row["num_matricule"]);
    }

    echo json_encode($liste);
}

if(isset($_POST['VehiculePlusNbrListSelect']) AND isset($_POST['VehiculePlusElementNombreParcourir']))
{
    $nbrListSelect = htmlspecialchars(trim($_POST['VehiculePlusNbrListSelect']));
    $elementNombreParcourir = htmlspecialchars(trim($_POST['VehiculePlusElementNombreParcourir']));
    $elementNombreParcourirT = htmlspecialchars(trim($_POST['VehiculePlusElementNombreParcourir']));

    $liste = array();
    $elementNombreT = 0;
    $requeteT = $dbase->prepare("SELECT * FROM vehicule ORDER BY id_vehicule DESC");
    $requeteT->execute();
    while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}

    $elementNombre = 0;
    $requete = $dbase->prepare("SELECT * FROM vehicule ORDER BY id_vehicule DESC LIMIT ".$nbrListSelect." OFFSET ".$elementNombreParcourir." ");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC)) {

        $id_client = $row["id_client"];
        $id_modele = $row["id_modele"];
        $id_moteur = $row["id_moteur"];

        $client = "";
        $type_modele = "";
        $type_moteur = "";

        $requete1 = $dbase->prepare("SELECT * FROM client WHERE id_client = '+$id_client+' ");
        $requete1->execute();

        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {
            $client = $row1["nom_raison_sociale"];
        }


        $requete2 = $dbase->prepare("SELECT * FROM type_modele_vehicule WHERE id_modele = '+$id_modele+'");
        $requete2->execute();

        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC)) {
            $type_modele = $row2["libelle"];
        }

        $requete3 = $dbase->prepare("SELECT * FROM type_moteur_vehicule WHERE id_moteur = '+$id_moteur+'");
        $requete3->execute();

        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC)) {
            $type_moteur = $row3["libelle"];
        }
        $elementNombreParcourirT++;
        $liste[] = array('elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'id_vehicule'=>$row['id_vehicule'],'client'=>$client,'immatriculation'=>$row["immatriculation"],'couleur'=>$row["couleur"],'chassis'=>$row["chassis"],'type_moteur'=>$type_moteur,'type_modele'=>$type_modele);
    }

    echo json_encode($liste);
}

if(isset($_POST['VehiculeMoinNbrListSelect']) AND isset($_POST['VehiculeMoinElementNombreParcourir']))
{
    $nbrListSelect = htmlspecialchars(trim($_POST['VehiculeMoinNbrListSelect']));

    $elementNombreParcourirT = htmlspecialchars(trim($_POST['VehiculeMoinElementNombreParcourir']));

    $elementNombreParcourirt = htmlspecialchars(trim($_POST['VehiculeMoinElementNombreParcourir']));
    $elementNombreT = htmlspecialchars(trim($_POST['VehiculeMoinElementNombreT']));


    $equival = $elementNombreT - $elementNombreParcourirt;

    if($equival > 0)
    {
        $elementNombreParcourir = htmlspecialchars(trim($_POST['VehiculeMoinElementNombreParcourir'])) - ($nbrListSelect*2);
        $elementNombreParcourirT = $elementNombreParcourirT - $nbrListSelect;
    }
    else
    {
        $rest = $elementNombreParcourirT%$nbrListSelect;
        if($rest==0)
        {
            $elementNombreParcourir = htmlspecialchars(trim($_POST['VehiculeMoinElementNombreParcourir'])) - ($nbrListSelect*2);
            $elementNombreParcourirT = $elementNombreParcourirT - $nbrListSelect;
        }
        else
        {
            $elementNombreParcourir = htmlspecialchars(trim($_POST['VehiculeMoinElementNombreParcourir'])) - ($nbrListSelect+$rest);
            $elementNombreParcourirT = $elementNombreParcourirT - $rest;
        }
    }

    $liste = array();
    $elementNombreT = 0;
    $requeteT = $dbase->prepare("SELECT * FROM vehicule ORDER BY id_vehicule DESC");
    $requeteT->execute();
    while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}

    $elementNombre = 0;
    $requete = $dbase->prepare("SELECT * FROM vehicule ORDER BY id_vehicule DESC LIMIT ".$nbrListSelect." OFFSET ".$elementNombreParcourir." ");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC)) {

        $id_client = $row["id_client"];
        $id_modele = $row["id_modele"];
        $id_moteur = $row["id_moteur"];

        $client = "";
        $type_modele = "";
        $type_moteur = "";

        $requete1 = $dbase->prepare("SELECT * FROM client WHERE id_client = '+$id_client+' ");
        $requete1->execute();

        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {
            $client = $row1["nom_raison_sociale"];
        }


        $requete2 = $dbase->prepare("SELECT * FROM type_modele_vehicule WHERE id_modele = '+$id_modele+'");
        $requete2->execute();

        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC)) {
            $type_modele = $row2["libelle"];
        }

        $requete3 = $dbase->prepare("SELECT * FROM type_moteur_vehicule WHERE id_moteur = '+$id_moteur+'");
        $requete3->execute();

        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC)) {
            $type_moteur = $row3["libelle"];
        }

        $liste[] = array('elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'id_vehicule'=>$row['id_vehicule'],'client'=>$client,'immatriculation'=>$row["immatriculation"],'couleur'=>$row["couleur"],'chassis'=>$row["chassis"],'type_moteur'=>$type_moteur,'type_modele'=>$type_modele);
    }

    echo json_encode($liste);
}

if(isset($_POST['TechPlusNbrListSelect']) AND isset($_POST['TechPlusElementNombreParcourir']))
{
    $nbrListSelect = htmlspecialchars(trim($_POST['TechPlusNbrListSelect']));
    $elementNombreParcourir = htmlspecialchars(trim($_POST['TechPlusElementNombreParcourir']));
    $elementNombreParcourirT = htmlspecialchars(trim($_POST['TechPlusElementNombreParcourir']));

    $liste = array();
    $elementNombreT = 0;
    $requeteT = $dbase->prepare("SELECT * FROM technicien ORDER BY id_technicien DESC");
    $requeteT->execute();
    while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}

    $elementNombre = 0;
    $requete = $dbase->prepare("SELECT * FROM technicien ORDER BY id_technicien DESC LIMIT ".$nbrListSelect." OFFSET ".$elementNombreParcourir." ");
    $requete->execute();

    while ($row = $requete->fetch(PDO::FETCH_ASSOC)) {

        $idSpecial = $row['id_specialite'];
        $idStatut = $row['id_statut'];

        $requete1 = $dbase->prepare("SELECT * FROM specialite_technicien WHERE id_specialite=:id_specialite");
        $requete1->bindParam(':id_specialite', $idSpecial);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {
            $libelleSP = $row1['libelle'];
        }

        $requete2 = $dbase->prepare("SELECT * FROM statut_technicien WHERE id_statut=:id_statut");
        $requete2->bindParam(':id_statut', $idStatut);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC)) {
            $libelleST = $row2['libelle'];
        }
        $elementNombreParcourirT++;

        $liste[] = array('elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'id_technicien'=>$row['id_technicien'],'nom_technicien'=>$row["nom_technicien"],'prenom_technicien'=>$row["prenom_technicien"],'libelleSP'=>$libelleSP,'libelleST'=>$libelleST,'date_embauche'=>$row['date_embauche'],'contact'=>$row["contact"],'adresse'=>$row["adresse"]);

    }

    echo json_encode($liste);
}

if(isset($_POST['TechMoinNbrListSelect']) AND isset($_POST['TechMoinElementNombreParcourir']))
{
    $nbrListSelect = htmlspecialchars(trim($_POST['TechMoinNbrListSelect']));

    $elementNombreParcourirT = htmlspecialchars(trim($_POST['TechMoinElementNombreParcourir']));

    $elementNombreParcourirt = htmlspecialchars(trim($_POST['TechMoinElementNombreParcourir']));
    $elementNombreT = htmlspecialchars(trim($_POST['TechMoinElementNombreT']));


    $equival = $elementNombreT - $elementNombreParcourirt;

    if($equival > 0)
    {
        $elementNombreParcourir = htmlspecialchars(trim($_POST['TechMoinElementNombreParcourir'])) - ($nbrListSelect*2);
        $elementNombreParcourirT = $elementNombreParcourirT - $nbrListSelect;
    }
    else
    {
        $rest = $elementNombreParcourirT%$nbrListSelect;
        if($rest==0)
        {
            $elementNombreParcourir = htmlspecialchars(trim($_POST['TechMoinElementNombreParcourir'])) - ($nbrListSelect*2);
            $elementNombreParcourirT = $elementNombreParcourirT - $nbrListSelect;
        }
        else
        {
            $elementNombreParcourir = htmlspecialchars(trim($_POST['TechMoinElementNombreParcourir'])) - ($nbrListSelect+$rest);
            $elementNombreParcourirT = $elementNombreParcourirT - $rest;
        }
    }

    $liste = array();
    $elementNombreT = 0;
    $requeteT = $dbase->prepare("SELECT * FROM technicien ORDER BY id_technicien DESC");
    $requeteT->execute();
    while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}

    $elementNombre = 0;
    $requete = $dbase->prepare("SELECT * FROM technicien ORDER BY id_technicien DESC LIMIT ".$nbrListSelect." OFFSET ".$elementNombreParcourir." ");
    $requete->execute();

    while ($row = $requete->fetch(PDO::FETCH_ASSOC)) {

        $idSpecial = $row['id_specialite'];
        $idStatut = $row['id_statut'];

        $requete1 = $dbase->prepare("SELECT * FROM specialite_technicien WHERE id_specialite=:id_specialite");
        $requete1->bindParam(':id_specialite', $idSpecial);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {
            $libelleSP = $row1['libelle'];
        }

        $requete2 = $dbase->prepare("SELECT * FROM statut_technicien WHERE id_statut=:id_statut");
        $requete2->bindParam(':id_statut', $idStatut);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC)) {
            $libelleST = $row2['libelle'];
        }

        $liste[] = array('elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'id_technicien'=>$row['id_technicien'],'nom_technicien'=>$row["nom_technicien"],'prenom_technicien'=>$row["prenom_technicien"],'libelleSP'=>$libelleSP,'libelleST'=>$libelleST,'date_embauche'=>$row['date_embauche'],'contact'=>$row["contact"],'adresse'=>$row["adresse"]);

    }

    echo json_encode($liste);
}

if(isset($_POST['ProgrammationInfoUniqueComplete']))
{
    $idProg = htmlspecialchars(trim($_POST['ProgrammationInfoUniqueComplete']));
    $liste = array();
    $requete = $dbase->prepare("SELECT * FROM programmation where id_programmation =:id_programmation");
    $requete->bindParam(':id_programmation',$idProg);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC)) {
        $id_vehicule = $row['fk_id_vehicule'];

        $requete1 = $dbase->prepare("SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete1->bindParam(':id_vehicule',$id_vehicule);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {
            $id_client = $row1['id_client'];
            $immatriculation = $row1['immatriculation'];

            $requete2 = $dbase->prepare("SELECT * FROM client WHERE id_client=:id_client");
            $requete2->bindParam(':id_client', $id_client);
            $requete2->execute();
            while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC)) {
                $client = $row2['nom_raison_sociale'];
                $date_pr = $row["date_programmation"];
                $heure_pr = $row["heure_programmation"];

                $liste[] = array('id_programmation'=>$row['id_programmation'],'nom_raison_sociale'=>$client,'immatriculation'=>$immatriculation,'date_programmation'=>$date_pr,'heure_programmation'=>$heure_pr,'tache'=>$row['tache_prog']);
            }

        }
    }
    echo json_encode($liste);

}

if(isset($_POST['ProgPlusNbrListSelect']) AND isset($_POST['ProgPlusElementNombreParcourir']))
{
    $nbrListSelect = htmlspecialchars(trim($_POST['ProgPlusNbrListSelect']));
    $elementNombreParcourir = htmlspecialchars(trim($_POST['ProgPlusElementNombreParcourir']));
    $elementNombreParcourirT = htmlspecialchars(trim($_POST['ProgPlusElementNombreParcourir']));

    $liste = array();
    $elementNombreT = 0;
    $requeteT = $dbase->prepare("SELECT * FROM programmation ORDER BY id_programmation DESC");
    $requeteT->execute();
    while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}

    $elementNombre = 0;
    $requete = $dbase->prepare("SELECT * FROM programmation ORDER BY id_programmation DESC LIMIT ".$nbrListSelect." OFFSET ".$elementNombreParcourir." ");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC)) {

        $id_vehicule = $row['fk_id_vehicule'];
        $tache = $row['tache_prog'];

        $requete1 = $dbase->prepare("SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete1->bindParam(':id_vehicule',$id_vehicule);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $id_client = $row1['id_client'];
            $immatriculation = $row1['immatriculation'];

            $requete2 = $dbase->prepare("SELECT * FROM client WHERE id_client=:id_client");
            $requete2->bindParam(':id_client',$id_client);
            $requete2->execute();
            while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC)) {
                $client = $row2['nom_raison_sociale'];
                $date_pr = $row["date_programmation"];
                $heure_pr = $row["heure_programmation"];
                $elementNombreParcourirT++;
                $liste[] = array('elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'id_programmation'=>$row['id_programmation'],'client'=>$client,'immatriculation'=>$immatriculation,'date_pr'=>$date_pr,'heure_pr'=>$heure_pr,'tache'=>$tache);
            }
        }
    }

    echo json_encode($liste);
}

if(isset($_POST['ProgMoinNbrListSelect']) AND isset($_POST['ProgMoinElementNombreParcourir']))
{
    $nbrListSelect = htmlspecialchars(trim($_POST['ProgMoinNbrListSelect']));

    $elementNombreParcourirT = htmlspecialchars(trim($_POST['ProgMoinElementNombreParcourir']));

    $elementNombreParcourirt = htmlspecialchars(trim($_POST['ProgMoinElementNombreParcourir']));
    $elementNombreT = htmlspecialchars(trim($_POST['ProgMoinElementNombreT']));


    $equival = $elementNombreT - $elementNombreParcourirt;

    if($equival > 0)
    {
        $elementNombreParcourir = htmlspecialchars(trim($_POST['ProgMoinElementNombreParcourir'])) - ($nbrListSelect*2);
        $elementNombreParcourirT = $elementNombreParcourirT - $nbrListSelect;
    }
    else
    {
        $rest = $elementNombreParcourirT%$nbrListSelect;
        if($rest==0)
        {
            $elementNombreParcourir = htmlspecialchars(trim($_POST['ProgMoinElementNombreParcourir'])) - ($nbrListSelect*2);
            $elementNombreParcourirT = $elementNombreParcourirT - $nbrListSelect;
        }
        else
        {
            $elementNombreParcourir = htmlspecialchars(trim($_POST['ProgMoinElementNombreParcourir'])) - ($nbrListSelect+$rest);
            $elementNombreParcourirT = $elementNombreParcourirT - $rest;
        }
    }

    $liste = array();
    $elementNombreT = 0;
    $requeteT = $dbase->prepare("SELECT * FROM programmation ORDER BY id_programmation DESC");
    $requeteT->execute();
    while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}

    $elementNombre = 0;
    $requete = $dbase->prepare("SELECT * FROM programmation ORDER BY id_programmation DESC LIMIT ".$nbrListSelect." OFFSET ".$elementNombreParcourir." ");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC)) {

        $id_vehicule = $row['fk_id_vehicule'];
        $tache = $row['tache_prog'];
        $requete1 = $dbase->prepare("SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete1->bindParam(':id_vehicule',$id_vehicule);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $id_client = $row1['id_client'];
            $immatriculation = $row1['immatriculation'];

            $requete2 = $dbase->prepare("SELECT * FROM client WHERE id_client=:id_client");
            $requete2->bindParam(':id_client',$id_client);
            $requete2->execute();
            while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC)) {
                $client = $row2['nom_raison_sociale'];
                $date_pr = $row["date_programmation"];
                $heure_pr = $row["heure_programmation"];

                $liste[] = array('elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'id_programmation'=>$row['id_programmation'],'client'=>$client,'immatriculation'=>$immatriculation,'date_pr'=>$date_pr,'heure_pr'=>$heure_pr,'tache'=>$tache);
            }
        }
    }

    echo json_encode($liste);
}

if(isset($_POST['RecepInfoUniqueComplete'])) {
    $id_reception = htmlspecialchars(trim($_POST['RecepInfoUniqueComplete']));

    $liste = array();
    $requete1 = $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
    $requete1->bindParam(':id_reception', $id_reception);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {
        $n_r = $row1['num_reception'];
        $t_r = $row1['type_reception'];
        $d_r = $row1['date_reception'];
        $h_r = $row1['heure_reception'];
        $km = $row1['kilometrage'];
        $tache = $row1['tache'];
        $modalP = $row1['mode_de_payement'];
        $tache_e = $row1['tache_effectif'];
        $id_vehicule = $row1['fk_id_vehicule'];
    }

    $requete2=  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
    $requete2->bindParam(':id_vehicule',$id_vehicule);
    $requete2->execute();
    while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
    {
        $imm = $row2['immatriculation'];
        $id_client = $row2['id_client'];
    }

    $requete3=  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
    $requete3->bindParam(':id_client',$id_client);
    $requete3->execute();
    while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
    {
        $client = $row3['nom_raison_sociale'];
        $tel_fix = $row3['tel_fixe'];
        $tel_cel = $row3['tel_cellulaire'];
        $tel_dir = $row3['tel_ligne_directe'];
    }

    $liste[]=array('mp'=>$modalP,'client'=>$client,'imm'=>$imm,'tache_e'=>$tache_e,'tache'=>$tache,'km'=>$km,'hr'=>$h_r,'dr'=>$d_r,'tr'=>$t_r,'nr'=>$n_r);
    echo json_encode($liste);
}

if(isset($_POST['RecepPlusNbrListSelect']) AND isset($_POST['RecepPlusElementNombreParcourir']) AND isset($_POST['TypeRecep']))
{
    $nbrListSelect = htmlspecialchars(trim($_POST['RecepPlusNbrListSelect']));
    $elementNombreParcourir = htmlspecialchars(trim($_POST['RecepPlusElementNombreParcourir']));
    $elementNombreParcourirT = htmlspecialchars(trim($_POST['RecepPlusElementNombreParcourir']));
    $type_reception = htmlspecialchars(trim($_POST['TypeRecep']));

    $liste = array();
    $elementNombreT = 0;
    $requeteT = $dbase->prepare("SELECT * FROM reception WHERE type_reception=:type_reception ORDER BY id_reception DESC");
    $requeteT->bindParam(':type_reception', $type_reception);
    $requeteT->execute();
    while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}

    $elementNombre = 0;
    $requete = $dbase->prepare("SELECT * FROM reception WHERE type_reception=:type_reception ORDER BY id_reception DESC LIMIT ".$nbrListSelect." OFFSET ".$elementNombreParcourir." ");
    $requete->bindParam(':type_reception', $type_reception);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC)) {
        $id_vehicule = $row['fk_id_vehicule'];
        $ob = $row['tache'];
        $tache = $row['tache_effectif'];

        $requete1 = $dbase->prepare("SELECT * FROM vehicule WHERE 	id_vehicule=:id_vehicule");
        $requete1->bindParam(':id_vehicule', $id_vehicule);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {
            $imma_vehicule = $row1['immatriculation'];
            $id_t_m = $row1['id_modele'];
            $id_client = $row1['id_client'];
        }

        $requete2 = $dbase->prepare("SELECT * FROM type_modele_vehicule WHERE 	id_modele=:id_modele");
        $requete2->bindParam(':id_modele', $id_t_m);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC)) {
            $type_model = $row2['libelle'];
        }

        $requete3 = $dbase->prepare("SELECT * FROM client WHERE 	id_client=:id_client");
        $requete3->bindParam(':id_client', $id_client);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC)) {
            $client = $row3['nom_raison_sociale'];
        }
        $elementNombreParcourirT++;
        $liste[] = array('elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'id_reception'=>$row['id_reception'],'num_reception'=>$row['num_reception'],'mode_de_payement'=>$row['mode_de_payement'],'date_reception'=>$row['date_reception'],'heure_reception'=>$row['heure_reception'],'kilometrage'=>$row['kilometrage'],'imma_vehicule'=>$imma_vehicule,'type_model'=>$type_model,'ob'=>$ob,'tache'=>$tache);
    }

    echo json_encode($liste);
}

if(isset($_POST['RecepMoinNbrListSelect']) AND isset($_POST['RecepMoinElementNombreParcourir']) AND isset($_POST['TypeRecep']))
{
    $nbrListSelect = htmlspecialchars(trim($_POST['RecepMoinNbrListSelect']));

    $elementNombreParcourirT = htmlspecialchars(trim($_POST['RecepMoinElementNombreParcourir']));

    $elementNombreParcourirt = htmlspecialchars(trim($_POST['RecepMoinElementNombreParcourir']));
    $elementNombreT = htmlspecialchars(trim($_POST['RecepMoinElementNombreT']));
    $type_reception = htmlspecialchars(trim($_POST['TypeRecep']));

    $equival = $elementNombreT - $elementNombreParcourirt;

    if($equival > 0)
    {
        $elementNombreParcourir = htmlspecialchars(trim($_POST['RecepMoinElementNombreParcourir'])) - ($nbrListSelect*2);
        $elementNombreParcourirT = $elementNombreParcourirT - $nbrListSelect;
    }
    else
    {
        $rest = $elementNombreParcourirT%$nbrListSelect;
        if($rest==0)
        {
            $elementNombreParcourir = htmlspecialchars(trim($_POST['RecepMoinElementNombreParcourir'])) - ($nbrListSelect*2);
            $elementNombreParcourirT = $elementNombreParcourirT - $nbrListSelect;
        }
        else
        {
            $elementNombreParcourir = htmlspecialchars(trim($_POST['RecepMoinElementNombreParcourir'])) - ($nbrListSelect+$rest);
            $elementNombreParcourirT = $elementNombreParcourirT - $rest;
        }
    }

    $liste = array();
    $elementNombreT = 0;
    $requeteT = $dbase->prepare("SELECT * FROM reception WHERE type_reception=:type_reception ORDER BY id_reception DESC");
    $requeteT->bindParam(':type_reception', $type_reception);
    $requeteT->execute();
    while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}

    $elementNombre = 0;
    $requete = $dbase->prepare("SELECT * FROM reception WHERE type_reception=:type_reception ORDER BY id_reception DESC LIMIT ".$nbrListSelect." OFFSET ".$elementNombreParcourir." ");
    $requete->bindParam(':type_reception', $type_reception);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC)) {
        $id_vehicule = $row['fk_id_vehicule'];
        $ob = $row['tache'];
        $tache = $row['tache_effectif'];

        $requete1 = $dbase->prepare("SELECT * FROM vehicule WHERE 	id_vehicule=:id_vehicule");
        $requete1->bindParam(':id_vehicule', $id_vehicule);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {
            $imma_vehicule = $row1['immatriculation'];
            $id_t_m = $row1['id_modele'];
            $id_client = $row1['id_client'];
        }

        $requete2 = $dbase->prepare("SELECT * FROM type_modele_vehicule WHERE 	id_modele=:id_modele");
        $requete2->bindParam(':id_modele', $id_t_m);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC)) {
            $type_model = $row2['libelle'];
        }

        $requete3 = $dbase->prepare("SELECT * FROM client WHERE 	id_client=:id_client");
        $requete3->bindParam(':id_client', $id_client);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC)) {
            $client = $row3['nom_raison_sociale'];
        }

        $liste[] = array('elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'id_reception'=>$row['id_reception'],'num_reception'=>$row['num_reception'],'mode_de_payement'=>$row['mode_de_payement'],'date_reception'=>$row['date_reception'],'heure_reception'=>$row['heure_reception'],'kilometrage'=>$row['kilometrage'],'imma_vehicule'=>$imma_vehicule,'type_model'=>$type_model,'ob'=>$ob,'tache'=>$tache);
    }

    echo json_encode($liste);
}

if(isset($_POST['MaintInfoUniqueComplete'])) {

    $id_maint = htmlspecialchars(trim($_POST['MaintInfoUniqueComplete']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM maintenance WHERE id_maintenance=:id_maintenance");
    $requete->bindParam(':id_maintenance',$id_maint);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC)) {
        $km = $row['maintenance_kilometrage'];
        $or = $row['num_ordre'];
        $date = $row['maintenance_date'];
        $maint = $row['maintenance_realise'];
        $id_reception = $row['id_reception'];
        $id_technicien = $row['id_technicien'];
    }

    $requete0 = $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
    $requete0->bindParam(':id_reception', $id_reception);
    $requete0->execute();
    while ($row0 = $requete0->fetch(PDO::FETCH_ASSOC)) {
        $id_vehicule = $row0['fk_id_vehicule'];
    }

    $requete1 = $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
    $requete1->bindParam(':id_vehicule', $id_vehicule);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {
        $imm = $row1['immatriculation'];
        $chassis = $row1['chassis'];
        $couleur = $row1['couleur'];
        $id_typeMoteur = $row1['id_moteur'];
        $id_client = $row1['id_client'];
        $id_typeModele = $row1['id_modele'];
    }

    $requete5 = $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
    $requete5->bindParam(':id_technicien', $id_technicien);
    $requete5->execute();
    while ($row5 = $requete5->fetch(PDO::FETCH_ASSOC)) {
        $techN = $row5['nom_technicien'];
        $techP = $row5['prenom_technicien'];
        $techTel = $row5['contact'];
        $techAdre = $row5['adresse'];
        $techId = $row5['id_technicien'];
        $tech = $techN.' '.$techP;
    }

    $requete3=  $dbase->prepare(" SELECT * FROM type_modele_vehicule WHERE id_modele=:id_modele");
    $requete3->bindParam(':id_modele',$id_typeModele);
    $requete3->execute();
    while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
    {
        $typeModel = $row3['libelle'];
    }

    $requete4=  $dbase->prepare(" SELECT * FROM type_moteur_vehicule WHERE id_moteur=:id_moteur");
    $requete4->bindParam(':id_moteur',$id_typeMoteur);
    $requete4->execute();
    while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC))
    {
        $moteur = $row4['libelle'];
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

    $liste[]=array('id_vehicule'=>$id_vehicule,'date'=>$date,'km'=>$km,'or'=>$or,'maint'=>$maint,'tech'=>$tech,'client'=>$client,'imm'=>$imm,'chassis'=>$chassis,'couleur'=>$couleur,'type_model'=>$typeModel,'moteur'=>$moteur);

    echo json_encode($liste);
}

if(isset($_POST['MaintPlusNbrListSelect']) AND isset($_POST['MaintPlusElementNombreParcourir']))
{
    $nbrListSelect = htmlspecialchars(trim($_POST['MaintPlusNbrListSelect']));
    $elementNombreParcourir = htmlspecialchars(trim($_POST['MaintPlusElementNombreParcourir']));
    $elementNombreParcourirT = htmlspecialchars(trim($_POST['MaintPlusElementNombreParcourir']));

    $liste = array();
    $elementNombreT = 0;
    $requeteT = $dbase->prepare("SELECT * FROM maintenance ORDER BY id_maintenance DESC");
    $requeteT->execute();
    while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}

    $elementNombre = 0;
    $requete = $dbase->prepare("SELECT * FROM maintenance ORDER BY id_maintenance DESC LIMIT ".$nbrListSelect." OFFSET ".$elementNombreParcourir." ");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC)) {
        $id_reception = $row['id_reception'];
        $id_tech = $row['id_technicien'];

        $requete1 = $dbase->prepare("SELECT * FROM technicien WHERE id_technicien=:id_technicien");
        $requete1->bindParam(':id_technicien', $id_tech);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {
            $techN = $row1['nom_technicien'];
            $techP = $row1['prenom_technicien'];
            $tech = $techN . ' ' . $techP;
        }

        $requete0 = $dbase->prepare("SELECT * FROM reception WHERE id_reception=:id_reception");
        $requete0->bindParam(':id_reception', $id_reception);
        $requete0->execute();
        while ($row0 = $requete0->fetch(PDO::FETCH_ASSOC)) {
            $id_vehicule = $row0['fk_id_vehicule'];
        }

        $requete2 = $dbase->prepare("SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete2->bindParam(':id_vehicule', $id_vehicule);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC)) {
            $imm = $row2['immatriculation'];
            $id_client = $row2['id_client'];
        }

        $requete3 = $dbase->prepare("SELECT * FROM client WHERE id_client=:id_client");
        $requete3->bindParam(':id_client', $id_client);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC)) {
            $clien = $row3['nom_raison_sociale'];
        }

        $elementNombreParcourirT++;
        $liste[] = array('elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'id_maintenance'=>$row['id_maintenance'],'num_ordre'=>$row['num_ordre'],'maintenance_date'=>$row['maintenance_date'],'immatriculation'=>$imm,'client'=>$clien,'technicien'=>$tech);

    }
    echo json_encode($liste);
}

if(isset($_POST['MaintMoinNbrListSelect']) AND isset($_POST['MaintMoinElementNombreParcourir']))
{
    $nbrListSelect = htmlspecialchars(trim($_POST['MaintMoinNbrListSelect']));

    $elementNombreParcourirT = htmlspecialchars(trim($_POST['MaintMoinElementNombreParcourir']));

    $elementNombreParcourirt = htmlspecialchars(trim($_POST['MaintMoinElementNombreParcourir']));
    $elementNombreT = htmlspecialchars(trim($_POST['MaintMoinElementNombreT']));

    $equival = $elementNombreT - $elementNombreParcourirt;

    if($equival > 0)
    {
        $elementNombreParcourir = htmlspecialchars(trim($_POST['MaintMoinElementNombreParcourir'])) - ($nbrListSelect*2);
        $elementNombreParcourirT = $elementNombreParcourirT - $nbrListSelect;
    }
    else
    {
        $rest = $elementNombreParcourirT%$nbrListSelect;
        if($rest==0)
        {
            $elementNombreParcourir = htmlspecialchars(trim($_POST['MaintMoinElementNombreParcourir'])) - ($nbrListSelect*2);
            $elementNombreParcourirT = $elementNombreParcourirT - $nbrListSelect;
        }
        else
        {
            $elementNombreParcourir = htmlspecialchars(trim($_POST['MaintMoinElementNombreParcourir'])) - ($nbrListSelect+$rest);
            $elementNombreParcourirT = $elementNombreParcourirT - $rest;
        }
    }

    $liste = array();
    $elementNombreT = 0;
    $requeteT = $dbase->prepare("SELECT * FROM maintenance ORDER BY id_maintenance DESC");
    $requeteT->execute();
    while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}

    $elementNombre = 0;
    $requete = $dbase->prepare("SELECT * FROM maintenance ORDER BY id_maintenance DESC LIMIT ".$nbrListSelect." OFFSET ".$elementNombreParcourir." ");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC)) {
        $id_reception = $row['id_reception'];
        $id_tech = $row['id_technicien'];

        $requete1 = $dbase->prepare("SELECT * FROM technicien WHERE id_technicien=:id_technicien");
        $requete1->bindParam(':id_technicien', $id_tech);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {
            $techN = $row1['nom_technicien'];
            $techP = $row1['prenom_technicien'];
            $tech = $techN . ' ' . $techP;
        }

        $requete0 = $dbase->prepare("SELECT * FROM reception WHERE id_reception=:id_reception");
        $requete0->bindParam(':id_reception', $id_reception);
        $requete0->execute();
        while ($row0 = $requete0->fetch(PDO::FETCH_ASSOC)) {
            $id_vehicule = $row0['fk_id_vehicule'];
        }

        $requete2 = $dbase->prepare("SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete2->bindParam(':id_vehicule', $id_vehicule);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC)) {
            $imm = $row2['immatriculation'];
            $id_client = $row2['id_client'];
        }

        $requete3 = $dbase->prepare("SELECT * FROM client WHERE id_client=:id_client");
        $requete3->bindParam(':id_client', $id_client);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC)) {
            $clien = $row3['nom_raison_sociale'];
        }

        $liste[] = array('elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'id_maintenance'=>$row['id_maintenance'],'num_ordre'=>$row['num_ordre'],'maintenance_date'=>$row['maintenance_date'],'immatriculation'=>$imm,'client'=>$clien,'technicien'=>$tech);

    }
    echo json_encode($liste);
}

if(isset($_POST['ActInfoNumReceptionUniqueSend']) AND isset($_POST['ActInfoNumReceptionUniqueSendPat']))
{
    $num_reception = htmlspecialchars(trim($_POST['ActInfoNumReceptionUniqueSend']));
    $pat = htmlspecialchars(trim($_POST['ActInfoNumReceptionUniqueSendPat']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM reception WHERE num_reception=:num_reception");
    $requete->bindParam(':num_reception',$num_reception);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_reception = $row['id_reception'];
    }

    $elementNombreT = 0;
    $requeteT = $dbase->prepare("SELECT * FROM programmation_activite WHERE id_reception=:id_reception ORDER BY id_activite DESC");
    $requeteT->bindParam(':id_reception',$id_reception);
    $requeteT->execute();
    while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}

    $elementNombreParcourirT = 0;
    $requete1 =  $dbase->prepare(" SELECT * FROM programmation_activite WHERE id_reception=:id_reception ORDER BY id_activite DESC LIMIT ".$pat." ");
    $requete1->bindParam(':id_reception',$id_reception);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $id_tech = $row1['id_technicien'];
        $id_reception =$row1['id_reception'];
        $requete2 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
        $requete2->bindParam(':id_technicien',$id_tech);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
        {
            $techN = $row2['nom_technicien'];
            $techP = $row2['prenom_technicien'];
            $tech = $techN.' '.$techP;
        }

        $requete3 = $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
        $requete3->bindParam(':id_reception', $id_reception);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC)) {
            $num_reception = $row3['num_reception'];
            $id_vehicule = $row3['fk_id_vehicule'];
        }

        $requete4 = $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete4->bindParam(':id_vehicule', $id_vehicule);
        $requete4->execute();
        while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC)) {
            $immatriculation = $row4['immatriculation'];
        }
        $elementNombreParcourirT++;
        $liste[] = array('elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'idactivite'=>$row1['id_activite'],'date'=>$row1['date_activite'], 'hd'=>$row1['heure_debut_activite'], 'hf'=>$row1['heure_fin_activite'], 'tech'=>$tech,'tache'=>$row1['tache'],'num_reception'=>$num_reception ,'immatriculation'=>$immatriculation);
    }

    echo json_encode($liste);
}

if(isset($_POST['ProgActPlusNbrListSelect']) AND isset($_POST['ProgActPlusElementNombreParcourir']) AND isset($_POST['NumReception']))
{
    $nbrListSelect = htmlspecialchars(trim($_POST['ProgActPlusNbrListSelect']));
    $elementNombreParcourir = htmlspecialchars(trim($_POST['ProgActPlusElementNombreParcourir']));
    $elementNombreParcourirT = htmlspecialchars(trim($_POST['ProgActPlusElementNombreParcourir']));
    $numReception = htmlspecialchars(trim($_POST['NumReception']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM reception WHERE num_reception=:num_reception");
    $requete->bindParam(':num_reception',$numReception);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_reception = $row['id_reception'];
    }

    $elementNombreT = 0;
    $requeteT = $dbase->prepare("SELECT * FROM programmation_activite WHERE id_reception=:id_reception ORDER BY id_activite DESC");
    $requeteT->bindParam(':id_reception',$id_reception);
    $requeteT->execute();
    while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}

    $requete1 =  $dbase->prepare(" SELECT * FROM programmation_activite WHERE id_reception=:id_reception ORDER BY id_activite DESC LIMIT ".$nbrListSelect." OFFSET ".$elementNombreParcourir." ");
    $requete1->bindParam(':id_reception',$id_reception);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $id_tech = $row1['id_technicien'];
        $id_reception =$row1['id_reception'];
        $requete2 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
        $requete2->bindParam(':id_technicien',$id_tech);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
        {
            $techN = $row2['nom_technicien'];
            $techP = $row2['prenom_technicien'];
            $tech = $techN.' '.$techP;
        }

        $requete3 = $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
        $requete3->bindParam(':id_reception', $id_reception);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC)) {
            $num_reception = $row3['num_reception'];
            $id_vehicule = $row3['fk_id_vehicule'];
        }

        $requete4 = $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete4->bindParam(':id_vehicule', $id_vehicule);
        $requete4->execute();
        while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC)) {
            $immatriculation = $row4['immatriculation'];
        }
        $elementNombreParcourirT++;
        $liste[] = array('elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'idactivite'=>$row1['id_activite'],'date'=>$row1['date_activite'], 'hd'=>$row1['heure_debut_activite'], 'hf'=>$row1['heure_fin_activite'], 'tech'=>$tech,'tache'=>$row1['tache'],'num_reception'=>$num_reception ,'immatriculation'=>$immatriculation);
    }

    echo json_encode($liste);
}

if(isset($_POST['ProgActMoinNbrListSelect']) AND isset($_POST['ProgActMoinElementNombreParcourir']) AND isset($_POST['NumReception']))
{
    $nbrListSelect = htmlspecialchars(trim($_POST['ProgActMoinNbrListSelect']));

    $elementNombreParcourirT = htmlspecialchars(trim($_POST['ProgActMoinElementNombreParcourir']));

    $elementNombreParcourirt = htmlspecialchars(trim($_POST['ProgActMoinElementNombreParcourir']));
    $elementNombreT = htmlspecialchars(trim($_POST['ProgActMoinElementNombreT']));

    $numReception = htmlspecialchars(trim($_POST['NumReception']));

    $equival = $elementNombreT - $elementNombreParcourirt;

    if($equival > 0)
    {
        $elementNombreParcourir = htmlspecialchars(trim($_POST['ProgActMoinElementNombreParcourir'])) - ($nbrListSelect*2);
        $elementNombreParcourirT = $elementNombreParcourirT - $nbrListSelect;
    }
    else
    {
        $rest = $elementNombreParcourirT%$nbrListSelect;
        if($rest==0)
        {
            $elementNombreParcourir = htmlspecialchars(trim($_POST['ProgActMoinElementNombreParcourir'])) - ($nbrListSelect*2);
            $elementNombreParcourirT = $elementNombreParcourirT - $nbrListSelect;
        }
        else
        {
            $elementNombreParcourir = htmlspecialchars(trim($_POST['ProgActMoinElementNombreParcourir'])) - ($nbrListSelect+$rest);
            $elementNombreParcourirT = $elementNombreParcourirT - $rest;
        }
    }

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM reception WHERE num_reception=:num_reception");
    $requete->bindParam(':num_reception',$numReception);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_reception = $row['id_reception'];
    }

    $elementNombreT = 0;
    $requeteT = $dbase->prepare("SELECT * FROM programmation_activite WHERE id_reception=:id_reception ORDER BY id_activite DESC");
    $requeteT->bindParam(':id_reception',$id_reception);
    $requeteT->execute();
    while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}

    $requete1 =  $dbase->prepare(" SELECT * FROM programmation_activite WHERE id_reception=:id_reception ORDER BY id_activite DESC LIMIT ".$nbrListSelect." OFFSET ".$elementNombreParcourir." ");
    $requete1->bindParam(':id_reception',$id_reception);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $id_tech = $row1['id_technicien'];
        $id_reception =$row1['id_reception'];
        $requete2 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
        $requete2->bindParam(':id_technicien',$id_tech);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
        {
            $techN = $row2['nom_technicien'];
            $techP = $row2['prenom_technicien'];
            $tech = $techN.' '.$techP;
        }

        $requete3 = $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
        $requete3->bindParam(':id_reception', $id_reception);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC)) {
            $num_reception = $row3['num_reception'];
            $id_vehicule = $row3['fk_id_vehicule'];
        }

        $requete4 = $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete4->bindParam(':id_vehicule', $id_vehicule);
        $requete4->execute();
        while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC)) {
            $immatriculation = $row4['immatriculation'];
        }
        $liste[] = array('elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'idactivite'=>$row1['id_activite'],'date'=>$row1['date_activite'], 'hd'=>$row1['heure_debut_activite'], 'hf'=>$row1['heure_fin_activite'], 'tech'=>$tech,'tache'=>$row1['tache'],'num_reception'=>$num_reception ,'immatriculation'=>$immatriculation);
    }

    echo json_encode($liste);
}

if(isset($_POST['ProgActInfoUniqueComplete']))
{
    $idProgAct = htmlspecialchars(trim($_POST['ProgActInfoUniqueComplete']));

    $liste = array();
    $requete1 =  $dbase->prepare(" SELECT * FROM programmation_activite WHERE id_activite=:id_activite");
    $requete1->bindParam(':id_activite',$idProgAct);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {
        $id_tech = $row1['id_technicien'];
        $id_reception = $row1['id_reception'];
        $requete2 = $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
        $requete2->bindParam(':id_technicien', $id_tech);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC)) {
            $techN = $row2['nom_technicien'];
            $techP = $row2['prenom_technicien'];
            $tech = $techN . ' ' . $techP;
        }

        $liste[] = array('idactivite'=>$row1['id_activite'],'date'=>$row1['date_activite'], 'hd'=>$row1['heure_debut_activite'], 'hf'=>$row1['heure_fin_activite'], 'tech'=>$tech,'tache'=>$row1['tache']);
    }

    echo json_encode($liste);
}

if(isset($_POST['LivrePlusNbrListSelect']) AND isset($_POST['LivrePlusElementNombreParcourir']))
{
    $nbrListSelect = htmlspecialchars(trim($_POST['LivrePlusNbrListSelect']));
    $elementNombreParcourir = htmlspecialchars(trim($_POST['LivrePlusElementNombreParcourir']));
    $elementNombreParcourirT = htmlspecialchars(trim($_POST['LivrePlusElementNombreParcourir']));

    $liste = array();
    $elementNombreT = 0;
    $requeteT = $dbase->prepare("SELECT * FROM livraison ORDER BY id_livraison DESC");
    $requeteT->execute();
    while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}

    $elementNombre = 0;
    $requete = $dbase->prepare("SELECT * FROM livraison ORDER BY id_livraison DESC LIMIT  ".$nbrListSelect." OFFSET ".$elementNombreParcourir." ");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC)) {
        $id_reception = $row['id_reception'];
        $date_livre = $row['date_livraison'];
        $date_finG = $row['date_finG'];
        $heure_livre = $row['heure_livraison'];
        $kilometre = $row['kilometrage'];
        $num_facture = $row['num_facture'];
        $montant = $row['montant'];
        $taf_realise = $row['traveaux_fait'];
        $taf_non_realise = $row['traveaux_non_fait'];

        if ($date_finG == '1000-10-10') $date_finG = 'Non renseignée';
        if ($heure_livre == '00:00:00') $heure_livre = 'Non renseignée';


        $requete4 = $dbase->prepare("SELECT * FROM reception WHERE id_reception=:id_reception");
        $requete4->bindParam(':id_reception', $id_reception);
        $requete4->execute();
        while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC)) {
            $id_vehicule = $row4['fk_id_vehicule'];
        }

        $requete1 = $dbase->prepare("SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete1->bindParam(':id_vehicule', $id_vehicule);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {
            $id_model = $row1['id_modele'];
            $id_client = $row1['id_client'];
            $imm = $row1['immatriculation'];
            $chassis = $row1['chassis'];
            $couleur = $row1['couleur'];

            $requete2 = $dbase->prepare("SELECT * FROM type_modele_vehicule WHERE id_modele=:id_modele");
            $requete2->bindParam(':id_modele', $id_model);
            $requete2->execute();
            while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC)) {
                $typeModel = $row2['libelle'];
            }

            $requete3 = $dbase->prepare("SELECT * FROM client WHERE id_client=:id_client");
            $requete3->bindParam(':id_client', $id_client);
            $requete3->execute();
            while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC)) {
                $client = $row3['nom_raison_sociale'];
            }
        }

        $elementNombreParcourirT++;
        $liste[] = array('elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'id_livraison'=>$row['id_livraison'],'client'=>$client,'imm'=>$imm,'date_livre'=>$date_livre,'heure_livre'=>$heure_livre,'date_finG'=>$date_finG,'kilometre'=>$kilometre,'num_facture'=>$num_facture,'taf_realise'=>$taf_realise,'taf_non_realise'=>$taf_non_realise,'montant'=>$montant);
    }

    echo json_encode($liste);
}

if(isset($_POST['LivreMoinNbrListSelect']) AND isset($_POST['LivreMoinElementNombreParcourir']))
{
    $nbrListSelect = htmlspecialchars(trim($_POST['LivreMoinNbrListSelect']));

    $elementNombreParcourirT = htmlspecialchars(trim($_POST['LivreMoinElementNombreParcourir']));

    $elementNombreParcourirt = htmlspecialchars(trim($_POST['LivreMoinElementNombreParcourir']));
    $elementNombreT = htmlspecialchars(trim($_POST['LivreMoinElementNombreT']));


    $equival = $elementNombreT - $elementNombreParcourirt;

    if($equival > 0)
    {
        $elementNombreParcourir = htmlspecialchars(trim($_POST['LivreMoinElementNombreParcourir'])) - ($nbrListSelect*2);
        $elementNombreParcourirT = $elementNombreParcourirT - $nbrListSelect;
    }
    else
    {
        $rest = $elementNombreParcourirT%$nbrListSelect;
        if($rest==0)
        {
            $elementNombreParcourir = htmlspecialchars(trim($_POST['LivreMoinElementNombreParcourir'])) - ($nbrListSelect*2);
            $elementNombreParcourirT = $elementNombreParcourirT - $nbrListSelect;
        }
        else
        {
            $elementNombreParcourir = htmlspecialchars(trim($_POST['LivreMoinElementNombreParcourir'])) - ($nbrListSelect+$rest);
            $elementNombreParcourirT = $elementNombreParcourirT - $rest;
        }
    }

    $liste = array();
    $elementNombreT = 0;
    $requeteT = $dbase->prepare("SELECT * FROM livraison ORDER BY id_livraison DESC");
    $requeteT->execute();
    while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}

    $elementNombre = 0;
    $requete = $dbase->prepare("SELECT * FROM livraison ORDER BY id_livraison DESC LIMIT  ".$nbrListSelect." OFFSET ".$elementNombreParcourir." ");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC)) {
        $id_reception = $row['id_reception'];
        $date_livre = $row['date_livraison'];
        $date_finG = $row['date_finG'];
        $heure_livre = $row['heure_livraison'];
        $kilometre = $row['kilometrage'];
        $num_facture = $row['num_facture'];
        $montant = $row['montant'];
        $taf_realise = $row['traveaux_fait'];
        $taf_non_realise = $row['traveaux_non_fait'];

        if ($date_finG == '1000-10-10') $date_finG = 'Non renseignée';
        if ($heure_livre == '00:00:00') $heure_livre = 'Non renseignée';


        $requete4 = $dbase->prepare("SELECT * FROM reception WHERE id_reception=:id_reception");
        $requete4->bindParam(':id_reception', $id_reception);
        $requete4->execute();
        while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC)) {
            $id_vehicule = $row4['fk_id_vehicule'];
        }

        $requete1 = $dbase->prepare("SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete1->bindParam(':id_vehicule', $id_vehicule);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {
            $id_model = $row1['id_modele'];
            $id_client = $row1['id_client'];
            $imm = $row1['immatriculation'];
            $chassis = $row1['chassis'];
            $couleur = $row1['couleur'];

            $requete2 = $dbase->prepare("SELECT * FROM type_modele_vehicule WHERE id_modele=:id_modele");
            $requete2->bindParam(':id_modele', $id_model);
            $requete2->execute();
            while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC)) {
                $typeModel = $row2['libelle'];
            }

            $requete3 = $dbase->prepare("SELECT * FROM client WHERE id_client=:id_client");
            $requete3->bindParam(':id_client', $id_client);
            $requete3->execute();
            while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC)) {
                $client = $row3['nom_raison_sociale'];
            }
        }

        $liste[] = array('elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'id_livraison'=>$row['id_livraison'],'client'=>$client,'imm'=>$imm,'date_livre'=>$date_livre,'heure_livre'=>$heure_livre,'date_finG'=>$date_finG,'kilometre'=>$kilometre,'num_facture'=>$num_facture,'taf_realise'=>$taf_realise,'taf_non_realise'=>$taf_non_realise,'montant'=>$montant);
    }

    echo json_encode($liste);
}

if(isset($_POST['LivreInfoUniqueComplete'])) {
    $id_livraison = htmlspecialchars(trim($_POST['LivreInfoUniqueComplete']));

    $liste = array();
    $requete1 = $dbase->prepare(" SELECT * FROM livraison WHERE id_livraison=:id_livraison");
    $requete1->bindParam(':id_livraison', $id_livraison);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {
        $date = $row1['date_livraison'];
        $heure = $row1['heure_livraison'];
        $tf = $row1['traveaux_fait'];
        $tnf = $row1['traveaux_non_fait'];
        $km = $row1['kilometrage'];
        $date_fg = $row1['date_finG'];
        $facture = $row1['num_facture'];
        $id_reception = $row1['id_reception'];
    }

    $requete0=  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
    $requete0->bindParam(':id_reception',$id_reception);
    $requete0->execute();
    while ($row0 = $requete0->fetch(PDO::FETCH_ASSOC))
    {
        $id_vehicule = $row0['fk_id_vehicule'];
    }

    $requete2=  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
    $requete2->bindParam(':id_vehicule',$id_vehicule);
    $requete2->execute();
    while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
    {
        $imm = $row2['immatriculation'];
        $id_client = $row2['id_client'];
    }

    $requete3=  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
    $requete3->bindParam(':id_client',$id_client);
    $requete3->execute();
    while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
    {
        $client = $row3['nom_raison_sociale'];
        $tel_fix = $row3['tel_fixe'];
        $tel_cel = $row3['tel_cellulaire'];
        $tel_dir = $row3['tel_ligne_directe'];
    }

    $liste[]=array('date'=>$date,'heure'=>$heure,'tf'=>$tf,'tnf'=>$tnf,'km'=>$km,'date_fg'=>$date_fg,'facture'=>$facture,'imm'=>$imm,'client'=>$client);
    echo json_encode($liste);
}


if(isset($_POST['RecomInfoUniqueComplete'])) {
    $id_recommande = htmlspecialchars(trim($_POST['RecomInfoUniqueComplete']));
    $liste = array();
    $requete1 =  $dbase->prepare(" SELECT * FROM recommandation WHERE id_recommandation=:id_recommandation");
    $requete1->bindParam(':id_recommandation',$id_recommande);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $id_reception = $row1['id_reception'];
        $id_tech = $row1['fk_id_tech'];
        $date = $row1['date_recommandation'];
        $probleme = $row1['probleme'];
        $recommandation = $row1['recommandation'];
    }

    $requete0 =  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
    $requete0->bindParam(':id_reception',$id_reception);
    $requete0->execute();
    while ($row0 = $requete0->fetch(PDO::FETCH_ASSOC))
    {
        $id_vehicule = $row0['fk_id_vehicule'];

    }

    $requete =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
    $requete->bindParam(':id_vehicule',$id_vehicule);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_client = $row['id_client'];
        $imm = $row['immatriculation'];
    }

    $requete3 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
    $requete3->bindParam(':id_technicien',$id_tech);
    $requete3->execute();
    while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
    {
        $techN = $row3['nom_technicien'];
        $techP = $row3['prenom_technicien'];
        $tech = $techN.' '.$techP;
    }

    $requete2 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
    $requete2->bindParam(':id_client',$id_client);
    $requete2->execute();
    while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
    {
        $nom_client = $row2['nom_raison_sociale'];
        $tel_fixe = $row2['tel_fixe'];
        $tel_cellulaire = $row2['tel_cellulaire'];
        $tel_ligne_directe= $row2['tel_ligne_directe'];
        $mail = $row2['mail'];
        $adresse= $row2['adresse'];
    }

    $liste[] = array('date'=>$date, 'immatricul'=>$imm,'tech'=>$tech, 'client'=>$nom_client,'probleme'=>$probleme,'recommande'=>$recommandation);
    echo json_encode($liste);
}

if(isset($_POST['RecomPlusNbrListSelect']) AND isset($_POST['RecomPlusElementNombreParcourir']))
{
    $nbrListSelect = htmlspecialchars(trim($_POST['RecomPlusNbrListSelect']));
    $elementNombreParcourir = htmlspecialchars(trim($_POST['RecomPlusElementNombreParcourir']));
    $elementNombreParcourirT = htmlspecialchars(trim($_POST['RecomPlusElementNombreParcourir']));


    $liste = array();
    $elementNombreT = 0;
    $requeteT = $dbase->prepare("SELECT * FROM recommandation ORDER BY id_recommandation DESC");
    $requeteT->execute();
    while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}

    $elementNombre = 0;
    $requete1 =  $dbase->prepare("SELECT * FROM recommandation ORDER BY id_recommandation DESC LIMIT ".$nbrListSelect." OFFSET ".$elementNombreParcourir." ");
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {
        $id_tech = $row1['fk_id_tech'];
        $id_reception = $row1['id_reception'];
        $dade = $row1['date_recommandation'];
        $probleme = $row1['probleme'];
        $recommandation = $row1['recommandation'];
        $situation = $row1['situation'];
        $vue = $row1['vue'];

        $requete0 = $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
        $requete0->bindParam(':id_reception', $id_reception);
        $requete0->execute();
        while ($row0 = $requete0->fetch(PDO::FETCH_ASSOC)) {
            $id_veh = $row0['fk_id_vehicule'];

        }

        $requete = $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
        $requete->bindParam(':id_technicien', $id_tech);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC)) {
            $techN = $row['nom_technicien'];
            $techP = $row['prenom_technicien'];
            $tech = $techN . ' ' . $techP;
        }
        $requete2 = $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete2->bindParam(':id_vehicule', $id_veh);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC)) {
            $id_client = $row2['id_client'];
            $imm = $row2['immatriculation'];
        }

        $requete3 = $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete3->bindParam(':id_client', $id_client);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC)) {
            $client = $row3['nom_raison_sociale'];
        }

        $elementNombreParcourirT++;
        $liste[] = array('vue'=>$vue,'situation'=>$situation,'elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'id_recommandation'=>$row1['id_recommandation'],'dade'=>$dade,'imm'=>$imm,'client'=>$client,'tech'=>$tech,'probleme'=>$probleme,'recommandation'=>$recommandation);

    }
    echo json_encode($liste);
}

if(isset($_POST['RecomMoinNbrListSelect']) AND isset($_POST['RecomMoinElementNombreParcourir']))
{
    $nbrListSelect = htmlspecialchars(trim($_POST['RecomMoinNbrListSelect']));

    $elementNombreParcourirT = htmlspecialchars(trim($_POST['RecomMoinElementNombreParcourir']));

    $elementNombreParcourirt = htmlspecialchars(trim($_POST['RecomMoinElementNombreParcourir']));
    $elementNombreT = htmlspecialchars(trim($_POST['RecomMoinElementNombreT']));


    $equival = $elementNombreT - $elementNombreParcourirt;

    if($equival > 0)
    {
        $elementNombreParcourir = htmlspecialchars(trim($_POST['RecomMoinElementNombreParcourir'])) - ($nbrListSelect*2);
        $elementNombreParcourirT = $elementNombreParcourirT - $nbrListSelect;
    }
    else
    {
        $rest = $elementNombreParcourirT%$nbrListSelect;
        if($rest==0)
        {
            $elementNombreParcourir = htmlspecialchars(trim($_POST['RecomMoinElementNombreParcourir'])) - ($nbrListSelect*2);
            $elementNombreParcourirT = $elementNombreParcourirT - $nbrListSelect;
        }
        else
        {
            $elementNombreParcourir = htmlspecialchars(trim($_POST['RecomMoinElementNombreParcourir'])) - ($nbrListSelect+$rest);
            $elementNombreParcourirT = $elementNombreParcourirT - $rest;
        }
    }


    $liste = array();
    $elementNombreT = 0;
    $requeteT = $dbase->prepare("SELECT * FROM recommandation ORDER BY id_recommandation DESC");
    $requeteT->execute();
    while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}

    $elementNombre = 0;
    $requete1 =  $dbase->prepare("SELECT * FROM recommandation ORDER BY id_recommandation DESC LIMIT ".$nbrListSelect." OFFSET ".$elementNombreParcourir." ");
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {
        $id_tech = $row1['fk_id_tech'];
        $id_reception = $row1['id_reception'];
        $dade = $row1['date_recommandation'];
        $probleme = $row1['probleme'];
        $recommandation = $row1['recommandation'];
        $situation = $row1['situation'];
        $vue = $row1['vue'];

        $requete0 = $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
        $requete0->bindParam(':id_reception', $id_reception);
        $requete0->execute();
        while ($row0 = $requete0->fetch(PDO::FETCH_ASSOC)) {
            $id_veh = $row0['fk_id_vehicule'];

        }

        $requete = $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
        $requete->bindParam(':id_technicien', $id_tech);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC)) {
            $techN = $row['nom_technicien'];
            $techP = $row['prenom_technicien'];
            $tech = $techN . ' ' . $techP;
        }
        $requete2 = $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete2->bindParam(':id_vehicule', $id_veh);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC)) {
            $id_client = $row2['id_client'];
            $imm = $row2['immatriculation'];
        }

        $requete3 = $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete3->bindParam(':id_client', $id_client);
        $requete3->execute();
        while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC)) {
            $client = $row3['nom_raison_sociale'];
        }

        $liste[] = array('vue'=>$vue,'situation'=>$situation,'elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'id_recommandation'=>$row1['id_recommandation'],'dade'=>$dade,'imm'=>$imm,'client'=>$client,'tech'=>$tech,'probleme'=>$probleme,'recommandation'=>$recommandation);

    }
    echo json_encode($liste);
}

if(isset($_POST['ReclamInfoUniqueComplete'])) {
    $id_reclamation = htmlspecialchars(trim($_POST['ReclamInfoUniqueComplete']));

    $liste = array();
    $requete2 =  $dbase->prepare(" SELECT * FROM reclamation WHERE id_reclamation=:id_reclamation");
    $requete2->bindParam(':id_reclamation',$id_reclamation);
    $requete2->execute();
    while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
    {
        $id_livraison = $row2['id_livraison'];
        $date_reclamation = $row2['date_reclamation'];
        $reclamation = $row2['reclamation'];
        $reclamateur = $row2['reclamateur'];
        $analyse = $row2['analyse'];
        $cause = $row2['cause'];
        $proposition = $row2['proposition'];
        $date_observation = $row2['date_observation'];
        $observateur = $row2['observateur'];
    }

    $requete =  $dbase->prepare(" SELECT * FROM livraison WHERE id_livraison=:id_livraison");
    $requete->bindParam(':id_livraison',$id_livraison);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_reception = $row['id_reception'];
        $date_livraison = $row['date_livraison'];
        $heure_livraison = $row['heure_livraison'];
        $traveaux_fait = $row['traveaux_fait'];
        $traveaux_non_fait = $row['traveaux_non_fait'];
        $kilometrage = $row['kilometrage'];
        $num_facture = $row['num_facture'];
    }

    $requete0 =  $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
    $requete0->bindParam(':id_reception',$id_reception);
    $requete0->execute();
    while ($row0 = $requete0->fetch(PDO::FETCH_ASSOC))
    {
        $id_vehicule = $row0['fk_id_vehicule'];
    }

    $requete1 =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
    $requete1->bindParam(':id_vehicule',$id_vehicule);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {

        $id_client = $row1['id_client'];
        $id_typeModel = $row1['id_modele'];
        $imm = $row1['immatriculation'];
        $chassis = $row1['chassis'];
        $couleur = $row1['couleur'];
    }

    $requete3 =  $dbase->prepare(" SELECT * FROM type_modele_vehicule WHERE id_modele=:id_modele");
    $requete3->bindParam(':id_modele',$id_typeModel);
    $requete3->execute();
    while ($row3 = $requete3->fetch(PDO::FETCH_ASSOC))
    {
        $typeModel = $row3['libelle'];
    }

    $requete4 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
    $requete4->bindParam(':id_client',$id_client);
    $requete4->execute();
    while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC))
    {
        $date_client = $row4['date_creation'];
        $nom_client = $row4['nom_raison_sociale'];
        $tel_fixe= $row4['tel_fixe'];
        $tel_cel = $row4['tel_cellulaire'];
        $tel_dir = $row4['tel_ligne_directe'];
    }

    $liste[]=array('num_f'=>$num_facture,'date_client'=>$date_client,'tel_dir'=>$tel_dir,'tel_cel'=>$tel_cel,'tel_fixe'=>$tel_fixe,'nom_client'=>$nom_client,'type_modele'=>$typeModel,'chassis'=>$chassis,'imm'=>$imm,'kilometrage'=>$kilometrage,'traveaux_fait'=>$traveaux_fait,'heure_livraison'=>$heure_livraison,'date_livraison'=>$date_livraison,'observateur'=>$observateur,'date_observation'=>$date_observation,'proposition'=>$proposition,'cause'=>$cause,'analyse'=>$analyse,'id_reclamatioin'=>$id_reclamation,'reclamation'=>$reclamation,'date_reclamation'=>$date_reclamation,'reclamateur'=>$reclamateur);

    echo  json_encode($liste);

}

if(isset($_POST['ReclamPlusNbrListSelect']) AND isset($_POST['ReclamPlusElementNombreParcourir']))
{
    $nbrListSelect = htmlspecialchars(trim($_POST['ReclamPlusNbrListSelect']));
    $elementNombreParcourir = htmlspecialchars(trim($_POST['ReclamPlusElementNombreParcourir']));
    $elementNombreParcourirT = htmlspecialchars(trim($_POST['ReclamPlusElementNombreParcourir']));

    $liste = array();
    $elementNombreT = 0;
    $requeteT = $dbase->prepare("SELECT * FROM reclamation ORDER BY id_reclamation DESC");
    $requeteT->execute();
    while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}

    $elementNombre = 0;
    $requete2 =  $dbase->prepare("SELECT * FROM reclamation ORDER BY id_reclamation DESC LIMIT ".$nbrListSelect." OFFSET ".$elementNombreParcourir." ");
    $requete2->execute();
    while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC)) {
        $numreclamation = '0000';
        $num_facture = '0000';
        $id_reclamation = $row2['id_reclamation'];
        $id_livraison = $row2['id_livraison'];
        $date_reclamation = $row2['date_reclamation'];
        $reclamation = $row2['reclamation'];
        $reclamateur = $row2['reclamateur'];
        $analyse = $row2['analyse'];
        $cause = $row2['cause'];
        $proposition = $row2['proposition'];
        $date_observation = $row2['date_observation'];
        $observateur = $row2['observateur'];
        $etat = $row2['etat'];

        $requete = $dbase->prepare(" SELECT * FROM livraison WHERE id_livraison=:id_livraison");
        $requete->bindParam(':id_livraison', $id_livraison);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC)) {
            $id_reception = $row['id_reception'];
            $date_livraison = $row['date_livraison'];
            $heure_livraison = $row['heure_livraison'];
            $traveaux_fait = $row['traveaux_fait'];
            $traveaux_non_fait = $row['traveaux_non_fait'];
            $kilometrage = $row['kilometrage'];
        }

        $requete0 = $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
        $requete0->bindParam(':id_reception', $id_reception);
        $requete0->execute();
        while ($row0 = $requete0->fetch(PDO::FETCH_ASSOC)) {
            $id_vehicule = $row0['fk_id_vehicule'];
        }

        $requete1 = $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete1->bindParam(':id_vehicule', $id_vehicule);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {

            $id_client = $row1['id_client'];
            $id_typeModel = $row1['id_modele'];
            $imm = $row1['immatriculation'];
            $chassis = $row1['chassis'];
            $couleur = $row1['couleur'];
        }

        $requete4 = $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete4->bindParam(':id_client', $id_client);
        $requete4->execute();
        while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC)) {
            $date_client = $row4['date_creation'];
            $nom_client = $row4['nom_raison_sociale'];
            $tel_fixe = $row4['tel_fixe'];
            $tel_cel = $row4['tel_cellulaire'];
            $tel_dir = $row4['tel_ligne_directe'];
        }

        $elementNombreParcourirT++;
        $liste[] = array('etat'=>$etat,'elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'id_reclamation'=>$row2['id_reclamation'],'numreclamation'=>$numreclamation,'date_reclamation'=>$date_reclamation,'nom_client'=>$nom_client,'imm'=>$imm,'date_livraison'=>$date_livraison,'num_facture'=>$num_facture,'reclamation'=>$reclamation);

    }
    echo json_encode($liste);
}

if(isset($_POST['ReclamMoinNbrListSelect']) AND isset($_POST['ReclamMoinElementNombreParcourir']))
{
    $nbrListSelect = htmlspecialchars(trim($_POST['ReclamMoinNbrListSelect']));

    $elementNombreParcourirT = htmlspecialchars(trim($_POST['ReclamMoinElementNombreParcourir']));

    $elementNombreParcourirt = htmlspecialchars(trim($_POST['ReclamMoinElementNombreParcourir']));
    $elementNombreT = htmlspecialchars(trim($_POST['ReclamMoinElementNombreT']));


    $equival = $elementNombreT - $elementNombreParcourirt;

    if($equival > 0)
    {
        $elementNombreParcourir = htmlspecialchars(trim($_POST['ReclamMoinElementNombreParcourir'])) - ($nbrListSelect*2);
        $elementNombreParcourirT = $elementNombreParcourirT - $nbrListSelect;
    }
    else
    {
        $rest = $elementNombreParcourirT%$nbrListSelect;
        if($rest==0)
        {
            $elementNombreParcourir = htmlspecialchars(trim($_POST['ReclamMoinElementNombreParcourir'])) - ($nbrListSelect*2);
            $elementNombreParcourirT = $elementNombreParcourirT - $nbrListSelect;
        }
        else
        {
            $elementNombreParcourir = htmlspecialchars(trim($_POST['ReclamMoinElementNombreParcourir'])) - ($nbrListSelect+$rest);
            $elementNombreParcourirT = $elementNombreParcourirT - $rest;
        }
    }

    $liste = array();
    $elementNombreT = 0;
    $requeteT = $dbase->prepare("SELECT * FROM reclamation ORDER BY id_reclamation DESC");
    $requeteT->execute();
    while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}

    $elementNombre = 0;
    $requete2 =  $dbase->prepare("SELECT * FROM reclamation ORDER BY id_reclamation DESC LIMIT ".$nbrListSelect." OFFSET ".$elementNombreParcourir." ");
    $requete2->execute();
    while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC)) {
        $numreclamation = '0000';
        $num_facture = '0000';
        $id_reclamation = $row2['id_reclamation'];
        $id_livraison = $row2['id_livraison'];
        $date_reclamation = $row2['date_reclamation'];
        $reclamation = $row2['reclamation'];
        $reclamateur = $row2['reclamateur'];
        $analyse = $row2['analyse'];
        $cause = $row2['cause'];
        $proposition = $row2['proposition'];
        $date_observation = $row2['date_observation'];
        $observateur = $row2['observateur'];
        $etat = $row2['etat'];

        $requete = $dbase->prepare(" SELECT * FROM livraison WHERE id_livraison=:id_livraison");
        $requete->bindParam(':id_livraison', $id_livraison);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC)) {
            $id_reception = $row['id_reception'];
            $date_livraison = $row['date_livraison'];
            $heure_livraison = $row['heure_livraison'];
            $traveaux_fait = $row['traveaux_fait'];
            $traveaux_non_fait = $row['traveaux_non_fait'];
            $kilometrage = $row['kilometrage'];
        }

        $requete0 = $dbase->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
        $requete0->bindParam(':id_reception', $id_reception);
        $requete0->execute();
        while ($row0 = $requete0->fetch(PDO::FETCH_ASSOC)) {
            $id_vehicule = $row0['fk_id_vehicule'];
        }

        $requete1 = $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete1->bindParam(':id_vehicule', $id_vehicule);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {

            $id_client = $row1['id_client'];
            $id_typeModel = $row1['id_modele'];
            $imm = $row1['immatriculation'];
            $chassis = $row1['chassis'];
            $couleur = $row1['couleur'];
        }

        $requete4 = $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete4->bindParam(':id_client', $id_client);
        $requete4->execute();
        while ($row4 = $requete4->fetch(PDO::FETCH_ASSOC)) {
            $date_client = $row4['date_creation'];
            $nom_client = $row4['nom_raison_sociale'];
            $tel_fixe = $row4['tel_fixe'];
            $tel_cel = $row4['tel_cellulaire'];
            $tel_dir = $row4['tel_ligne_directe'];
        }

        $liste[] = array('etat'=>$etat,'elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'id_reclamation'=>$row2['id_reclamation'],'numreclamation'=>$numreclamation,'date_reclamation'=>$date_reclamation,'nom_client'=>$nom_client,'imm'=>$imm,'date_livraison'=>$date_livraison,'num_facture'=>$num_facture, 'reclamation'=>$reclamation);
    }
    echo json_encode($liste);
}

if(isset($_POST['PointInfoUniqueComplete'])) {

    $id_pointage = htmlspecialchars(trim($_POST['PointInfoUniqueComplete']));

    $liste = array();

    $requete1 =  $dbase->prepare(" SELECT * FROM pointage WHERE id_pointage=:id_pointage");
    $requete1->bindParam(':id_pointage',$id_pointage);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $id_tech = $row1['fk_id_technicien'];
        $num_or = $row1['num_or'];
        $designation = $row1['designation'];
        $date_pointage = $row1['date_pointage'];
        $objectif_pointage = $row1['objectif_pointage'];
        $hr_aut_pointage= $row1['hr_aut_pointage'];
        $travaux_execute_pointage = $row1['travaux_execute_pointage'];
        $heure_d_pointage = $row1['heure_d_pointage'];
        $heure_f_pointage = $row1['heure_f_pointage'];

        $heure = $heure_d_pointage.' - '.$heure_f_pointage;

        $heureStart = strtotime($heure_d_pointage);
        $heureEnd = strtotime($heure_f_pointage);

        $secodeMake = abs($heureEnd-$heureStart);

        $heureMake = ($secodeMake/60)/60;

        $heureMake = floor($heureMake);

        $heureMake = $heureMake.' heure(s)';

    }

    $requete =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
    $requete->bindParam(':id_technicien',$id_tech);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id_spec = $row['id_specialite'];
        $techN = $row['nom_technicien'];
        $techP = $row['prenom_technicien'];
        $tech = $techN.' '.$techP;
    }
    $requete2 =  $dbase->prepare(" SELECT * FROM specialite_technicien WHERE id_specialite=:id_specialite");
    $requete2->bindParam(':id_specialite',$id_spec);
    $requete2->execute();
    while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
    {
        $section = $row2['libelle'];
    }
    $liste[] = array('num_or'=>$num_or,'tech'=>$tech,'section'=>$section,'designation'=>$designation,'date'=>$date_pointage,'objectif'=>$objectif_pointage,'hr_aut'=>$hr_aut_pointage,'travaux_execute'=>$travaux_execute_pointage,'heure'=>$heure,'timeMake'=>$heureMake,'id_pointage'=>$id_pointage);

    echo json_encode($liste);
}

if(isset($_POST['PointPlusNbrListSelect']) AND isset($_POST['PointPlusElementNombreParcourir']))
{
    $nbrListSelect = htmlspecialchars(trim($_POST['PointPlusNbrListSelect']));
    $elementNombreParcourir = htmlspecialchars(trim($_POST['PointPlusElementNombreParcourir']));
    $elementNombreParcourirT = htmlspecialchars(trim($_POST['PointPlusElementNombreParcourir']));

    $liste = array();
    $elementNombreT = 0;
    $requeteT = $dbase->prepare("SELECT * FROM pointage ORDER BY id_pointage DESC");
    $requeteT->execute();
    while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}


    $elementNombre = 0;
    $requete1 =  $dbase->prepare("SELECT * FROM pointage ORDER BY id_pointage DESC LIMIT ".$nbrListSelect." OFFSET ".$elementNombreParcourir." ");
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $id_tech = $row1['fk_id_technicien'];
        $num_or = $row1['num_or'];
        $designation = $row1['designation'];
        $date_pointage = $row1['date_pointage'];
        $objectif_pointage = $row1['objectif_pointage'];
        $hr_aut_pointage= $row1['hr_aut_pointage'];
        $travaux_execute_pointage = $row1['travaux_execute_pointage'];
        $heure_d_pointage = $row1['heure_d_pointage'];
        $heure_f_pointage = $row1['heure_f_pointage'];

        $heure = $heure_d_pointage.' - '.$heure_f_pointage;

        $heureStart = strtotime($heure_d_pointage);
        $heureEnd = strtotime($heure_f_pointage);

        $secodeMake = abs($heureEnd-$heureStart);

        $heureMake = ($secodeMake/60)/60;

        $heureMake = floor($heureMake);

        $heureMake = $heureMake.' heure(s)';

        $requete =  $dbase->prepare("SELECT * FROM technicien WHERE id_technicien=:id_technicien");
        $requete->bindParam(':id_technicien',$id_tech);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_spec = $row['id_specialite'];
            $techN = $row['nom_technicien'];
            $techP = $row['prenom_technicien'];
            $tech = $techN.' '.$techP;
        }
        $requete2 =  $dbase->prepare("SELECT * FROM specialite_technicien WHERE id_specialite=:id_specialite");
        $requete2->bindParam(':id_specialite',$id_spec);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
        {
            $section = $row2['libelle'];
        }

        $elementNombreParcourirT++;
        $liste[] = array('elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'id_pointage'=>$row1['id_pointage'],'num_or'=>$num_or,'section'=>$section,'tech'=>$tech,'designation'=>$designation,'date_pointage'=>$date_pointage,'hr_aut_pointage'=>$hr_aut_pointage,'heure'=>$heure,'heureMake'=>$heureMake,'ob'=>$objectif_pointage,'taf'=>$travaux_execute_pointage);

    }
    echo json_encode($liste);
}

if(isset($_POST['PointMoinNbrListSelect']) AND isset($_POST['PointMoinElementNombreParcourir']))
{
    $nbrListSelect = htmlspecialchars(trim($_POST['PointMoinNbrListSelect']));

    $elementNombreParcourirT = htmlspecialchars(trim($_POST['PointMoinElementNombreParcourir']));

    $elementNombreParcourirt = htmlspecialchars(trim($_POST['PointMoinElementNombreParcourir']));
    $elementNombreT = htmlspecialchars(trim($_POST['PointMoinElementNombreT']));


    $equival = $elementNombreT - $elementNombreParcourirt;

    if($equival > 0)
    {
        $elementNombreParcourir = htmlspecialchars(trim($_POST['PointMoinElementNombreParcourir'])) - ($nbrListSelect*2);
        $elementNombreParcourirT = $elementNombreParcourirT - $nbrListSelect;
    }
    else
    {
        $rest = $elementNombreParcourirT%$nbrListSelect;
        if($rest==0)
        {
            $elementNombreParcourir = htmlspecialchars(trim($_POST['PointMoinElementNombreParcourir'])) - ($nbrListSelect*2);
            $elementNombreParcourirT = $elementNombreParcourirT - $nbrListSelect;
        }
        else
        {
            $elementNombreParcourir = htmlspecialchars(trim($_POST['PointMoinElementNombreParcourir'])) - ($nbrListSelect+$rest);
            $elementNombreParcourirT = $elementNombreParcourirT - $rest;
        }
    }

    $liste = array();
    $elementNombreT = 0;
    $requeteT = $dbase->prepare("SELECT * FROM pointage ORDER BY id_pointage DESC");
    $requeteT->execute();
    while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}


    $elementNombre = 0;
    $requete1 =  $dbase->prepare("SELECT * FROM pointage ORDER BY id_pointage DESC LIMIT ".$nbrListSelect." OFFSET ".$elementNombreParcourir." ");
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $id_tech = $row1['fk_id_technicien'];
        $num_or = $row1['num_or'];
        $designation = $row1['designation'];
        $date_pointage = $row1['date_pointage'];
        $objectif_pointage = $row1['objectif_pointage'];
        $hr_aut_pointage= $row1['hr_aut_pointage'];
        $travaux_execute_pointage = $row1['travaux_execute_pointage'];
        $heure_d_pointage = $row1['heure_d_pointage'];
        $heure_f_pointage = $row1['heure_f_pointage'];

        $heure = $heure_d_pointage.' - '.$heure_f_pointage;

        $heureStart = strtotime($heure_d_pointage);
        $heureEnd = strtotime($heure_f_pointage);

        $secodeMake = abs($heureEnd-$heureStart);

        $heureMake = ($secodeMake/60)/60;

        $heureMake = floor($heureMake);

        $heureMake = $heureMake.' heure(s)';

        $requete =  $dbase->prepare("SELECT * FROM technicien WHERE id_technicien=:id_technicien");
        $requete->bindParam(':id_technicien',$id_tech);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_spec = $row['id_specialite'];
            $techN = $row['nom_technicien'];
            $techP = $row['prenom_technicien'];
            $tech = $techN.' '.$techP;
        }
        $requete2 =  $dbase->prepare("SELECT * FROM specialite_technicien WHERE id_specialite=:id_specialite");
        $requete2->bindParam(':id_specialite',$id_spec);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
        {
            $section = $row2['libelle'];
        }

        $liste[] = array('elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'id_pointage'=>$row1['id_pointage'],'num_or'=>$num_or,'section'=>$section,'tech'=>$tech,'designation'=>$designation,'date_pointage'=>$date_pointage,'hr_aut_pointage'=>$hr_aut_pointage,'heure'=>$heure,'heureMake'=>$heureMake,'ob'=>$objectif_pointage,'taf'=>$travaux_execute_pointage);

    }
    echo json_encode($liste);

}

if(isset($_POST['InspectInfoPlaqueSend'])) {
    $immatriculation = htmlspecialchars(trim($_POST['InspectInfoPlaqueSend']));
    $pat = htmlspecialchars(trim($_POST['InspectInfoPlaqueSendPat']));

    $liste = array();
    $elementNombreT = 0;
    $elementNombreParcourirT = 0;

    $requete1 =  $dbase->prepare(" SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
    $requete1->bindParam(':immatriculation',$immatriculation);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $id_vehicule = $row1['id_vehicule'];
        $id_typeModele = $row1['id_modele'];
        $chassis = $row1['chassis'];
        $id_client = $row1['id_client'];
    }

    $requete6 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
    $requete6->bindParam(':id_client',$id_client);
    $requete6->execute();
    while ($row6 = $requete6->fetch(PDO::FETCH_ASSOC))
    {
        $client = $row6['nom_raison_sociale'];
    }

    $requete7 =  $dbase->prepare(" SELECT * FROM type_modele_vehicule WHERE id_modele=:id_modele");
    $requete7->bindParam(':id_modele',$id_typeModele);
    $requete7->execute();
    while ($row7 = $requete7->fetch(PDO::FETCH_ASSOC))
    {
        $type_model = $row7['libelle'];
    }

    $requete2 =  $dbase->prepare(" SELECT * FROM reception WHERE fk_id_vehicule=:fk_id_vehicule");
    $requete2->bindParam(':fk_id_vehicule',$id_vehicule);
    $requete2->execute();
    while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
    {
        $id_reception = $row2['id_reception'];

        $requeteT = $dbase->prepare("SELECT * FROM inspection WHERE id_reception=:id_reception ORDER BY id_inspection DESC ");
        $requeteT->bindParam(':id_reception',$id_reception);
        $requeteT->execute();
        while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}


        $requete = $dbase->prepare("SELECT * FROM inspection WHERE id_reception=:id_reception ORDER BY id_inspection DESC LIMIT ".$pat." ");
        $requete->bindParam(':id_reception',$id_reception);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $elementNombreParcourirT++;
            $liste[] = array('chassis'=>$chassis,'imm'=>$immatriculation,'typeModele'=>$type_model,'client'=>$client,'elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'id_inspection'=>$row['id_inspection'],'date_inspection'=>$row['date_inspection'],'kilometrage_inspection'=>$row['kilometrage_inspection'],'num_p_d_inspection'=>$row['num_p_d_inspection'],'nom_p_d_inspection'=>$row['nom_p_d_inspection'],'quantite_p_d_inspection'=>$row['quantite_p_d_inspection'],'num_com_inspection'=>$row['num_com_inspection'],'resultat_inspection'=>$row['resultat_inspection']);
        }
    }
    echo  json_encode($liste);
}

if(isset($_POST['InspectPlusNbrListSelect']) AND isset($_POST['InspectPlusElementNombreParcourir']) AND isset($_POST['Immatriculation']))
{
    $nbrListSelect = htmlspecialchars(trim($_POST['InspectPlusNbrListSelect']));
    $elementNombreParcourir = htmlspecialchars(trim($_POST['InspectPlusElementNombreParcourir']));
    $elementNombreParcourirT = htmlspecialchars(trim($_POST['InspectPlusElementNombreParcourir']));
    $immatriculation = htmlspecialchars(trim($_POST['Immatriculation']));
    $elementNombreT = 0;

    $liste = array();

    $requete1 =  $dbase->prepare(" SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
    $requete1->bindParam(':immatriculation',$immatriculation);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $id_vehicule = $row1['id_vehicule'];
    }

    $requete2 =  $dbase->prepare(" SELECT * FROM reception WHERE fk_id_vehicule=:fk_id_vehicule");
    $requete2->bindParam(':fk_id_vehicule',$id_vehicule);
    $requete2->execute();
    while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
    {
        $id_reception = $row2['id_reception'];

        $requeteT = $dbase->prepare("SELECT * FROM inspection WHERE id_reception=:id_reception ORDER BY id_inspection DESC ");
        $requeteT->bindParam(':id_reception',$id_reception);
        $requeteT->execute();
        while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}


        $requete = $dbase->prepare("SELECT * FROM inspection WHERE id_reception=:id_reception ORDER BY id_inspection DESC LIMIT ".$nbrListSelect." OFFSET ".$elementNombreParcourir." ");
        $requete->bindParam(':id_reception',$id_reception);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $elementNombreParcourirT++;
            $liste[] = array('elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'id_inspection'=>$row['id_inspection'],'date_inspection'=>$row['date_inspection'],'kilometrage_inspection'=>$row['kilometrage_inspection'],'num_p_d_inspection'=>$row['num_p_d_inspection'],'nom_p_d_inspection'=>$row['nom_p_d_inspection'],'quantite_p_d_inspection'=>$row['quantite_p_d_inspection'],'num_com_inspection'=>$row['num_com_inspection'],'resultat_inspection'=>$row['resultat_inspection']);
        }
    }
    echo  json_encode($liste);
}


if(isset($_POST['InspectMoinNbrListSelect']) AND isset($_POST['InspectMoinElementNombreParcourir']) AND isset($_POST['Immatriculation'])) {
    $nbrListSelect = htmlspecialchars(trim($_POST['InspectMoinNbrListSelect']));

    $elementNombreParcourirT = htmlspecialchars(trim($_POST['InspectMoinElementNombreParcourir']));

    $elementNombreParcourirt = htmlspecialchars(trim($_POST['InspectMoinElementNombreParcourir']));
    $elementNombreT = htmlspecialchars(trim($_POST['InspectMoinElementNombreT']));

    $immatriculation = htmlspecialchars(trim($_POST['Immatriculation']));

    $equival = $elementNombreT - $elementNombreParcourirt;

    if ($equival > 0) {
        $elementNombreParcourir = htmlspecialchars(trim($_POST['InspectMoinElementNombreParcourir'])) - ($nbrListSelect * 2);
        $elementNombreParcourirT = $elementNombreParcourirT - $nbrListSelect;
    } else {
        $rest = $elementNombreParcourirT % $nbrListSelect;
        if ($rest == 0) {
            $elementNombreParcourir = htmlspecialchars(trim($_POST['InspectMoinElementNombreParcourir'])) - ($nbrListSelect * 2);
            $elementNombreParcourirT = $elementNombreParcourirT - $nbrListSelect;
        } else {
            $elementNombreParcourir = htmlspecialchars(trim($_POST['InspectMoinElementNombreParcourir'])) - ($nbrListSelect + $rest);
            $elementNombreParcourirT = $elementNombreParcourirT - $rest;
        }
    }

    $elementNombreT = 0;

    $liste = array();

    $requete1 =  $dbase->prepare(" SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
    $requete1->bindParam(':immatriculation',$immatriculation);
    $requete1->execute();
    while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
    {
        $id_vehicule = $row1['id_vehicule'];
    }

    $requete2 =  $dbase->prepare(" SELECT * FROM reception WHERE fk_id_vehicule=:fk_id_vehicule");
    $requete2->bindParam(':fk_id_vehicule',$id_vehicule);
    $requete2->execute();
    while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
    {
        $id_reception = $row2['id_reception'];

        $requeteT = $dbase->prepare("SELECT * FROM inspection WHERE id_reception=:id_reception ORDER BY id_inspection DESC ");
        $requeteT->bindParam(':id_reception',$id_reception);
        $requeteT->execute();
        while ($rowT = $requeteT->fetch(PDO::FETCH_ASSOC)) {$elementNombreT++;}


        $requete = $dbase->prepare("SELECT * FROM inspection WHERE id_reception=:id_reception ORDER BY id_inspection DESC LIMIT ".$nbrListSelect." OFFSET ".$elementNombreParcourir." ");
        $requete->bindParam(':id_reception',$id_reception);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $liste[] = array('elementNombreT'=>$elementNombreT,'elementNombreParcourir'=>$elementNombreParcourirT,'id_inspection'=>$row['id_inspection'],'date_inspection'=>$row['date_inspection'],'kilometrage_inspection'=>$row['kilometrage_inspection'],'num_p_d_inspection'=>$row['num_p_d_inspection'],'nom_p_d_inspection'=>$row['nom_p_d_inspection'],'quantite_p_d_inspection'=>$row['quantite_p_d_inspection'],'num_com_inspection'=>$row['num_com_inspection'],'resultat_inspection'=>$row['resultat_inspection']);
        }
    }
    echo  json_encode($liste);
}

if(isset($_POST['revisionlistecomplete'])){

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM revision");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id = $row['id_revision'];
        $date = $row['date_revision'];
        $dateFin = date('Y-m-d',strtotime($date.'+ 5 months'));
        $dateActuel = date("Y-m-d");

        $dateActuelL = strtotime($dateActuel);
        $dateFinL = strtotime($dateFin);

        $jourRestant = $dateFinL - $dateActuelL;
        $jourRestant = round($jourRestant/86400);

        $muet = $row['muet'];
        $id_vehicule = $row['id_vehicule'];

        $requete1 =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete1->bindParam(':id_vehicule',$id_vehicule);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $id_client = $row1['id_client'];
            $imm = $row1['immatriculation'];
        }

        $requete2 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete2->bindParam(':id_client',$id_client);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
        {
            $client = $row2['nom_raison_sociale'];
        }

        $liste[] = array('id'=>$id,'cliente'=>$client,'imm'=>$imm,'debut'=>$date,'fin'=>$dateFin,'jour_j'=>$jourRestant,'etat'=>$muet);

    }
    echo json_encode($liste);
}

if(isset($_POST['visitelistecomplete'])){

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM visite");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id = $row['id_visite'];
        $date = $row['date_visite'];
        $dateFin = date('Y-m-d',strtotime($date.'+ 5 months'));
        $dateActuel = date("Y-m-d");

        $dateActuelL = strtotime($dateActuel);
        $dateFinL = strtotime($dateFin);

        $jourRestant = $dateFinL - $dateActuelL;
        $jourRestant = round($jourRestant/86400);

        $muet = $row['muet'];
        $id_vehicule = $row['id_vehicule'];

        $requete1 =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete1->bindParam(':id_vehicule',$id_vehicule);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $id_client = $row1['id_client'];
            $imm = $row1['immatriculation'];
        }

        $requete2 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete2->bindParam(':id_client',$id_client);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
        {
            $client = $row2['nom_raison_sociale'];
        }

        $liste[] = array('id'=>$id,'cliente'=>$client,'imm'=>$imm,'debut'=>$date,'fin'=>$dateFin,'jour_j'=>$jourRestant,'etat'=>$muet);

    }
    echo json_encode($liste);
}

if(isset($_POST['assurancelistecomplete'])){

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM assurance");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id = $row['id_assurance'];
        $date = $row['date_assurance'];
        $dateFin = date('Y-m-d',strtotime($date.'+ 5 months'));
        $dateActuel = date("Y-m-d");

        $dateActuelL = strtotime($dateActuel);
        $dateFinL = strtotime($dateFin);

        $jourRestant = $dateFinL - $dateActuelL;
        $jourRestant = round($jourRestant/86400);

        $muet = $row['muet'];
        $id_vehicule = $row['id_vehicule'];

        $requete1 =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete1->bindParam(':id_vehicule',$id_vehicule);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $id_client = $row1['id_client'];
            $imm = $row1['immatriculation'];
        }

        $requete2 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete2->bindParam(':id_client',$id_client);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
        {
            $client = $row2['nom_raison_sociale'];
        }

        $liste[] = array('id'=>$id,'cliente'=>$client,'imm'=>$imm,'debut'=>$date,'fin'=>$dateFin,'jour_j'=>$jourRestant,'etat'=>$muet);

    }
    echo json_encode($liste);
}

if(isset($_POST['garantielistecomplete'])){

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM garantie");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $id = $row['id_garantie'];
        $date = $row['date_garantie'];
        $dateFin = date('Y-m-d',strtotime($date.'+ 5 months'));
        $dateActuel = date("Y-m-d");

        $dateActuelL = strtotime($dateActuel);
        $dateFinL = strtotime($dateFin);

        $jourRestant = $dateFinL - $dateActuelL;
        $jourRestant = round($jourRestant/86400);

        $muet = $row['muet'];
        $id_vehicule = $row['id_vehicule'];

        $requete1 =  $dbase->prepare(" SELECT * FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete1->bindParam(':id_vehicule',$id_vehicule);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $id_client = $row1['id_client'];
            $imm = $row1['immatriculation'];
        }

        $requete2 =  $dbase->prepare(" SELECT * FROM client WHERE id_client=:id_client");
        $requete2->bindParam(':id_client',$id_client);
        $requete2->execute();
        while ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
        {
            $client = $row2['nom_raison_sociale'];
        }

        $liste[] = array('id'=>$id,'cliente'=>$client,'imm'=>$imm,'debut'=>$date,'fin'=>$dateFin,'jour_j'=>$jourRestant,'etat'=>$muet);

    }
    echo json_encode($liste);
}