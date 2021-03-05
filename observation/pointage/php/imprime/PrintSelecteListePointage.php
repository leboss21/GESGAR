<?php
require '../../../../../model/Initial.php';

if (isset($_POST['pointageselectedateavant']))
{
    $date = htmlspecialchars(trim($_POST['pointageselectedateavant']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM pointage WHERE date_pointage<:date_pointage");
    $requete->bindParam(':date_pointage',$date);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_pointage'];
        $numord = $row['num_or'];
        $des = $row['designation'];
        $ojt = $row['objectif_pointage'];
        $hraut = $row['hr_aut_pointage'];
        $texe = $row['travaux_execute_pointage'];
        $hd = $row['heure_d_pointage'];
        $hf = $row['heure_f_pointage'];
        $id_technicien = $row['fk_id_technicien'];

        $requete1 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
        $requete1->bindParam(':id_technicien',$id_technicien);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $nomtech = $row1['nom_technicien'];
            $pnomtech = $row1['prenom_technicien'];
            $tech = $nomtech.' '.$pnomtech;
        }

        $liste[] = array('date'=>$date, 'numordre'=>$numord, 'designation'=>$des, 'objectif'=>$ojt, 'hraut'=>$hraut, 'travauxexe'=>$texe, 'heuredebut'=>$hd, 'heurefin'=>$hf, 'technicien'=>$tech);
    }
    echo json_encode($liste);
}

if (isset($_POST['pointageselectedateapres']))
{
    $date = htmlspecialchars(trim($_POST['pointageselectedateapres']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM pointage WHERE date_pointage>:date_pointage");
    $requete->bindParam(':date_pointage',$date);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_pointage'];
        $numord = $row['num_or'];
        $des = $row['designation'];
        $ojt = $row['objectif_pointage'];
        $hraut = $row['hr_aut_pointage'];
        $texe = $row['travaux_execute_pointage'];
        $hd = $row['heure_d_pointage'];
        $hf = $row['heure_f_pointage'];
        $id_technicien = $row['fk_id_technicien'];

        $requete1 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
        $requete1->bindParam(':id_technicien',$id_technicien);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $nomtech = $row1['nom_technicien'];
            $pnomtech = $row1['prenom_technicien'];
            $tech = $nomtech.' '.$pnomtech;
        }

        $liste[] = array('date'=>$date, 'numordre'=>$numord, 'designation'=>$des, 'objectif'=>$ojt, 'hraut'=>$hraut, 'travauxexe'=>$texe, 'heuredebut'=>$hd, 'heurefin'=>$hf, 'technicien'=>$tech);
    }
    echo json_encode($liste);
}

if (isset($_POST['pointageselectedateextreme']))
{
    $date = htmlspecialchars(trim($_POST['pointageselectedateextreme']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM pointage WHERE date_pointage>:date_pointage OR date_pointage<:date_pointage");
    $requete->bindParam(':date_pointage',$date);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_pointage'];
        $numord = $row['num_or'];
        $des = $row['designation'];
        $ojt = $row['objectif_pointage'];
        $hraut = $row['hr_aut_pointage'];
        $texe = $row['travaux_execute_pointage'];
        $hd = $row['heure_d_pointage'];
        $hf = $row['heure_f_pointage'];
        $id_technicien = $row['fk_id_technicien'];

        $requete1 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
        $requete1->bindParam(':id_technicien',$id_technicien);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $nomtech = $row1['nom_technicien'];
            $pnomtech = $row1['prenom_technicien'];
            $tech = $nomtech.' '.$pnomtech;
        }

        $liste[] = array('date'=>$date, 'numordre'=>$numord, 'designation'=>$des, 'objectif'=>$ojt, 'hraut'=>$hraut, 'travauxexe'=>$texe, 'heuredebut'=>$hd, 'heurefin'=>$hf, 'technicien'=>$tech);
    }
    echo json_encode($liste);
}

if (isset($_POST['pointageselectedateextreme']))
{
    $date = htmlspecialchars(trim($_POST['pointageselectedateextreme']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM pointage WHERE date_pointage>:date_pointage OR date_pointage<:date_pointage");
    $requete->bindParam(':date_pointage',$date);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_pointage'];
        $numord = $row['num_or'];
        $des = $row['designation'];
        $ojt = $row['objectif_pointage'];
        $hraut = $row['hr_aut_pointage'];
        $texe = $row['travaux_execute_pointage'];
        $hd = $row['heure_d_pointage'];
        $hf = $row['heure_f_pointage'];
        $id_technicien = $row['fk_id_technicien'];

        $requete1 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
        $requete1->bindParam(':id_technicien',$id_technicien);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $nomtech = $row1['nom_technicien'];
            $pnomtech = $row1['prenom_technicien'];
            $tech = $nomtech.' '.$pnomtech;
        }

        $liste[] = array('date'=>$date, 'numordre'=>$numord, 'designation'=>$des, 'objectif'=>$ojt, 'hraut'=>$hraut, 'travauxexe'=>$texe, 'heuredebut'=>$hd, 'heurefin'=>$hf, 'technicien'=>$tech);
    }
    echo json_encode($liste);
}

if (isset($_POST['pointageselectedateinf']) AND isset($_POST['pointageselectedatesup']))
{
    $dateinf = htmlspecialchars(trim($_POST['pointageselectedateinf']));
    $datesup = htmlspecialchars(trim($_POST['pointageselectedatesup']));

    $liste = array();
    $requete =  $dbase->prepare(" SELECT * FROM pointage WHERE date_pointage BETWEEN :dateinf AND :datesup");
    $requete->bindParam(':dateinf',$dateinf);
    $requete->bindParam(':datesup',$datesup);
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_pointage'];
        $numord = $row['num_or'];
        $des = $row['designation'];
        $ojt = $row['objectif_pointage'];
        $hraut = $row['hr_aut_pointage'];
        $texe = $row['travaux_execute_pointage'];
        $hd = $row['heure_d_pointage'];
        $hf = $row['heure_f_pointage'];
        $id_technicien = $row['fk_id_technicien'];

        $requete1 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
        $requete1->bindParam(':id_technicien',$id_technicien);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $nomtech = $row1['nom_technicien'];
            $pnomtech = $row1['prenom_technicien'];
            $tech = $nomtech.' '.$pnomtech;
        }

        $liste[] = array('date'=>$date, 'numordre'=>$numord, 'designation'=>$des, 'objectif'=>$ojt, 'hraut'=>$hraut, 'travauxexe'=>$texe, 'heuredebut'=>$hd, 'heurefin'=>$hf, 'technicien'=>$tech);
    }
    echo json_encode($liste);
}

if (isset($_POST['pointageselectedateadmise']))
{
    $dateadmise = array();
    $liste = array();
    $dateadmise = $_POST['pointageselectedateadmise'];
    $dateadmiseLong = count($dateadmise);

    for ($i = 0; $i < $dateadmiseLong; $i++)
    {
        $requete =  $dbase->prepare(" SELECT * FROM pointage WHERE date_pointage=:date_pointage");
        $requete->bindParam(':date_pointage',$dateadmise[$i]);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $date = $row['date_pointage'];
            $numord = $row['num_or'];
            $des = $row['designation'];
            $ojt = $row['objectif_pointage'];
            $hraut = $row['hr_aut_pointage'];
            $texe = $row['travaux_execute_pointage'];
            $hd = $row['heure_d_pointage'];
            $hf = $row['heure_f_pointage'];
            $id_technicien = $row['fk_id_technicien'];

            $requete1 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
            $requete1->bindParam(':id_technicien',$id_technicien);
            $requete1->execute();
            while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
            {
                $nomtech = $row1['nom_technicien'];
                $pnomtech = $row1['prenom_technicien'];
                $tech = $nomtech.' '.$pnomtech;
            }

            $liste[] = array('date'=>$date, 'numordre'=>$numord, 'designation'=>$des, 'objectif'=>$ojt, 'hraut'=>$hraut, 'travauxexe'=>$texe, 'heuredebut'=>$hd, 'heurefin'=>$hf, 'technicien'=>$tech);
        }

    }

    echo json_encode($liste);
}

if (isset($_POST['pointageselectedateexclut'])) {
    $dateexclut = array();
    $liste = array();
    $dateexclut = $_POST['pointageselectedateexclut'];
    $dateexclutLong = count($dateexclut);

    $requete =  $dbase->prepare(" SELECT * FROM pointage");
    $requete->execute();
    while ($row = $requete->fetch(PDO::FETCH_ASSOC))
    {
        $date = $row['date_pointage'];
        $numord = $row['num_or'];
        $des = $row['designation'];
        $ojt = $row['objectif_pointage'];
        $hraut = $row['hr_aut_pointage'];
        $texe = $row['travaux_execute_pointage'];
        $hd = $row['heure_d_pointage'];
        $hf = $row['heure_f_pointage'];
        $id_technicien = $row['fk_id_technicien'];


        $requete1 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
        $requete1->bindParam(':id_technicien',$id_technicien);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $nomtech = $row1['nom_technicien'];
            $pnomtech = $row1['prenom_technicien'];
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
            $liste[] = array('date'=>$date, 'numordre'=>$numord, 'designation'=>$des, 'objectif'=>$ojt, 'hraut'=>$hraut, 'travauxexe'=>$texe, 'heuredebut'=>$hd, 'heurefin'=>$hf, 'technicien'=>$tech);
        }
    }

    echo json_encode($liste);
}

if (isset($_POST['option']) AND isset($_POST['valeur']))
{
    $option = htmlspecialchars(trim($_POST['option']));
    $valeur = htmlspecialchars(trim($_POST['valeur']));
    $liste = array();

    if($option == 'Technicien')
    {

        $valeurL = strlen($valeur);
        $valeurCharLow = '';
        $lowerPos = 0;
        for ($i = 0; $i < $valeurL; $i++) {
            $valeurCharLow = $valeur{$i};
            $lowerPos++;
            if (preg_match('/^[a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ.]$/', $valeurCharLow) == true) $i = $valeurL;
        }

        $nom = substr($valeur, 0, $lowerPos - 3);
        $prenom = substr($valeur, $lowerPos - 2, $valeurL);

        $requete5 =  $dbase->prepare(" SELECT * FROM technicien WHERE nom_technicien=:nom_technicien AND prenom_technicien=:prenom_technicien");
        $requete5->bindParam(':nom_technicien',$nom);
        $requete5->bindParam(':prenom_technicien',$prenom);
        $requete5->execute();
        while ($row5 = $requete5->fetch(PDO::FETCH_ASSOC))
        {
            $idtechnicien = $row5['id_technicien'];
        }

        $requete =  $dbase->prepare(" SELECT * FROM pointage WHERE fk_id_technicien=:fk_id_technicien");
        $requete->bindParam(':fk_id_technicien',$idtechnicien);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $date = $row['date_pointage'];
            $numord = $row['num_or'];
            $des = $row['designation'];
            $ojt = $row['objectif_pointage'];
            $hraut = $row['hr_aut_pointage'];
            $texe = $row['travaux_execute_pointage'];
            $hd = $row['heure_d_pointage'];
            $hf = $row['heure_f_pointage'];
            $id_technicien = $row['fk_id_technicien'];

            $requete1 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
            $requete1->bindParam(':id_technicien',$id_technicien);
            $requete1->execute();
            while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
            {
                $nomtech = $row1['nom_technicien'];
                $pnomtech = $row1['prenom_technicien'];
                $tech = $nomtech.' '.$pnomtech;
            }

            $liste[] = array('date'=>$date, 'numordre'=>$numord, 'designation'=>$des, 'objectif'=>$ojt, 'hraut'=>$hraut, 'travauxexe'=>$texe, 'heuredebut'=>$hd, 'heurefin'=>$hf, 'technicien'=>$tech);
        }
    }
    else if($option == 'Spécialité')
    {
        $requete5 =  $dbase->prepare(" SELECT * FROM specialite_technicien WHERE libelle=:libelle");
        $requete5->bindParam(':libelle',$valeur);
        $requete5->execute();
        while ($row5 = $requete5->fetch(PDO::FETCH_ASSOC))
        {
            $id_specialite = $row5['id_specialite'];
        }

        $requete6 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_specialite=:id_specialite");
        $requete6->bindParam(':id_specialite',$id_specialite);
        $requete6->execute();
        while ($row6 = $requete6->fetch(PDO::FETCH_ASSOC))
        {
            $idtechnicien = $row6['id_technicien'];

            $requete =  $dbase->prepare(" SELECT * FROM pointage WHERE fk_id_technicien=:fk_id_technicien");
            $requete->bindParam(':fk_id_technicien',$idtechnicien);
            $requete->execute();
            while ($row = $requete->fetch(PDO::FETCH_ASSOC))
            {
                $date = $row['date_pointage'];
                $numord = $row['num_or'];
                $des = $row['designation'];
                $ojt = $row['objectif_pointage'];
                $hraut = $row['hr_aut_pointage'];
                $texe = $row['travaux_execute_pointage'];
                $hd = $row['heure_d_pointage'];
                $hf = $row['heure_f_pointage'];
                $id_technicien = $row['fk_id_technicien'];

                $requete1 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
                $requete1->bindParam(':id_technicien',$id_technicien);
                $requete1->execute();
                while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
                {
                    $nomtech = $row1['nom_technicien'];
                    $pnomtech = $row1['prenom_technicien'];
                    $tech = $nomtech.' '.$pnomtech;
                }

                $liste[] = array('date'=>$date, 'numordre'=>$numord, 'designation'=>$des, 'objectif'=>$ojt, 'hraut'=>$hraut, 'travauxexe'=>$texe, 'heuredebut'=>$hd, 'heurefin'=>$hf, 'technicien'=>$tech);
            }
        }

    }
    else if($option == 'Statut')
    {
        $requete5 =  $dbase->prepare(" SELECT * FROM statut_technicien WHERE libelle=:libelle");
        $requete5->bindParam(':libelle',$valeur);
        $requete5->execute();
        while ($row5 = $requete5->fetch(PDO::FETCH_ASSOC))
        {
            $id_statut = $row5['id_statut'];
        }

        $requete6 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_statut=:id_statut");
        $requete6->bindParam(':id_statut',$id_statut);
        $requete6->execute();
        while ($row6 = $requete6->fetch(PDO::FETCH_ASSOC))
        {
            $idtechnicien = $row6['id_technicien'];

            $requete =  $dbase->prepare(" SELECT * FROM pointage WHERE fk_id_technicien=:fk_id_technicien");
            $requete->bindParam(':fk_id_technicien',$idtechnicien);
            $requete->execute();
            while ($row = $requete->fetch(PDO::FETCH_ASSOC))
            {
                $date = $row['date_pointage'];
                $numord = $row['num_or'];
                $des = $row['designation'];
                $ojt = $row['objectif_pointage'];
                $hraut = $row['hr_aut_pointage'];
                $texe = $row['travaux_execute_pointage'];
                $hd = $row['heure_d_pointage'];
                $hf = $row['heure_f_pointage'];
                $id_technicien = $row['fk_id_technicien'];

                $requete1 =  $dbase->prepare(" SELECT * FROM technicien WHERE id_technicien=:id_technicien");
                $requete1->bindParam(':id_technicien',$id_technicien);
                $requete1->execute();
                while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
                {
                    $nomtech = $row1['nom_technicien'];
                    $pnomtech = $row1['prenom_technicien'];
                    $tech = $nomtech.' '.$pnomtech;
                }

                $liste[] = array('date'=>$date, 'numordre'=>$numord, 'designation'=>$des, 'objectif'=>$ojt, 'hraut'=>$hraut, 'travauxexe'=>$texe, 'heuredebut'=>$hd, 'heurefin'=>$hf, 'technicien'=>$tech);
            }
        }
    }

    echo json_encode($liste);
}
