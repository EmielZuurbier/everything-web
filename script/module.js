/*global app, angular, console*/

// MODULE.JS

var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider) {
    "use strict";
    $routeProvider
        .when('/', {
            templateUrl: ('views/home.html'),
            controller: 'main'
        })
        .when('/text', {
            templateUrl: ('views/text.html'),
            controller: 'main'
        })
        .otherwise({
            redirectTo: '/'
        });
});
