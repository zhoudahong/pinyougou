//服务层
app.service("loginService",function ($http) {
    this.showname=function () {
        return $http.get("../login/name.do");
    }
});