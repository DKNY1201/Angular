<?php
	require_once "db.php";
	$task = !empty($_GET['task']) ? $_GET['task'] : '';
	if($task){
		$create_at = time();
		$sql = "INSERT INTO stm_tasks (task,status,create_at) VALUES ('$task',0,'$create_at')";
		$result = mysql_query($sql) or die(mysql_error());
	}
	echo json_encode($result);
?>