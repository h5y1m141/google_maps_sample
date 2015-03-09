'use strict';

var app = angular.module("myApp", ['uiGmapgoogle-maps']);

app.controller('MainCtrl', function ($scope) {
  $scope.map = {
    center: {
      latitude: 35.681382,
      longitude: 139.766084
    }, zoom: 15 };
  $scope.marker = {
    id: 0,
    coords: {
      latitude: 35.681382,
      longitude: 139.766084
    },
    options: { draggable: true },
    events: {
      click:function(marker, eventName, args){
        var lat,lng,infobox;
        lat = marker.getPosition().lat();
        lng = marker.getPosition().lng();
        console.log(lat);
        console.log(lng);

      }
    }
  };
  $scope.bounds =  {
    sw: {
      latitude: 35.681382,
      longitude: 139.766074
    },
    ne: {
      latitude: 35.681382,
      longitude: 139.766074
    }
  };

  $scope.$watchCollection("marker.coords", function (newVal, oldVal) {
    if (_.isEqual(newVal, oldVal))
      return;
    console.log(newVal);
    $scope.coordsUpdates++;
  });
});
