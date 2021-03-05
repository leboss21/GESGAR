<?php

/**
 * Created by PhpStorm.
 * User: freespirit
 * Date: 12/12/2018
 * Time: 8:21 AM
 */
class AppInsertionClient{

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

    public function CodeClientSelect($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM client WHERE code_client=:code_client");
        $requete->bindParam(':code_client', $colonne);
        $requete->execute();

        if ($row = $requete->fetch(PDO::FETCH_ASSOC)) {
            $codeClient =  $row['code_client'];
            if($codeClient == '4111900')
                return 'non';
            else
                return "oui";
        }
        return "non";
    }

    public function TelFixeClientSelect($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM client WHERE tel_fixe=:tel_fixe");
        $requete->bindParam(':tel_fixe', $colonne);
        $requete->execute();

        if ($row = $requete->fetch(PDO::FETCH_ASSOC)) {
            return "oui";
        }
        return "non";
    }

    public function TelCellClientSelect($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM client WHERE tel_cellulaire=:tel_cellulaire");
        $requete->bindParam(':tel_cellulaire', $colonne);
        $requete->execute();

        if ($row = $requete->fetch(PDO::FETCH_ASSOC)) {
            return "oui";
        }
        return "non";
    }

    public function TelLDClientSelect($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM client WHERE tel_ligne_directe=:tel_ligne_directe");
        $requete->bindParam(':tel_ligne_directe', $colonne);
        $requete->execute();

        if ($row = $requete->fetch(PDO::FETCH_ASSOC)) {
            return "oui";
        }
        return "non";
    }

    public function MailClientSelect($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM client WHERE mail=:mail");
        $requete->bindParam(':mail', $colonne);
        $requete->execute();

        if ($row = $requete->fetch(PDO::FETCH_ASSOC)) {
            return "oui";
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

    function ClientMatricule(){
        $num1 = 'COTO-0000-1000';
        $requete1 = $this->dbaseprivateLite->prepare(" SELECT * FROM client WHERE num_matricule!=:num_matricule ORDER BY id_client DESC LIMIT 1");
        $requete1->bindParam(':num_matricule', $num1);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            return $row1['num_matricule'];
        }

        return 'COTO-0000-1000';
    }

    public function NumMatriculeClient(){
        $num = 'COTO-0000-1000';
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM client WHERE num_matricule=:num_matricule ORDER BY id_client");
        $requete->bindParam(':num_matricule', $num);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $pre = 'COTO';
            $id = $row['id_client'];
            $dateY = date('Y');
            $dateM = date('m');
            $dateD = date('d');

            $num_matricule =  $this->ClientMatricule();

            if($num_matricule == 'COTO-0000-1000')
            {
                $prefixDuRadicalNum = 1;
            }
            else
            {
                $date_separator_pos = strrpos($num_matricule,'-');
                $radicale_separator_pos = strpos($num_matricule,'-');
                $date_tri = substr($num_matricule,$date_separator_pos+1);

                if($date_tri != $dateY)
                {
                    $prefixDuRadicalNum = 1;
                }
                else
                {
                    $mois_tri = substr($num_matricule,$date_separator_pos-2,2);

                    if($mois_tri != $dateM)
                    {
                        $prefixDuRadicalNum = 1;
                    }
                    else
                    {
                        $jour_tri = substr($num_matricule,$date_separator_pos-4,2);

                        if($jour_tri != $dateD)
                        {
                            $prefixDuRadicalNum = 1;
                        }
                        else
                        {
                            $prefixDuRadicalNumPosEnd = $date_separator_pos-5;
                            $prefixDuRadicalNumPosStart = $radicale_separator_pos+1;
                            $prefixDuRadicalNumL = $prefixDuRadicalNumPosEnd - $prefixDuRadicalNumPosStart;
                            $prefixDuRadicalNumL = $prefixDuRadicalNumL+1;

                            $prefixDuRadicalNum = substr($num_matricule,$prefixDuRadicalNumPosStart,$prefixDuRadicalNumL);

                            $prefixDuRadicalNum = $prefixDuRadicalNum + 1;
                        }
                    }
                }
            }

            $matricule = $pre.'-'.$prefixDuRadicalNum.''.$dateD.''.$dateM.'-'.$dateY;

            $requete1 = $this->dbaseprivateLite->prepare(" UPDATE client SET num_matricule=:num_matricule WHERE id_client=:id_client");
            $requete1->bindParam(':num_matricule', $matricule);
            $requete1->bindParam(':id_client', $id);
            $requete1->execute();
        }

        return 'oui';
    }

    public function ClientInsert($colonne=array()){

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

        $requete = $this->dbaseprivateLite->prepare("INSERT into client (code_client, nom_raison_sociale, tel_fixe, tel_cellulaire, tel_ligne_directe, mail, adresse,date_creation, id_genre) VALUES (:code_client, :nom_raison_sociale, :tel_fixe, :tel_cellulaire, :tel_ligne_directe, :mail, :adresse, :date_creation, :id_genre)");
        $requete->bindParam(':code_client', $colonne[1]);
        $requete->bindParam(':nom_raison_sociale', $colonne[2]);
        $requete->bindParam(':tel_fixe', $tel_fixe);
        $requete->bindParam(':tel_cellulaire', $tel_cel);
        $requete->bindParam(':tel_ligne_directe', $tel_ld);
        $requete->bindParam(':mail', $mail);
        $requete->bindParam(':adresse', $colonne[7]);
        $requete->bindParam(':date_creation', $colonne[8]);
        $requete->bindParam(':id_genre', $id_genre);

        if ($requete->execute())
        {
            return "oui";
        }
        return "non";
    }

}