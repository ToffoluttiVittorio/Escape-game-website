<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/acceuilc.css">
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css" rel="stylesheet" />
    <title>Page d'accueil</title>
</head>
<body>
    <h1>PATRICK BALKANY'S POV</h1> 
    <form action="../BDD/PHP/insc_joueurs.php" method="post">
    </form>

    
    <form action="accueil.html" method="get">
        <input id="boutonjouer" class="bouton" type="submit" value="Retour à l'accueil">
    </form>
    
    <?php include("../BDD/PHP/PHP_tableau_joueur.php"); ?>
</body>
<script src="JS/accueiljs.js"></script>
</html>