<?php
    $link = mysqli_connect('localhost', 'root', 'root', 'escapegame');
    if (!$link) {
       die('Erreur de connexion');
    } else {
       echo 'Succès... ';
    }
?>