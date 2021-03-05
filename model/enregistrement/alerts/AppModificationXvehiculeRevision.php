<?php
/**
 * Created by PhpStorm.
 * User: locky
 * Date: 8/1/2019
 * Time: 11:52 AM
 */

class AppModificationXvehiculeRevision
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

    public function RevisionSelectIdVehicule($immatricule)
    {
        $requete = $this->dbaseprivateLite->prepare("SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
        $requete->bindParam(':immatriculation', $immatricule);
        $requete->execute();
        while($row = $requete->fetch(PDO::FETCH_ASSOC)) {
            return $row['id_vehicule'];
        }

    }

    public function RevisionModification($id,$immatricule,$date,$duree){

        $id_vehicule = $this->RevisionSelectIdVehicule($immatricule);

        $requete = $this->dbaseprivateLite->prepare("UPDATE revision SET date_revision=:date_revision, duree=:duree, id_vehicule=:id_vehicule WHERE id_revision=:id_revision");
        $requete->bindParam(':id_revision', $id);
        $requete->bindParam(':date_revision', $date);
        $requete->bindParam(':duree', $duree);
        $requete->bindParam(':id_vehicule', $id_vehicule);

        if ($requete->execute())
        {
            return "oui";
        }
        return "non";

    }
}