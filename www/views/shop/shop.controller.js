(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
    $scope.shop={};

    $scope.editShop=function (titleValue,propertyValue) {
      $state.go('app.shop-edit',{
        title:titleValue,
        property:propertyValue
      });
    };

    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        name:'崔志鹏',
        ab:'',
        name1:'崔志鹏',
        phone:'13023805580',
        phone1:'10010',
        createTime:'2017-9-28 15:30:00',
        email:'2890829756@qq.com',
        hylx:'111'
      });
    });
  }])
})();
