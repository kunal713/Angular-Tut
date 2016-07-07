var app = angular.module('app', ['ui.router']);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
	/*$urlRouterProvider.otherwise = ('/');*/
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'templates/home.html',
			controller: 'homeCtrl'
		})
		.state('about', {
			url: '/',
			templateUrl: 'templates/about.html',
			controller: 'aboutCtrl'
		})
		.state('contact', {
			url: '/',
			templateUrl: 'templates/contact.html',
			controller: 'contactCtrl'
		})
}])