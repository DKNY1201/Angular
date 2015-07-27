<?php
	require_once "db.php";

	$sql = "SELECT * FROM customers ORDER BY customerNumber";
	$result = mysql_query($sql) or die(mysql_error());
	$re_arr = array();

	while ($row_re = mysql_fetch_assoc($result)) {
		array_push($re_arr, $row_re);
	}

	echo json_encode($re_arr);
?>