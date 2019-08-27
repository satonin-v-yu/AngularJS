<?php
if(isset($_GET['id']) && isset($_GET['up']))
{
    $id = $_GET['id'];
    $up = $_GET['up'];
    // обновление данных в json-файле или базе данных
    $data = array("id"=> $id, "up" => $up);
    // отдаем обратно объект
    echo json_encode($data);
}
else
{  
    echo "Введенные данные некорректны";
}
?>