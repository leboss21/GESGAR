<?php
/**
 * Created by PhpStorm.
 * User: locky
 * Date: 8/1/2019
 * Time: 11:52 AM
 */

class AppModificationXvehiculeVisiteTechnique
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

    public function VisiteTechniqueSelectIdVehicule($immatricule)
    {
        $requete = $this->dbaseprivateLite->prepare("SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
        $requete->bindParam(':immatriculation', $immatricule);
        $requete->execute();
        while($row = $requete->fetch(PDO::FETCH_ASSOC)) {
            return $row['id_vehicule'];
        }

    }

    public function VisiteTechniqueModification($id,$immatricule,$date,$duree){

        $id_vehicule = $this->VisiteTechniqueSelectIdVehicule($immatricule);

        $requete = $this->dbaseprivateLite->prepare("UPDATE visite SET date_visite=:date_visite,  duree=:duree, id_vehicule=:id_vehicule WHERE id_visite=:id_visite");
        $requete->bindParam(':id_visite', $id);
        $requete->bindParam(':date_visite', $date);
        $requete->bindParam(':duree', $duree);
        $requete->bindParam(':id_vehicule', $id_vehicule);

        if ($requete->execute())
        {
            return "oui";
        }
        return "non";

    }
}