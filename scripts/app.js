//创建app应用模块

    var yike=angular.module("yike",[]);
   /* 
   调用run方法
   该方法的作用是,当模块创建好就可以直接执行
   */
  //该模块依赖的是根作用域,子作用域通常是与控制器绑定的
  yike.run(["$rootScope",function($rootScope){
   //给头部的a标签绑定toogle方法,点击a  三条横杠 标签,整个面板向右滑动,或者向左滑动
   $rootScope.left=false;//初始值为false,表示不移动
   $rootScope.toggle=function(){
     //1.
   /*   if($rootScope.left==true){//显示
       $rootScope.left=false;   //设为隐藏
     }else{
       $rootScope.left=true;    //设为显示
     } */
     //alert("toggle");
     //2.
     /*  if(!$rootScope.left){//如果不存在left的值为false,不显示的时候
        $rootScope.left=true;   //则把把left的值设为true,显示
      }else{
        $rootScope.left=false;  //否则显示的时候,设为不显示,切换显示和隐藏的效果
      } */
      //如果不存在left的值为false,不显示的时候,则把把left的值设为true,显示,否则显示的时候,设为不显示,切换显示和隐藏的效果
     $rootScope.left=!$rootScope.left;
     //对导航栏中所有的dd的移动和隐藏
     var dd = document.querySelectorAll("dd");
     console.log(dd);
     //遍历dd,将每一个dd设置位移
     //当$rootScope.left的值为true时,需要向右移动,false时,向左移动
     if($rootScope.left){//导航栏向右显示(位移0)
      for(var i=0; i<dd.length; i++) {
        dd[i].style.transitionDuration = (i + 1) * 0.15 + 's';//让每1个dd,过渡持续0.15s
        dd[i].style.transitionProperty = 'all';//把鼠标指针放到 div 元素上，会产生带有平滑改变元素宽度的过渡效果：
        dd[i].style.transitionDelay = '0.2s';//过渡效果开始前,等待2s
        dd[i].style.transitionTimingFunction = 'ease-out';//转场效果以同样的速度从开始到结束;规定以慢速结束的过渡效果
        dd[i].style.transform = 'translate(0)';//旋转的 位移为0
      }
     }else{//导航栏向左隐藏(位移量-100%)
      for(var i=dd.length - 1; i>=0; i--) {
        dd[i].style.transitionDuration = (dd.length - i + 1) * 0.05 + 's';
        dd[i].style.transitionProperty = 'all';
        dd[i].style.transitionDelay = '';
        dd[i].style.transitionTimingFunction = 'ease-out';
        dd[i].style.transform = 'translate(-100%)';
      }
     }
   }
  }]);
   