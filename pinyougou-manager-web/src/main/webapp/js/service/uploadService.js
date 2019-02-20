app.service("uploadService",function ($http) {
    this.uploadPic=function () {
        // alert("测试点2");
        var formData= new FormData();
        formData.append("file",file.files[0]);
        return $http({
            method:'POST',
            url:"../uploadFile.do",
            data:formData,
            headers:{'content-Type':undefined},
            transformRequest:angular.identity
        });
    }
});
