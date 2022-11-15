<?php
    include('connect.php');
    $tablo_joueur=mysqli_query($link,'SELECT * FROM escapegame ORDER BY score DESC LIMIT 10');
    echo $tablo_joueur;
    echo "<table>";
            echo '<tr>';
            echo "<td>joueur</td>";
            foreach($tablo_joueur[0] as $key => $elem){
                echo "<td>".$key."</td>";
            }
            echo "</tr>";
            echo '<tr>';
            echo "<td>score</td>";
            foreach($tablo_joueur[1] as $key => $elem){
                echo "<td>".$key."</td>";
            }
            echo "</tr>";
            echo "</table>";
?>