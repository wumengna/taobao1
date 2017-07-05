
//顶部漂浮就是设置漂浮DIV的top值为滚动条的位置
window.onscroll=function(){
	//取得滚动条滚动距离（页面滚动距离）
	var gun=document.documentElement.scrollTop+document.body.scrollTop;
	//如果滚动距离大于菜单位置
	if(gun>=10){
		//设置菜单定位到顶部
		$("nav").style.position="fixed";
		$("nav").style.top=0;
		$("shopping").style.display="block";
		$("connect").style.display="none";
	}else if(gun<=0){
		//设置菜单回到原位置
		//$("nav").style.display="none";
		$("nav").style.position="absolute";
		$("nav").style.top=72+"px";
		$("shopping").style.display="none";
		$("connect").style.display="block";
	}
	if(gun>100){
		$("aside").style.display="block";
		$("aside").style.position="fixed";
	}else{
		$("aside").style.display="none";

	}	
}
//返回顶部
	$("aside-x").onclick=function(){
		//设置页面滚动距离为0
		 document.documentElement.scrollTop = document.body.scrollTop =0;
	}
//点击侧边栏弹出聊天窗口
	$("aside-s").onclick=function(){
		$("chat").style.display="block";
	}
//点击联系客服弹出聊天窗口
	$("connect").onclick=function(){
		$("chat").style.display="block";
	}
//点击减号关闭聊天窗口
	$("span1").onclick=function(){
		$("chat").style.display="none";
	}

//鼠标以上显示
//美味
	$("meiwei").onmouseover=function(){
		$("hide1").style.display="block";
		$("hide2").style.display="none";
		$("hide3").style.display="none";
		$("hide4").style.display="none";
		$("hide5").style.display="none";
		}
	$("hide1").onmouseout=function(){
		$("hide1").style.display="none";
		}
//家纺		
		
	$("jiafang").onmouseover=function(){
		$("hide2").style.display="block";
		$("hide1").style.display="none";
		$("hide3").style.display="none";
		$("hide4").style.display="none";
		$("hide5").style.display="none";
		}
	$("hide2").onmouseout=function(){
		$("hide2").style.display="none";
		}
//生活
	$("life").onmouseover=function(){
		$("hide3").style.display="block";
		$("hide1").style.display="none";
		$("hide2").style.display="none";
		$("hide4").style.display="none";
		$("hide5").style.display="none";

		}
	$("hide3").onmouseout=function(){
		$("hide3").style.display="none";
		}
		
//健康
	$("jiankang").onmouseover=function(){
		$("hide4").style.display="block";
		$("hide1").style.display="none";
		$("hide2").style.display="none";
		$("hide3").style.display="none";
		$("hide5").style.display="none";
		}
	$("hide4").onmouseout=function(){
		$("hide4").style.display="none";
		}
		
//文具
	$("wenju").onmouseover=function(){
		$("hide5").style.display="block";
		$("hide1").style.display="none";
		$("hide2").style.display="none";
		$("hide3").style.display="none";
		$("hide4").style.display="none";
	
		}
	$("hide5").onmouseout=function(){
		$("hide5").style.display="none";
		}
		
	



//鼠标拖动；
       var dragging = false;     
       var test;     
       var mouseY;     
       var mouseX;     
       //初始化
        test = document.getElementById("chat");  
        //绑定拖拽元素   
        test.onmousedown = down;     
        //鼠标在元素内按下触发down事件
        test.onmousemove = move;  
        //鼠标在元素内移动触发move事件   
        document.onmouseup = up;  
        //鼠标松开触发up事件     
        test.style.position = "relative";     
        test.style.top = "-250px";     
        test.style.left = "-340px";     
        //定义css
       function down(event)     
       {     
        event = event || window.event;      
        dragging = true;  
        mouseX = parseInt(event.clientX);     
        mouseY = parseInt(event.clientY);     
        objY = parseInt(test.style.top);     
        objX = parseInt(test.style.left);     
       }     
       function move(event){     
        event = event || window.event;      
        if(dragging == true){     
            var x,y;     
            y = event.clientY - mouseY + objY;     
            x = event.clientX - mouseX + objX;     
            test.style.top = y + "px";     
            test.style.left = x + "px";     
        }     
       }     
       function up(){     
        dragging = false;     
       }     
	   
	   

//发送按钮事件

	$("send").onclick=function(event){
		var eve=event||window.event;	//event兼容写法
		var ev=eve.currentTarget||eve.srcElement;//取得当前事件元素的兼容写法
			$("chat1").value+="我说："+$("chat2").value+"\n";//发送消息
			//设置文本框的滚动条滚到最下方
			$("chat1").scrollTop=$("chat1").scrollHeight;
			$("chat2").scrollTop=$("chat2").scrollHeight;
	};	
		
 //首页秒杀倒计时
 function $(id){
    return document.getElementById(id);
  };
  var time1=null;
function GetRTime(){
    var EndTime= new Date('2017/08/30 00:00:00');
    var NowTime = new Date();
    var t =EndTime.getTime() - NowTime.getTime();
    var h=0;
    var m=0;
    var s=0;
    if(t>=0){
      h=Math.floor(t/1000/60/60%24);
      m=Math.floor(t/1000/60%60);
      s=Math.floor(t/1000%60);
    }

    document.getElementById("h").innerHTML = h ;
    document.getElementById("m").innerHTML = m;
    document.getElementById("s").innerHTML = s ;
  }
  time1=setInterval(GetRTime,0);
  
  
 //轮播图 
function $(id){
       	return document.getElementById(id);
       };
       
       
       var btn = document.getElementById("btn").children;//获取底部圆圈
      
       /* 右按钮*/
      var num = 0;
   
       $("right").onclick = function(){
       	     num++   
       	     if(num>= $("wrap").children.length){
       	     	num=0;
       	     }
       	     console.log(num)
       	   for (var j =0;j<  $("wrap").children.length;j++) {
       	   	 
       	   	 	 $("wrap").children[j].style.opacity =0;
     		}
       	     $("wrap").children[num].style.opacity =1;
       	     /*圆按钮*/
           for (var j =0;j<  $("wrap").children.length;j++) {
     			btn[j].className="ccc";
     			
     		}
     		btn[num].className="black";
       }
       
         /* 左按钮*/
       $("left").onclick = function(){
       	   num--;
       	  
       	  if(num<0){
       	     	num=$("wrap").children.length-1;
       	     }
       	  console.log(num)
       	   for (var j =0;j<  $("wrap").children.length;j++) {
       	   	 	
       	   	 	 $("wrap").children[j].style.opacity =0;
     		}
       	     $("wrap").children[num].style.opacity =1;
       	        /*元按钮*/
           for (var j =0;j<  $("wrap").children.length;j++) {
     			btn[j].className="ccc";
     			
     		}
     		btn[num].className="black";
       }
       
      /* 底部小圆圈鼠标移入*/
     
     for (var i in btn) {
     	btn[i].className="ccc";
     	btn[0].className="black";
     	btn[i].index = i;
     	btn[i].onmouseover = function(){
     		for (var j =0;j<  $("wrap").children.length;j++) {
     			btn[j].className="ccc";
     			 $("wrap").children[j].style.opacity =0;
     		}
     		btn[this.index].className="black";
     		console.log(this.index)
     		  $("wrap").children[this.index].style.opacity =1; 
     	}
     }
    /*让轮播图自己走，设置定时器*/
    var time = null;  
   time = setInterval($("right").onclick,3000)
    
    /* 左右按钮的显示与隐藏*/
       $("box").onmouseover= function(){
       	  $("left").style.display = "block";
       	  $("right").style.display = "block";
       	  clearInterval(time)
       	};
       $("box").onmouseout = function(){
       	  $("left").style.display = "none";
       	  $("right").style.display = "none";
       	  clearInterval(time)
        time = setInterval($("right").onclick,3000);
         console.log("鼠标移出，打开定时器,自动播放")
       };

//显示搜索框的内容
jQuery("#sousuo").click(function(){
	 jQuery("#sousuo").animate({ width: "300px",},1000);
	 
	jQuery("#s1").css({"margin-top":"8px"});
	jQuery("#yinc").show();
});
jQuery("#sousuo").focusout(function(){
	jQuery("#sousuo").animate({ width: "210px"},1000);
	jQuery("#s1").css({"margin-top":"-25px"});
	jQuery("#yinc").hide();
});
