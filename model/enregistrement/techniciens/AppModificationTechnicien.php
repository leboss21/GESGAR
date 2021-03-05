<?php


class AppModificationTechnicien
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

    public function CheckEmptyTel( $data){

        $telLong = strlen($data);

        $telCharEnd1 = $data{$telLong-1};
        $telCharEnd2 = $data{$telLong-2};

        if ($telCharEnd1==' ' AND $telCharEnd2==')')
        {
            return 'non';
        }

        return 'oui';
    }

    public function TechnicienSelect($colonne=array()){

        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM technicien WHERE contact=:contact");
        $requete->bindParam(':contact', $colonne[1]);
        $requete->execute();

        while($row = $requete->fetch(PDO::FETCH_ASSOC)) {
            $id_tech = $row['id_technicien'];
            if($id_tech==$colonne[0])
            {
                return "non";
            }
            else
                return "oui";
        }
        return "non";
    }

    public function TechSelectIdSpecia($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM specialite_technicien WHERE libelle=:libelle");
        $requete->bindParam(':libelle', $colonne);
        $requete->execute();

        while ($id_specialite = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_specialite = $id_specialite["id_specialite"];
            return $id_specialite;
        }

    }

    public function TechSelectIdStatut($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM statut_technicien WHERE libelle=:libelle");
        $requete->bindParam(':libelle', $colonne);
        $requete->execute();

        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_statut = $row["id_statut"];
            return $id_statut;
        }

    }

    public function TechnicienModification($colonne=array()){

        $id_specialite = $this->TechSelectIdSpecia($colonne[5]);

        $adresse='';
        $id_statut='';
        if(strlen($colonne[3]) == 0)$adresse = 'Non Renseigné';
        else $adresse = $colonne[3];

        if(strlen($colonne[4]) == 0)$id_statut = '1';
        else {$id_statut = $this->TechSelectIdStatut($colonne[4]);}

        $requete = $this->dbaseprivateLite->prepare("UPDATE technicien SET nom_technicien=:nom_technicien, prenom_technicien=:prenom_technicien, contact=:contact, adresse=:adresse, date_embauche=:date_embauche, id_statut=:id_statut, id_specialite=:id_specialite WHERE id_technicien=:id_technicien");
        $requete->bindParam(':id_technicien', $colonne[7]);
        $requete->bindParam(':nom_technicien', $colonne[0]);
        $requete->bindParam(':prenom_technicien', $colonne[1]);
        $requete->bindParam(':contact', $colonne[2]);
        $requete->bindParam(':adresse', $adresse);
        $requete->bindParam(':date_embauche', $colonne[6]);
        $requete->bindParam(':id_statut', $id_statut);
        $requete->bindParam(':id_specialite', $id_specialite);

        if ($requete->execute())
        {
            return "oui";
        }
        return "non";

    }
}