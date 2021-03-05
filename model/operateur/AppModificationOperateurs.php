<?php

/**
 * Created by PhpStorm.
 * User: freespirit
 * Date: 1/20/2019
 * Time: 5:52 PM
 */
class AppModificationOperateurs
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

    public function ModifModeleTypeVehicule($libelle, $id)
    {
        $requete = $this->dbaseprivateLite->prepare("UPDATE type_modele_vehicule SET libelle=:libelle WHERE id_modele=:id_modele");
        $requete->bindParam(':libelle',$libelle);
        $requete->bindParam(':id_modele',$id);

        if($requete->execute())
        {
            return "oui";
        }

        return "non";
    }

    public function ModifTypeMoteur($libelle, $id)
    {
        $requete = $this->dbaseprivateLite->prepare("UPDATE type_moteur_vehicule SET libelle=:libelle WHERE id_moteur=:id_moteur");
        $requete->bindParam(':libelle', $libelle);
        $requete->bindParam(':id_moteur', $id);
        if($requete->execute())
        {
            return "oui";
        }

        return "non";
    }

    public function ModifSpecialiteTechnicien($libelle, $id)
    {
        $requete = $this->dbaseprivateLite->prepare("UPDATE specialite_technicien SET libelle=:libelle WHERE id_specialite=:id_specialite");
        $requete->bindParam(':libelle', $libelle);
        $requete->bindParam(':id_specialite', $id);
        if($requete->execute())
        {
            return "oui";
        }

        return "non";
    }

    public function ModifStatutTechnicien($libelle, $id)
    {
        $requete = $this->dbaseprivateLite->prepare("UPDATE statut_technicien SET libelle=:libelle WHERE id_statut=:id_statut");
        $requete->bindParam(':libelle', $libelle);
        $requete->bindParam(':id_statut', $id);
        if($requete->execute())
        {
            return "oui";
        }

        return "non";
    }

    public function ModifGenreClient($libelle, $id)
    {
        $requete = $this->dbaseprivateLite->prepare("UPDATE genre_client SET libelle=:libelle WHERE id_genre=:id_genre");
        $requete->bindParam(':libelle', $libelle);
        $requete->bindParam(':id_genre', $id);
        if($requete->execute())
        {
            return "oui";
        }
        return "non";
    }

}