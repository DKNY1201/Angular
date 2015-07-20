<?php
	require_once "db.php";

	$id = !empty($_GET['id']) ? $_GET['id'] : '';
	$votes = !empty($_GET['votes']) ? $_GET['votes'] : '';
	$sql = "UPDATE posts SET votes = $votes WHERE id = $id";
	$result = mysql_query($sql) or die(mysql_error());
	echo json_encode($result);
?>