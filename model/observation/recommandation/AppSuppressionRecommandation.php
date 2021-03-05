<?php

class AppSuppressionRecommandation
{
    protected $dbaseprivateLite;

    function __construct($dbaseprivateLite)
    {

        $this->dbaseprivateLite = $dbaseprivateLite;

    }

    public function SuppreRecommandation($item){

        $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM recommandation WHERE id_recommandation=:id_recommandation");
        $requete->bindParam(':id_recommandation', $item);
        if ($requete->execute())
        {
            return 'oui';
        }
        return 'non';
    }
}