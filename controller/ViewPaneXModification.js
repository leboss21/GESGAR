function ModificationDonneViewPane(elementActifId)
{
    var elementActif = $("#mySpan").text();

    if(elementActif == "Enr\351gistrement Clients")
    {
        if($(".listeClientAllDivEtat").text() == "")
        {
            var id_client = elementActifId;
            $("#formClientAdd")[0].reset();
            $.post('controller/Autocomplete.php',{postidclientandreturnclient:id_client},function (data) {

                data = $.parseJSON(data);
                $.each(data,function (key, val) {

                    var tel_f = val.tf;
                    var tel_c = val.tc;
                    var tel_d = val.td;
                    var mail = val.mail;
                    var ad = val.ad;
                    var date = val.date;

                    if(tel_f == 'Non Renseigné')tel_f = '(+228) ';
                    if(tel_c == 'Non Renseigné')tel_c = '(+228) ';
                    if(tel_d == 'Non Renseigné')tel_d = '(+228) ';
                    if(mail == 'Non Renseigné')mail = '';
                    if(ad == 'Non Renseigné')ad = '';
                    if(date == '1000-10-10')date = '';
                    else  date = Date_formatUp(date);

                    $("#code_client").val(val.cd);
                    $("#genre_client").val(val.genre);
                    $("#nom_client").val(val.client);
                    $("#adresse_client").val(ad);
                    $("#tel_fixe").val(tel_f);
                    $("#tel_cel").val(tel_c);
                    $("#tel_ld").val(tel_d);
                    $("#mail_client").val(mail);
                    $("#modifClient").val(id_client);
                    $("#date_client").val(date);
                });

                setTimeout(function () {
                    ModalClentModification();
                },40);

            });
        }
    }

    else if(elementActif == "Enr\351gistrement V\351hucules")
    {
        var id_vehicule = elementActifId;
        $("#formClientAdd")[0].reset();
        $.post('controller/Autocomplete.php',{postidvehiculeandreturnvehicule:id_vehicule},function (data) {

            data = $.parseJSON(data);
            $.each(data,function (key, val) {

                var couleur = val.couleur;
                var date = val.date_livraison;
                var garantie = val.garantie;

                if(date == '1000-10-10'){
                    date = '';
                }
                else {
                    date = Date_formatUp(date);
                }

                if(couleur == 'Non Renseignée')couleur ='';

                var separateur = garantie.indexOf(' ');
                var long = garantie.length;
                var duree = garantie.substring(0,separateur);
                var temps = garantie.substring(separateur+1,long);

                if(duree == '0')
                {
                    $("#vehicule_garantie_input").val('');
                    $("#vehicule_garantie_select").val('');
                }
                else
                {
                    $("#vehicule_garantie_input").val(duree);
                    $("#vehicule_garantie_select").val(temps);
                }

                $("#code_client_vehicul").val(val.code);
                $("#client_vehicule").val(val.client);
                $("#chassis").val(val.chassis);
                $("#immatriculation").val(val.imm);
                $("#couleur").val(couleur);
                $("#type_modele").val(val.type);
                $("#type_moteur").val(val.moteur);
                $("#modifVehicule").val(id_vehicule);
                $("#date_premiere_livre").val(date);
            });

            setTimeout(function () {
                ModalVehiculeModification();
            },40);
        });
    }

    else if(elementActif == "Enr\351gistrement Techniciens")
    {
        var id_tech = elementActifId;
        $.post('controller/Autocomplete.php',{postidtechandreturntech:id_tech},function (data) {

            data = $.parseJSON(data);


            $.each(data,function (key, val) {

                var date = val.date;

                if(date == '1000-10-10'){
                    date = '';
                }
                else {
                    date = Date_formatUp(date);
                }

                var ad = val.ad;

                if(ad == 'Non Renseign\351'){
                    ad = '';
                }
                else {
                    ad = ad;
                }

                $("#nom_technicien").val(val.nom);
                $("#prenom_technicien").val(val.prnom);
                $("#specialite").val(val.sp);
                $("#statut").val(val.st);
                $("#date_embauche").val(date);
                $("#adresse_technicien").val(ad);
                $("#contact_technicien").val(val.cont);
                $('#modifTech').val(id_tech);
            });

            setTimeout(function () {
                ModalTechnicienModification();
            },40);
        });
    }

    else if(elementActif == "Programmation")
    {
        var id_prog = elementActifId;
        $("#formRecom")[0].reset();
        $.post('controller/Autocomplete.php',{postidprogandreturnprog:id_prog},function (data) {
            data = $.parseJSON(data);
            $.each(data,function (key, val) {

                var date = val.date;

                if(date == '1000-10-10'){
                    date = '';
                }
                else {
                    date = Date_formatUp(date);
                }

                $("#client_programmation").val(val.client);
                $("#immatriculation_programmation").val(val.imm);
                $("#date_programmation").val(date);
                $("#heure_programmation").val(val.heure);
                $("#tache_Pr").val(val.ob);
                $("#modifProgrammation").val(id_prog);
            });

            setTimeout(function () {
                ModalProgrammationModification();
            },40);

        });
    }

    else if(elementActif == "Quick Services" || elementActif == "High Services" || elementActif == "Devis" || elementActif == "Assurance")
    {
        var id_recept = elementActifId;

        $('.validerReception').text('Modifier');
        $.post('view/Autocomplete.php', {postidreceptionreturnreceptionandlinkelement: id_recept}, function (data) {
            data = $.parseJSON(data);
            var type_recept = '';
            var client = '';
            var imm = '';
            var num_recept = '';
            var km = '';
            var date = '';
            var heure = '';
            var ob = '';
            var tf = '';
            var mp = '';
            var id = id_recept;
            $.each(data,function (key, val) {
                type_recept = val.tr;
                client = val.client;
                imm = val.imm;
                num_recept = val.nr;
                km = val.km;
                date = val.dr;
                heure = val.hr;
                ob = val.tache;
                tf = val.tache_e;
                mp = val.mp;

                if(date == '1000-10-10'){
                    date = '';
                }
                else {
                    date = Date_formatUp(date);
                }
            });

            setTimeout(function () {
                $("#client_R").val(client);
                $("#immatriculation_R").val(imm);
                $("#numero_R").val(num_recept);
                $("#kilometrage_R").val(km);
                $("#date_R").val(date);
                $("#heure_R").val(heure);
                $("#tache_R").val(ob);
                $("#tache_ef_R").val(tf);
                $("#mode_payemetR").val(mp);
                $("#modifReception").val(id);

                if(type_recept == 'quick service')
                {
                    ModalReceptionQS();
                    ModalReceptionModification();
                }
                if(type_recept == 'high service')
                {
                    ModalReceptionHS();
                    ModalReceptionModification();
                }
                if(type_recept == 'devis')
                {
                    ModalReceptionDe();
                    ModalReceptionModification();
                }

                if(type_recept == 'assurance')
                {
                    ModalReceptionAs();
                    ModalReceptionModification();
                }

            },40);

        });
    }

    else if(elementActif == "Maintenance")
    {
        $('#formMaintenance')[0].reset();
        $('.maintenanceTexte').val('');
        $('.maintenanceTexte').attr('readonly',false);
        $('.maintenancecheck').prop('checked',false);
        $('#maintenanceselect').empty();

        var id_maint = elementActifId;
        $.post('view/Autocomplete.php',{postidmaintturnclientandvehiculeandmaint:id_maint},function (data) {
            data = $.parseJSON(data);
            var typeModel = '';
            var immatricul = '';
            var client = '';
            var chassis = '';
            var moteur = '';
            var couleur = '';
            var maint = '';
            var date = '';
            var km = '';
            var or = '';
            var tech = '';
            $.each(data, function (key, val) {
                typeModel = val.type_model;
                immatricul = val.imm;
                client = val.client;
                chassis = val.chassis;
                moteur = val.moteur;
                couleur = val.couleur;
                maint = val.maint;
                date = val.date;
                km = val.km;
                or = val.or;
                tech = val.tech;

                if(date == '1000-10-10'){
                    date = '';
                }
                else {
                    date = Date_formatUp(date);
                }
            });

            var a = 0;
            var b = 0;

            while (a<maint.length)
            {
                if(maint[a]=='=')
                {
                    b++;
                }
                a++;
            }

            var Key = [b];
            var Val = [b];

            var c = 0;
            var ko = 0;
            var kc = 0;
            var bk = 0;
            var bv = 0;
            var vo = 0;
            var vc = 0;

            while(c<maint.length)
            {
                if(maint[c]=='[') ko = c+1;
                if(maint[c]=='='){
                    kc = c-1;
                    kc = kc-ko+1;
                    Key[bk] = maint.substr(ko,kc);
                    bk++;
                }

                if(maint[c]==';') vo = c+1;
                if(maint[c]==']'){
                    vc = c-1;
                    vc = vc-vo+1;

                    if(vo == vc)
                    {
                        Val[bv] = maint.charAt(vo);
                        bv++;
                    }
                    else
                    {
                        Val[bv] = maint.substr(vo,vc);
                        bv++;
                    }
                }
                c++;
            }

            $("#maint_imm").val(immatricul);
            $("#maint_kilo").val(km);
            $("#maint_num_ordre").val(or);
            $("#maint_execut").val(tech);
            $("#mainte_date").val(date);

            var indix = 0;
            while (indix<Key.length)
            {
                for (var i= 1;i<=25;i++)
                {
                    if(Key[indix] == $('#dfs'+i+'h').text())
                    {
                        $('#dfs'+i+'t').val(Val[indix]);
                        $('#dfs'+i+'c').prop('checked',true);
                        $('#dfs'+i+'t').attr('readonly',true);
                    }
                }

                indix++;
            }

            var indix = 0;
            while (indix<Key.length)
            {
                for (var i= 1;i<=5;i++)
                {
                    if(Key[indix] == $('#ele'+i+'h').text())
                    {
                        $('#ele'+i+'t').val(Val[indix]);
                        $('#ele'+i+'c').prop('checked',true);
                        $('#ele'+i+'t').attr('readonly',true);
                    }
                }

                indix++;
            }

            var indix = 0;
            while (indix<Key.length)
            {
                for (var i= 1;i<=7;i++)
                {
                    if(Key[indix] == $('#fro'+i+'h').text())
                    {
                        $('#fro'+i+'t').val(Val[indix]);
                        $('#fro'+i+'c').prop('checked',true);
                        $('#fro'+i+'t').attr('readonly',true);
                    }
                }

                indix++;
            }

            var indix = 0;
            while (indix<Key.length)
            {
                for (var i= 1;i<=15;i++)
                {
                    if(Key[indix] == $('#mot'+i+'h').text())
                    {
                        $('#mot'+i+'t').val(Val[indix]);
                        $('#mot'+i+'c').prop('checked',true);
                        $('#mot'+i+'t').attr('readonly',true);
                    }
                }
                indix++;
            }

            $("#maintenanceSelect").empty();
            $("#modifMaintenance").val('');
            $("#maintenanceSelect").append(maint);
            $("#maintRepete").hide();
            $("#validerAddMaintenance").text("Modifier");
            $("#modifMaintenance").val(id_maint);
            $("#ModalAddMaintenance").modal({backdrop: "static"});
        });
    }

    else if(elementActif == "R\351paration activit\351s")
    {
        var id_edit = elementActifId;

        $.post('controller/Autocomplete.php',{postidactiviteandreturnactivite:id_edit},function (data){

            data = $.parseJSON(data);

            var date = '';
            var tech  = '';
            var heureD = '';
            var heureF = '';
            var tache = '';
            var imm = '';

            $.each(data,function (key, val) {
                date = val.d;
                tech = val.tn;
                heureD = val.hd;
                heureF = val.hf;
                tache = val.t;
                imm = val.imm;

                if(date == '1000-10-10'){
                    date = '';
                }
                else {
                    date = Date_formatUp(date);
                }
            });

            if(heureD == '00:00:00')heureD = '';
            if(heureF == '00:00:00')heureF = '';

            $("#activite_date").val(date);

            $("#activite_tech").val(tech);
            $("#activite_heure_debut").val(heureD);
            $("#activite_heure_fin").val(heureF);
            $("#activite").append(tache);
            $("#activite_vehiculeActive").val(imm);
            $("#numreceptionactif").val(imm);
            $("#activite_vehiculeActiveModif").val(id_edit);

            $("#numreceptionactif").prop("readonly",true);

            $("#validerAddActivite").text("Modifier");
            $("#mySpan").text("R\351paration activit\351s").hide();
            $("#activite").attr('placeholder','nouveaux travaux r\351alis\351 sur le v\351hicule d\'immatriculation '+imm);
            $("#activite_vehiculeActive").attr('value',imm);
            $("#ModalAddActivite").modal({backdrop: "static"});
        });
    }


    else if(elementActif == "Livraison")
    {
        var id_livre = elementActifId;
        $.post('controller/Autocomplete.php',{postidlivraisonandreturnlivraison:id_livre},function (data) {

            data = $.parseJSON(data);

            var d_lP = '';
            var clientP = '';
            var typeP = '';
            var immP = '';
            var d_fgP ='';
            var h_lP = '';
            var t_fP = '';
            var t_nfP = '';
            var kmP = '';
            var num_fP = '';
            var montant = '';
            var num_rP = '';

            $.each(data,function (key, val) {
                d_lP = val.d_l;
                clientP = val.client;
                typeP = val.type_model;
                immP = val.imm;
                d_fgP = val.d_fg;
                h_lP = val.h_l;
                t_fP = val.t_f;
                t_nfP = val.t_nf;
                kmP = val.km;
                num_fP = val.num_f;
                num_rP = val.num_r;
                montant = val.montant;

                if(d_lP == '1000-10-10'){
                    d_lP = '';
                }
                else {
                    d_lP = Date_formatUp(d_lP);
                }

                if(d_fgP == '1000-10-10'){
                    d_fgP = '';
                }
                else {
                    d_fgP = Date_formatUp(d_fgP);
                }

                if(h_lP == '00:00:00')h_lP = '';
                else h_lP = h_lP;

                if (montant == '0000') montant ='';
                else montant = montant;
            });

            setTimeout(function () {
                $("#num_reception_livraison").val(num_rP);
                $("#client_reception_livraison").val(clientP);
                $("#modele_reception_livraison").val(typeP);
                $("#immatricul_reception_livraison").val(immP);
                $("#kilometr_reception_livraison").val(kmP);
                $("#travailFait_reception_livraison").val(t_fP);
                $("#travailPasFait_reception_livraison").val(t_nfP);
                $("#date_reception_livraison").val(d_lP);
                $("#heure_livraison").val(h_lP);
                $("#date_finGaranreception_livraison").val(d_fgP);
                $("#num_facture_livrason").val(num_fP);
                $("#facture_livrason_montant").val(montant);
                $("#modifLivraison").val(id_livre);
                $("#validerAddLivraison").text('Modifier');
                $("#ModalAddLivraison").modal({backdrop: "static"});
            },40);
        });
    }

    else if(elementActif == "Observation - Inspection")
    {
        var id_inspect = elementActifId;
        $("#formInspection")[0].reset();

        $.post('controller/Autocomplete.php',{postidinspectionanreturninspection:id_inspect},function (data) {
            data = $.parseJSON(data);
            $.each(data,function (key, val) {

                var date = val.date;

                if(date == '1000-10-10'){
                    date = '';
                }
                else {
                    date = Date_formatUp(date);
                }

                $("#nom_client_inspect").val(val.client);
                $("#imm_inspect").val(val.imm);
                $("#date_inspect").val(date);
                $("#km_inspect").val(val.km);
                $("#numPD_inspect").val(val.num_dp);
                $("#nomPD_inspect").val(val.nom_dp);
                $("#qte_inspect").val(val.qte);
                $("#numCOM_inspect").val(val.num_com);
                $("#result_inspect").val(val.resultat);
                $("#modifInspection").val(id_inspect);

            });

            setTimeout(function () {
                $("#nom_client_inspect").prop('readonly',false);
                $("#imm_inspect").prop('readonly',false);
                $("#validerAddInspection").text("Modifier");
                $("#resultDivInspection").hide();
                $("#repeteInspection").hide();
                $("#ModalAddInspection").modal({backdrop: "static"});
            },40);

        });
    }

    else if(elementActif == "Recommandation")
    {
        var id_recom = elementActifId;

        $("#formRecom")[0].reset();
        $.post('controller/Autocomplete.php',{postidrecomandreturnrecom:id_recom},function (data) {
            data = $.parseJSON(data);
            $.each(data,function (key, val) {

                var date = val.date;

                if(date == '1000-10-10'){
                    date = '';
                }
                else {
                    date = Date_formatUp(date);
                }

                $("#recom_date").val(date);
                $("#recom_client").val(val.client);
                $("#recom_tech").val(val.tech);
                $("#recom_imm").val(val.imm);
                $("#recom_prob").val(val.probleme);
                $("#recom_recom").val(val.recom);
                $("#modifRecommandation").val(id_recom);
            });

            setTimeout(function () {
                $("#nom_client_inspect").prop('readonly',false);
                $("#imm_inspect").prop('readonly',false);
                $("#validerAddRecommandation").text("Modifier");
                $("#resultDivInspection").hide();
                $("#repeteInspection").hide();
                $("#ModalAddRecommandation").modal({backdrop: "static"});
            },40);

        });
    }

    else if(elementActif == "Observation - R\351clamation")
    {
        var id_reclam = elementActifId;
        $("#formReclamation")[0].reset();
        $("#reclamation_L_date").text('');
        $("#reclamation_L_km").text('');
        $("#reclamation_L_facture").text('');
        $("#reclamRepet").hide();
        $.post('controller/Autocomplete.php',{postidreclamationandreturnreclamation:id_reclam},function (data) {

            data = $.parseJSON(data);

            $.each(data,function (key, val) {

                var telfix = val.tel_fix;
                var telcel = val.tel_cel;
                var teldir = val.tel_dir;
                var etat   = val.etat;

                if(telfix == 'Non Renseigné')telfix='';
                else telfix = telfix.replace(/[()]/g,'');


                if(telcel == 'Non Renseigné')telcel='';
                else telcel = telcel.replace(/[()]/g,'');

                if(teldir == 'Non Renseigné')teldir='';
                else teldir = teldir.replace(/[()]/g,'');

                if(telcel != '' || teldir!='')telfix = telfix+' /';

                if(teldir != '')telcel = telcel+' /';

                if(telfix == ' /')telfix='';
                if(telcel == ' /')telcel='';

                var telclient = telfix+' '+telcel+' '+teldir;

                var d_c = val.d_c;

                if(d_c == '1000-10-10'){
                    d_c = '';
                }
                else {
                    d_c = Date_formatUp(d_c);
                }

                var d_l = val.d_l;

                if(d_l == '1000-10-10'){
                    d_l = '';
                }
                else {
                    d_l = Date_formatUp(d_l);
                }

                var d_r = val.d_r;

                if(d_r == '1000-10-10'){
                    d_r = '';
                }
                else {
                    d_r = Date_formatUp(d_r);
                }

                var d_ob = val.d_ob;

                if(d_ob == '1000-10-10'){
                    d_ob = '';
                }
                else {
                    d_ob = Date_formatUp(d_ob);
                }

                if(etat == 'satisfaite')$("#reclamation_etat").attr('checked',true);
                if(etat == 'non satisfaite')$("#reclamation_etat").attr('checked',false);

                $("#reclamation_date_client").val(d_c);
                $("#reclamation_type").val(val.type_model);
                $("#reclamation_imm").val(val.imm);
                $("#reclamation_clientNom").val(val.client);
                $("#reclamation_vin").val(val.chassis);
                $("#reclamation_tel").val(telclient);
                $("#reclamation_L_date").text(d_l);
                $("#reclamation_L_km").text(val.km);
                $("#reclamation_L_facture").text(val.num_f);
                $("#reclamation_L_traveaux_fait").val(val.t_f);
                $("#reclamation_client_executant_reclamation").val(val.reclamateur);
                $("#reclamation_deposition_client").val(val.reclamation);
                $("#reclamation_date_deposition").val(d_r);
                $("#reclamation_executant").val('');
                $("#reclamation_controleur").val('');
                $("#reclamatiion_analyse").val(val.analyse);
                $("#reclamation_cause").val(val.cause);
                $("#reclamation_proposition").val(val.proposition);
                $("#date_reclamation_observation_cg").val(d_ob);
                $("#reclamation_chef_garage_nom").val(val.observateur);
                $("#modifReclamation").val(id_reclam);
            });

            setTimeout(function () {
                $("#validerAddReclamation").text('Modifier');
                $("#ModalAddReclamation").modal({backdrop: "static"});
            },40);

        });
    }

    else if(elementActif == "Pointage Technicien")
    {
        var id_pointage = elementActifId;
        $.post('controller/Autocomplete.php', {postidpointagereturnpointage: id_pointage}, function (data) {

            data = $.parseJSON(data);

            var spetial = '';
            var technicien = '';
            var hfp = '';
            var hdp = '';
            var tep = '';
            var nor = '';
            var design = '';
            var dp = '';
            var op = '';
            var hrautp = '';

            $.each(data, function (key, val) {
                spetial = val.techSpetial;
                technicien = val.tech;
                hfp = val.heure_f_pointage;
                hdp = val.heure_d_pointage;
                tep = val.travaux_execute_pointage;
                nor = val.num_or;
                design = val.designation;
                dp = val.date_pointage;
                op = val.objectif_pointage;
                hrautp = val.hr_aut_pointage;

                if(dp == '1000-10-10'){
                    dp = '';
                }
                else {
                    dp = Date_formatUp(dp);
                }
            });

            function timeConvert (timeEnd, timeStart) {
                var partsTEnd = timeEnd.split(':');
                var partsTStart = timeStart.split(':');
                var timeSecEnd = (partsTEnd[0]*3600)+(partsTEnd[1]*60)+(partsTEnd[2]);
                var timeSecStart = (partsTStart[0]*3600)+(partsTStart[1]*60)+(partsTStart[2]);
                var secondMake = timeSecEnd - timeSecStart;
                var heure = ((secondMake/60)/60)/100;
                var heure = Math.abs(heure);
                var heure = Math.floor(heure);

                return heure;
            }

            var timeMake = timeConvert(hfp,hdp);

            $("#point_OR").val(nor);
            $("#point_sec").val(spetial);
            $("#point_ex").val(technicien);
            $("#date_P").val(dp);
            $("#point_ob").val(op);
            $("#point_hrAut").val(hrautp);
            $("#point_tf").val(tep);
            $("#heure_PointF").val(hfp);
            $("#heure_PointD").val(hdp);
            $("#point_design").val(design);
            $("#point_temp").val(timeMake+' h');
            $("#modifPointage").val(id_pointage);

            $("#validerAddPointage").text("Modifier");
            $("#ModalAddPointage").modal({backdrop: "static"});
        });
    }

    else if(elementActif == "Enr\351gistrement Rendez-vous revision")
    {
        var id_revision = elementActifId;
        $("#formRevision")[0].reset();
        $.post('controller/Autocomplete.php',{postidrevisionandreturnrevision:id_revision},function (data) {

            data = $.parseJSON(data);

            $.each(data,function (key, val) {
                var date = val.date;
                var duree = val.duree;

                var  dureesp = duree.indexOf(' ');

                var dureePoids = duree.substring(0,dureesp);
                var dureeSpace = duree.substring(dureesp+1);

                if(date == '1000-10-10'){
                    date = '';
                }
                else {
                    date = Date_formatUp(date);
                }
                $("#imm_revision").val(val.imm);
                $("#date_revision").val(date);
                $("#rendezvous_revision_input").val(dureePoids);
                $("#rendezvous_revision_select").val(dureeSpace);
            });

        });
        setTimeout(function () {
            $("#modifRevision").val(id_revision);
            ModalRevisionModification();
        },40);

    }
    else if(elementActif == "Enr\351gistrement Rendez-vous visite technique")
    {
        var id_visite = elementActifId;
        $("#formVisite")[0].reset();
        $.post('controller/Autocomplete.php',{postidvisiteandreturnvisite:id_visite},function (data) {
            data = $.parseJSON(data);

            $.each(data,function (key, val) {
                var date = val.date;
                var duree = val.duree;

                var  dureesp = duree.indexOf(' ');

                var dureePoids = duree.substring(0,dureesp);
                var dureeSpace = duree.substring(dureesp+1);

                if(date == '1000-10-10'){
                    date = '';
                }
                else {
                    date = Date_formatUp(date);
                }
                $("#imm_visiteTechnique").val(val.imm);
                $("#date_visiteTechnique").val(date);
                $("#rendezvous_visite_input").val(dureePoids);
                $("#rendezvous_visite_select").val(dureeSpace);
            });
        });

        setTimeout(function () {
            $("#modifVisite").val(id_visite);
            ModalVisiteModification();
        },40);
    }

    else if(elementActif == "Enr\351gistrement Rendez-vous assurance")
    {
        var id_assurance = elementActifId;
        $("#formAssurance")[0].reset();
        $.post('controller/Autocomplete.php',{postidassuranceandreturnassurance:id_assurance},function (data) {
            data = $.parseJSON(data);

            $.each(data,function (key, val) {
                var date = val.date;
                var duree = val.duree;

                var  dureesp = duree.indexOf(' ');

                var dureePoids = duree.substring(0,dureesp);
                var dureeSpace = duree.substring(dureesp+1);

                if(date == '1000-10-10'){
                    date = '';
                }
                else {
                    date = Date_formatUp(date);
                }
                $("#imm_Assurance").val(val.imm);
                $("#date_Assurance").val(date);
                $("#rendezvous_assurance_input").val(dureePoids);
                $("#rendezvous_assurance_select").val(dureeSpace);
            });
        });

        setTimeout(function () {
            $("#modifAssurance").val(id_assurance);
            ModalAssuranceModification();
        },40);
    }

    else if(elementActif == "Enr\351gistrement Rendez-vous garantie")
    {
        var id_garantie = elementActifId;
        $("#formGarantie")[0].reset();
        $.post('controller/Autocomplete.php',{postidgarantieandreturngarantie:id_garantie},function (data) {

            data = $.parseJSON(data);

            $.each(data,function (key, val) {
                var date = val.date;
                var duree = val.duree;

                var  dureesp = duree.indexOf(' ');

                var dureePoids = duree.substring(0,dureesp);
                var dureeSpace = duree.substring(dureesp+1);

                if(date == '1000-10-10'){
                    date = '';
                }
                else {
                    date = Date_formatUp(date);
                }
                $("#imm_garantie").val(val.imm);
                $("#date_garantie").val(date);
                $("#rendezvous_garantie_input").val(dureePoids);
                $("#rendezvous_garantie_select").val(dureeSpace);
            });
        });

        setTimeout(function () {
            $("#modifGarantie").val(id_garantie);
            ModalGarantieModification();
        },40);

    }

    else if (elementActif == "Maintenance Standard")
    {
        var id_maintStand = elementActifId;
        $("#formGarantie")[0].reset();
        $.post('controller/Autocomplete.php',{postidmaintstandandreturnmaintstand:id_maintStand},function (data) {

           data = $.parseJSON(data);
            var kilometrage;
            var taches;
            $.each(data,function (key, val) {
                kilometrage = val.kilometrage;
                taches = val.taches;

                $("#maitstandclient").val(val.client);
                $("#maitstandimm").val(val.imm);
                $("#maintstand_date").val( Date_formatUp(val.dates));

            });

            var lineStandard = ["4000","10000","16000","22000","28000","34000","40000","46000","52000","58000","64000","70000","76000","82000","88000","94000","100000","106000","112000","118000"];

            var existLine = 'non';

            for (var i = 0; i < lineStandard.length; i++)
            {
                if(kilometrage.replace(/ /g, '', kilometrage) == lineStandard[i])
                {
                    existLine = 'oui';
                    i = lineStandard.length;
                }
            }

            taches = taches.replace(/&quot;/g,'"');
            taches = taches.replace(/:/g,',');
            taches = JSON.parse(taches);

            if(existLine == 'non')
            {
                $("#mainstandaroderlinekilo").text(kilometrage+' Km');
                $(".maintstandcheck").prop('checked', false);
                $("#maintenancestandardSelect").empty();
                $("#mainstandaroderline").show();
                $("#maintstandnewkiloval").val('');

                for (var i = 0; i < taches.length; i++) {
                    if($("#mainstandaroderline").children('td[title="'+taches[i]+'"]'))
                    {
                        if(taches[i+1]=="Inspecter")
                        {
                            $("#mainstandaroderline").children('td[title="'+taches[i]+'"]').children('span').text('I');
                            $("#mainstandaroderline").children('td[title="'+taches[i]+'"]').children('select').val('I');
                        }
                        else
                        {
                            $("#mainstandaroderline").children('td[title="'+taches[i]+'"]').children('span').text('R');
                            $("#mainstandaroderline").children('td[title="'+taches[i]+'"]').children('select').val('R');
                        }

                        $("#mainstandaroderline").children('td[title="'+taches[i]+'"]').children('input').trigger('click');
                    }
                }
            }
            else {

                for (var i = 0; i < taches.length; i++) {
                    $("#line"+kilometrage.replace(/ /g, '', kilometrage)+"km").children('td[title="'+taches[i]+'"]').children('input').trigger('click');
                }
            }

            $("#modifMaintenancestandard").val(id_maintStand);
            $("#validerAddMaintenancestandard").text("Modifier");
            $("#ModalAddMaintenancestandard").modal({backdrop: "static"});

        });

    }
}