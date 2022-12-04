<?php 
    include('connect.php');
    $temps=json_decode(file_get_contents('php://input'), true);
    $tempss=$temps["val"];
    $user=$_COOKIE['LOGGED_USER'];
    echo $_COOKIE['LOGGED_USER'];
    mysqli_query($link, "UPDATE nom_joueur SET score = ".$tempss." WHERE id_joueur = '".$user."'");

    $request1=mysqli_query($link, "SELECT * FROM nom_joueur");
        $tableau=[];
        while($ligne = mysqli_fetch_assoc($request1)){//transforme ton résultat SQL, non encodée en ligne de tableau associatif sous forme {"nom_colonne_sql":"colonne i"}, particularité, la première occurence lance la 1ere ligne du tableau SQL, la 2ème commande lance la 2ème ligne du tableau SQL, etc.
            $tableau[]=$ligne;//on crée le json directement dans le format qu'on veut, ici un tableau 
        }
    echo json_encode($tableau);

?>