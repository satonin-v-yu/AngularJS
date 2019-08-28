<?php
 
if(isset($_GET['id']))
{
    $id = $_GET['id'];
    $string = file_get_contents("question.json");
    $json=json_decode($string,true);
    // в целях упрощения примера допустим, что 
    // порядок элемента соответствует его id
    $data = $json["question"]["answers"][$id-1];
    echo json_encode($data);
}
else
{  
    echo "Введенные данные некорректны";
}
?>