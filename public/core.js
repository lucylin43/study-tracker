// public/core.js
var scotchTodo = angular.module('scotchTodo', ['ngRoute']);

// configure our routes
scotchTodo.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        });
});

// create the controller and inject Angular's $scope
scotchTodo.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'home page is me!';
});

scotchTodo.controller('aboutController', function($scope) {
    $scope.message = 'about page is me!';
});

scotchTodo.controller('contactController', function($scope) {
    $scope.message = 'contact page is me!';
});

