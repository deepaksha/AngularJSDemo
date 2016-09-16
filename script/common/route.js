/**
 * This file is use to create the angular routes.
 * Here we are defining the navigation pages and there respective controllers.
 * We can inject sperate controllers on basis of different routes.
 */

angular.module('RouteController', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'views/home/home.html',
    controller  : 'HomeCtrl'
  })

  .when('/blog', {
    templateUrl : 'views/blog/blog.html',
    controller  : 'BlogCtrl'
  })

  .when('/about', {
    templateUrl : 'views/about/about.html',
    controller  : 'AboutCtrl'
  })

  .otherwise({redirectTo: '/'});
});