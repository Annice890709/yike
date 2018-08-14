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
.controller("index",["$scope","$rootScope","$http",function($scope,$rootScope,$http){
  //模拟数据
  $scope.msg="今日一刻index的数据";
  //绑定 num,判定被点击标题被选中的状态
  $rootScope.num=0;
  //向后台发送请求
  $http({
      //不能直接发送给服务器,会产生跨域问题
       //url:"https://moment.douban.com/api/stream/date/2017-5-11?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6"
       //解决方法:从后台发送请求,获取数据
       url:"./api/index.php"//因为是index.html引用的,所以路径以html文件为主
     //success方法已经被淘汰,使用then方法来替代
  }).then(function(result){
    console.log(result);
    $scope.posts=result.data.posts;/* 只想要数据中posts数组 */
  })
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

