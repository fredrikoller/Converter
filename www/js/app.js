// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('converter', ['ionic', 'ngRoute'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

//Kan behöva tas bort.
app.config(function($routeProvider){
  $routeProvider
  .when("/",{
    templateUrl: "index.html"
  })
  .when("/units", {
    templateUrl: "units.html"
  })
  .when("/translate", {
    templateUrl: "translate.html"
  })
  .when("/currency", {
    templateUrl: "currency.html"
  });
});

angular.module('converter.controllers',[]);

app.controller('MenuController', function($scope){
  $scope.items =
  [
      {
        title: 'Convert units'
      },
      {
        title: 'Translate'
      },
      {
        title: 'Currency converter'
      }
  ];
});

app.controller('UnitsController', function($scope){
  $scope.unitItems =
  [
    {
      title: 'Liquid'
    },
    {
      title: 'Weight'
    },
    {
      title: 'Distance'
    },
    {
      title: 'length'
    }
  ];
});
