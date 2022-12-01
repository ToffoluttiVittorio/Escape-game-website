<?php
    include('connect.php');
    $tableau = [];
    $codes=mysqli_query($link,'SELECT code.code_objet, code.id_objet FROM objet_code AS code JOIN objet ON objet.id_objet = code.id_objet');
    while($ligne = mysqli_fetch_assoc($codes)){
        $tableau[] = $ligne;
      }
    echo json_encode($tableau);
?>
