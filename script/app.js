/**
 * This file is use to creating the angular app as well as registering and injecting the other modules in given app
 * 
 */
 angular.module('myTodoApp', [
  'TODOService',
  'EscapeDirective',
  'FocusDirective',
  'RouteController',
  'HomeController',
  'BlogController',
  'AboutController',
  'TodoController'

  ]);