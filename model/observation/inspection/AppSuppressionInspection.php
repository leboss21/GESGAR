<?php

class AppSuppressionInspection
{
    protected $dbaseprivateLite;

    function __construct($dbaseprivateLite)
    {

        $this->dbaseprivateLite = $dbaseprivateLite;

    }

    public function SuppreInspect($item){

        $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM inspection WHERE id_inspection=:id_inspection");
        $requete->bindParam(':id_inspection', $item);
        if ($requete->execute())
        {
            return 'oui';
        }
        return 'non';
    }
}