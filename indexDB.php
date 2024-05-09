<?php

$conn = mysqli_connect('localhost', 'root', '', 'curs');

$name = trim($_GET['name']);
$phone = trim($_GET['phone']);
$info = trim($_GET['info']);

$query = "INSERT INTO `Data` (`id`, `Name`, `Phone`, `Info`, `Time`) VALUES (NULL, '$name', '$phone', '$info', NOW());";

$result = mysqli_query($conn, $query);

mysqli_close($conn);