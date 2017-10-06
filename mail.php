<?php

ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

// несколько получателей

$to  = 'veringru@yandex.ru';  // обратите внимание на запятую



// тема письма

$subject = 'Письмо с сайта Самара Вентиляция';

if(isset($_POST['title'])){
	if($_POST['title'] != 'Обратный звонок'){
		$modalH1 = $_POST['title'];
	}
	else{
		$modalH1 = 'обратный звонок';
	}
}
else{
	$modalH1 = 'обратный звонок';
}

$name = isset($_POST['name']) ? $_POST['name'] : '';
$phone = isset($_POST['phone']) ? $_POST['phone'] : '';

// текст письма




$text = 'Пользователь <b>' . $name . '</b> оставил заявку на <b>' .$modalH1 .  '</b>. <br/>

Связаться с ним можно по телефону - <b>' . $phone . '</b>';



// Для отправки HTML-письма должен быть установлен заголовок Content-type

$headers  = 'MIME-Version: 1.0' . "\r\n";

$headers .= 'Content-type: text/html; charset=utf8' . "\r\n"; 



// Дополнительные заголовки

$headers .= 'To: <veringru@yandex.ru>' . "\r\n"; // Свое имя и email


$headers .= 'From: '  . $name;





// Отправляем

mail($to, $subject, $text, $headers);


?>