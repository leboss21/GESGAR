<?php

class AppSuppressionProgrammation
{
    protected $dbaseprivateLite;

    function __construct($dbaseprivateLite)
    {

        $this->dbaseprivateLite = $dbaseprivateLite;

    }

    public function SuppreProgrammation($item){

        $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM programmation WHERE id_programmation=:id_programmation");
        $requete->bindParam(':id_programmation', $item);
        if ($requete->execute())
        {
            return 'oui';
        }
        return 'non';
    }
}