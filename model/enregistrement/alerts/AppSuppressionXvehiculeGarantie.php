<?php
/**
 * Created by PhpStorm.
 * User: locky
 * Date: 8/1/2019
 * Time: 1:15 PM
 */

class AppSuppressionXvehiculeGarantie
{
    protected $dbaseprivateLite;

    function __construct($dbaseprivateLite)
    {
        $this->dbaseprivateLite = $dbaseprivateLite;
    }

    public function SuppreGarantie($item){
        $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM garantie WHERE id_garantie=:id_garantie");
        $requete->bindParam(':id_garantie', $item);
        if ($requete->execute())
        {
            return 'oui';
        }
        return 'non';
    }
}