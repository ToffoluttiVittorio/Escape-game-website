<?php
    include('connect.php');
    $tableau = [];
    $tablo_joueur=mysqli_query($link,'SELECT * FROM escapegame ORDER BY score DESC LIMIT 10');
    while($ligne = $tablo_joueur{
        $tableau[] = $ligne;
      }
    echo json_encode($tableau);
?>