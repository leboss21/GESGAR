<?php
/**
 * Created by PhpStorm.
 * User: GBIGBON
 * Date: 19/02/2020
 * Time: 10:27
 */

class AppInsertionMaintenanceStandard
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

    public function MaintStandInsert($data =  array())
    {
        $id_vehicul = $this->RecepSelectIdVehicul($data[0]);

        $requete = $this->dbaseprivateLite->prepare("INSERT into maintenance_standard (dates, kilometrage, tache, id_vehicule) VALUES (:dates, :kilometrage, :tache, :id_vehicule)");
        $requete->bindParam(':dates', $data[1]);
        $requete->bindParam(':kilometrage', $data[2]);
        $requete->bindParam(':tache', $data[3]);
        $requete->bindParam(':id_vehicule', $id_vehicul);
        $requete->execute();
        return "oui";
    }
}