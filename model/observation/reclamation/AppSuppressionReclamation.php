<?php

class AppSuppressionReclamation
{
    protected $dbaseprivateLite;

    function __construct($dbaseprivateLite)
    {

        $this->dbaseprivateLite = $dbaseprivateLite;

    }

    public function SuppreReclamation($item){

        $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM reclamation WHERE id_reclamation=:id_reclamation");
        $requete->bindParam(':id_reclamation', $item);
        if ($requete->execute())
        {
            return 'oui';
        }
        return 'non';
    }
}