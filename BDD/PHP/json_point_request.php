<?php
    include('connect.php');
    $reveur=json_decode(file_get_contents('php://input'), true);
    $request1=mysqli_query($link, "SELECT * FROM objet AS ob JOIN point AS po ON ob.id_point=po.id_point");
    if($reveur["data"]=="1"){
        $tableau=[];
        while($ligne = mysqli_fetch_assoc($request1)){
            $tableau[]=$ligne;
        }
        // $tableau2[]=array("FeatureCollection"=>$tableau);
        echo json_encode($tableau);
    }
?>