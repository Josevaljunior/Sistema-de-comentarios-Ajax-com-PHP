<?php
header('Content-Type: application/json');
$name = $_POST['name'];
$comment = $_POST['comment'];

$pdo = new PDO('mysql:host=localhost; dbname=bd-comment-video;','root','');

$stmt = $pdo->prepare('INSERT INTO comments (name, comment) VALUES (:na, :co)');
$stmt->bindValue(':na', $name);
$stmt->bindValue(':co', $comment);

$stmt->execute();


if($stmt->rowCount() >=1){
   echo json_encode ('Comentario Salvo com sucesso');
}else{
   echo json_encode('Falha ao salvar comentario');
}