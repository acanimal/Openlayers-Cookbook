<?php
header('Content-type: application/json');

$num = $_REQUEST['num'];
if(!$num) {
    $num = 1;
}

$result = array();
for($i=0; $i< $num; $i++) {
    $x = 0;
    $y = 0;
    array_push($result, array(
        "x" => rand(-180, 180),
        "y" => rand(-80, 80),
        "title" => "This is the point number '$i'"
    ));
}

echo json_encode($result);
?>
