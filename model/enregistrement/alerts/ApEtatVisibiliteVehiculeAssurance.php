<?php
/**
 * Created by PhpStorm.
 * User: GBIGBON
 * Date: 8/16/2019
 * Time: 7:06 AM
 */

class ApEtatVisibiliteVehiculeAssurance
{
    protected $dbaseprivateLite;

    function __construct($dbaseprivateLite){

        $this->dbaseprivateLite = $dbaseprivateLite;

    }

    public function EtatVisibiliteRevision($liste = array())
    {
        $requete = $this->dbaseprivateLite->prepare("UPDATE assurance SET muet=:muet WHERE id_assurance=:id_assurance");
        $requete->bindParam(':muet', $liste[0]);
        $requete->bindParam(':id_assurance', $liste[1]);
        if($requete->execute())
        {
            return "oui";
        }
        return "non";
    }
}