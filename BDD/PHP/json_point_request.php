<?php
    include('connect.php');
    $request1=mysqli_query($link, "SELECT po.lat, po.long FROM objet AS ob JOIN point AS po ON ob.id_point=po.id_point");
    if($result = $request1){
        $tableau=[];
        while($ligne = mysqli_fetch_assoc($request1)){
            $type=array("type"=>"Feature","geometry"=>$ligne);
            $tableau[]=$type;
        }
        // $tableau2[]=array("FeatureCollection"=>$tableau);
        echo json_encode($tableau);
    }
?>