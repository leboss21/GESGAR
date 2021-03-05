function AlerteListeOptionHorizontale() {
    $(".alert_menu_item").on('click',function () {
        $("#tableViewNonAdminAlertListeOptionHorizontaltable").empty();
        $("#conteneur_rendezvous_apercu_tbody").empty();
        var alerte_active = $("#mySpan").text();
        $("#conteneur_rendezvous_alerte_actif").text(alerte_active);
        $("#mySpan").text("alerte_menu_horizomontal");
        var element_actif = $(this).attr('id');
        var cliente = '';
        var imm = '';
        var debut = '';
        var fin = '';
        var jour_j = '';
        var muet = '';
        var valeur = 'alerte';

        $("#tableViewNonAdminAlertListeOptionHorizontaltable").append("<table class='table tableViewNonAdmin tableViewNonAdminAlertListeOptionHorizontal'>" +
            "<thead>" +
            "<tr>" +
            "<th class='viewListth' style='width: 19.1vw;border: 0px solid brown;'><div style='width: 19.1vw;'>Client</div></th>" +
            "<th class='viewListth' style='width: 19.1vw;border: 0px solid brown;'><div style='width: 19.1vw;'>Immatriculation</div></th>" +
            "<th class='viewListth' style='width: 19.1vw;border: 0px solid brown;'><div id='alertedatedebut' style='width: 19.1vw;'></div></th>" +
            "<th class='viewListth' style='width: 19.1vw;border: 0px solid brown;'><div id='alertedatedefin' style='width: 19.1vw;'></div></th>" +
            "</tr>" +
            "</thead>" +
            "<tbody id='conteneur_rendezvous_apercu_tbody' style='background-color: rgb(245, 245, 245);'>" +
            "</tbody>"+
            "</table>");

        if(element_actif == "alerte_liste_complete"){$("#conteneur_rendezvous_apercu_actif").text("Liste Complete");}
        if(element_actif == "alerte_liste_muete"){$("#conteneur_rendezvous_apercu_actif").text("Liste Cach\351e");}
        if(element_actif == "alerte_liste_active"){$("#conteneur_rendezvous_apercu_actif").text("Liste Affichi\351e");}
        if(element_actif == "alerte_liste_non_active"){$("#conteneur_rendezvous_apercu_actif").text("Liste non n'affichi\351e");}
        if(element_actif == "alerte_liste_non_depasse"){$("#conteneur_rendezvous_apercu_actif").text("Liste Temps non D\351pass\351");}
        if(element_actif == "alerte_liste_depasse"){$("#conteneur_rendezvous_apercu_actif").text("Liste Temps D\351pass\351");}

        if(alerte_active == "Enr\351gistrement Rendez-vous revision")
        {
            $("#alertedatedebut").text("Derniere R\351vision");
            $("#alertedatedefin").text("Prochienne R\351vision");

            $.post('controller/AutocompleteViewPane.php',{revisionlistecomplete:valeur},function (data) {

                data = $.parseJSON(data);

                $.each(data,function (key, val) {

                    cliente = val.cliente;
                    imm = val.imm;
                    debut = val.debut;
                    fin = val.fin;
                    jour_j = val.jour_j;
                    muet = val.etat;

                    if(element_actif == "alerte_liste_complete")
                    {

                        $("#conteneur_rendezvous_apercu_tbody").append("<tr id='"+val.id+"'>" +
                            "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+cliente+"</div></td>" +
                            "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+imm+"</div></td>" +
                            "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+debut+"</div></td>" +
                            "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+fin+"</div></td>" +
                            "</tr>");
                    }
                    else if(element_actif == "alerte_liste_muete")
                    {
                        if(muet == 'oui')
                        {
                            $("#conteneur_rendezvous_apercu_tbody").append("<tr id='"+val.id+"'>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+cliente+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+imm+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+debut+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+fin+"</div></td>" +
                            "</tr>");
                        }
                    }
                    else if(element_actif == "alerte_liste_active")
                    {
                        if(jour_j <= 15)
                        {
                            $("#conteneur_rendezvous_apercu_tbody").append("<tr id='"+val.id+"'>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+cliente+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+imm+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+debut+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+fin+"</div></td>" +
                                "</tr>");
                        }

                    }
                    else if(element_actif == "alerte_liste_non_active")
                    {
                        if(jour_j > 15)
                        {
                            $("#conteneur_rendezvous_apercu_tbody").append("<tr id='"+val.id+"'>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+cliente+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+imm+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+debut+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+fin+"</div></td>" +
                                "</tr>");
                        }

                    }
                    else if(element_actif == "alerte_liste_non_depasse")
                    {
                        if(jour_j >= 0)
                        {
                            $("#conteneur_rendezvous_apercu_tbody").append("<tr id='"+val.id+"'>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+cliente+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+imm+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+debut+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+fin+"</div></td>" +
                                "</tr>");
                        }

                    }
                    else if(element_actif == "alerte_liste_depasse")
                    {
                        if(jour_j < 0)
                        {
                            $("#conteneur_rendezvous_apercu_tbody").append("<tr id='"+val.id+"'>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+cliente+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+imm+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+debut+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+fin+"</div></td>" +
                                "</tr>");
                        }

                    }

                });
            });
        }

        if(alerte_active == "Enr\351gistrement Rendez-vous visite technique")
        {
            $("#alertedatedebut").text("Derniere Visite");
            $.post('controller/AutocompleteViewPane.php',{visitelistecomplete:valeur},function (data) {
                data = $.parseJSON(data);

                $.each(data,function (key, val) {

                    cliente = val.cliente;
                    imm = val.imm;
                    debut = val.debut;
                    fin = val.fin;
                    jour_j = val.jour_j;
                    muet = val.etat;

                    if(element_actif == "alerte_liste_complete")
                    {

                        $("#conteneur_rendezvous_apercu_tbody").append("<tr id='"+val.id+"'>" +
                            "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+cliente+"</div></td>" +
                            "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+imm+"</div></td>" +
                            "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+debut+"</div></td>" +
                            "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+fin+"</div></td>" +
                            "</tr>");
                    }
                    else if(element_actif == "alerte_liste_muete")
                    {
                        if(muet == 'oui')
                        {
                            $("#conteneur_rendezvous_apercu_tbody").append("<tr id='"+val.id+"'>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+cliente+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+imm+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+debut+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+fin+"</div></td>" +
                                "</tr>");
                        }
                    }
                    else if(element_actif == "alerte_liste_active")
                    {
                        if(jour_j <= 15)
                        {
                            $("#conteneur_rendezvous_apercu_tbody").append("<tr id='"+val.id+"'>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+cliente+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+imm+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+debut+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+fin+"</div></td>" +
                                "</tr>");
                        }

                    }
                    else if(element_actif == "alerte_liste_non_active")
                    {
                        if(jour_j > 15)
                        {
                            $("#conteneur_rendezvous_apercu_tbody").append("<tr id='"+val.id+"'>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+cliente+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+imm+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+debut+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+fin+"</div></td>" +
                                "</tr>");
                        }

                    }
                    else if(element_actif == "alerte_liste_non_depasse")
                    {
                        return false;
                    }
                    else if(element_actif == "alerte_liste_depasse")
                    {
                        return false;
                    }

                });
            });
        }

        if(alerte_active == "Enr\351gistrement Rendez-vous assurance")
        {
            $("#alertedatedebut").text("Date d'\351tablissement");
            $.post('controller/AutocompleteViewPane.php',{assurancelistecomplete:valeur},function (data) {
                data = $.parseJSON(data);

                $.each(data,function (key, val) {

                    cliente = val.cliente;
                    imm = val.imm;
                    debut = val.debut;
                    fin = val.fin;
                    jour_j = val.jour_j;
                    muet = val.etat;

                    if(element_actif == "alerte_liste_complete")
                    {

                        $("#conteneur_rendezvous_apercu_tbody").append("<tr id='"+val.id+"'>" +
                            "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+cliente+"</div></td>" +
                            "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+imm+"</div></td>" +
                            "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+debut+"</div></td>" +
                            "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+fin+"</div></td>" +
                            "</tr>");
                    }
                    else if(element_actif == "alerte_liste_muete")
                    {
                        if(muet == 'oui')
                        {
                            $("#conteneur_rendezvous_apercu_tbody").append("<tr id='"+val.id+"'>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+cliente+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+imm+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+debut+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+fin+"</div></td>" +
                                "</tr>");
                        }
                    }
                    else if(element_actif == "alerte_liste_active")
                    {
                        if(jour_j <= 15)
                        {
                            $("#conteneur_rendezvous_apercu_tbody").append("<tr id='"+val.id+"'>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+cliente+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+imm+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+debut+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+fin+"</div></td>" +
                                "</tr>");
                        }

                    }
                    else if(element_actif == "alerte_liste_non_active")
                    {
                        if(jour_j > 15)
                        {
                            $("#conteneur_rendezvous_apercu_tbody").append("<tr id='"+val.id+"'>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+cliente+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+imm+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+debut+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+fin+"</div></td>" +
                                "</tr>");
                        }

                    }
                    else if(element_actif == "alerte_liste_non_depasse")
                    {
                        return false;
                    }
                    else if(element_actif == "alerte_liste_depasse")
                    {
                        return false;
                    }

                });
            });
        }

        if(alerte_active == "Enr\351gistrement Rendez-vous garantie")
        {
            $("#alertedatedebut").text("Date Livraison");
            $.post('controller/AutocompleteViewPane.php',{garantielistecomplete:valeur},function (data) {
                data = $.parseJSON(data);

                $.each(data,function (key, val) {

                    cliente = val.cliente;
                    imm = val.imm;
                    debut = val.debut;
                    fin = val.fin;
                    jour_j = val.jour_j;
                    muet = val.etat;

                    if(element_actif == "alerte_liste_complete")
                    {

                        $("#conteneur_rendezvous_apercu_tbody").append("<tr id='"+val.id+"'>" +
                            "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+cliente+"</div></td>" +
                            "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+imm+"</div></td>" +
                            "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+debut+"</div></td>" +
                            "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+fin+"</div></td>" +
                            "</tr>");
                    }
                    else if(element_actif == "alerte_liste_muete")
                    {
                        if(muet == 'oui')
                        {
                            $("#conteneur_rendezvous_apercu_tbody").append("<tr id='"+val.id+"'>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+cliente+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+imm+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+debut+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+fin+"</div></td>" +
                                "</tr>");
                        }
                    }
                    else if(element_actif == "alerte_liste_active")
                    {
                        if(jour_j <= 15)
                        {
                            $("#conteneur_rendezvous_apercu_tbody").append("<tr id='"+val.id+"'>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+cliente+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+imm+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+debut+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+fin+"</div></td>" +
                                "</tr>");
                        }

                    }
                    else if(element_actif == "alerte_liste_non_active")
                    {
                        if(jour_j > 15)
                        {
                            $("#conteneur_rendezvous_apercu_tbody").append("<tr id='"+val.id+"'>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+cliente+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+imm+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+debut+"</div></td>" +
                                "<td class='viewListtd' style='width: 19.1vw;'><div style='width: 19.1vw;'>"+fin+"</div></td>" +
                                "</tr>");
                        }

                    }
                    else if(element_actif == "alerte_liste_non_depasse")
                    {
                        return false;
                    }
                    else if(element_actif == "alerte_liste_depasse")
                    {
                        return false;
                    }

                });
            });
        }

        setTimeout(function () {
            $("#conteneur_rendezvous_apercu").show();
            ViewPanel();
        },50);
    });
}