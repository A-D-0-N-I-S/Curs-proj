<?php

$conn = mysqli_connect('localhost', 'root', '', 'curs');

$name = $_POST['name'];
$phone = $_POST['phone'];
$info = $_POST['info'];

$query = "INSERT INTO `Data` (`id`, `Name`, `Phone`, `Info`, `Time`) VALUES (NULL, '$name', '$phone', '$info', NOW());";

$result = mysqli_query($conn, $query);

header("Location: ../index.html");
mysqli_close($conn);