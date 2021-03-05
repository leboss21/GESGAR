<?php

class AppSuppressionActivite
{
    protected $dbaseprivateLite;

    function __construct($dbaseprivateLite)
    {

        $this->dbaseprivateLite = $dbaseprivateLite;

    }

    public function SuppreActivite($item){

        $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM programmation_activite WHERE id_activite=:id_activite");
        $requete->bindParam(':id_activite', $item);
        if ($requete->execute())
        {
            return 'oui';
        }
        return 'non';
    }
}