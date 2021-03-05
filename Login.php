
<html lang="en">
<head>
    <title>GESGAR</title>
    <link rel="icon" type="" href="images/icon.png">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style/bibliotheque/css/bootstrap.min.css">
    <link rel="stylesheet" href="style/css/ViewFrameXModalPane.css">
    <script src="style/bibliotheque/js/jquery.min.js"></script>
    <script src="style/bibliotheque/js/popper.min.js"></script>
    <script src="style/bibliotheque/js/bootstrap.min.js"></script>

</head>
<body id="imag" >
<div style="position: absolute; z-index: 10!important;opacity: 1;padding: 0px;padding: 0px;">
    <a href="logout.php"><img  id="reconnectimg" src="images/icon.png" style="width: 10vw;height:10vh;margin:0px;margin-top: -1vh;margin-left:0.5vw;"></a>
</div>

<img src="images/hyundaiCool1.jpg" style="width: 100vw;height:100vh;opacity: 1;">

<div class="modal fade" id="login" role="dialog">
    <div class="modal-dialog" >
        <div class="modal-content" id="logincont" style="width: 40vw;height: 40vh;">
            <div id="dbConnect" style="background:#a47e3c; position: absolute; z-index: 1000000000000!important; width: 20vw;height: 10vh;color: white;margin-top: 15vh;margin-left: 10vw;display: none;text-align: center;"></div>
            <div class="modal-header modal_header_main">
                <div  class="modal_title_div"><h6 style="color: white;" class="modalHeaderAjoutModifH6">Connexion</h6></div>
            </div>
            <div>
                <div id="resultLog" class="modalinfo" style="color: white;font-family: 'Times New Roman'; text-align: center; margin-top: 0px;width: 39.79vw;"></div>
                <div class="modal-body modalbodyinfo" style="padding: 3vh;border: 0px solid green;margin-top: 1.5vh;width: ">
                    <form  id="LoginFormm" role="form" method="POST"  style="border: 0px solid yellow;width: 100%;" >
                        <div class="form-group" style="border: 0px solid green;width: 100%;">
                            <h6 style="font-size: 13px">Utilisateur</h6>
                            <input  id="nomIdUser" class="form-control" type="text" name="userLgn" style="height: 5vh;width: 100%;font-family: 'Times New Roman';" autocomplete="off" autofocus>
                        </div>
                        <div class="form-group" style="border: 0px solid green;width: 100%;">
                            <h6 style="font-size: 13px">Mot de passe</h6>
                            <input id="passIdUser" class="form-control" type="password" name="pswLgn" style="height: 5vh;width: 100%;font-family: 'Times New Roman';" autocomplete="off">
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer modalFooterAjoutModif">
                <button id="connecterLoginId"  class="btn btn-block modalFooterAjoutModifButton" name="validerTech" style="width: 6vw;margin-right: 16vw;">Connecter</button>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="controller/login/js/ViewLogin.js"></script>
</body>
</html>
<?php session_start(); $_SESSION['userGESGAR'] = ''; ?>