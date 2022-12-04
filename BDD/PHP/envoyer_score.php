<?php 
    include('connect.php');
    $temps=json_decode(file_get_contents('php://input'), true);
    $tempss=$temps['temps']/60*1000;
    $user=$_COOKIE['LOGGED_USER'];
    mysqli_query($link, "UPDATE nom_joueur SET score='".$tempss."' WHERE id_joueur='".$user."'");
?>