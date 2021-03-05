<?php

/**
 * Created by PhpStorm.
 * User: freespirit
 * Date: 1/17/2019
 * Time: 3:50 PM
 */
class AppModificationReception
{
    protected $dbaseprivateLite;

    function __construct($dbaseprivateLite){

        $this->dbaseprivateLite = $dbaseprivateLite;

    }
    public function patternKilom($kilomet)
    {
        $kilom = "#^([0-9]{1,})$#";
        if (preg_match($kilom,$kilomet))
        {
            return "oui";
        }
        return "non";

    }
    public function CheckEmptyOn($data)
    {
        if (empty($data))
        {
            return 'oui';
        }
        return 'non';
    }
    public function NumReceptionExistant($colonne = array())
    {
        $requete = $this->dbaseprivateLite->prepare("SELECT * FROM reception WHERE num_reception=:num_reception");
        $requete->bindParam(':num_reception', $colonne[0]);
        $requete->execute();
       while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_recept = $row['id_reception'];
            if($id_recept == $colonne[1])
            {
                return 'non';
            }
            else
            {
                return 'oui';
            }

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

    public function RecepSelectIdRecep($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM reception WHERE num_reception=:num_reception");
        $requete->bindParam(':num_reception', $colonne);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_reception = $row['id_reception'];
            return $id_reception;
        }
    }

    public function RemoteModification($num_recep, $id_recep){
        $requete = $this->dbaseprivateLite->prepare(" SELECT charger FROM reception WHERE num_reception=:num_reception AND id_reception=:id_reception");
        $requete->bindParam(':num_reception', $num_recep);
        $requete->bindParam(':id_reception', $id_recep);
        $requete->execute();

        while($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $charger = $row['charger'];

            if($charger == 'charge')return 'charge';
            elseif ($charger == 'non charge')return 'non charge';
        }
    }

    public function ReceptionModif($colonne=array())
    {
        $tacheE = $colonne[9];
        if(empty($tacheE))$tacheE = 'Non Renseignée';

        $id_vehicule = $this->RecepSelectIdVehicul($colonne[6]);
        $requete = $this->dbaseprivateLite->prepare("UPDATE reception SET num_reception=:num_reception, type_reception=:type_reception, date_reception=:date_reception, heure_reception=:heure_reception, kilometrage=:kilometrage, tache=:tache, tache_effectif=:tache_effectif, fk_id_vehicule=:fk_id_vehicule, mode_de_payement=:mode_de_payement, modifier=:modifier WHERE id_reception=:id_reception");
        $requete->bindParam(':id_reception', $colonne[8]);
        $requete->bindParam(':num_reception', $colonne[0]);
        $requete->bindParam(':type_reception', $colonne[1]);
        $requete->bindParam(':date_reception', $colonne[2]);
        $requete->bindParam(':heure_reception', $colonne[3]);
        $requete->bindParam(':kilometrage', $colonne[4]);
        $requete->bindParam(':tache', $colonne[5]);
        $requete->bindParam(':tache_effectif', $colonne[7]);
        $requete->bindParam(':mode_de_payement', $tacheE);
        $requete->bindParam(':fk_id_vehicule', $id_vehicule);
        $requete->bindParam(':modifier', $colonne[10]);
        if($requete->execute())
        {
            return "oui";
        }
        return "non";
    }
}