<?php


class AppInsertionRecommandation
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

    public function CheckEmpty( $data=array()){

        if (  empty($data[0]) or empty($data[1]) or empty($data[2]) or empty($data[3]) or empty($data[4]) or empty($data[5]))
        {
            return 'oui';
        }
        return 'non';
    }

    public function RecomSelectTechId($data)
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

    public function RecomSelectReceptionId($data)
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
        $requete->bindParam(':immatriculation', $data);
        $requete->execute();

        while($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_veh = $row["id_vehicule"];
        }

        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM reception WHERE fk_id_vehicule=:fk_id_vehicule ORDER BY id_reception DESC LIMIT 1");
        $requete->bindParam(':fk_id_vehicule', $id_veh);
        $requete->execute();

        if($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_recept = $row["id_reception"];
            return $id_recept;
        }
        else
        {
            return 'non';
        }
    }

    public  function RecommandationInsert($data=array()){

        $id_tech = $this->RecomSelectTechId($data[3]);
        $id_recept = $this->RecomSelectReceptionId($data[1]);

        $requete = $this->dbaseprivateLite->prepare("INSERT into recommandation (date_recommandation ,probleme,recommandation,fk_id_tech,id_reception,situation) VALUES (:date_recommandation,:probleme,:recommandation,:fk_id_tech,:id_reception,:situation)");
        $requete->bindParam(':date_recommandation', $data[0]);
        $requete->bindParam(':probleme', $data[4]);
        $requete->bindParam(':recommandation', $data[5]);
        $requete->bindParam(':fk_id_tech', $id_tech);
        $requete->bindParam(':id_reception', $id_recept);
        $requete->bindParam(':situation', $data[6]);

        if ($requete->execute())
        {
            return "oui";
        }
        return "non";
    }

    public  function RecommandationInsertToEvolution($data=array()){

        $id_tech = $this->RecomSelectTechId($data[2]);

        $requete = $this->dbaseprivateLite->prepare("INSERT into recommandation (date_recommandation,probleme,recommandation,fk_id_tech,id_reception) VALUES (:date_recommandation,:probleme,:recommandation,:fk_id_tech,:id_reception)");
        $requete->bindParam(':date_recommandation', $data[1]);
        $requete->bindParam(':probleme', $data[3]);
        $requete->bindParam(':recommandation', $data[4]);
        $requete->bindParam(':fk_id_tech', $id_tech);
        $requete->bindParam(':id_reception', $data[0]);

        if ($requete->execute())
        {
            return "oui";
        }
        return "non";
    }

}