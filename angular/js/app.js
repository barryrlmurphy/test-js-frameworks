// 'use strict';

// // Declare app level module which depends on views, and components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.version'
// ]).
// config(['$routeProvider', function($routeProvider) {
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);

/**
* Created with test-js-framework.
* User: barryrlmurphy
* Date: 2014-12-02
* Time: 09:39 AM
*/

$(document).ready(function(){
    console.log("app started")
    var app = angular.module('adSearch', []);
    
    app.controller('SearchController', function(){
        this.ads = ads;
    });
    
});


var ads = [
    {
      title: 'Ford Focus Zetac 1.4 4DR',
      published: "3 hours ago",
      price: 5950,
      county: "Wexford",
      image: "http://photos2.donedeal.ie/cars/hyundai-getz-1-1-5dr/SearchThumbLarge/35639875.jpeg"
    },
    {
      title: 'BMW 3 Series 1.6 5DR',
      published: "6 hours ago",
      price: 4950,
      county: "Waterford",
      image: "http://photos2.donedeal.ie/cars/2004-merc-c200-cdi-auto/SearchThumbLarge/32052413.jpeg"
    },
    {
      title: 'Opel Astra 1.6 Hatchback',
      published: "1 day ago",
      price: 10000,
      county: "Offaly",
      image: "http://photos2.donedeal.ie/cars/mercedes-benz-slk-class-slk-200-kompres/SearchThumbLarge/34230569.jpeg"
    },
    {
      title: 'VW Golf 1.4 Diesel - BARGAIN',
      published: "3 days ago",
      price: 3000,
      county: "Cork",
      image: "http://photos2.donedeal.ie/cars/mercedes-benz-slk-class-slk-200-kompres/SearchThumbLarge/34230568.jpeg"
    }
  ];
