<?php

class AppSuppressionLivraison
{
    protected $dbaseprivateLite;

    function __construct($dbaseprivateLite)
    {

        $this->dbaseprivateLite = $dbaseprivateLite;

    }

    public function InsertionEvolution($item)
    {
        $requete = $this->dbaseprivateLite->prepare("SELECT * FROM livraison WHERE id_livraison=:id_livraison");
        $requete->bindParam(':id_livraison', $item);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_reception = $row['id_reception'];
        }

        $requete1 = $this->dbaseprivateLite->prepare("INSERT into evolution_travaux (id_evolution_travaux, id_reception) VALUES (:id_evolution_travaux, :id_reception)");
        $requete1->bindParam(':id_evolution_travaux', $id_reception);
        $requete1->bindParam(':id_reception', $id_reception);
        $requete1->execute();

        $requete2 = $this->dbaseprivateLite->prepare(" DELETE  FROM recommandation WHERE id_reception=:id_reception");
        $requete2->bindParam(':id_reception', $id_reception);
        $requete2->execute();
        return "oui";
    }

    public function SuppreLivraison($item){

            $evolRetabli = $this->InsertionEvolution($item);

            if($evolRetabli == 'oui')
            {
                $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM livraison WHERE id_livraison=:id_livraison");
                $requete->bindParam(':id_livraison', $item);
                if ($requete->execute())
                {
                    return 'oui';
                }
                return 'non';
            }

    }
}