<?php

class AppSuppressionPointage
{
    protected $dbaseprivateLite;

    function __construct($dbaseprivateLite)
    {

        $this->dbaseprivateLite = $dbaseprivateLite;

    }


    public function SupprePointage($item){

        $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM pointage WHERE id_pointage=:id_pointage");
        $requete->bindParam(':id_pointage', $item);
        if ($requete->execute())
        {
            return 'oui';
        }
        return 'non';
    }

}