 function $(id){
    return document.getElementById(id);
  };


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
		$("aside").style.display="block";
		$("aside").style.position="fixed";

	}else if(gun<=0){
		//设置菜单回到原位置
		//$("nav").style.display="none";
		$("nav").style.position="absolute";
		$("nav").style.top=72+"px";
		$("nan1").style.top=50+"px";
		$("shopping").style.display="none";
		$("connect").style.display="block";
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
		
	
//分类导航点击

$("nx1").onclick=function(){
	$("yincang").style.display="block";
	$("nx2").style.display="block";
	$("nx1").style.display="none";
	}
$("nx2").onclick=function(){
	$("yincang").style.display="none";
	$("nx2").style.display="none";
	$("nx1").style.display="block";
	}
	
	
//排序点击

	$("d1").onclick=function(){
		$("y1").style.display="block";
		$("y2").style.display="block";
		$("d1").style.display="none";
		$("d2").style.display=" block";
		}
	$("y").onclick=function(){
		$("y1").style.display="block";
		$("y2").style.display="block";
		$("d1").style.display="none";
		$("d2").style.display=" block";
		$("y1").onclick=function(){
			$("y").innerHTML=$("y1").innerHTML;
			$("y1").style.display="none";
			$("y2").style.display="none";
			$("d1").style.display="block";
			$("d2").style.display=" none";		
		}
		$("y2").onclick=function(){
			$("y").innerHTML=$("y2").innerHTML;
			$("y1").style.display="none";
			$("y2").style.display="none";
			$("d1").style.display="block";
			$("d2").style.display=" none";		
		}
	}
	$("d2").onclick=function(){
		$("y1").style.display="none";
		$("y2").style.display="none";
		$("d1").style.display="block";
		$("d2").style.display=" none";
		}

	





	