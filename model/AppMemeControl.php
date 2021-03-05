<?php

/**
 * Created by PhpStorm.
 * User: freespirit
 * Date: 12/14/2018
 * Time: 7:16 AM
 */
class AppMemeControl
{
    public function mailController($mail)
    {
        $mailFormat = "#^[A-Za-z0-9üàáâãäåéèêëìíîïòóôõöùúûüæçñ._-]+@{1}[a-z]+[.]{1}[a-z]{2,4}$#";
        if(preg_match($mailFormat, $mail))
        {
            return "oui";
        }

        return "non";
    }

    public function avoidInjection($val){
        $val = trim($val);
        $val = stripslashes($val);
        $val = htmlspecialchars($val);
        return $val;
    }

    public function patternNom($nom){
        $patternNom = "#^([A-Z]+([-'. ]{1}[A-Z]+)*)$#";

        if (preg_match($patternNom, $nom)) {

            return "oui";

        }
        return "non";

    }


    public function patternHeure($heure){
        $patternheure = "#^([0-9]{2}:[0-9]{2}:[0-9]{2})$#";
        if(preg_match($patternheure,$heure))return 'oui';
        else return 'non';
    }

    public function patternDate($date){
        $patterndate = "#^([0-9]{4}-[0-9]{1,2}-[0-9]{1,2})$#";
        if(preg_match($patterndate,$date))return 'oui';
        else return 'non';
    }


    public function patternPrenom($prenom){

        $patternPrenom1a = "#^([A-Z]{1}[-.]{0,1}[a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ]*)$#";
        $patternPrenom2b = "#^([A-Z]{1}[-.]{0,1}[a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ]*-[A-Z]{1}[-.]{0,1}[a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ]*)$#";

        $patternPrenom1 = "([A-Z]{1}[-.]{0,1}[a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ]*)";
        $patternPrenom2 = "([A-Z]{1}[-.]{0,1}[a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ]*-[A-Z]{1}[-.]{0,1}[a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ]*)";
        $patternPrenom3 = "( [A-Z]{1}[-.]{0,1}[a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ]*){1,7}";
        $patternPrenom4 = "( [A-Z]{1}[-.]{0,1}[a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ]*-[A-Z]{1}[-.]{0,1}[a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ]*)*";

        $patternCompletPrenom1="#^(".$patternPrenom1.$patternPrenom3."|".$patternPrenom1.$patternPrenom4."|".$patternPrenom1.$patternPrenom3.$patternPrenom4."|".$patternPrenom1.$patternPrenom4.$patternPrenom3
            ."|(".$patternPrenom1.$patternPrenom3.$patternPrenom4.$patternPrenom3."(".$patternPrenom4.$patternPrenom3."|".$patternPrenom4.$patternPrenom3.$patternPrenom4.")".")|(".$patternPrenom1.$patternPrenom4.$patternPrenom3.$patternPrenom4
            ."(".$patternPrenom3.$patternPrenom4."|".$patternPrenom3.$patternPrenom4.$patternPrenom3.")"."))$#";

        $patternCompletPrenom2="#^(".$patternPrenom2.$patternPrenom3."|".$patternPrenom2.$patternPrenom4."|".$patternPrenom2.$patternPrenom3.$patternPrenom4."|".$patternPrenom2.$patternPrenom4.$patternPrenom3
            ."|(".$patternPrenom2.$patternPrenom3.$patternPrenom4.$patternPrenom3."(".$patternPrenom4.$patternPrenom3."|".$patternPrenom4.$patternPrenom3.$patternPrenom4.")".")|(".$patternPrenom2.$patternPrenom4.$patternPrenom3.$patternPrenom4
            ."(".$patternPrenom3.$patternPrenom4."|".$patternPrenom3.$patternPrenom4.$patternPrenom3.")"."))$#";


        if ( preg_match($patternPrenom1a, $prenom) or preg_match($patternPrenom2b, $prenom) or preg_match($patternCompletPrenom1, $prenom) or preg_match($patternCompletPrenom2, $prenom) ) {
            return "oui";
        }
        return "non";

    }

    public function patternPrenomLong($prenom){

    $patternPrenom1a = "#^([A-Z0-9]{1}[-.]{0,1}[a-z0-9üàáâãäåéèêëìíîïòóôõöùúûüæçñ]*)$#";
    $patternPrenom2b = "#^([A-Z0-9]{1}[-.]{0,1}[a-z0-9üàáâãäåéèêëìíîïòóôõöùúûüæçñ]*-[A-Z0-9]{1}[-.]{0,1}[a-z0-9üàáâãäåéèêëìíîïòóôõöùúûüæçñ]*)$#";

    $patternPrenom1 = "([A-Z0-9]{1}[-.]{0,1}[a-z0-9üàáâãäåéèêëìíîïòóôõöùúûüæçñ]*)";
    $patternPrenom2 = "([A-Z0-9]{1}[-.]{0,1}[a-z0-9üàáâãäåéèêëìíîïòóôõöùúûüæçñ]*-[A-Z0-9]{1}[-.]{0,1}[a-z0-9üàáâãäåéèêëìíîïòóôõöùúûüæçñ]*)";
    $patternPrenom3 = "( [A-Z0-9]{1}[-.]{0,1}[a-z0-9üàáâãäåéèêëìíîïòóôõöùúûüæçñ]*){1,7}";
    $patternPrenom4 = "( [A-Z0-9]{1}[-.]{0,1}[a-z0-9üàáâãäåéèêëìíîïòóôõöùúûüæçñ]*-[A-Z0-9]{1}[-.]{0,1}[a-z0-9üàáâãäåéèêëìíîïòóôõöùúûüæçñ]*)*";

    $patternCompletPrenom1="#^(".$patternPrenom1.$patternPrenom3."|".$patternPrenom1.$patternPrenom4."|".$patternPrenom1.$patternPrenom3.$patternPrenom4."|".$patternPrenom1.$patternPrenom4.$patternPrenom3
        ."|(".$patternPrenom1.$patternPrenom3.$patternPrenom4.$patternPrenom3."(".$patternPrenom4.$patternPrenom3."|".$patternPrenom4.$patternPrenom3.$patternPrenom4.")".")|(".$patternPrenom1.$patternPrenom4.$patternPrenom3.$patternPrenom4
        ."(".$patternPrenom3.$patternPrenom4."|".$patternPrenom3.$patternPrenom4.$patternPrenom3.")"."))$#";

    $patternCompletPrenom2="#^(".$patternPrenom2.$patternPrenom3."|".$patternPrenom2.$patternPrenom4."|".$patternPrenom2.$patternPrenom3.$patternPrenom4."|".$patternPrenom2.$patternPrenom4.$patternPrenom3
        ."|(".$patternPrenom2.$patternPrenom3.$patternPrenom4.$patternPrenom3."(".$patternPrenom4.$patternPrenom3."|".$patternPrenom4.$patternPrenom3.$patternPrenom4.")".")|(".$patternPrenom2.$patternPrenom4.$patternPrenom3.$patternPrenom4
        ."(".$patternPrenom3.$patternPrenom4."|".$patternPrenom3.$patternPrenom4.$patternPrenom3.")"."))$#";


    if ( preg_match($patternPrenom1a, $prenom) or preg_match($patternPrenom2b, $prenom) or preg_match($patternCompletPrenom1, $prenom) or preg_match($patternCompletPrenom2, $prenom) ) {
        return "oui";
    }
    return "non";

}

    public function patternUperLower($uperLower)
    {
        $patternPrenom1a = "#^([A-Z]{1}[a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ]*)$#";
        $patternPrenom2b = "#^([A-Z]{1}[a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ]*-[A-Z]{1}[a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ]*)$#";

        $patternPrenom1 = "([A-Z]{1}[a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ]*)";
        $patternPrenom2 = "([A-Z]{1}[a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ]*-[A-Z]{1}[a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ]*)";
        $patternPrenom3 = "( [A-Z]{1}[a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ]*){1,7}";
        $patternPrenom4 = "( [A-Z]{1}[a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ]*-[A-Z]{1}[a-züàáâãäåéèêëìíîïòóôõöùúûüæçñ]*)*";

        $patternNom1 = "#^([A-Z]*)$#";
        $patternNom2 = "#^([A-Z]*-[A-Z]*)$#";
        $patternNom3 = "#^([A-Z]*'[A-Z]*)$#";

        $patternCompletPrenom1="#^(".$patternPrenom1.$patternPrenom3."|".$patternPrenom1.$patternPrenom4."|".$patternPrenom1.$patternPrenom3.$patternPrenom4."|".$patternPrenom1.$patternPrenom4.$patternPrenom3
            ."|(".$patternPrenom1.$patternPrenom3.$patternPrenom4.$patternPrenom3."(".$patternPrenom4.$patternPrenom3."|".$patternPrenom4.$patternPrenom3.$patternPrenom4.")".")|(".$patternPrenom1.$patternPrenom4.$patternPrenom3.$patternPrenom4
            ."(".$patternPrenom3.$patternPrenom4."|".$patternPrenom3.$patternPrenom4.$patternPrenom3.")"."))$#";

        $patternCompletPrenom2="#^(".$patternPrenom2.$patternPrenom3."|".$patternPrenom2.$patternPrenom4."|".$patternPrenom2.$patternPrenom3.$patternPrenom4."|".$patternPrenom2.$patternPrenom4.$patternPrenom3
            ."|(".$patternPrenom2.$patternPrenom3.$patternPrenom4.$patternPrenom3."(".$patternPrenom4.$patternPrenom3."|".$patternPrenom4.$patternPrenom3.$patternPrenom4.")".")|(".$patternPrenom2.$patternPrenom4.$patternPrenom3.$patternPrenom4
            ."(".$patternPrenom3.$patternPrenom4."|".$patternPrenom3.$patternPrenom4.$patternPrenom3.")"."))$#";


        if ( preg_match($patternPrenom1a, $uperLower) or preg_match($patternPrenom2b, $uperLower) or preg_match($patternCompletPrenom1, $uperLower) or preg_match($patternCompletPrenom2, $uperLower) or preg_match($patternNom1, $uperLower) or preg_match($patternNom2, $uperLower) or preg_match($patternNom3, $uperLower) ) {
            return "oui";
        }
        return "non";
    }

    public function patternContact($telephone){

        $patternTelephone1 = "#^\(\+([1-9]{1,3}|[1-9]{1}\s{1}[1-9]{1,6})\)(\s[0-9]{2,3}){1}(\s[0-9]{2}){3,}$#";

        if ( preg_match($patternTelephone1, $telephone))
        {

            return "oui";
        }
        return "non";

    }

}