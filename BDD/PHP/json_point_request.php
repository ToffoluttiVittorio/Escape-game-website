<?php
    include('connect.php');
    $request1=mysqli_query($link, "SELECT ob.id_point, po.lat, po.long FROM objet AS ob JOIN point AS po ON ob.id_point=po.id_point WHERE ob.id_point = 1");
    $AE="SELECT ob.id_point, po.lat, po.long FROM objet AS ob JOIN point AS po ON ob.id_point=po.id_point WHERE ob.id_point=";
    // echo $request1;
    $request2=mysqli_query($link, "SELECT * FROM objet");
    if($result = $request2){
        $tableau=[];
        while($ligne1 = mysqli_fetch_assoc($result)){
            $interm=$ligne1["id_point"];
            $ligne2 = mysqli_fetch_assoc(mysqli_query($link, $AE.$interm));
            $type=array("type"=>"Feature","properties"=>$ligne1,"geometry"=>$ligne2);
            $tableau[]=$type;
        }
        $tableau2[]=array("FeatureCollection"=>$tableau);
        echo json_encode($tableau2);
    }
?>