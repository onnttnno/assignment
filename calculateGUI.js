var app=angular.module('calculated',[])
.controller('calculateionController',function($scope){

  $scope.number1=0;
  $scope.number2=0;
  $scope.Result=0;
  var Result = 0;
  $scope.operates = function(which){

    switch(which){

      // Error Dialog
      case '+':
        $scope.Result = $scope.number1+$scope.number2;
        $scope.number1=0;
        $scope.number2=0;
        break;

      // Wait / Progress Dialog
      case '-':
        $scope.Result = $scope.number1-$scope.number2;
        $scope.number1=0;
        $scope.number2=0;

        break;

      // Notify Dialog
      case '*':
        $scope.Result = $scope.number1*$scope.number2;
        $scope.number1=0;
        $scope.number2=0;
        break;

      // Confirm Dialog
      case '/':
        if(number2 == 0){
          $scope.Result = "error becuz input2 is equal 0"
          $scope.number1=0;
          $scope.number2=0;
        }
        else{
          $scope.Result = $scope.number1/$scope.number2;
          $scope.number1=0;
          $scope.number2=0;
        }
        break;


    }; // end switch
    $scope.Result=Result;
  }; // end launch
