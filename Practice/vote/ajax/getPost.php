<?php
	require_once "db.php";

	$sql = "SELECT * FROM posts";
	$result = mysql_query($sql) or die(mysql_error());
	$re_arr = array();
	while($row_result = mysql_fetch_assoc($result)){
		array_push($re_arr, $row_result);
	}
	echo json_encode($re_arr);
?>