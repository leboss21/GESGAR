<?php

/**
 * Created by PhpStorm.
 * User: freespirit
 * Date: 12/12/2018
 * Time: 8:21 AM
 */
class AppModificationClient{

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
            return 'oui';
        }

        return 'non';
    }

    public function CodeClientSelect($colonne=array())
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM client WHERE code_client=:code_client");
        $requete->bindParam(':code_client', $colonne[1]);
        $requete->execute();
        while($row = $requete->fetch(PDO::FETCH_ASSOC)) {
            $id_client = $row['id_client'];
            if($id_client == $colonne[0])
            {
                return "non";
            }
            else
            {
                if($colonne[1] == '4111900')
                {
                    return "non";
                }
                return "oui";
            }

        }
        return "non";
    }

    public function TelFixeClientSelect($colonne=array())
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM client WHERE tel_fixe=:tel_fixe");
        $requete->bindParam(':tel_fixe', $colonne[1]);
        $requete->execute();

        while($row = $requete->fetch(PDO::FETCH_ASSOC)) {
            $id_client = $row['id_client'];
            if($id_client == $colonne[0])
            {
                return "non";
            }
            else
            {
                return "oui";
            }
        }
        return "non";
    }

    public function TelCellClientSelect($colonne=array())
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM client WHERE tel_cellulaire=:tel_cellulaire");
        $requete->bindParam(':tel_cellulaire', $colonne[1]);
        $requete->execute();

        while($row = $requete->fetch(PDO::FETCH_ASSOC)) {
            $id_client = $row['id_client'];
            if($id_client == $colonne[0])
            {
                return "non";
            }
            else
            {
                return "oui";
            }
        }
        return "non";
    }

    public function TelLDClientSelect($colonne=array())
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM client WHERE tel_ligne_directe=:tel_ligne_directe");
        $requete->bindParam(':tel_ligne_directe', $colonne[1]);
        $requete->execute();

        while($row = $requete->fetch(PDO::FETCH_ASSOC)) {
            $id_client = $row['id_client'];
            if($id_client == $colonne[0])
            {
                return "non";
            }
            else
            {
                return "oui";
            }
        }
        return "non";
    }

    public function MailClientSelect($colonne=array())
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM client WHERE mail=:mail");
        $requete->bindParam(':mail', $colonne[1]);
        $requete->execute();

        while($row = $requete->fetch(PDO::FETCH_ASSOC)) {
            $id_client = $row['id_client'];
            if($id_client == $colonne[0])
            {
                return "non";
            }
            else
            {
                return "oui";
            }
        }
        return "non";
    }

    public function ClientSelectIdGenr($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM genre_client WHERE libelle=:libelle");
        $requete->bindParam(':libelle', $colonne);
        $requete->execute();

        if ($id_genre = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_genre = $id_genre["id_genre"];
            return $id_genre;
        }

    }

    public function RemoteModification($code_client, $nom_client){
        $requete = $this->dbaseprivateLite->prepare(" SELECT charger FROM client WHERE code_client=:code_client AND nom_raison_sociale=:nom_raison_sociale");
        $requete->bindParam(':code_client', $code_client);
        $requete->bindParam(':nom_raison_sociale', $nom_client);
        $requete->execute();

        while($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $charger = $row['charger'];

            if($charger == 'charge')return 'charge';
            elseif ($charger == 'non charge')return 'non charge';
        }
    }

    public function ClientModification($colonne=array()){

        $id_genre = $this->ClientSelectIdGenr($colonne[0]);

        $tel_fixe = $colonne[3];
        $tel_cel = $colonne[4];
        $tel_ld = $colonne[5];
        $mail = $colonne[6];

        $tel_fixeL = strlen($tel_fixe);
        $tel_celL = strlen($tel_cel);
        $tel_ldL = strlen($tel_ld);

        if ($tel_fixe{$tel_fixeL-1}==')' AND $tel_fixe{$tel_fixeL-$tel_fixeL}=='(')$tel_fixe = "Non Renseigné";
        if ($tel_cel{$tel_celL-1}==')' AND $tel_cel{$tel_celL-$tel_celL}=='(')$tel_cel = "Non Renseigné";
        if ($tel_ld{$tel_ldL-1}==')' AND $tel_ld{$tel_ldL-$tel_ldL}=='(')$tel_ld = "Non Renseigné";
        if (empty($mail))$mail = "Non Renseigné";

        $requete = $this->dbaseprivateLite->prepare("UPDATE client SET code_client=:code_client, nom_raison_sociale=:nom_raison_sociale, tel_fixe=:tel_fixe, tel_cellulaire=:tel_cellulaire, tel_ligne_directe=:tel_ligne_directe, mail=:mail, adresse=:adresse, date_creation=:date_creation, id_genre=:id_genre, modifier=:modifier WHERE id_client=:id_client");
        $requete->bindParam(':id_client', $colonne[8]);
        $requete->bindParam(':code_client', $colonne[1]);
        $requete->bindParam(':nom_raison_sociale', $colonne[2]);
        $requete->bindParam(':tel_fixe', $tel_fixe);
        $requete->bindParam(':tel_cellulaire', $tel_cel);
        $requete->bindParam(':tel_ligne_directe', $tel_ld);
        $requete->bindParam(':mail', $mail);
        $requete->bindParam(':adresse', $colonne[7]);
        $requete->bindParam(':date_creation', $colonne[10]);
        $requete->bindParam(':id_genre', $id_genre);
        $requete->bindParam(':modifier', $colonne[9]);

        if ($requete->execute())
        {
            return "oui";
        }
        return "non";

    }

}