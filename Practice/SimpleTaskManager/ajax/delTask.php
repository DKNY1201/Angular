<?php
	require_once "db.php";
	$id = !empty($_GET['id']) ? $_GET['id'] : '';
	if($id){
		$sql = "DELETE FROM stm_tasks WHERE id = $id";
		$result = mysql_query($sql) or die(mysql_error());
	}

	echo json_encode($result);
?>