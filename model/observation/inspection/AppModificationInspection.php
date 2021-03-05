<?php

class AppModificationInspection
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

    public function InspectionSelectIdReception($data)
    {
        $requete = $this->dbaseprivateLite->prepare(" SELECT * FROM vehicule WHERE immatriculation=:immatriculation");
        $requete->bindParam(':immatriculation', $data);
        $requete->execute();

        if ($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $id_vehicule = $row["id_vehicule"];
        }

        $requete1 = $this->dbaseprivateLite->prepare("SELECT * FROM reception WHERE fk_id_vehicule=:fk_id_vehicule ORDER BY id_reception DESC LIMIT 1");
        $requete1->bindParam(':fk_id_vehicule', $id_vehicule);
        $requete1->execute();
        while ($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
        {
            $id_reception = $row1['id_reception'];
            return $id_reception;
        }
    }
    public function ModificationInsert($data=array())
    {
        $id_reception = $this->InspectionSelectIdReception($data[1]);

        $requete = $this->dbaseprivateLite->prepare("UPDATE inspection SET date_inspection=:date_inspection, kilometrage_inspection=:kilometrage_inspection, num_p_d_inspection=:num_p_d_inspection, nom_p_d_inspection=:nom_p_d_inspection, quantite_p_d_inspection=:quantite_p_d_inspection, num_com_inspection=:num_com_inspection, resultat_inspection=:resultat_inspection, id_reception=:id_reception WHERE id_inspection=:id_inspection");
        $requete->bindParam(':id_inspection', $data[9]);
        $requete->bindParam(':date_inspection', $data[2]);
        $requete->bindParam(':kilometrage_inspection', $data[3]);
        $requete->bindParam(':num_p_d_inspection', $data[4]);
        $requete->bindParam(':nom_p_d_inspection', $data[5]);
        $requete->bindParam(':quantite_p_d_inspection', $data[6]);
        $requete->bindParam(':num_com_inspection', $data[7]);
        $requete->bindParam(':resultat_inspection', $data[8]);
        $requete->bindParam(':id_reception',$id_reception);

        if ($requete->execute())
        {
            return "oui";
        }
        return "non";
    }
}