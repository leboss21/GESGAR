<?php


class AppModificationEvolution
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

    public function RemoteModification($id_evolution){
        $requete = $this->dbaseprivateLite->prepare("SELECT charger FROM evolution_travaux WHERE id_evolution_travaux=:id_evolution_travaux");
        $requete->bindParam(':id_evolution_travaux', $id_evolution);
        $requete->execute();

        while($row = $requete->fetch(PDO::FETCH_ASSOC))
        {
            $charger = $row['charger'];

            if($charger == 'charge')return 'charge';
            elseif ($charger == 'non charge')return 'non charge';
        }
    }

    public  function EvolutionModifEtat($data=array()){

        if($data[1] == 'En attente')
        {

            $requete1 = $this->dbaseprivateLite->prepare(" SELECT * FROM reception WHERE id_reception=:id_reception");
            $requete1->bindParam(':id_reception', $data[0]);
            $requete1->execute();
            while($row1 = $requete1->fetch(PDO::FETCH_ASSOC))
            {
                $date = $row1['date_reception'];
            }

            $et1 =  $data[1];
            $det1 =  $date;
            $et2 =  'En attente';
            $det2 =  '1000-10-10';
            $et3 =  'En attente';
            $det3 =  '1000-10-10';
            $et4 =  'En attente';
            $det4 =  '1000-10-10';
            $et5 =  'En attente';
            $det5 =  '1000-10-10';
            $vue =  'non vu';

            if($det1 =='')$det1 = date("Y-m-d");

            $requete = $this->dbaseprivateLite->prepare("UPDATE evolution_travaux SET etat1=:etat1, date_etat1=:date_etat1, etat2=:etat2, date_etat2=:date_etat2, etat3=:etat3, date_etat3=:date_etat3, etat4=:etat4, date_etat4=:date_etat4, etat5=:etat5, date_etat5=:date_etat5, modifier=:modifier, vue=:vue  WHERE id_evolution_travaux=:id_evolution_travaux");
            $requete->bindParam(':id_evolution_travaux', $data[0]);
            $requete->bindParam(':etat1',$et1);
            $requete->bindParam(':date_etat1',$det1);
            $requete->bindParam(':etat2',$et2);
            $requete->bindParam(':date_etat2',$det2);
            $requete->bindParam(':etat3',$et3);
            $requete->bindParam(':date_etat3',$det3);
            $requete->bindParam(':etat4',$et4);
            $requete->bindParam(':date_etat4',$det4);
            $requete->bindParam(':etat5',$et5);
            $requete->bindParam(':date_etat5',$det5);
            $requete->bindParam(':modifier',$data[3]);
            $requete->bindParam(':vue',$vue);

            if ($requete->execute())
            {
                return "oui";
            }
            return "non";
        }

        if($data[1] == 'En cours')
        {

            $et1 =  $data[1];
            $det1 = $data[2];
            $et2 = 'En attente';
            $det2 ='1000-10-10';
            $et3 = 'En attente';
            $det3 = '1000-10-10';
            $et4 ='En attente';
            $det4 ='1000-10-10';
            $et5 ='En attente';
            $det5 ='1000-10-10';
            $vue ='non vu';

            if($det1 =='')$det1 = date("Y-m-d");

            $requete = $this->dbaseprivateLite->prepare("UPDATE evolution_travaux SET etat1=:etat1, date_etat1=:date_etat1, etat2=:etat2, date_etat2=:date_etat2, etat3=:etat3, date_etat3=:date_etat3, etat4=:etat4, date_etat4=:date_etat4, etat5=:etat5, date_etat5=:date_etat5, modifier=:modifier, vue=:vue  WHERE id_evolution_travaux=:id_evolution_travaux");
            $requete->bindParam(':id_evolution_travaux', $data[0]);
            $requete->bindParam(':etat1',$et1);
            $requete->bindParam(':date_etat1',$det1);
            $requete->bindParam(':etat2',$et2);
            $requete->bindParam(':date_etat2', $det2);
            $requete->bindParam(':etat3',$et3);
            $requete->bindParam(':date_etat3',$det3);
            $requete->bindParam(':etat4',$et4);
            $requete->bindParam(':date_etat4',$det4);
            $requete->bindParam(':etat5',$et5);
            $requete->bindParam(':date_etat5',$det5);
            $requete->bindParam(':modifier',$data[3]);
            $requete->bindParam(':vue',$vue);

            if ($requete->execute())
            {
                return "oui";
            }
            return "non";
        }

        if($data[1] == "A l'essai")
        {

            $et1 =  'En cours';
            $et2 = $data[1];
            $det2 =$data[2];
            $et3 = 'En attente';
            $det3 = '1000-10-10';
            $et4 ='En attente';
            $det4 ='1000-10-10';
            $et5 ='En attente';
            $det5 ='1000-10-10';
            $vue ='non vu';

            if($det2 =='')$det2 = date("Y-m-d");

            $requete = $this->dbaseprivateLite->prepare("UPDATE evolution_travaux SET etat1=:etat1, etat2=:etat2, date_etat2=:date_etat2, etat3=:etat3, date_etat3=:date_etat3, etat4=:etat4, date_etat4=:date_etat4, etat5=:etat5, date_etat5=:date_etat5, modifier=:modifier, vue=:vue  WHERE id_evolution_travaux=:id_evolution_travaux");
            $requete->bindParam(':id_evolution_travaux', $data[0]);
            $requete->bindParam(':etat1',$et1);
            $requete->bindParam(':etat2',$et2);
            $requete->bindParam(':date_etat2', $det2);
            $requete->bindParam(':etat3',$et3);
            $requete->bindParam(':date_etat3',$det3);
            $requete->bindParam(':etat4',$et4);
            $requete->bindParam(':date_etat4',$det4);
            $requete->bindParam(':etat5',$et5);
            $requete->bindParam(':date_etat5',$det5);
            $requete->bindParam(':modifier',$data[3]);
            $requete->bindParam(':vue',$vue);

            if ($requete->execute())
            {
                return "oui";
            }
            return "non";
        }


        if($data[1] == 'En inspection')
        {

            $et1 =  'En cours';
            $et2 = 'A l\'essai';
            $et3 = $data[1];
            $det3 = $data[2];
            $et4 = 'En attente';
            $det4 = '1000-10-10';
            $et5 = 'En attente';
            $det5 = '1000-10-10';
            $vue = 'non vu';

            if($det3 =='')$det3 = date("Y-m-d");

            $requete = $this->dbaseprivateLite->prepare("UPDATE evolution_travaux SET etat1=:etat1, etat2=:etat2, etat3=:etat3, date_etat3=:date_etat3, etat4=:etat4, date_etat4=:date_etat4, etat5=:etat5, date_etat5=:date_etat5, modifier=:modifier, vue=:vue  WHERE id_evolution_travaux=:id_evolution_travaux");
            $requete->bindParam(':id_evolution_travaux', $data[0]);
            $requete->bindParam(':etat1',$et1);
            $requete->bindParam(':etat2',$et2);
            $requete->bindParam(':etat3',$et3);
            $requete->bindParam(':date_etat3',$det3);
            $requete->bindParam(':etat4',$et4);
            $requete->bindParam(':date_etat4',$det4);
            $requete->bindParam(':etat5',$et5);
            $requete->bindParam(':date_etat5',$det5);
            $requete->bindParam(':modifier',$data[3]);
            $requete->bindParam(':vue',$vue);

            if ($requete->execute())
            {
                return "oui";
            }
            return "non";
        }
        if($data[1] == 'Finition')
        {
            $et1 = 'En cours';
            $et2 = 'A l\'essai';
            $et3 =  'En inspection';
            $et4 = $data[1];
            $det4 = $data[2];
            $et5 = 'En attente';
            $det5 = '1000-10-10';
            $vue = 'non vu';

            if($det4 =='')$det4 = date("Y-m-d");
            $requete = $this->dbaseprivateLite->prepare("UPDATE evolution_travaux SET etat1=:etat1, etat2=:etat2, etat3=:etat3, etat4=:etat4, date_etat4=:date_etat4, etat5=:etat5, date_etat5=:date_etat5, modifier=:modifier, vue=:vue  WHERE id_evolution_travaux=:id_evolution_travaux");
            $requete->bindParam(':id_evolution_travaux', $data[0]);
            $requete->bindParam(':etat1',$et1);
            $requete->bindParam(':etat2',$et2);
            $requete->bindParam(':etat3',$et3);
            $requete->bindParam(':etat4',$et4);
            $requete->bindParam(':date_etat4',$det4);
            $requete->bindParam(':etat5',$et5);
            $requete->bindParam(':date_etat5',$det5);
            $requete->bindParam(':modifier',$data[3]);
            $requete->bindParam(':vue',$vue);

            if ($requete->execute())
            {
                return "oui";
            }
            return "non";
        }
        if($data[1] == 'Prêt à livrer')
        {
            $et1 = 'En cours';
            $et2 = 'A l\'essai';
            $et3 = 'En inspection';
            $et4 = 'Finition';
            $et5 = $data[1];
            $det5 = $data[2];
            $vue = 'non vue';

            if($det5 =='')$det5 = date("Y-m-d");
            $requete = $this->dbaseprivateLite->prepare("UPDATE evolution_travaux SET etat1=:etat1, etat2=:etat2, etat3=:etat3,etat4=:etat4, etat5=:etat5, date_etat5=:date_etat5, modifier=:modifier, vue=:vue  WHERE id_evolution_travaux=:id_evolution_travaux");
            $requete->bindParam(':id_evolution_travaux', $data[0]);
            $requete->bindParam(':etat1',$et1);
            $requete->bindParam(':etat2',$et2);
            $requete->bindParam(':etat3',$et3);
            $requete->bindParam(':etat4',$et4);
            $requete->bindParam(':etat5',$et5);
            $requete->bindParam(':date_etat5',$det5);
            $requete->bindParam(':modifier',$data[3]);
            $requete->bindParam(':vue',$vue);

            if ($requete->execute())
            {
                return "oui";
            }
            return "non";
        }

    }

    public  function EvolutionModifObservation($data=array()){

        $vue = 'non vu';

        $requete = $this->dbaseprivateLite->prepare("UPDATE evolution_travaux SET observation=:observation, modifier=:modifier, vue=:vue WHERE id_evolution_travaux=:id_evolution_travaux");
        $requete->bindParam(':id_evolution_travaux', $data[0]);
        $requete->bindParam(':observation', $data[1]);
        $requete->bindParam(':modifier',$data[2]);
        $requete->bindParam(':vue',$vue);
        if ($requete->execute())
        {
            return "oui";
        }
        return "non";
    }

    public  function EvolutionModifLivraison($data=array()){

        $vue = 'non vu';

        $requete = $this->dbaseprivateLite->prepare("UPDATE evolution_travaux SET date_livraison=:date_livraison,heure_livraison=:heure_livraison,modifier=:modifier,vue=:vue WHERE id_evolution_travaux=:id_evolution_travaux");
        $requete->bindParam(':id_evolution_travaux', $data[0]);
        $requete->bindParam(':date_livraison', $data[1]);
        $requete->bindParam(':heure_livraison', $data[2]);
        $requete->bindParam(':modifier',$data[3]);
        $requete->bindParam(':vue',$vue);

        if ($requete->execute())
        {
            return "oui";
        }
        return "non";
    }

    public  function EvolutionModifFacture($data=array()){

        $vue = 'non vu';

        $requete = $this->dbaseprivateLite->prepare("UPDATE evolution_travaux SET facture=:facture, montant=:montant, modifier=:modifier, vue=:vue WHERE id_evolution_travaux=:id_evolution_travaux");
        $requete->bindParam(':id_evolution_travaux', $data[0]);
        $requete->bindParam(':facture', $data[1]);
        $requete->bindParam(':montant', $data[3]);
        $requete->bindParam(':modifier',$data[2]);
        $requete->bindParam(':vue',$vue);

        if ($requete->execute())
        {
            return "oui";
        }
        return "non";
    }
}