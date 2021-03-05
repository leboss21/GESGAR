<?php

class AppInsertionLivraison
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

    public function LivraisonSelectIdReception($colonne){

        $requete = $this->dbaseprivateLite->prepare("SELECT * FROM reception WHERE num_reception=:num_reception");
        $requete->bindParam(':num_reception', $colonne);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_reception = $row['id_reception'];
            return $id_reception;
        }
    }

    public function FactureValide($colonne){

        $requete = $this->dbaseprivateLite->prepare("SELECT * FROM livraison WHERE num_facture=:num_facture");
        $requete->bindParam(':num_facture', $colonne);
        $requete->execute();
        if ($requete->fetch(PDO::FETCH_ASSOC))
        {
            return 'oui';
        }
        return 'non';
    }

    public function LivraisonInsert($colonne=array()){

        $id_reception = $this->LivraisonSelectIdReception($colonne[0]);
        $heure_livraison = $colonne[2];
        $date_finG = $colonne[6];

        $heure_livraisonL = strlen($heure_livraison);
        $date_finGL = strlen($date_finG);
        if($heure_livraisonL == 0)$heure_livraison = '00:00:00';
        if($date_finGL == 0)$date_finG = '1000-10-10';

        $requete = $this->dbaseprivateLite->prepare("INSERT into livraison (date_livraison,heure_livraison,traveaux_fait,traveaux_non_fait,kilometrage,date_finG,num_facture,montant,id_reception) VALUES (:date_livraison,:heure_livraison,:traveaux_fait,:traveaux_non_fait,:kilometrage,:date_finG,:num_facture,:montant,:id_reception)");
        $requete->bindParam(':date_livraison', $colonne[1]);
        $requete->bindParam(':heure_livraison', $heure_livraison);
        $requete->bindParam(':traveaux_fait', $colonne[3]);
        $requete->bindParam(':traveaux_non_fait', $colonne[4]);
        $requete->bindParam(':kilometrage', $colonne[5]);
        $requete->bindParam(':date_finG', $date_finG);
        $requete->bindParam(':num_facture', $colonne[7]);
        $requete->bindParam(':montant', $colonne[8]);
        $requete->bindParam(':id_reception', $id_reception);
        if($requete->execute())
        {
            $evolution = 'non';
            $requete = $this->dbaseprivateLite->prepare("SELECT * FROM evolution_travaux WHERE id_reception=:id_reception");
            $requete->bindParam(':id_reception', $id_reception);
            $requete->execute();
            if ($requete->fetch(PDO::FETCH_ASSOC))
            {
                $evolution = 'oui';
            }

            if($evolution == 'oui')
            {
                $requete = $this->dbaseprivateLite->prepare(" DELETE  FROM evolution_travaux WHERE id_reception=:id_reception");
                $requete->bindParam(':id_reception', $id_reception);
                if ($requete->execute())
                {
                    return 'oui';
                }
                return 'non';
            }
            else
            {
                return "oui";
            }
        }
        return "non";
    }
}