<?php

class AppInsertionReclamation
{
    protected $dbaseprivateLite;

    function __construct($dbaseprivateLite){

        $this->dbaseprivateLite = $dbaseprivateLite;

    }
    public function CheckEmptyOn($data)
    {
        if (empty($data))
        {
            return 'oui';
        }
        return 'non';
    }

    public function ReclamationSelectIdLivraison($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
        $requete->bindParam(':immatriculation', $colonne);
        $requete->execute();

        while($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_vehicule = $row['id_vehicule'];
        }

        $requete2 = $this->dbaseprivateLite->prepare(" SELECT * FROM reception WHERE fk_id_vehicule=:fk_id_vehicule ORDER BY id_reception DESC LIMIT 1");
        $requete2->bindParam(':fk_id_vehicule', $id_vehicule);
        $requete2->execute();

        while($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
        {
            $id_reception = $row2['id_reception'];
        }

        $requete1 = $this->dbaseprivateLite->prepare(" SELECT * FROM livraison WHERE id_reception=:id_reception");
        $requete1->bindParam(':id_reception', $id_reception);
        $requete1->execute();

        while($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $id_livraison = $row1['id_livraison'];
        }

        return $id_livraison;
    }


    public function ReclamationInsert($colonne = array())
    {

        $id_livraison = $this->ReclamationSelectIdLivraison($colonne[8]);

        $date_observation = $colonne[6];
        $date_observationL = strlen($date_observation);
        if($date_observationL == 0)$date_observation = '1000-10-10';

        $requete = $this->dbaseprivateLite->prepare("INSERT into reclamation (date_reclamation,reclamation,reclamateur,analyse,cause,proposition,date_observation,observateur,etat,id_livraison) VALUES (:date_reclamation,:reclamation,:reclamateur,:analyse,:cause,:proposition,:date_observation,:observateur,:etat,:id_livraison)");
        $requete->bindParam(':date_reclamation', $colonne[0]);
        $requete->bindParam(':reclamation', $colonne[1]);
        $requete->bindParam(':reclamateur', $colonne[2]);
        $requete->bindParam(':analyse', $colonne[3]);
        $requete->bindParam(':cause', $colonne[4]);
        $requete->bindParam(':proposition', $colonne[5]);
        $requete->bindParam(':date_observation', $date_observation);
        $requete->bindParam(':observateur', $colonne[7]);
        $requete->bindParam(':etat', $colonne[9]);
        $requete->bindParam(':id_livraison', $id_livraison);
        if($requete->execute())
        {
            return "oui";
        }
        return "non";
    }
}