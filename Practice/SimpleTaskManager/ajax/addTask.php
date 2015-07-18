<?php
	require_once "db.php";
	$task = !empty($_GET['task']) ? $_GET['task'] : '';
	if($task){
		$created_at = time();
		$sql = "INSERT INTO stm_tasks (task,status,created_at) VALUES ('$task',0,'$created_at')";
		$result = mysql_query($sql) or die(mysql_error());
	}
	echo json_encode($result);
?>