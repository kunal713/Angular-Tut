app.controller('homeCtrl', ['$scope', 'File', function($scope, File){
	$scope.title = 'HOME';
	$scope.values = File.get().then(function(data){
		$scope.values = data;
	})
}])