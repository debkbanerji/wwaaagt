angular.module('wwaaagtApp').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/about', {
            template: '<about></about>'
        }).when('/predictions', {
            template: '<predictions></predictions>'
        }).when('/login', {
            template: '<login></login>'
        }).otherwise('/login');


        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    }

]);