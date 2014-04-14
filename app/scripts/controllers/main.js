'use strict';

angular.module('inmobiliariaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.propertyImages = [
      'http://lorempixel.com/700/300/city/1',
      'http://lorempixel.com/700/300/city/2',
      'http://lorempixel.com/700/300/city/3',
      'http://lorempixel.com/700/300/city/4',
      'http://lorempixel.com/700/300/city/5',
      'http://lorempixel.com/700/300/city/6'
    ];
  });
