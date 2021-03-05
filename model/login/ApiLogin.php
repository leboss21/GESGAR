<?php

class ApiLogin
{
    protected $dbaseprivateLogin;

    function __construct($dbaseprivateLogin){

        $this->dbaseprivateLogin = $dbaseprivateLogin;

    }

    public function avoidInjection($val){

        $val = trim($val);
        $val = stripslashes($val);
        $val = htmlspecialchars($val);
        return $val;
    }

    public function CheckEmpty( $data=array() ){

        if (  empty($data[0]) or empty($data[1])  ){

            return 'oui';

        }elseif ( !empty($data[0]) and !empty($data[1]) ){

            return 'non';
        }

    }

    public function compteExistant( $data=array() ){

        $pss=md5($data[1]);
        $requete1= $this->dbaseprivateLogin->prepare("SELECT nom_utilisateur, mot_de_passe FROM utilisateur WHERE nom_utilisateur=:userna AND mot_de_passe=:passw");
        $requete1->bindParam(':userna', $data[0]);
        $requete1->bindParam(':passw', $pss);
        $requete1->execute();
        try{
            if($t=$requete1->fetch(PDO::FETCH_ASSOC)){
                return "bien";
            }else{
                return "mal";
            }

        }catch(PDOException $erreur){

            echo $erreur;
        }

    }


}