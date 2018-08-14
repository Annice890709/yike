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
.controller("index",["$scope","$rootScope","$http","$filter",function($scope,$rootScope,$http,$filter){
  //模拟数据
  // $scope.msg="今日一刻index的数据";
  //绑定 num,判定被点击标题被选中的状态
  $rootScope.num=0;
  $rootScope.title="今日一刻";
  //
  $rootScope.show=true;
  //获取当天的日期
   var now=new Date();
   //格式化时间2018-8.14
   now=$filter("date")(now,"yyyy-M-d");
   $scope.now=now;
  //向后台发送请求
  $http({
      //不能直接发送给服务器,会产生跨域问题
       //url:"https://moment.douban.com/api/stream/date/2017-5-11?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6"
       //解决方法:从后台发送请求,获取数据
       url:"./api/index.php",//因为是index.html引用的,所以路径以html文件为主
     //success方法已经被淘汰,使用then方法来替代
     params:{time:now}
  }).then(function(result){
    //console.log(result);
    
    $rootScope.show=false;
    $scope.posts=result.data.posts;/* 只想要数据中posts数组 */
  })
}])

//创建older控制器
.controller("older",["$scope","$rootScope","$http","$filter",function($scope,$rootScope,$http,$filter){
//  $scope.msg="往期内容 older 的数据";
 $rootScope.num=1;
 $rootScope.title="往期内容";
 $rootScope.show=true;
 var now=new Date();
 now.setDate(now.getDate()-1);/* 先获取当天的前一天时间 */
 now=$filter("date")(now,"yyyy-M-d");
 $scope.now=now;
 $http({
   url:"./api/older.php",//因为是index.html引用的,所以路径以html文件为主
 //success方法已经被淘汰,使用then方法来替代
 params:{time:now}
}).then(function(result){
//console.log(result);
$rootScope.show=false;
$scope.posts=result.data.posts;/* 只想要数据中posts数组 */
})

}])

//创建author 控制器
.controller("author",["$scope","$rootScope","$http",function($scope,$rootScope,$http){
  // $scope.msg="热门作者author的数据";
  $rootScope.num=2;
  $rootScope.title="热门作者";
  $http({
    url:"./api/author.php"/* 如果不更改时间,就不传参 */
  }).then(function(result){
    console.log(result.data);
    $rootScope.show=false;
    $scope.authors1=result.data[0].authors;/* 只想要数据中posts数组 */
    //console.log(result.data[0].authors);

  $scope.authors2=result.data[1].authors;/* 只想要数据中posts数组 */
  })
}])

//
.controller("category",["$scope","$rootScope",function($scope,$rootScope){
  // $scope.msg="栏目浏览category的数据";
  $rootScope.num=3;
  $rootScope.title="栏目浏览";
  
}])

.controller("favourite",["$scope","$rootScope",function($scope,$rootScope){
  // $scope.msg="我的喜欢favourite的数据";
  $rootScope.num=4;
  $rootScope.title="我的喜欢";
}])

.controller("settings",["$scope","$rootScope",function($scope,$rootScope){
  // $scope.msg="设置settings的数据";
  $rootScope.num=5;
  $rootScope.title="设置";
}])

