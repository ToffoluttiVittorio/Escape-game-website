<?php 
    include('connect.php');
    $nom_joueur=$_GET['joueur'];
// retenir l'email de la personne connectée pendant 1 an
    setcookie(
        'LOGGED_USER',
        $nom_joueur,
        0,
        "/"
    );
    mysqli_query($link, "INSERT INTO nom_joueur VALUES ('".$nom_joueur."',0)");
    echo $nom_joueur;
    header('Location:http://localhost/BDD/HTML/leaflet.html');
?>