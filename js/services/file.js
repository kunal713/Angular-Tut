app.factory('File', ['$http', function($http){
	return{
		get: function(){
			return $http.get('/api/file.json').then(function(response){
				return response.data;
			});
		}
	};
}])