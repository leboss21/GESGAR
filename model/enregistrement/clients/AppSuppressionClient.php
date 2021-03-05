<?php

class AppSuppressionClient
{
    protected $dbaseprivateLite;

    function __construct($dbaseprivateLite)
    {

        $this->dbaseprivateLite = $dbaseprivateLite;

    }

    public function selectReclamation($idLivraison)
    {
        $reclamE = 'non';
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM reclamation WHERE id_livraison=:id_livraison");
        $requete->bindParam(':id_livraison', $idLivraison);
        $requete->execute();
        while($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $reclamE = 'oui';
        }


        return $reclamE;
    }


    public function selectLivraison($idReception)
    {
        $livE = 'non';
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM livraison WHERE id_reception=:id_reception");
        $requete->bindParam(':id_reception', $idReception);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_livraison = $row['id_livraison'];
            $livE = 'oui';
        }

        if($livE == 'oui')
        {
            $reclamE = $this->selectReclamation($id_livraison);

            if($reclamE == 'oui')
            {
                $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM reclamation WHERE id_livraison=:id_livraison");
                $requete->bindParam(':id_livraison', $id_livraison);
                while($requete->execute())
                {
                    $requete1 = $this->dbaseprivateLite->prepare("  DELETE  FROM livraison WHERE id_reception=:id_reception");
                    $requete1->bindParam(':id_reception', $idReception);
                    $requete1->execute();
                    while($requete1->execute())
                    {
                        return 'delet livre';
                    }
                    return 'delet livre no';
                }
                return 'reclam non supr';
            }
            else
            {
                $requete1 = $this->dbaseprivateLite->prepare("  DELETE  FROM livraison WHERE id_reception=:id_reception");
                $requete1->bindParam(':id_reception', $idReception);
                $requete1->execute();
                while($requete1->execute())
                {
                    return 'delet livre';
                }
                return 'delet livre no';
            }
        }
        else
        {
            return 'non live';
        }

    }

    public function selectEvolutionTravaux($idReception)
    {
        $evoluE = 'non exist';
        $requete1 = $this->dbaseprivateLite->prepare("SELECT * FROM evolution_travaux WHERE id_reception=:id_reception");
        $requete1->bindParam(':id_reception', $idReception);
        $requete1->execute();
        while($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $evoluE = 'exist';
        }
        return $evoluE;
    }

    public function selectTravauxEffectue($idReception)
    {
        $TravEffE = 'non exist';
        $requete1 = $this->dbaseprivateLite->prepare("SELECT * FROM programmation_activite WHERE id_reception=:id_reception");
        $requete1->bindParam(':id_reception', $idReception);
        $requete1->execute();
        while($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $TravEffE = 'exist';
        }
        return $TravEffE;
    }

    public function Recommandation ($item)
    {
        $requete1 = $this->dbaseprivateLite->prepare("SELECT * FROM recommandation WHERE id_reception=:id_reception");
        $requete1->bindParam(':id_reception', $item);
        $requete1->execute();
        while($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $id_recommandation = $row1['id_recommandation'];
            $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM recommandation WHERE id_recommandation=:id_recommandation");
            $requete->bindParam(':id_recommandation', $id_recommandation);
            $requete->execute();
        }
        return 'recomE';
    }

    public function Maintenance ($item)
    {
        $requete1 = $this->dbaseprivateLite->prepare("SELECT * FROM maintenance WHERE id_reception=:id_reception");
        $requete1->bindParam(':id_reception', $item);
        $requete1->execute();
        while($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $id_maintenance = $row1['id_maintenance'];
            $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM maintenance WHERE id_maintenance=:id_maintenance");
            $requete->bindParam(':id_maintenance', $id_maintenance);
            $requete->execute();
        }
        return 'maintE';
    }

    public function Inspection ($item)
    {
        $requete1 = $this->dbaseprivateLite->prepare("SELECT * FROM inspection WHERE id_reception=:id_reception");
        $requete1->bindParam(':id_reception', $item);
        $requete1->execute();
        while($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $id_inspection = $row1['id_inspection'];
            $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM inspection WHERE id_inspection=:id_inspection");
            $requete->bindParam(':id_inspection', $id_inspection);
            $requete->execute();
        }
        return 'inspectE';

    }

    public function deletReception($idReception)
    {
        $tavEf = $this->selectTravauxEffectue($idReception);
        $recomEf = $this->Recommandation($idReception);
        $maintEf = $this->Maintenance($idReception);
        $inspectEf = $this->Inspection($idReception);

        if($tavEf == 'exist')
        {
            $effectif = 'non';
            $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM programmation_activite WHERE id_reception=:id_reception");
            $requete->bindParam(':id_reception', $idReception);
            while($requete->execute())
            {

            }

        }

        $livE = $this->selectLivraison($idReception);

        if(($livE == 'non live' || $livE == 'delet livre')&&$recomEf=='recomE' && $maintEf=='maintE' && $inspectEf=='inspectE')
        {
            $evoluE = $this->selectEvolutionTravaux($idReception);

            if($evoluE == 'exist')
            {
                $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM evolution_travaux WHERE id_reception=:id_reception");
                $requete->bindParam(':id_reception', $idReception);
                while($requete->execute())
                {
                    $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM reception WHERE id_reception=:id_reception");
                    $requete->bindParam(':id_reception', $idReception);
                    while($requete->execute())
                    {
                        return 'oui';
                    }
                    return 'non';
                }
                return 'non';
            }
            elseif ($evoluE == 'non exist')
            {
                $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM reception WHERE id_reception=:id_reception");
                $requete->bindParam(':id_reception', $idReception);
                while($requete->execute())
                {
                    return 'oui';
                }
                return 'non';
            }
        }
    }

    public function Reception ($item)
    {
        $requete1 = $this->dbaseprivateLite->prepare("SELECT * FROM reception WHERE fk_id_vehicule=:fk_id_vehicule");
        $requete1->bindParam(':fk_id_vehicule', $item);
        $requete1->execute();
        while($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $id_reception = $row1['id_reception'];
            $this->deletReception($id_reception);
        }
        return 'endProg';
    }

    public function Programmation ($item)
    {
        $requete1 = $this->dbaseprivateLite->prepare("SELECT * FROM programmation WHERE fk_id_vehicule=:fk_id_vehicule");
        $requete1->bindParam(':fk_id_vehicule', $item);
        $requete1->execute();
        while($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $id_programmation = $row1['id_programmation'];
            $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM programmation WHERE id_programmation=:id_programmation");
            $requete->bindParam(':id_programmation', $id_programmation);
            $requete->execute();
        }
    }

    public function SuppreVehicule($item){

        $this->Programmation($item);
        $this->Reception($item);

        $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM vehicule WHERE id_vehicule=:id_vehicule");
        $requete->bindParam(':id_vehicule', $item);
        if ($requete->execute())
        {
            return 'oui';
        }
        return 'non';
    }


    public function Vehicule ($item)
    {
        $requete1 = $this->dbaseprivateLite->prepare("SELECT * FROM vehicule WHERE id_client=:id_client");
        $requete1->bindParam(':id_client', $item);
        $requete1->execute();
        while($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $id_vehicule = $row1['id_vehicule'];
            $this->SuppreVehicule($id_vehicule);
        }
        return 'endProg';
    }


    public function SuppreClient($item){

            $this->Vehicule($item);

           $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM client WHERE id_client=:id_client");
           $requete->bindParam(':id_client', $item);
           if ($requete->execute())
           {
               return 'oui';
           }
           return 'non';
    }
}