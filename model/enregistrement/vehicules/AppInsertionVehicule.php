<?php

/**
 * Created by PhpStorm.
 * User: freespirit
 * Date: 12/17/2018
 * Time: 3:45 PM
 */
class AppInsertionVehicule
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

    public function patternChassis($Chassis)
    {
        $peg_chassis = "#^([a-zA-Z0-9]{17})$#";
        if (preg_match($peg_chassis,$Chassis))
        {
            return "oui";
        }
        return "non";

    }

    public function patternImmatriculation($immatriculation)
    {
        $peg_immatriculation = "#^([a-zA-Z0-9üàáâãäåéèêëìíîïòóôõöùúûüæçñ ]+)$#";
        if (preg_match($peg_immatriculation,$immatriculation))
        {
            return "oui";
        }
        return "non";

    }

    public function patternCouleur($immatriculation)
    {
        $peg_couleur1 = "#^([a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ]+)$#";
        $peg_couleur2 = "#^([a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ]+(\-{1}[a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ]+)+)$#";
        $peg_couleur3 = "#^([a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ]+(\s{1}[a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ]+)+)$#";

        $preg_mCoul1 = preg_match($peg_couleur1,$immatriculation);
        $preg_mCoul2 = preg_match($peg_couleur2,$immatriculation);
        $preg_mCoul3 = preg_match($peg_couleur3,$immatriculation);

        if ($preg_mCoul1 or $preg_mCoul2 or $preg_mCoul3)
        {
            return "oui";
        }
        return "non";

    }

    public function VehiculeSelectImmatriculation($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
        $requete->bindParam(':immatriculation', $colonne);
        $requete->execute();
        if ($requete->fetch(PDO::FETCH_ASSOC))
        {
            return 'oui';
        }
        return 'non';
    }

    public function VehiculeSelectChassis($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM vehicule WHERE chassis=:chassis");
        $requete->bindParam(':chassis', $colonne);
        $requete->execute();
        if ($requete->fetch(PDO::FETCH_ASSOC))
        {
            return 'oui';
        }
        return 'non';
    }

    public function VehiculeSelectIdModele($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM type_modele_vehicule WHERE libelle=:libelle");
        $requete->bindParam(':libelle', $colonne);
        $requete->execute();

        if ($id_modele = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_modele = $id_modele["id_modele"];
            return $id_modele;
        }

    }

    public function VehiculeSelectIdMoteur($colonne)
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM type_moteur_vehicule WHERE libelle=:libelle");
        $requete->bindParam(':libelle', $colonne);
        $requete->execute();

        if ($id_moteur = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_moteur = $id_moteur["id_moteur"];
            return $id_moteur;
        }

    }

    public function VehiculeSelectIdClient($code_client, $nom_raison_sociale)
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM client WHERE code_client=:code_client AND nom_raison_sociale=:nom_raison_sociale");
        $requete->bindParam(':code_client', $code_client);
        $requete->bindParam(':nom_raison_sociale', $nom_raison_sociale);
        $requete->execute();

        if ($id_client = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_client = $id_client["id_client"];
            return $id_client;
        }

    }

    public function VehiculeInsetGarantie($imm){

        $requete = $this->dbaseprivateLite->prepare("SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
        $requete->bindParam(':immatriculation', $imm);
        $requete->execute();
        while ($row = $requete->fetch(PDO::FETCH_ASSOC)){
            $id_vehicule = $row['id_vehicule'];
            $date_livraison = $row['date_livraison'];
            $duree = $row['garantie'];
        }

        if($duree != '0 Jour(s)')
        {
            $requete1 = $this->dbaseprivateLite->prepare("INSERT INTO garantie (date_garantie, duree, id_vehicule) VALUES (:date_garantie, :duree, :id_vehicule)");
            $requete1->bindParam(':date_garantie', $date_livraison);
            $requete1->bindParam(':duree', $duree);
            $requete1->bindParam(':id_vehicule', $id_vehicule);

            $requete1->execute();
        }

        return 'oui';
    }

    public function VehiculeInsert($colonne=array()){

        $id_moteur = $this->VehiculeSelectIdMoteur($colonne[4]);
        $id_modele = $this->VehiculeSelectIdModele($colonne[5]);
        $id_client = $this->VehiculeSelectIdClient($colonne[6],$colonne[1]);
        if(empty($colonne[2]))$couleur = 'Non Renseignée';
        else $couleur = $colonne[2];

        if(empty($colonne[7]))$date_pre_livr = '1000-10-10';
        else $date_pre_livr = $colonne[7];

        $requete = $this->dbaseprivateLite->prepare("INSERT into vehicule (immatriculation, couleur, chassis, id_moteur, id_modele, id_client,date_livraison,garantie) VALUES (:immatriculation, :couleur, :chassis, :id_moteur, :id_modele, :id_client,:date_livraison,:garantie)");
        $requete->bindParam(':immatriculation', $colonne[0]);
        $requete->bindParam(':couleur', $couleur);
        $requete->bindParam(':chassis', $colonne[3]);
        $requete->bindParam(':id_moteur', $id_moteur);
        $requete->bindParam(':id_modele', $id_modele);
        $requete->bindParam(':id_client', $id_client);
        $requete->bindParam(':date_livraison', $date_pre_livr);
        $requete->bindParam(':garantie', $colonne[8]);
        $requete->execute();

        $insertGarantie = $this->VehiculeInsetGarantie($colonne[0]);

        if ($insertGarantie == 'oui')return 'oui';

        return "non";
    }

}