<?php 
    include('connect.php');
    $results = mysqli_query($link, "SHOW TABLES FROM escapegame LIKE 'nom_joueur'");
    if (isset($results)){
        mysqli_query($link,'CREATE TABLE nom_joueur');
    };
    echo isset($results);
?>