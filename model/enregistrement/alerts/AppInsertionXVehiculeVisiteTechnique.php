<?php
/**
 * Created by PhpStorm.
 * User: locky
 * Date: 7/29/2019
 * Time: 1:20 AM
 */

class AppInsertionXVehiculeVisiteTechnique
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

    public function rendezvousExistant($immatricule, $date, $duree)
    {
        $requete = $this->dbaseprivateLite->prepare("SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
        $requete->bindParam(':immatriculation', $immatricule);
        $requete->execute();
        while($row = $requete->fetch(PDO::FETCH_ASSOC)) {

            $id_vehicule = $row['id_vehicule'] ;

            $requete1 = $this->dbaseprivateLite->prepare("SELECT * FROM revision WHERE date_revision=:id_revision AND duree=:duree AND id_vehicule=:id_vehicule");
            $requete1->bindParam(':id_revision', $date);
            $requete1->bindParam(':duree', $duree);
            $requete1->bindParam(':id_vehicule', $id_vehicule);
            $requete1->execute();
            while($row1 = $requete1->fetch(PDO::FETCH_ASSOC)) {
                return 'oui';
            }

        }
        return 'non';
    }

    public function VisiteSelectIdVehicule($immatricule)
    {
        $requete = $this->dbaseprivateLite->prepare("SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
        $requete->bindParam(':immatriculation', $immatricule);
        $requete->execute();
        while($row = $requete->fetch(PDO::FETCH_ASSOC)) {
            return $row['id_vehicule'];
        }

    }

    public function InsrtionVisiteTechnique($immatricule, $date, $duree)
    {

        $id_vehicule = $this->VisiteSelectIdVehicule($immatricule);

        $requete = $this->dbaseprivateLite->prepare("INSERT INTO visite (date_visite, duree, id_vehicule) VALUES (:date_visite, :duree, :id_vehicule)");
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