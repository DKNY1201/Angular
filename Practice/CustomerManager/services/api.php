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
			$sql = "SELECT * FROM angularcode_customers ORDER BY customerNumber DESC";
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

		public function customer(){
			if($this->get_request_method()!="GET"){
				$this->response('',406);
			}
			$id = (int)$this->_request['customerID'];
			if($id > 0){
				$sql = "SELECT * FROM angularcode_customers WHERE customerNumber = $id";
				$re = mysql_query($sql) or die(mysql_error());
				$num_row = mysql_num_rows($re);
				if($num_row > 0){
					$row_re = mysql_fetch_assoc($re);
					$this->response($this->json($row_re),200);
				}
			}
			$this->response('',204);
		}

		public function insertCustomer(){
			if($this->get_request_method()!="POST"){
				$this->response('',406);
			}
			$customer = json_decode(file_get_contents('php://input'),true);
			$table_column = array('customerName','email','address','city','country');
			$customer_keys = array_keys($customer);
			$columns = '';
			$values = '';
			foreach ($table_column as $table_column_val) {
				if(!in_array($table_column_val, $customer_keys)){
					$value = '';
				}else{
					$value = $customer[$table_column_val];
				}
				$columns .= $table_column_val.',';
				$values .= "'".$value."',";
			}

			if (!empty($customer)) {
				$query = 'INSERT INTO angularcode_customers (' . trim($columns,',') . ') VALUES (' . trim($values,',') . ')';
				$re = mysql_query($query) or die(mysql_error());
				$success_msg = array('status'=>'Success','msg'=>'Customer created successful!','data'=>$customer);
				$this->response($this->json($success_msg),200);
			}else{
				$this->response('',204);
			}
		}

		public function deleteCustomer(){
			if($this->get_request_method()!="DELETE"){
				$this->response('',406);
			}
			$id = (int)$this->_request['customerID'];
			if($id > 0){
				$sql = "DELETE FROM angularcode_customers WHERE customerNumber = $id";
				$re = mysql_query($sql) or die(mysql_error());
				$success_msg = array("status" => "Success","msg" => "Delete customer successful!","customerID" => $id);
				$this->response($this->json($success_msg),200);
			}else{
				$this->response('',204);
			}
		}

		public function updateCustomer(){
			if($this->get_request_method()!="POST"){
				$this->response('',406);
			}

			$customer = json_decode(file_get_contents('php://input'),true);
			$customerID = $customer['customerID'];
			$table_column = array('customerName','email','address','city','country');
			$customer_keys = array_keys($customer['customer']);
			$columns = '';
			foreach ($table_column as $table_column_val) {
				if(!in_array($table_column_val, $customer_keys)){
					$column = '';
				}else{
					$column = $customer['customer'][$table_column_val];
				}
				$columns .=$table_column_val."='".$column."',";
			}
			
			if($customerID){
				$sql = "UPDATE angularcode_customers SET " . trim($columns,',') . "WHERE customerNumber = " . $customerID;
				$re = mysql_query($sql) or die(mysql_error());
				$success_msg = array("status" => "Success","msg" => "Updated customer successful!","data" => $customer);
				$this->response($this->json($success_msg),200);
			}else{
				$this->response('',204);
			}
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