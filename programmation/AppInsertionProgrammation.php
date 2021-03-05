<?php

class AppInsertionProgrammation
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

    public function ProgrammeSelecteIdVehicule($data)
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
        $requete->bindParam(':immatriculation', $data);
        $requete->execute();

        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_vehicule = $row['id_vehicule'];
            return $id_vehicule;
        }

    }

    public function ProgrammeInsert($colonne=array()){

        $id_vehicule = $this->ProgrammeSelecteIdVehicule($colonne[3]);

        $date_pr = $colonne[0];
        $heure_pr = $colonne[1];
        $tache_prog = $colonne[2];

        $requete = $this->dbaseprivateLite->prepare("INSERT into programmation (date_programmation,heure_programmation,tache_prog,fk_id_vehicule) VALUES (:date_programmation,:heure_programmation,:tache_prog,:fk_id_vehicule)");
        $requete->bindParam(':date_programmation', $date_pr);
        $requete->bindParam(':heure_programmation', $heure_pr);
        $requete->bindParam(':tache_prog', $tache_prog);
        $requete->bindParam(':fk_id_vehicule', $id_vehicule);

        if ($requete->execute())
        {
            return "oui";
        }
        return "non";
    }
}