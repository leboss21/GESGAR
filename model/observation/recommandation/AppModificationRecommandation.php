<?php


class AppModificationRecommandation
{
    protected $dbaseprivateLite;

    function __construct($dbaseprivateLite){

        $this->dbaseprivateLite = $dbaseprivateLite;

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
            if (preg_match('/^[a-z.üàáâãäåéèêëìíîïòóôõöùúûüæçñ]$/',$dataCharLow)==true)$i = $dataL;
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

    public function RemoteModification($id_recom){
        $requete = $this->dbaseprivateLite->prepare(" SELECT charger FROM recommandation WHERE id_recommandation=:id_recommandation");
        $requete->bindParam(':id_recommandation', $id_recom);
        $requete->execute();

        while($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $charger = $row['charger'];

            if($charger == 'charge')return 'charge';
            elseif ($charger == 'non charge')return 'non charge';
        }
    }

    public  function RecommandationModification($data=array()){

        $id_tech = $this->RecomSelectTechId($data[3]);
        $id_recept = $this->RecomSelectReceptionId($data[1]);
        $vue = 'non vu';

        $requete = $this->dbaseprivateLite->prepare("UPDATE  recommandation SET date_recommandation=:date_recommandation,probleme=:probleme,recommandation=:recommandation,fk_id_tech=:fk_id_tech,id_reception=:id_reception,modifier=:modifier,situation=:situation,vue=:vue WHERE id_recommandation=:id_recommandation");
        $requete->bindParam(':id_recommandation', $data[6]);
        $requete->bindParam(':date_recommandation', $data[0]);
        $requete->bindParam(':probleme', $data[4]);
        $requete->bindParam(':recommandation', $data[5]);
        $requete->bindParam(':fk_id_tech', $id_tech);
        $requete->bindParam(':id_reception', $id_recept);
        $requete->bindParam(':modifier', $data[7]);
        $requete->bindParam(':situation', $data[8]);
        $requete->bindParam(':vue', $vue);

        if ($requete->execute())
        {
            return "oui";
        }
        return "non";


    }
}