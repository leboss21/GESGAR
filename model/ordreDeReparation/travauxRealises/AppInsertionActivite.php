<?php

class AppInsertionActivite
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


    public function ActiviteValideActivite($data)
    {
        $receptE = 'non';
        $imm = $data;
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
        $requete->bindParam(':immatriculation', $imm);
        $requete->execute();
        if ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_vehicule = $row["id_vehicule"];
        }


        $requete1 = $this->dbaseprivateLite->prepare(" SELECT * FROM reception WHERE  fk_id_vehicule=:fk_id_vehicule ORDER BY id_reception DESC LIMIT 1");
        $requete1->bindParam(':fk_id_vehicule', $id_vehicule);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $id_reception =  $row1['id_reception'];
            $date_reception = $row1['date_reception'];
            $receptE = 'oui';
        }

        if($receptE == 'non')
            return 'non';

        if($receptE == 'oui')
        {
            $requete2 = $this->dbaseprivateLite->prepare(" SELECT * FROM livraison WHERE id_reception=:id_reception");
            $requete2->bindParam(':id_reception', $id_reception);
            $requete2->execute();
            if ($row2 = $requete2->fetch(PDO::FETCH_ASSOC))
            {
                $date_livraison= $row2['date_livraison'];
            }
            else
            {
                $date_livraison = '0000-00-00';
            }

            if($date_livraison != '0000-00-00')
            {
                $date_reception = new DateTime($date_reception);
                $date_livraison = new DateTime($date_livraison);

                $date_reception = $date_reception->format('Ymd');
                $date_livraison = $date_livraison->format('Ymd');

                if($date_reception >= $date_livraison )
                {
                    return 'oui';
                }
                return 'non';
            }
            else
            {
                return 'oui';
            }
        }

    }

    public function ActiteSelecteIdTech($data)
    {
        $dataL = strlen($data);
        $dataCharLow = '';
        $lowerPos = 0;
        for ($i = 0; $i < $dataL; $i++)
        {
            $dataCharLow = $data{$i};
            $lowerPos++;
            if (preg_match('/^[a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ.]$/',$dataCharLow)==true)$i = $dataL;
        }

        $nom = substr($data,0,$lowerPos-3);
        $prenom = substr($data,$lowerPos-2,$dataL);


        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM technicien WHERE nom_technicien=:nom_technicien AND prenom_technicien=:prenom_technicien");
        $requete->bindParam(':nom_technicien', $nom);
        $requete->bindParam(':prenom_technicien', $prenom);
        $requete->execute();

        if ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_tech = $row["id_technicien"];
            return $id_tech;
        }
    }

    public function ActiteSelecteIdRecept($data)
    {
        $imm = $data;
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
        $requete->bindParam(':immatriculation', $imm);
        $requete->execute();
        if ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_vehicule = $row["id_vehicule"];
        }

        $requete1 = $this->dbaseprivateLite->prepare(" SELECT * FROM reception WHERE fk_id_vehicule=:fk_id_vehicule ORDER BY id_reception DESC LIMIT 1");
        $requete1->bindParam(':fk_id_vehicule', $id_vehicule);
        $requete1->execute();
        if ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $id_reception = $row1["id_reception"];
            return $id_reception;
        }
    }

    public function ActivitesInsert($colonne=array())
    {
        $idTech = $this->ActiteSelecteIdTech($colonne[2]);
        $idRecept = $this->ActiteSelecteIdRecept($colonne[3]);
        $requete = $this->dbaseprivateLite->prepare("INSERT into programmation_activite (date_activite,heure_debut_activite,heure_fin_activite,tache,id_technicien,id_reception) VALUES (:date_activite,:heure_debut_activite,:heure_fin_activite,:tache,:id_technicien,:id_reception)");
        $requete->bindParam(':date_activite', $colonne[0]);
        $requete->bindParam(':heure_debut_activite', $colonne[4]);
        $requete->bindParam(':heure_fin_activite', $colonne[5]);
        $requete->bindParam(':tache', $colonne[1]);
        $requete->bindParam(':id_technicien', $idTech);
        $requete->bindParam(':id_reception', $idRecept);
        if($requete->execute())
        {
            return "oui";
        }
        return "non";
    }
}