<?php


class ApEtatVisibiliteVehiculeRevision
{
    protected $dbaseprivateLite;

    function __construct($dbaseprivateLite){

        $this->dbaseprivateLite = $dbaseprivateLite;

    }

    public function EtatVisibiliteRevision($liste = array())
    {
        $requete = $this->dbaseprivateLite->prepare("UPDATE revision SET muet=:muet WHERE id_revision=:id_revision");
        $requete->bindParam(':muet', $liste[0]);
        $requete->bindParam(':id_revision', $liste[1]);
        if($requete->execute())
        {
            return "oui";
        }
        return "non";
    }
}