<?php  
$country=$_GET["country"];



if ($country=="usa"){
    $cities=array("New york", "Los Angles",'Chicago');
}
elseif($country==="canada"){
    $cities=array("Tornato", "nancover",'Montreal');
}
else{
    $cities=array();
}



echo json_encode($cities);
?>