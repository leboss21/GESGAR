<?php
/**
 * Created by PhpStorm.
 * User: GBIGBON
 * Date: 8/16/2019
 * Time: 7:13 AM
 */

class ApEtatVisibiliteVehiculeVisiteTechnique
{
    protected $dbaseprivateLite;

    function __construct($dbaseprivateLite){

        $this->dbaseprivateLite = $dbaseprivateLite;

    }

    public function EtatVisibiliteRevision($liste = array())
    {
        $requete = $this->dbaseprivateLite->prepare("UPDATE visite SET muet=:muet WHERE id_visite=:id_visite");
        $requete->bindParam(':muet', $liste[0]);
        $requete->bindParam(':id_visite', $liste[1]);
        if($requete->execute())
        {
            return "oui";
        }
        return "non";
    }
}