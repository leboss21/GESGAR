function Data_format_LongFr_to_shurt_tire_format_jour_mois_date(date){
    var newdate = '';
    var dateDivise = date.split(' ');
    var jour = dateDivise[0];
    var mois = dateDivise[1];
    var annee = dateDivise[2];

    if(mois == 'Janvier')mois = '01';
    if(mois == 'Février')mois = '02';
    if(mois == 'Mars')mois = '03';
    if(mois == 'Avril')mois = '04';
    if(mois == 'Mai')mois = '05';
    if(mois == 'Juin')mois = '06';
    if(mois == 'Juillet')mois = '07';
    if(mois == 'Août')mois = '08';
    if(mois == 'Septembre')mois = '09';
    if(mois == 'Octobre')mois = '10';
    if(mois == 'Novembre')mois = '11';
    if(mois == 'Décembre')mois = '12';

    newdate = jour+'-'+mois+'-'+annee;

    return newdate;
}

function Data_format_LongFr_to_shurt_tire_format_date_mois_jour(date){

    var dateDivise = date.split(' ');
    var jour = dateDivise[0];
    var mois = dateDivise[1];
    var annee = dateDivise[2];

    if(mois == 'Janvier')mois = '01';
    if(mois == 'Février')mois = '02';
    if(mois == 'Mars')mois = '03';
    if(mois == 'Avril')mois = '04';
    if(mois == 'Mai')mois = '05';
    if(mois == 'Juin')mois = '06';
    if(mois == 'Juillet')mois = '07';
    if(mois == 'Août')mois = '08';
    if(mois == 'Septembre')mois = '09';
    if(mois == 'Octobre')mois = '10';
    if(mois == 'Novembre')mois = '11';
    if(mois == 'Décembre')mois = '12';

    var newdate = annee+'-'+mois+'-'+jour;

    return newdate;
}

function Date_forat_LongEn_to_Shurt_format_Date_Mois_jour(date) {

    var formattedDate = new Date(date);
    var d = formattedDate.getDate();
    var m = formattedDate.getMonth(); m +=1;
    var y = formattedDate.getFullYear();
    var newdate = y + "-" + m + "-" + d;

    return newdate;
}

function Data_format_LongFr_to_LongEn(date){
    var newdate = '';
    var dateDivise = date.split(' ');
    var jour = dateDivise[0];
    var mois = dateDivise[1];
    var annee = dateDivise[2];

    if(mois == 'Janvier')mois = 'January';
    if(mois == 'Février')mois = 'February';
    if(mois == 'Mars')mois = 'March';
    if(mois == 'Avril')mois = 'April';
    if(mois == 'Mai')mois = 'May';
    if(mois == 'Juin')mois = 'June';
    if(mois == 'Juillet')mois = 'July';
    if(mois == 'Août')mois = 'August';
    if(mois == 'Septembre')mois = 'September';
    if(mois == 'Octobre')mois = 'October';
    if(mois == 'Novembre')mois = 'November';
    if(mois == 'Décembre')mois = 'December';

    newdate = jour+' '+mois+' '+annee;

    return newdate;
}

function Data_comparaison(dateinf,datesup){

}