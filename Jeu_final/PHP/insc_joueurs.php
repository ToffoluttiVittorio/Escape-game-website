<?php 
    include('connect.php');
    $nom_joueur=$_GET['joueur'];
// utilisation du cookie de session (dans le sens où il retient le nom d'utilisateur) pour retenir le nom d'utilisateur, pratique pour bien retenir les gens 
    setcookie(
        'LOGGED_USER',
        $nom_joueur,
        0,
        "/"
    );
    mysqli_query($link, "INSERT INTO nom_joueur VALUES ('".$nom_joueur."',0)");
    echo $nom_joueur;
    header('Location:http://localhost/Jeu_final/HTML/leaflet.html');
?>