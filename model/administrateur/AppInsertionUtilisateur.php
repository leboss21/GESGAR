<?php


class AppInsertionUtilisateur
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

    public function NomPwdValide($data)
    {
        if (strlen($data) >= 4)
        {
            return 'oui';
        }
        return 'non';
    }

    public function NomPwdDiffere($nom, $pwd)
    {
        if ($nom != $pwd)
        {
            return 'oui';
        }
        return 'non';
    }

    public function ComptExistent($nom, $pwd)
    {
        $exist1 = 'non';
        $exist2 = 'non';
        $exist3 = 'non';
        $exist4 = 'non';
        $exist5 = 'non';
        $pwd = md5($pwd);
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM utilisateur WHERE nom_utilisateur=:nom_utilisateur AND mot_de_passe=:mot_de_passe");
        $requete->bindParam(':nom_utilisateur', $nom);
        $requete->bindParam(':mot_de_passe', $pwd);
        $requete->execute();
        if($requete->fetch(PDO::FETCH_ASSOC))
        {
            $exist1 = 'oui';
        }

        $requete1 = $this->dbaseprivateLite->prepare(" SELECT * FROM utilisateur WHERE nom_utilisateur=:nom_utilisateur");
        $requete1->bindParam(':nom_utilisateur', $nom);
        $requete1->execute();
        if($requete1->fetch(PDO::FETCH_ASSOC))
        {
            $exist2 = 'oui';
        }

        $requete2 = $this->dbaseprivateLite->prepare(" SELECT * FROM utilisateur WHERE nom_utilisateur=:nom_utilisateur");
        $requete2->bindParam(':nom_utilisateur', $pwd);
        $requete2->execute();
        if($requete2->fetch(PDO::FETCH_ASSOC))
        {
            $exist3 = 'oui';
        }

        $requete3 = $this->dbaseprivateLite->prepare(" SELECT * FROM utilisateur WHERE mot_de_passe=:mot_de_passe");
        $requete3->bindParam(':mot_de_passe', $pwd);
        $requete3->execute();
        if($requete3->fetch(PDO::FETCH_ASSOC))
        {
            $exist4 = 'oui';
        }

        $requete4 = $this->dbaseprivateLite->prepare(" SELECT * FROM utilisateur WHERE mot_de_passe=:mot_de_passe");
        $requete4->bindParam(':mot_de_passe', $nom);
        $requete4->execute();
        if($requete4->fetch(PDO::FETCH_ASSOC))
        {
            $exist5 = 'oui';
        }

        if($exist1 == 'non' AND $exist2 == 'non' AND $exist3 == 'non' AND $exist4 == 'non' AND $exist5 == 'non')
        {
            return 'non';
        }
        return 'oui';
    }

    public function InsertionUtilisateur($nom, $pwd){
        $pwd = md5($pwd);

        $requete = $this->dbaseprivateLite->prepare("INSERT into utilisateur (nom_utilisateur, mot_de_passe) VALUES (:nom_utilisateur, :mot_de_passe)");
        $requete->bindParam(':nom_utilisateur', $nom);
        $requete->bindParam(':mot_de_passe', $pwd);
        if ($requete->execute())
        {
            return "oui";
        }
        return "non";
    }
}