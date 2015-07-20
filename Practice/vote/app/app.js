angular.module("voteApp",[])
	.controller('voteCtrl',function($scope,$http){
		$http.get("ajax/getPost.php").success(function(data){
			$scope.posts = data;
		})

		$scope.upVote = function(post){
			post.votes++;
			updatePost(post.id,post.votes);
		}

		$scope.downVote = function(post){
			post.votes--;
			updatePost(post.id,post.votes);
		}

		function updatePost(id,votes){
			$http.post('ajax/updatePost.php?id=' + id + '&votes=' + votes).success(function(data){
				console.log(data);
			})
		}
	})