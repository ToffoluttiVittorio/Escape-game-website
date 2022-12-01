<?php 
    include('connect.php');
    $nom_joueur=json_decode(file_get_contents('php://input'), true);
    mysqli_query($link, "INSERT INTO nom_joueur VALUES ('".$nom_joueur['joueur']."',0)");
    echo $nom_joueur;
?>