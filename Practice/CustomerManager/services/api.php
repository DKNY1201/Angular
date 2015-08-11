<?php
	require_once "Rest.inc.php";
	class API extends REST{
		public $data = "";

		const DB_host = "localhost";
		const DB_username = "root";
		const DB_password = "";
		const DB_dbname = "angularcode_customer";

		public function __construct(){
			parent::__construct();
			$this->dbConnect();
		}

		private function dbConnect(){
			mysql_connect(SELF::DB_host,SELF::DB_username,SELF::DB_password);
			mysql_select_db(SELF::DB_dbname);
		}

		public function processAPI(){
			$func = $_REQUEST['x'] ? strtolower(trim(str_replace('/', '', $_REQUEST['x']))) : '';
			if((int)method_exists($this, $func) > 0){
				$this->$func();
			}else{
				$this->response('',404);
			}
		}

		public function customers(){
			if($this->get_request_method()!="GET"){
				$this->response('',406);
			}
			$sql = "SELECT * FROM angularcode_customers ORDER BY customerNumber";
			$re = mysql_query($sql) or die(mysql_error());
			$num_row = mysql_num_rows($re);
			if($num_row > 0){
				$customer_arr = [];
				while ($row_re = mysql_fetch_assoc($re)) {
					array_push($customer_arr, $row_re);
				}
				$this->response($this->json($customer_arr),200);
			}
			$this->response('',204);
		}

		private function json($data){
			if(is_array($data)){
				return json_encode($data);
			}
		}
	}

	$api = new API;
	$api->processAPI();
?>