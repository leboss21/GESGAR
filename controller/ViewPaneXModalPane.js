$(document).ready(function () {

    $(".closeFormAddP").click(function () {
        $("#formClientAdd")[0].reset();
        $("#formVehicule")[0].reset();
        $("#formTechnicien")[0].reset();
        $("#formProgrammation")[0].reset();
        $("#formReception")[0].reset();
        $("#resultDivClient").hide();
        $("#resultDivVehicule").hide();
        $("#resultDivTechnicien").hide();
        $("#resultDivProgrammation").hide();
        $("#resultDivReception").hide();
    });

    $(".maintclose").click(function () {
        $('#formMaintenance')[0].reset();
        $('.maintenanceTexte').val('');
        $('.maintenanceTexte').attr('readonly',false);
        $('.maintenancecheck').prop('checked',false);
        $('#maintenanceSelect').empty();
    });

    $(".livraisonclose").click(function () {
        $("#immatricul_reception_livraison").prop('readonly',false);
        $("#formLivraison")[0].reset();
        $("#client_reception_livraison").val('');
        $("#modele_reception_livraison").val('');
        $("#immatricul_reception_livraison").val('');
        $("#travailFait_reception_livraison").empty();
    });

    $("#reclamation_meme_client").click(function () {
        var client_nom = '';
        client_nom = $("#reclamation_clientNom").val();
        if(client_nom != ''){
            $("#reclamation_meme_client").css('color','white');
            $("#reclamation_meme_client_text").text('');
            $("#reclamation_client_executant_reclamation").val(client_nom);
        }
        else {
            $("#reclamation_meme_client").css('color','red');
            $("#reclamation_meme_client_text").text('Aucun client n\'est renseign\351').css('color','red');

            setTimeout(function () {
                $("#reclamation_meme_client").css('color','white');
                $("#reclamation_meme_client_text").text('');
            },5000);

        }
    });

    $(".maintenanceCheck").click(function () {

        $("#maintenanceSelect").empty();

        var checked = $(this).attr('id');

        var elementt = $("#dfs1t").val();


        if($("#dfs1c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#dfs1c").prop('checked',false);
                $("#dfs1t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#dfs1h").text();
                $("#dfs1t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#dfs1t").attr('readonly',false);
        }

        $("#dfs1t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#dfs1t").blur(function () {
            $(this).css('border-color','lightgray');
        });


        var elementt = $("#dfs2t").val();

        if($("#dfs2c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#dfs2c").prop('checked',false);
                $("#dfs2t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#dfs2h").text();
                $("#dfs2t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#dfs2t").attr('readonly',false);
        }

        $("#dfs2t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#dfs2t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#dfs3t").val();

        if($("#dfs3c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#dfs3c").prop('checked',false);
                $("#dfs3t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#dfs3h").text();
                $("#dfs3t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#dfs3t").attr('readonly',false);
        }

        $("#dfs3t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#dfs3t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#dfs4t").val();

        if($("#dfs4c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#dfs4c").prop('checked',false);
                $("#dfs4t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#dfs4h").text();
                $("#dfs4t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#dfs4t").attr('readonly',false);
        }

        $("#dfs4t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#dfs4t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#dfs5t").val();

        if($("#dfs5c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#dfs5c").prop('checked',false);
                $("#dfs5t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#dfs5h").text();
                $("#dfs5t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#dfs5t").attr('readonly',false);
        }

        $("#dfs5t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#dfs5t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#dfs6t").val();

        if($("#dfs6c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#dfs6c").prop('checked',false);
                $("#dfs6t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#dfs6h").text();
                $("#dfs6t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#dfs6t").attr('readonly',false);
        }

        $("#dfs6t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#dfs6t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#dfs7t").val();

        if($("#dfs7c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#dfs7c").prop('checked',false);
                $("#dfs7t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#dfs7h").text();
                $("#dfs7t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#dfs7t").attr('readonly',false);
        }

        $("#dfs7t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#dfs7t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#dfs8t").val();

        if($("#dfs8c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#dfs8c").prop('checked',false);
                $("#dfs8t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#dfs8h").text();
                $("#dfs8t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#dfs8t").attr('readonly',false);
        }

        $("#dfs8t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#dfs8t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#dfs9t").val();

        if($("#dfs9c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#dfs9c").prop('checked',false);
                $("#dfs9t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#dfs9h").text();
                $("#dfs9t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#dfs9t").attr('readonly',false);
        }

        $("#dfs9t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#dfs9t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#dfs10t").val();

        if($("#dfs10c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#dfs10c").prop('checked',false);
                $("#dfs10t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#dfs10h").text();
                $("#dfs10t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#dfs10t").attr('readonly',false);
        }

        $("#dfs10t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#dfs10t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#dfs11t").val();

        if($("#dfs11c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#dfs11c").prop('checked',false);
                $("#dfs11t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#dfs11h").text();
                $("#dfs11t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#dfs11t").attr('readonly',false);
        }

        $("#dfs11t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#dfs11t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#dfs12t").val();

        if($("#dfs12c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#dfs12c").prop('checked',false);
                $("#dfs12t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#dfs12h").text();
                $("#dfs12t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#dfs12t").attr('readonly',false);
        }

        $("#dfs12t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#dfs12t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#dfs13t").val();

        if($("#dfs13c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#dfs13c").prop('checked',false);
                $("#dfs13t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#dfs13h").text();
                $("#dfs13t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#dfs13t").attr('readonly',false);
        }

        $("#dfs13t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#dfs13t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#dfs14t").val();

        if($("#dfs14c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#dfs14c").prop('checked',false);
                $("#dfs14t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#dfs14h").text();
                $("#dfs14t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#dfs14t").attr('readonly',false);
        }

        $("#dfs14t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#dfs14t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#dfs15t").val();

        if($("#dfs15c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#dfs15c").prop('checked',false);
                $("#dfs15t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#dfs15h").text();
                $("#dfs15t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#dfs15t").attr('readonly',false);
        }

        $("#dfs15t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#dfs15t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#dfs16t").val();

        if($("#dfs16c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#dfs16c").prop('checked',false);
                $("#dfs16t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#dfs16h").text();
                $("#dfs16t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#dfs16t").attr('readonly',false);
        }

        $("#dfs16t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#dfs16t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#dfs17t").val();

        if($("#dfs17c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#dfs17c").prop('checked',false);
                $("#dfs17t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#dfs17h").text();
                $("#dfs17t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#dfs17t").attr('readonly',false);
        }

        $("#dfs17t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#dfs17t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#dfs18t").val();

        if($("#dfs18c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#dfs18c").prop('checked',false);
                $("#dfs18t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#dfs18h").text();
                $("#dfs18t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#dfs18t").attr('readonly',false);
        }

        $("#dfs18t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#dfs18t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#dfs19t").val();

        if($("#dfs19c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#dfs19c").prop('checked',false);
                $("#dfs19t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#dfs19h").text();
                $("#dfs19t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#dfs19t").attr('readonly',false);
        }

        $("#dfs19t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#dfs19t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#dfs20t").val();

        if($("#dfs20c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#dfs20c").prop('checked',false);
                $("#dfs20t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#dfs20h").text();
                $("#dfs20t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#dfs20t").attr('readonly',false);
        }

        $("#dfs20t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#dfs20t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#dfs21t").val();

        if($("#dfs21c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#dfs21c").prop('checked',false);
                $("#dfs21t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#dfs21h").text();
                $("#dfs21t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#dfs21t").attr('readonly',false);
        }

        $("#dfs21t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#dfs21t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#dfs22t").val();

        if($("#dfs22c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#dfs22c").prop('checked',false);
                $("#dfs22t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#dfs22h").text();
                $("#dfs22t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#dfs22t").attr('readonly',false);
        }

        $("#dfs22t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#dfs22t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#dfs23t").val();

        if($("#dfs23c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#dfs23c").prop('checked',false);
                $("#dfs23t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#dfs23h").text();
                $("#dfs23t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#dfs23t").attr('readonly',false);
        }

        $("#dfs23t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#dfs23t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#dfs24t").val();

        if($("#dfs24c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#dfs24c").prop('checked',false);
                $("#dfs24t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#dfs24h").text();
                $("#dfs24t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#dfs24t").attr('readonly',false);
        }

        $("#dfs24t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#dfs24t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#dfs25t").val();

        if($("#dfs25c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#dfs25c").prop('checked',false);
                $("#dfs25t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#dfs25h").text();
                $("#dfs25t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#dfs25t").attr('readonly',false);
        }

        $("#dfs25t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#dfs25t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#ele1t").val();

        if($("#ele1c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#ele1c").prop('checked',false);
                $("#ele1t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#ele1h").text();
                $("#ele1t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#ele1t").attr('readonly',false);
        }

        $("#ele1t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#ele1t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#ele2t").val();

        if($("#ele2c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#ele2c").prop('checked',false);
                $("#ele2t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#ele2h").text();
                $("#ele2t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#ele2t").attr('readonly',false);
        }

        $("#ele2t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#ele2t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#ele3t").val();

        if($("#ele3c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#ele3c").prop('checked',false);
                $("#ele3t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#ele3h").text();
                $("#ele3t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#ele3t").attr('readonly',false);
        }

        $("#ele3t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#ele3t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#ele4t").val();

        if($("#ele4c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#ele4c").prop('checked',false);
                $("#ele4t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#ele4h").text();
                $("#ele4t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#ele4t").attr('readonly',false);
        }

        $("#ele4t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#ele4t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#ele5t").val();

        if($("#ele5c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#ele5c").prop('checked',false);
                $("#ele5t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#ele5h").text();
                $("#ele5t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#ele5t").attr('readonly',false);
        }

        $("#ele5t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#ele5t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#fro1t").val();

        if($("#fro1c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#fro1c").prop('checked',false);
                $("#fro1t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#fro1h").text();
                $("#fro1t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#fro1t").attr('readonly',false);
        }

        $("#fro1t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#fro1t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#fro2t").val();

        if($("#fro2c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#fro2c").prop('checked',false);
                $("#fro2t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#fro2h").text();
                $("#fro2t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#fro2t").attr('readonly',false);
        }

        $("#fro2t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#fro2t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#fro3t").val();

        if($("#fro3c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#fro3c").prop('checked',false);
                $("#fro3t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#fro3h").text();
                $("#fro3t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#fro3t").attr('readonly',false);
        }

        $("#fro3t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#fro3t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#fro4t").val();

        if($("#fro4c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#fro4c").prop('checked',false);
                $("#fro4t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#fro4h").text();
                $("#fro4t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#fro4t").attr('readonly',false);
        }

        $("#fro4t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#fro4t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#fro5t").val();

        if($("#fro5c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#fro5c").prop('checked',false);
                $("#fro5t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#fro5h").text();
                $("#fro5t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#fro5t").attr('readonly',false);
        }

        $("#fro5t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#fro5t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#fro6t").val();

        if($("#fro6c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#fro6c").prop('checked',false);
                $("#fro6t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#fro6h").text();
                $("#fro6t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#fro6t").attr('readonly',false);
        }

        $("#fro6t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#fro6t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#fro7t").val();

        if($("#fro7c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#fro7c").prop('checked',false);
                $("#fro7t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#fro7h").text();
                $("#fro7t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#fro7t").attr('readonly',false);
        }

        $("#fro7t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#fro7t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#mot1t").val();

        if($("#mot1c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#mot1c").prop('checked',false);
                $("#mot1t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#mot1h").text();
                $("#mot1t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#mot1t").attr('readonly',false);
        }

        $("#mot1t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#mot1t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#mot2t").val();

        if($("#mot2c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#mot2c").prop('checked',false);
                $("#mot2t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#mot2h").text();
                $("#mot2t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#mot2t").attr('readonly',false);
        }

        $("#mot2t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#mot2t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#mot3t").val();

        if($("#mot3c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#mot3c").prop('checked',false);
                $("#mot3t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#mot3h").text();
                $("#mot3t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#mot3t").attr('readonly',false);
        }

        $("#mot3t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#mot3t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#mot4t").val();

        if($("#mot4c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#mot4c").prop('checked',false);
                $("#mot4t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#mot4h").text();
                $("#mot4t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#mot4t").attr('readonly',false);
        }

        $("#mot4t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#mot4t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#mot5t").val();

        if($("#mot5c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#mot5c").prop('checked',false);
                $("#mot5t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#mot5h").text();
                $("#mot5t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#mot5t").attr('readonly',false);
        }

        $("#mot5t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#mot5t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#mot6t").val();

        if($("#mot6c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#mot6c").prop('checked',false);
                $("#mot6t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#mot6h").text();
                $("#mot6t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#mot6t").attr('readonly',false);
        }

        $("#mot6t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#mot6t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#mot7t").val();

        if($("#mot7c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#mot7c").prop('checked',false);
                $("#mot7t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#mot7h").text();
                $("#mot7t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#mot7t").attr('readonly',false);
        }

        $("#mot7t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#mot7t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#mot8t").val();

        if($("#mot8c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#mot8c").prop('checked',false);
                $("#mot8t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#mot8h").text();
                $("#mot8t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#mot8t").attr('readonly',false);
        }

        $("#mot8t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#mot8t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#mot9t").val();

        if($("#mot9c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#mot9c").prop('checked',false);
                $("#mot9t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#mot9h").text();
                $("#mot9t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#mot9t").attr('readonly',false);
        }

        $("#mot9t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#mot9t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#mot10t").val();

        if($("#mot10c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#mot10c").prop('checked',false);
                $("#mot10t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#mot10h").text();
                $("#mot10t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#mot10t").attr('readonly',false);
        }

        $("#mot10t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#mot10t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#mot11t").val();

        if($("#mot11c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#mot11c").prop('checked',false);
                $("#mot11t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#mot11h").text();
                $("#mot11t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#mot11t").attr('readonly',false);
        }

        $("#mot11t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#mot11t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#mot12t").val();

        if($("#mot12c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#mot12c").prop('checked',false);
                $("#mot12t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#mot12h").text();
                $("#mot12t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#mot12t").attr('readonly',false);
        }

        $("#mot12t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#mot12t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#mot13t").val();

        if($("#mot13c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#mot13c").prop('checked',false);
                $("#mot13t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#mot13h").text();
                $("#mot13t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#mot13t").attr('readonly',false);
        }

        $("#mot13t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#mot13t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#mot14t").val();

        if($("#mot14c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#mot14c").prop('checked',false);
                $("#mot14t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#mot14h").text();
                $("#mot14t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#mot14t").attr('readonly',false);
        }

        $("#mot14t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#mot14t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#mot15t").val();

        if($("#mot15c").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#mot15c").prop('checked',false);
                $("#mot15t").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#mot15h").text();
                $("#mot15t").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#mot15t").attr('readonly',false);
        }

        $("#mot15t").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#mot15t").blur(function () {
            $(this).css('border-color','lightgray');
        });

        var elementt = $("#tolt").val();

        if($("#tolc").is(':checked',true))
        {
            if(elementt == '')
            {
                $("#tolc").prop('checked',false);
                $("#tolt").focus().css('border-color','red');
            }
            else
            {
                var elementh = $("#tolh").text();
                $("#tolt").attr('readonly',true);
                $("#maintenanceSelect").append('['+elementh+'=>'+elementt+']');
            }
        }
        else
        {
            $("#maintenanceSelect").append('');
            $("#tolt").attr('readonly',false);
        }

        $("#tolt").click(function () {
            $(this).css('border-color','lightskyblue');
        });

        $("#tolt").blur(function () {
            $(this).css('border-color','lightgray');
        });

    });

    $("#ajoutUnique").on('click', function () {
        var viewPaneActive = $("#mySpan").text();
        if(viewPaneActive == 'Enr\351gistrement Clients')
            CientAjoutUniquePrivilegie();
        else if(viewPaneActive == 'Enr\351gistrement V\351hucules')
            VehiculeAjoutUniquePrivilegie();
        else if(viewPaneActive == 'Enr\351gistrement Techniciens')
            TechnicienAjoutUniquePrivilegie();

    });

});