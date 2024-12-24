<?php
if ($_SERVER['REQUEST_METHOD'] != "POST"){
  exit();
}

$site = 'index.html';
$from = 'form@'.$site;
$token = "7504204940:AAG-X6vnAH0HleKbcokN3w6dUbmyCQxUATM";
$chat_id = "-4688608152";

var_dump($_POST);
if (!empty($_POST)){
  $name = htmlspecialchars($_POST['username']);
  $phone = htmlspecialchars($_POST['phone']);
  $comment = htmlspecialchars($_POST['comment']);

  $message = "Имя клиента: $name %0A";
  $message .= "Телефон клиента: $phone %0A";
  $message .= "Сообщение: $comment";

  try{
    $headers = 'From: form@'.$site."\r\n".
                'X-Mailer: PHP/' . phpversion();

    //Передаем сообщение в телеграмм
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$message}","r");

    // if ($sendToTelegram ) {
    //   header("Location: index.html");
    // } else {
    //     echo json_encode('Ошибка отправки!');
    // }

    die();

  }catch (Exception $e){
    echo json_encode("Ошибка: $e->getMessage()");
  }


  }else{
    echo json_encode("Тело сообщения пустое");
  }
?>