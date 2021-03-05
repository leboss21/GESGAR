<?php
/**
 * Created by PhpStorm.
 * User: locky
 * Date: 8/1/2019
 * Time: 1:15 PM
 */

class AppSuppressionXvehiculeVisiteTechnique
{
    protected $dbaseprivateLite;

    function __construct($dbaseprivateLite)
    {
        $this->dbaseprivateLite = $dbaseprivateLite;
    }

    public function SuppreVisiteTechnique($item){
        $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM visite WHERE id_visite=:id_visite");
        $requete->bindParam(':id_visite', $item);
        if ($requete->execute())
        {
            return 'oui';
        }
        return 'non';
    }
}