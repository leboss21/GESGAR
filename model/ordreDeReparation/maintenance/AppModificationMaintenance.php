<?php

class AppModificationMaintenance
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

    public function MaintSelectIdReception($colonne){

        $requete = $this->dbaseprivateLite->prepare("SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
        $requete->bindParam(':immatriculation', $colonne);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_vehicule = $row['id_vehicule'];
        }

        $requete = $this->dbaseprivateLite->prepare("SELECT * FROM reception WHERE fk_id_vehicule=:fk_id_vehicule ORDER BY id_reception DESC LIMIT 1");
        $requete->bindParam(':fk_id_vehicule', $id_vehicule);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_reception = $row['id_reception'];
            return $id_reception;
        }
    }

    public function MaintSelectIdTech($data){

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

        $requete = $this->dbaseprivateLite->prepare("SELECT * FROM technicien WHERE nom_technicien=:nom_technicien AND prenom_technicien=:prenom_technicien");
        $requete->bindParam(':nom_technicien', $nom);
        $requete->bindParam(':prenom_technicien', $prenom);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_tech= $row['id_technicien'];
            return $id_tech;
        }
    }

    public function MaintenanceModif($colonne=array()){

        $id_reception = $this->MaintSelectIdReception($colonne[4]);
        $id_tech = $this->MaintSelectIdTech($colonne[5]);

        $requete = $this->dbaseprivateLite->prepare("UPDATE maintenance SET maintenance_kilometrage=:maintenance_kilometrage,num_ordre=:num_ordre,maintenance_date=:maintenance_date,maintenance_realise=:maintenance_realise,id_reception=:id_reception,id_technicien=:id_technicien WHERE id_maintenance=:id_maintenance");
        $requete->bindParam(':id_maintenance', $colonne[6]);
        $requete->bindParam(':maintenance_kilometrage', $colonne[0]);
        $requete->bindParam(':num_ordre', $colonne[1]);
        $requete->bindParam(':maintenance_date', $colonne[2]);
        $requete->bindParam(':maintenance_realise', $colonne[3]);
        $requete->bindParam(':id_reception', $id_reception);
        $requete->bindParam(':id_technicien', $id_tech);
        if($requete->execute())
        {
            return "oui";
        }
        return "non";
    }

}