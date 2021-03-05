<?php


class AppSuppressionOperateurs
{
    protected $dbaseprivateLite;

    function __construct($dbaseprivateLite)
    {
        $this->dbaseprivateLite = $dbaseprivateLite;
    }

    public function SuppreTypeModelVehicule($item){

        $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM type_modele_vehicule WHERE id_modele=:id_modele");
        $requete->bindParam(':id_modele', $item);
        if ($requete->execute())
        {
            return 'oui';
        }
        return 'non';
    }

    public function SuppreTypeMoteurVehicule($item){

        $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM type_moteur_vehicule WHERE id_moteur=:id_moteur");
        $requete->bindParam(':id_moteur', $item);
        if ($requete->execute())
        {
            return 'oui';
        }
        return 'non';
    }

    public function SuppreSpecialiteTech($item){

        $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM specialite_technicien WHERE id_specialite=:id_specialite");
        $requete->bindParam(':id_specialite', $item);
        if ($requete->execute())
        {
            return 'oui';
        }
        return 'non';
    }

    public function SuppreStatutTech($item){

        $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM statut_technicien WHERE id_statut=:id_statut");
        $requete->bindParam(':id_statut', $item);
        if ($requete->execute())
        {
            return 'oui';
        }
        return 'non';
    }

    public function SuppreGenreClient($item){

        $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM genre_client WHERE id_genre=:id_genre");
        $requete->bindParam(':id_genre', $item);
        if ($requete->execute())
        {
            return 'oui';
        }
        return 'non';
    }
}