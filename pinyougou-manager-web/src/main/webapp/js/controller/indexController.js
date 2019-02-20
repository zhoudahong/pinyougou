
app.controller("indexController",function ($scope,loginService) {

    $scope.showLoginName=function () {
        loginService.showname().success(
            function (response) {
                $scope.loginName=response.loginName;
            });
    }


});