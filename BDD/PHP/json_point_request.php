<?php
    include('connect.php');//connexion à la BDD
    $reveur=json_decode(file_get_contents('php://input'), true);//pour récupérer le data envoyé et à partir de ça selon les données reçues, on peut choisir quel tableau renvoyer
    $request1=mysqli_query($link, "SELECT * FROM objet AS ob JOIN point AS po ON ob.id_point=po.id_point");//commande SQL (adaptable) pour reçevoir que l'ID, si nécéssaire, on peut renvoyer des JSON directement si on utilise les bonnes commandes SQL
    if($reveur["data"]=="1"){
        $tableau=[];
        while($ligne = mysqli_fetch_assoc($request1)){//transforme ton résultat SQL, non encodée en ligne de tableau associatif sous forme {"nom_colonne_sql":"colonne i"}, particularité, la première occurence lance la 1ere ligne du tableau SQL, la 2ème commande lance la 2ème ligne du tableau SQL, etc.
            $tableau[]=$ligne;//on crée le json directement dans le format qu'on veut, ici un tableau 
        }
        echo json_encode($tableau);
    }
?>