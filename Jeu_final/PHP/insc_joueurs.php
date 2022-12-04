<?php 
    include('connect.php');
    $nom_joueur=$_POST['joueur'];
    mysqli_query($link, "INSERT INTO nom_joueur VALUES ('".$nom_joueur."',0)");
    echo $nom_joueur;
?>