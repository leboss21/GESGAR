<?php
/**
 * Created by PhpStorm.
 * User: locky
 * Date: 8/1/2019
 * Time: 11:52 AM
 */

class AppModificationXvehiculeGarantie
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

    public function GarantieSelectIdVehicule($immatricule)
    {
        $requete = $this->dbaseprivateLite->prepare("SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
        $requete->bindParam(':immatriculation', $immatricule);
        $requete->execute();
        while($row = $requete->fetch(PDO::FETCH_ASSOC)) {
            return $row['id_vehicule'];
        }

    }

    public function GarantieModification($id,$immatricule,$date,$duree){

        $id_vehicule = $this->GarantieSelectIdVehicule($immatricule);

        $requete = $this->dbaseprivateLite->prepare("UPDATE garantie SET date_garantie=:date_garantie, duree=:duree, id_vehicule=:id_vehicule WHERE id_garantie=:id_garantie");
        $requete->bindParam(':id_garantie', $id);
        $requete->bindParam(':date_garantie', $date);
        $requete->bindParam(':duree', $duree);
        $requete->bindParam(':id_vehicule', $id_vehicule);

        if ($requete->execute())
        {
            return "oui";
        }
        return "non";

    }
}