<?php

/**
 * Created by PhpStorm.
 * User: freespirit
 * Date: 1/17/2019
 * Time: 3:50 PM
 */
class AppInsertionReception
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

    public function NumReceptionExistant($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare("SELECT * FROM reception WHERE num_reception=:num_reception");
        $requete->bindParam(':num_reception', $colonne);
        $requete->execute();
        if ($requete->fetch(PDO::FETCH_ASSOC))
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

    public function ReceptionInsert($colonne=array())
    {
        $tacheE = $colonne[8];
        if(empty($tacheE))$tacheE = 'Non Renseignée';

        $id_vehicule = $this->RecepSelectIdVehicul($colonne[6]);
        $requete = $this->dbaseprivateLite->prepare("INSERT into reception (num_reception, type_reception, date_reception, heure_reception, kilometrage, tache, tache_effectif, mode_de_payement, fk_id_vehicule) VALUES (:num_reception, :type_reception, :date_reception, :heure_reception, :kilometrage, :tache, :tache_effectif, :mode_de_payement, :fk_id_vehicule)");
        $requete->bindParam(':num_reception', $colonne[0]);
        $requete->bindParam(':type_reception', $colonne[1]);
        $requete->bindParam(':date_reception', $colonne[2]);
        $requete->bindParam(':heure_reception', $colonne[3]);
        $requete->bindParam(':kilometrage', $colonne[4]);
        $requete->bindParam(':tache', $colonne[5]);
        $requete->bindParam(':tache_effectif', $colonne[7]);
        $requete->bindParam(':mode_de_payement', $tacheE);
        $requete->bindParam(':fk_id_vehicule', $id_vehicule);

        if ($requete->execute())
        {
            $id_reception = $this->RecepSelectIdRecep($colonne[0]);
            $requete1 = $this->dbaseprivateLite->prepare("INSERT into evolution_travaux (date_etat1,id_reception) VALUES (:date_etat1,:id_reception)");
            $requete1->bindParam(':id_reception', $id_reception);
            $requete1->bindParam(':date_etat1', $colonne[2]);
            $requete1->execute();
            return "oui";
        }
        return "non";
    }
}