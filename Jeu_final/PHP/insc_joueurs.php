<?php 
    include('connect.php');
    $nom_joueur=$_POST['joueur'];
    $name='cookie_choc';
    <?php
// retenir l'email de la personne connectée pendant 1 an
    setcookie(
        'LOGGED_USER',
        $nom_joueur
    );
    mysqli_query($link, "INSERT INTO nom_joueur VALUES ('".$nom_joueur."',0)");
    echo $nom_joueur;
?>