
var chai = require('chai');

var app = angular.module('myApp', []);
app.controller('todoCtrl', function($scope) {
  //  $scope.todoList = [{todoText:'Clean House', done:false}];
    $scope.input1=0;
    $scope.input2=0;

    $scope.plus = function() {


        //$scope.todoList.push({todoText:$scope.input1+$scope.input2, done:false});
        //$scope.todoText=$scope.input1+$scope.input2;
        //$scope.todoInput1 = 0;
        //$scope.todoInput2 = 0;
        var operate = new Plus($scope.input1,$scope.input2);
        var result =operate.calculated();
        $scope.todoInput1 = 0;
        $scope.todoInput2 = 0;
        $scope.todoList.push({todoText:result, done:false});
        $scope.todoText=result;
    };

    $scope.minus = function() {
      var operate = new Minus($scope.input1,$scope.input2);
      var result =operate.calculated();
      $scope.todoInput1 = 0;
      $scope.todoInput2 = 0;
      $scope.todoList.push({todoText:result, done:false});
      $scope.todoText=result;
    };
    $scope.multi = function() {
      var operate = new Multi($scope.input1,$scope.input2);
      var result =operate.calculated();
      $scope.todoInput1 = 0;
      $scope.todoInput2 = 0;
      $scope.todoList.push({todoText:result, done:false});
      $scope.todoText=result;
    };
    $scope.divide = function() {
      var operate = new Devide($scope.input1,$scope.input2);
      var result =operate.calculated();
      $scope.todoInput1 = 0;
      $scope.todoInput2 = 0;
      $scope.todoList.push({todoText:result, done:false});
      $scope.todoText=result;
    };


});
