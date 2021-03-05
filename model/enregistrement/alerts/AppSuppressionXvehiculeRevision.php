<?php
/**
 * Created by PhpStorm.
 * User: locky
 * Date: 8/1/2019
 * Time: 1:15 PM
 */

class AppSuppressionXvehiculeRevision
{
    protected $dbaseprivateLite;

    function __construct($dbaseprivateLite)
    {
        $this->dbaseprivateLite = $dbaseprivateLite;
    }

    public function SuppreRevision($item){
        $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM revision WHERE id_revision=:id_revision");
        $requete->bindParam(':id_revision', $item);
        if ($requete->execute())
        {
            return 'oui';
        }
        return 'non';
    }
}