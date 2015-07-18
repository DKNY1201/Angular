<?php
	require_once "db.php";
	$id = !empty($_GET['id']) ? $_GET['id'] : '';
	$status = !empty($_GET['status']) ? $_GET['status'] : '';
	if($status==1){
		$status = 0;
	}else{
		$status = 1;
	}
	if($id){
		$sql = "UPDATE stm_tasks SET status=$status WHERE id = $id";
		$result = mysql_query($sql) or die(mysql_error());
	}
	echo json_encode($result);
?>