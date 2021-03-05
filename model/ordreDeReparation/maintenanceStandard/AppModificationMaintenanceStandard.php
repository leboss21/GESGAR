<?php
/**
 * Created by PhpStorm.
 * User: GBIGBON
 * Date: 19/02/2020
 * Time: 10:27
 */

class AppModificationMaintenanceStandard
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

    public function RecepSelectIdVehicul($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare("SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
        $requete->bindParam(':immatriculation', $colonne);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_vehicule = $row['id_vehicule'];
            return $id_vehicule;
        }
    }

    public function MaintStandModif($data =  array())
    {
        $id_vehicul = $this->RecepSelectIdVehicul($data[0]);

        $requete = $this->dbaseprivateLite->prepare("UPDATE maintenance_standard SET dates=:dates, kilometrage=:kilometrage, tache=:tache, id_vehicule=:id_vehicule WHERE id_maintenance_standard=:id_maintenance_standard");
        $requete->bindParam(':dates', $data[1]);
        $requete->bindParam(':kilometrage', $data[2]);
        $requete->bindParam(':tache', $data[3]);
        $requete->bindParam(':id_vehicule', $id_vehicul);
        $requete->bindParam(':id_maintenance_standard', $data[4]);
        $requete->execute();
        return "oui";
    }
}