angular.module('converter.controllers').controller('menuController', function($scope){
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

  $scope.units =
  [
    {
      title: 'Liquids'
    },
    {
      title: 'Length'
    },
    {
      title: 'Distance'
    },
    {
      title: 'Weight'
    }
  ];
});
