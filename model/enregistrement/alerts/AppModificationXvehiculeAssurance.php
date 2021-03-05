<?php
/**
 * Created by PhpStorm.
 * User: locky
 * Date: 8/1/2019
 * Time: 11:52 AM
 */

class AppModificationXvehiculeAssurance
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

    public function AssuranceSelectIdVehicule($immatricule)
    {
        $requete = $this->dbaseprivateLite->prepare("SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
        $requete->bindParam(':immatriculation', $immatricule);
        $requete->execute();
        while($row = $requete->fetch(PDO::FETCH_ASSOC)) {
            return $row['id_vehicule'];
        }

    }

    public function AssuranceModification($id,$immatricule,$date,$duree){

        $id_vehicule = $this->AssuranceSelectIdVehicule($immatricule);

        $requete = $this->dbaseprivateLite->prepare("UPDATE assurance SET date_assurance=:date_assurance, duree=:duree, id_vehicule=:id_vehicule WHERE id_assurance=:id_assurance");
        $requete->bindParam(':id_assurance', $id);
        $requete->bindParam(':date_assurance', $date);
        $requete->bindParam(':duree', $duree);
        $requete->bindParam(':id_vehicule', $id_vehicule);

        if ($requete->execute())
        {
            return "oui";
        }
        return "non";

    }
}