<?php
/**
 * Created by PhpStorm.
 * User: GBIGBON
 * Date: 21/02/2020
 * Time: 09:12
 */

class AppSuppressionMaintenanceStandard
{
    protected $dbaseprivateLite;

    function __construct($dbaseprivateLite)
    {

        $this->dbaseprivateLite = $dbaseprivateLite;

    }

    public function SuppreMaintStandar($item){

        $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM maintenance_standard WHERE id_maintenance_standard=:id_maintenance_standard");
        $requete->bindParam(':id_maintenance_standard', $item);
        if ($requete->execute())
        {
            return 'oui';
        }
        return 'non';
    }
}