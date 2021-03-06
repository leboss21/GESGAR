<?php
/**
 * Created by PhpStorm.
 * User: GBIGBON
 * Date: 8/16/2019
 * Time: 7:10 AM
 */

class ApEtatVisibiliteVehiculeGarantie
{
    protected $dbaseprivateLite;

    function __construct($dbaseprivateLite){

        $this->dbaseprivateLite = $dbaseprivateLite;

    }

    public function EtatVisibiliteRevision($liste = array())
    {
        $requete = $this->dbaseprivateLite->prepare("UPDATE garantie SET muet=:muet WHERE id_garantie=:id_garantie");
        $requete->bindParam(':muet', $liste[0]);
        $requete->bindParam(':id_garantie', $liste[1]);
        if($requete->execute())
        {
            return "oui";
        }
        return "non";
    }
}