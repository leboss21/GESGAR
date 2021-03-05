$(document).ready(function () {

    $("#idexinputvaleurtri").focus(function () {

        var option_tri = $("#idexselectvaleurtri").val();

        if(option_tri == 'Code')
        {
            $.post('controller/ListeAutoViewCodeClient.php',{codeclientautoreturn:'code'}, function (data) {
                var data = $.parseJSON(data);
                var liste = [];
                var index = 0;

                $.each(data, function (key, val) {
                    liste[index] = val.codeclient;
                    index++;
                });

                $("#idexinputvaleurtri").autocomplete({
                    source: function (request, reponse) {
                        var results = $.ui.autocomplete.filter(liste, request.term);
                        reponse(results.slice(0, 10));
                    },
                    change:function (event, ui) {
                        if (!ui.item)
                        {
                            $(event.target).val("");
                            $("#idexinputvaleurtri").empty();
                        }
                    },
                    focus:function (event, ui) {
                        return false;
                    }
                });
            });
        }
        else if(option_tri == 'Genre')
        {
            $.post('controller/ListeAutoViewGenreClient.php',{genreclientautoreturn:'genre'}, function (data) {
                var data = $.parseJSON(data);
                var liste = [];
                var index = 0;

                $.each(data, function (key, val) {
                    liste[index] = val.genreclient;
                    index++;
                });

                $("#idexinputvaleurtri").autocomplete({
                    source: function (request, reponse) {
                        var results = $.ui.autocomplete.filter(liste, request.term);
                        reponse(results.slice(0, 10));
                    },
                    change:function (event, ui) {
                        if (!ui.item)
                        {
                            $(event.target).val("");
                            $("#idexinputvaleurtri").empty();
                        }
                    },
                    focus:function (event, ui) {
                        return false;
                    }
                });
            });
        }
        else if(option_tri == 'Client')
        {
            $.post('controller/ListeAutoViewNomClient.php',{nomclientautoreturn:'nomclient'}, function (data) {
                var data = $.parseJSON(data);
                var liste = [];
                var index = 0;

                $.each(data, function (key, val) {
                    liste[index] = val.nomclient;
                    index++;
                });

                $("#idexinputvaleurtri").autocomplete({
                    source: function (request, reponse) {
                        var results = $.ui.autocomplete.filter(liste, request.term);
                        reponse(results.slice(0, 10));
                    },
                    change:function (event, ui) {
                        if (!ui.item)
                        {
                            $(event.target).val("");
                            $("#idexinputvaleurtri").empty();
                        }
                    },
                    focus:function (event, ui) {
                        return false;
                    }
                });
            });
        }
        else if(option_tri == 'Adresse')
        {
            $.post('controller/ListeAutoViewAdresseClient.php',{adresseclientautoreturn:'adresseclient'}, function (data) {
                var data = $.parseJSON(data);
                var liste = [];
                var index = 0;

                $.each(data, function (key, val) {
                    liste[index] = val.adresseclient;
                    index++;
                });

                $("#idexinputvaleurtri").autocomplete({
                    source: function (request, reponse) {
                        var results = $.ui.autocomplete.filter(liste, request.term);
                        reponse(results.slice(0, 10));
                    },
                    change:function (event, ui) {
                        if (!ui.item)
                        {
                            $(event.target).val("");
                            $("#idexinputvaleurtri").empty();
                        }
                    },
                    focus:function (event, ui) {
                        return false;
                    }
                });
            });
        }
        else if(option_tri == 'N\260 Plaque')
        {

            $.post('controller/ListeAutoViewPlaqueVehicule.php',{plaquevehiculeautoreturn:'plaquevehicule'}, function (data) {
                var data = $.parseJSON(data);
                var liste = [];
                var index = 0;

                $.each(data, function (key, val) {
                    liste[index] = val.plaquevehicule;
                    index++;
                });

                $("#idexinputvaleurtri").autocomplete({
                    source: function (request, reponse) {
                        var results = $.ui.autocomplete.filter(liste, request.term);
                        reponse(results.slice(0, 10));
                    },
                    change:function (event, ui) {
                        if (!ui.item)
                        {
                            $(event.target).val("");
                            $("#idexinputvaleurtri").empty();
                        }
                    },
                    focus:function (event, ui) {
                        return false;
                    }
                });
            });
        }
        else if(option_tri == 'Chassis')
        {
            $.post('controller/ListeAutoViewChassisVehicule.php',{chassisvehiculeautoreturn:'chassisvehicule'}, function (data) {
                var data = $.parseJSON(data);
                var liste = [];
                var index = 0;

                $.each(data, function (key, val) {
                    liste[index] = val.chassisvehicule;
                    index++;
                });

                $("#idexinputvaleurtri").autocomplete({
                    source: function (request, reponse) {
                        var results = $.ui.autocomplete.filter(liste, request.term);
                        reponse(results.slice(0, 10));
                    },
                    change:function (event, ui) {
                        if (!ui.item)
                        {
                            $(event.target).val("");
                            $("#idexinputvaleurtri").empty();
                        }
                    },
                    focus:function (event, ui) {
                        return false;
                    }
                });
            });
        }
        else if(option_tri == 'Mod\350le')
        {
            $.post('controller/ListeAutoViewModeleVehicule.php',{modelevehiculeautoreturn:'modelevehicule'}, function (data) {
                var data = $.parseJSON(data);
                var liste = [];
                var index = 0;

                $.each(data, function (key, val) {
                    liste[index] = val.modelevehicule;
                    index++;
                });

                $("#idexinputvaleurtri").autocomplete({
                    source: function (request, reponse) {
                        var results = $.ui.autocomplete.filter(liste, request.term);
                        reponse(results.slice(0, 10));
                    },
                    change:function (event, ui) {
                        if (!ui.item)
                        {
                            $(event.target).val("");
                            $("#idexinputvaleurtri").empty();
                        }
                    },
                    focus:function (event, ui) {
                        return false;
                    }
                });
            });
        }
        else if(option_tri == 'Type Moteur')
        {
            $.post('controller/ListeAutoViewTypemoteurVehicule.php',{typemoteurvehiculeautoreturn:'typemoteurvehicule'}, function (data) {
                var data = $.parseJSON(data);
                var liste = [];
                var index = 0;

                $.each(data, function (key, val) {
                    liste[index] = val.typemoteurvehicule;
                    index++;
                });

                $("#idexinputvaleurtri").autocomplete({
                    source: function (request, reponse) {
                        var results = $.ui.autocomplete.filter(liste, request.term);
                        reponse(results.slice(0, 10));
                    },
                    change:function (event, ui) {
                        if (!ui.item)
                        {
                            $(event.target).val("");
                            $("#idexinputvaleurtri").empty();
                        }
                    },
                    focus:function (event, ui) {
                        return false;
                    }
                });
            });
        }
        else if(option_tri == 'Sp\351cialit\351')
        {
            $.post('controller/ListeAutoViewSpecialiteTechnicien.php',{specialitetechnicienautoreturn:'specialitetechnicien'}, function (data) {
                var data = $.parseJSON(data);
                var liste = [];
                var index = 0;

                $.each(data, function (key, val) {
                    liste[index] = val.specialitetechnicien;
                    index++;
                });

                $("#idexinputvaleurtri").autocomplete({
                    source: function (request, reponse) {
                        var results = $.ui.autocomplete.filter(liste, request.term);
                        reponse(results.slice(0, 10));
                    },
                    change:function (event, ui) {
                        if (!ui.item)
                        {
                            $(event.target).val("");
                            $("#idexinputvaleurtri").empty();
                        }
                    },
                    focus:function (event, ui) {
                        return false;
                    }
                });
            });
        }
        else if(option_tri == 'Statut')
        {
            $.post('controller/ListeAutoViewStatutTechnicien.php',{statuttechnicienautoreturn:'statuttechnicien'}, function (data) {
                var data = $.parseJSON(data);
                var liste = [];
                var index = 0;

                $.each(data, function (key, val) {
                    liste[index] = val.statuttechnicien;
                    index++;
                });

                $("#idexinputvaleurtri").autocomplete({
                    source: function (request, reponse) {
                        var results = $.ui.autocomplete.filter(liste, request.term);
                        reponse(results.slice(0, 10));
                    },
                    change:function (event, ui) {
                        if (!ui.item)
                        {
                            $(event.target).val("");
                            $("#idexinputvaleurtri").empty();
                        }
                    },
                    focus:function (event, ui) {
                        return false;
                    }
                });
            });
        }
        else if(option_tri == 'N\260 R\351ception')
        {
            $.post('controller/ListeAutoViewNumeroReception.php',{numeroreceptionautoreturn:'numeroreception'}, function (data) {
                var data = $.parseJSON(data);
                var liste = [];
                var index = 0;

                $.each(data, function (key, val) {
                    liste[index] = val.numeroreception;
                    index++;
                });

                $("#idexinputvaleurtri").autocomplete({
                    source: function (request, reponse) {
                        var results = $.ui.autocomplete.filter(liste, request.term);
                        reponse(results.slice(0, 10));
                    },
                    change:function (event, ui) {
                        if (!ui.item)
                        {
                            $(event.target).val("");
                            $("#idexinputvaleurtri").empty();
                        }
                    },
                    focus:function (event, ui) {
                        return false;
                    }
                });
            });
        }
        else if(option_tri == 'Type de R\351ception')
        {
            $.post('controller/ListeAutoViewTypeReception.php',{typereceptionautoreturn:'typereception'}, function (data) {
                var data = $.parseJSON(data);
                var liste = [];
                var index = 0;

                $.each(data, function (key, val) {
                    liste[index] = val.typereception;
                    index++;
                });

                $("#idexinputvaleurtri").autocomplete({
                    source: function (request, reponse) {
                        var results = $.ui.autocomplete.filter(liste, request.term);
                        reponse(results.slice(0, 10));
                    },
                    change:function (event, ui) {
                        if (!ui.item)
                        {
                            $(event.target).val("");
                            $("#idexinputvaleurtri").empty();
                        }
                    },
                    focus:function (event, ui) {
                        return false;
                    }
                });
            });
        }
        else if(option_tri == 'Mode de Payement')
        {
            $.post('controller/ListeAutoViewModepayement.php',{modepayementautoreturn:'modepayement'}, function (data) {
                var data = $.parseJSON(data);
                var liste = [];
                var index = 0;

                $.each(data, function (key, val) {
                    liste[index] = val.modepayement;
                    index++;
                });

                $("#idexinputvaleurtri").autocomplete({
                    source: function (request, reponse) {
                        var results = $.ui.autocomplete.filter(liste, request.term);
                        reponse(results.slice(0, 10));
                    },
                    change:function (event, ui) {
                        if (!ui.item)
                        {
                            $(event.target).val("");
                            $("#idexinputvaleurtri").empty();
                        }
                    },
                    focus:function (event, ui) {
                        return false;
                    }
                });
            });
        }
        else if(option_tri == 'Technicien')
        {
            $.post('controller/ListeAutoViewNomTechnicien.php',{nomtechnicienautoreturn:'nomtechnicien'}, function (data) {
                var data = $.parseJSON(data);
                var liste = [];
                var index = 0;

                $.each(data, function (key, val) {
                    liste[index] = val.nomtechnicien;
                    index++;
                });

                $("#idexinputvaleurtri").autocomplete({
                    source: function (request, reponse) {
                        var results = $.ui.autocomplete.filter(liste, request.term);
                        reponse(results.slice(0, 10));
                    },
                    change:function (event, ui) {
                        if (!ui.item)
                        {
                            $(event.target).val("");
                            $("#idexinputvaleurtri").empty();
                        }
                    },
                    focus:function (event, ui) {
                        return false;
                    }
                });
            });
        }
    });
});