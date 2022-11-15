<?php 
    include('connect.php');
    $nom_joueur=$_POST['nom'];
    // mysqli_query($link,'CREATE TABLE nom_joueur(
    //     id_joueur varchar(255),
    //     score float
    // )');
    mysqli_query($link, "INSERT INTO nom_joueur VALUES ('".$nom_joueur."',0)");
    echo $nom_joueur;
?>