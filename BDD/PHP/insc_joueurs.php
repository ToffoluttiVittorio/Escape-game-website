<?php 
    include('connect.php');
    mysqli_query($link,'CREATE TABLE nom_joueur(
        id_joueur varchar(255),
        score int
    )');
    mysqli_query($link, 'INSERT INTO nom_joueur VALUES($_POST['nom'],0)');
    // console.log(mysqli_query($link, "SHOW TABLES FROM escapegame LIKE 'nom_joueur'"));
?>