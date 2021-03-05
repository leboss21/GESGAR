<?php
/**
 * Created by PhpStorm.
 * User: locky
 * Date: 8/1/2019
 * Time: 1:15 PM
 */

class AppSuppressionXvehiculeAssurance
{
    protected $dbaseprivateLite;

    function __construct($dbaseprivateLite)
    {
        $this->dbaseprivateLite = $dbaseprivateLite;
    }

    public function SuppreAssurance($item){
        $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM assurance WHERE id_assurance=:id_assurance");
        $requete->bindParam(':id_assurance', $item);
        if ($requete->execute())
        {
            return 'oui';
        }
        return 'non';
    }
}