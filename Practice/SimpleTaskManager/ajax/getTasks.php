<?php
	require_once "db.php";

	$sql = "SELECT * FROM stm_tasks ORDER BY status ASC";
	$re = mysql_query($sql) or die(mysql_error());
	$task_arr = [];
	while ($row_re = mysql_fetch_assoc($re)) {
		array_push($task_arr, $row_re);
	}

	echo json_encode($task_arr);
?>