<?php
    include('connect.php');

    $tableau = [];
    $tablo_joueur=mysqli_query($link,"SELECT * FROM nom_joueur ORDER BY score DESC LIMIT 10");
    while($ligne = mysqli_fetch_assoc($tablo_joueur)){
            $tableau[] = $ligne;
        }
        // echo json_encode($tableau);
        echo "<table>";
        echo '<tr>';
        foreach($tableau[0] as $key => $elem){
            // echo "<td>".$key."</td>";
            echo "<td>".$key."</td>";
        }
        echo "</tr>";
        foreach($tableau as $joueurs){
            echo '<tr>';
            foreach($joueurs as $key => $elem){
                // echo "<td>".$key."</td>";
                echo "<td>".$elem."</td>";
            }
            echo "</tr>";
        }
        
        echo "</table>";
?>