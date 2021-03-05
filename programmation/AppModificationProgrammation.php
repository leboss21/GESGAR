<?php

class AppModificationProgrammation
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

    public function ProgrammeModification($colonne=array()){

        $id_vehicule = $this->ProgrammeSelecteIdVehicule($colonne[3]);

        $date_pr = $colonne[0];
        $heure_pr = $colonne[1];
        $tache_prog = $colonne[2];

        $requete = $this->dbaseprivateLite->prepare("UPDATE programmation SET date_programmation=:date_programmation,heure_programmation=:heure_programmation,tache_prog=:tache_prog,fk_id_vehicule=:fk_id_vehicule WHERE id_programmation=:id_programmation");
        $requete->bindParam(':id_programmation', $colonne[4]);
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