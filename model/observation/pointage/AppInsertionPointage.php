<?php

class AppInsertionPointage
{
    protected $dbaseprivateLite;

    function __construct($dbaseprivateLite){

        $this->dbaseprivateLite = $dbaseprivateLite;

    }

    public function CheckEmpty($data=array())
    {
         if (empty($data[0]) or empty($data[1])  or empty($data[2]) or empty($data[3]) or empty($data[4]) or empty($data[5]) or empty($data[6]) or empty($data[7]) or empty($data[8]) or empty($data[9]))
        {
            return 'oui';
        }
        return 'non';
    }

    public function CheckEmptyOn($data)
    {
        if (empty($data))
        {
            return 'oui';
        }
        return 'non';
    }

    public function PointageSelectIdSection($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM specialite_technicien WHERE libelle=:libelle");
        $requete->bindParam(':libelle', $colonne);
        $requete->execute();

        if ($id_specialite = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_specialite = $id_specialite["id_specialite"];
            return $id_specialite;
        }
    }

    public function PointageSelectIdTech($colonne1,$colonne2)
    {
        $id_section = $this->PointageSelectIdSection($colonne2);
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM technicien WHERE id_specialite=:id_specialite");
        $requete->bindParam(':id_specialite', $id_section);
        $requete->execute();

        while($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $techN = $row["nom_technicien"];
            $techP = $row["prenom_technicien"];
            $tech = $techN.' '.$techP;
            $id_tech = $row['id_technicien'];
            if($tech == $colonne1)
                return $id_tech;
        }
    }

    public function PointageInsert($colonne=array())
    {
        $id_tech = $this->PointageSelectIdTech($colonne[8],$colonne[9]);

        $requete = $this->dbaseprivateLite->prepare("INSERT into pointage (num_or, designation, date_pointage, objectif_pointage, hr_aut_pointage, travaux_execute_pointage, heure_d_pointage, heure_f_pointage, fk_id_technicien) VALUES (:num_or, :designation, :date_pointage, :objectif_pointage, :hr_aut_pointage, :travaux_execute_pointage, :heure_d_pointage, :heure_f_pointage, :fk_id_technicien)");
        $requete->bindParam(':num_or', $colonne[0]);
        $requete->bindParam(':designation', $colonne[1]);
        $requete->bindParam(':date_pointage', $colonne[2]);
        $requete->bindParam(':objectif_pointage', $colonne[3]);
        $requete->bindParam(':hr_aut_pointage', $colonne[4]);
        $requete->bindParam(':travaux_execute_pointage', $colonne[5]);
        $requete->bindParam(':heure_d_pointage', $colonne[6]);
        $requete->bindParam(':heure_f_pointage', $colonne[7]);
        $requete->bindParam(':fk_id_technicien', $id_tech);

        if ($requete->execute())
        {
            return "oui";
        }
        return "non";
    }
}