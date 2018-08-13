//该js主要用于定义控制器
angular.module("ctrls",[])
//创建导航栏的控制器,模拟导航栏数据,绑定传递过去
.controller("navs",["$scope",function($scope){
  $scope.navs=[
    {link:"#/index",icon:"icon-home",text:"今日一刻"},
    {link:"#/older",icon:"icon-file-empty",text:"往期内容"},
    {link:"#/author",icon:"icon-pencil",text:"热门作者"},
    {link:"#/category",icon:"icon-menu",text:"栏目浏览"},
    {link:"#/favourite",icon:"icon-heart",text:"我的喜欢"},
    {link:"#/settings",icon:"icon-cog",text:"设置"}
  ]
}])
//创建index控制器
.controller("index",["$scope","$rootScope",function($scope,$rootScope){
  //模拟数据
  $scope.msg="今日一刻index的数据";
  //绑定 num,判定被点击标题被选中的状态
  $rootScope.num=0;
}])

//创建older控制器
.controller("older",["$scope","$rootScope",function($scope,$rootScope){
 $scope.msg="往期内容 older 的数据";
 $rootScope.num=1;
}])

//创建author 控制器
.controller("author",["$scope","$rootScope",function($scope,$rootScope){
  $scope.msg="热门作者author的数据";
  $rootScope.num=2;
}])
.controller("category",["$scope","$rootScope",function($scope,$rootScope){
  $scope.msg="栏目浏览category的数据";
  $rootScope.num=3;
}])

.controller("favourite",["$scope","$rootScope",function($scope,$rootScope){
  $scope.msg="我的喜欢favourite的数据";
  $rootScope.num=4;
}])

.controller("settings",["$scope","$rootScope",function($scope,$rootScope){
  $scope.msg="设置settings的数据";
  $rootScope.num=5;
}])

