<?php

/**
 * Created by PhpStorm.
 * User: freespirit
 * Date: 1/20/2019
 * Time: 5:52 PM
 */
class AppInsertOperateurs
{
    protected $dbaseprivateLite;

    function __construct($dbaseprivateLite){

        $this->dbaseprivateLite = $dbaseprivateLite;

    }

    public function CheckEmptyOn($data)
    {
        if (empty($data))
        {
            return 'oui';
        }
        return 'non';
    }

    public function ModeleTypeVehicule($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM type_modele_vehicule WHERE libelle=:libelle");
        $requete->bindParam(':libelle', $colonne);
        $requete->execute();

        if ($requete->fetch(PDO::FETCH_ASSOC)) {
            return "oui";
        }
        return "non";
    }

    public function TypeMoteur($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM type_moteur_vehicule WHERE libelle=:libelle");
        $requete->bindParam(':libelle', $colonne);
        $requete->execute();

        if ($requete->fetch(PDO::FETCH_ASSOC)) {
            return "oui";
        }
        return "non";
    }

    public function SpecialiteTechnicien($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM specialite_technicien WHERE libelle=:libelle");
        $requete->bindParam(':libelle', $colonne);
        $requete->execute();

        if ($requete->fetch(PDO::FETCH_ASSOC)) {
            return "oui";
        }
        return "non";
    }

    public function StatutTechnicien($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM statut_technicien WHERE libelle=:libelle");
        $requete->bindParam(':libelle', $colonne);
        $requete->execute();

        if ($requete->fetch(PDO::FETCH_ASSOC)) {
            return "oui";
        }
        return "non";
    }

    public function GenreClient($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM genre_client WHERE libelle=:libelle");
        $requete->bindParam(':libelle', $colonne);
        $requete->execute();

        if ($requete->fetch(PDO::FETCH_ASSOC)) {
            return "oui";
        }
        return "non";
    }

    public function InsertModeleTypeVehicule($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare("INSERT into type_modele_vehicule (libelle) VALUES (:libelle)");
        $requete->bindParam(':libelle',$colonne);

        if($requete->execute())
        {
            return "oui";
        }

        return "non";
    }

    public function InsertTypeMoteur($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare("INSERT into type_moteur_vehicule (libelle) VALUES (:libelle)");
        $requete->bindParam(':libelle', $colonne);
        if($requete->execute())
        {
            return "oui";
        }

        return "non";
    }

    public function InsertSpecialiteTechnicien($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare("INSERT into specialite_technicien (libelle) VALUES (:libelle)");
        $requete->bindParam(':libelle', $colonne);
        if($requete->execute())
        {
            return "oui";
        }

        return "non";
    }

    public function InsertStatutTechnicien($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare("INSERT into statut_technicien (libelle) VALUES (:libelle)");
        $requete->bindParam(':libelle', $colonne);
        if($requete->execute())
        {
            return "oui";
        }

        return "non";
    }

    public function InsertGenreClient($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare("INSERT into genre_client (libelle) VALUES (:libelle)");
        $requete->bindParam(':libelle', $colonne);
        if($requete->execute())
        {
            return "oui";
        }
        return "non";
    }

}