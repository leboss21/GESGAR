<?php


class AppSuppressionMaintenance
{
    protected $dbaseprivateLite;

    function __construct($dbaseprivateLite)
    {

        $this->dbaseprivateLite = $dbaseprivateLite;

    }

    public function SuppreMaint($item){

        $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM maintenance WHERE id_maintenance=:id_maintenance");
        $requete->bindParam(':id_maintenance', $item);
        if ($requete->execute())
        {
            return 'oui';
        }
        return 'non';
    }

}