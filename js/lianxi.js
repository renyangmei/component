var app=angular.module("myApp",[]);
    app.component("pageHeader",{
        templateUrl:"./tpl/component/pageheader.html"
    });
    app.component("pageSlide",{
        templateUrl:"./tpl/component/pageslide.html"
    });
    app.component("pageContent",{
        templateUrl:"./tpl/component/pagecontent.html",
        /*2、渲染到页面*/
        bindings:{
          data:'='
        }
    });
    app.component("pageFoot",{
        templateUrl:"./tpl/component/pagefoot.html"
    });
    app.controller("ctrl",["$scope","$http",function ($scope,$http) {
        /*1、取出数据*/
        $http({
            url:"./data/data.json"
        }).then(function (e) {
            $scope.data=e.data;
            console.log(e);
            console.log($scope.data);
            console.log(e.data);
        })
    }])
