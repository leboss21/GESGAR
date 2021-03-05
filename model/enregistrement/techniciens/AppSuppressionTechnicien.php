<?php

class AppSuppressionTechnicien
{
    protected $dbaseprivateLite;

    function __construct($dbaseprivateLite)
    {

        $this->dbaseprivateLite = $dbaseprivateLite;

    }

    public function selectProgrammation_activite($idTech)
    {
        $proact = 'non';
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM programmation_activite WHERE id_technicien=:id_technicien");
        $requete->bindParam(':id_technicien', $idTech);
        $requete->execute();
        while($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $proact = 'oui';
        }

        return $proact;
    }

    public function selectMaintenance($idTech)
    {
        $maintE = 'non';
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM maintenance WHERE id_technicien=:id_technicien");
        $requete->bindParam(':id_technicien', $idTech);
        $requete->execute();
        while($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $maintE = 'oui';
        }

        return $maintE;
    }

    public function selectPointage($idTech)
    {
        $pointE = 'non';
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM pointage WHERE fk_id_technicien=:fk_id_technicien");
        $requete->bindParam(':fk_id_technicien', $idTech);
        $requete->execute();
        while($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $pointE = 'oui';
        }

        return $pointE;
    }

    public function SuppreTechnicien($item){

        $proact = $this->selectProgrammation_activite($item);
        $maintE = $this->selectMaintenance($item);
        $pointE = $this->selectPointage($item);

        if($proact == 'oui')
        {
            $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM programmation_activite WHERE id_technicien=:id_technicien");
            $requete->bindParam(':id_technicien', $item);
            $requete->execute();
        }

        if($maintE == 'oui')
        {
            $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM maintenance WHERE id_technicien=:id_technicien");
            $requete->bindParam(':id_technicien', $item);
            $requete->execute();
        }

        if($pointE == 'oui')
        {
            $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM pointage WHERE fk_id_technicien=:fk_id_technicien");
            $requete->bindParam(':fk_id_technicien', $item);
            $requete->execute();
        }

        $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM technicien WHERE id_technicien=:id_technicien");
        $requete->bindParam(':id_technicien', $item);
        if ($requete->execute())
        {
            return 'oui';
        }
        return 'non';
    }

}