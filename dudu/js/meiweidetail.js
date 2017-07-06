
 function $(id){
    return document.getElementById(id);
  };


window.onscroll=function(){
	//取得滚动条滚动距离（页面滚动距离）
	var gun=document.documentElement.scrollTop+document.body.scrollTop;
	//如果滚动距离大于菜单位置
	if(gun>=800){
		//设置菜单定位到顶部
		$("goods").style.position="fixed";
		$("goods").style.top=0;
		$("aside").style.display="block";
		$("aside").style.position="fixed";

	}else if(gun<=0){
		//设置菜单回到原位置
		//$("nav").style.display="none";
		$("goods").style.position="absolute";
		$("goods").style.top=800+"px";
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
		
//详情页放大镜效果
    var date=[
        {"url1":"../imgs/mx11.jpg","url2":"../imgs/mx11.jpg"},
        {"url1":"../imgs/mx12.jpg","url2":"../imgs/mx12.jpg"},
        {"url1":"../imgs/mx13.jpg","url2":"../imgs/mx13.jpg"},
        {"url1":"../imgs/mx14.jpg","url2":"../imgs/mx14.jpg"},
        {"url1":"../imgs/mx15.jpg","url2":"../imgs/mx15.jpg"},
    ];
//    获取各个元素
    var ObjCon=document.getElementById("contain");//外围盒子
    var ObjMainBox=document.getElementById("mainBox");//内部盒子
    var ObjMainImg=ObjMainBox.getElementsByTagName("img")[0];
    var ObjBigBox=document.getElementById("bigBox");//显示被放大的图片
    var ObjBigImg=ObjBigBox.getElementsByTagName("img")[0];
    var ObjSmallBox=document.getElementById("smallBox");//所点击的图片
    var Lis=ObjSmallBox.getElementsByTagName("li");
    var ObjMark=document.getElementById("mark");//显示当前图片
    var ObjFloatbox=document.getElementById("floatBox");//放大镜

//ShowDetails函数的作用主要是放大镜效果

    function ShowDetails(){
//        鼠标进入ObjMark后 ObjFloatbox和ObjBigBox显示
        ObjMark.onmouseover=function(){
            ObjFloatbox.style.display="block";
            ObjBigBox.style.display="block";
        };
//        鼠标离开ObjMark后 ObjFloatbox和ObjBigBox隐藏
        ObjMark.onmouseout=function(){
            ObjFloatbox.style.display="none";
            ObjBigBox.style.display="none";
        };
//        鼠标在ObjMark上运动
        ObjMark.onmousemove=function(event){

            var event=event||window.event;//兼容ie
			var ev = document.documentElement.scrollTop || document.body.scrollTop ;

//valueX和valueY是鼠标移动后ObjFloatbox层的left和top值
//ObjMainBox.offsetLeft-ObjCon.offsetLeft是获取的ObjFloatbox距离浏览器可是区域最左边的距离
//ObjMainBox.offsetTop-ObjCon.offsetTop是获取的ObjFloatbox距离浏览器可是区域最左边的距离
//ObjFloatbox.offsetWidth/2和ObjFloatbox.offsetHeight/2的目的是保持进入ObjMark区域后 鼠标始终保持在该层正中间

           //鼠标的位置
		    var valueX=event.clientX-ObjMainBox.offsetLeft-ObjCon.offsetLeft-ObjFloatbox.offsetWidth/2;    
            var valueY=event.clientY+ev-ObjMainBox.offsetTop-ObjCon.offsetTop-ObjFloatbox.offsetHeight/2;
//边框检测
//             ObjFloatbox可以设的最大left值是ObjMainBox的宽度减去ObjFloatbox的宽度
//             ObjFloatbox可以设的最大top值是ObjMainBox的高度减去ObjFloatbox的高度
            if(valueX<0){
                valueX=0
            } else if(valueX>ObjMainBox.offsetWidth-ObjFloatbox.offsetWidth){
                valueX=ObjMainBox.offsetWidth-ObjFloatbox.offsetWidth
            }
            if(valueY<0){
                valueY=0
            } else if(valueY>ObjMainBox.offsetHeight-ObjFloatbox.offsetHeight){
                valueY=ObjMainBox.offsetHeight-ObjFloatbox.offsetHeight
            }
//给ObjFloatbox设置left和top值
            ObjFloatbox.style.left=valueX+"px";
            ObjFloatbox.style.top=valueY+"px";
//因为放大镜效果是对原图的高和宽分别进行相应的放大所以移ObjFloatbox移动，ObjBigImg也会按照高的比例和宽的比例进行移动

//            宽的比例是等于ObjBigImg和ObjMainBox宽度的比例或者是ObjFloatbox和ObjBigBox的比例；
//            高的比例计算方法和宽的比例计算方法相似

            var percentX=ObjBigImg.offsetWidth/ObjMainBox.offsetWidth;
            var percentY=ObjBigImg.offsetHeight/ObjMainBox.offsetHeight;

            ObjBigImg.style.left=-percentX*valueX+"px";
            ObjBigImg.style.top=-percentY*valueY+"px";
        }
    }
//    ChangeImg函数的作用是在鼠标进入四个小图标上时，将放大镜效果上的图片分别替换为与其本身对呀的中等图片和大图片；
    function ChangeImg(){
        for(var i=0;i<Lis.length;i++){
            Lis[i].id=i;
            Lis[i].onclick=function(){
                ObjMainImg.src=date[this.id].url1;
                ObjBigImg.src=date[this.id].url2;
            }
        }
    }
//    常用的将函数追加到window，onload中；
    function addLoadEvent(func){
        var oldonload=window.onload;
        if(typeof window.onload!="function"){
            window.onload=func;
        }else{
            window.onload=function(){
                oldonload();
                func();
            }
        }
    }
    addLoadEvent(ShowDetails);
    addLoadEvent(ChangeImg);



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


 //放大镜
 //定义全局变量
//原始图片的宽度


    var date=[
        {"url1":"../imgs/mx11.jpg","url2":"../imgs/mx11.jpg"},
        {"url1":"../imgs/mx12.jpg","url2":"../imgs/mx12.jpg"},
        {"url1":"../imgs/mx13.jpg","url2":"../imgs/mx13.jpg"},
        {"url1":"../imgs/mx14.jpg","url2":"../imgs/mx14.jpg"},
        {"url1":"../imgs/mx15.jpg","url2":"../imgs/mx15.jpg"},
    ];
//    获取各个元素
    var ObjCon=document.getElementById("contain");//外围盒子
    var ObjMainBox=document.getElementById("mainBox");//内部盒子
    var ObjMainImg=ObjMainBox.getElementsByTagName("img")[0];
    var ObjBigBox=document.getElementById("bigBox");//显示被放大的图片
    var ObjBigImg=ObjBigBox.getElementsByTagName("img")[0];
    var ObjSmallBox=document.getElementById("smallBox");//所点击的图片
    var Lis=ObjSmallBox.getElementsByTagName("li");
    var ObjMark=document.getElementById("mark");//显示当前图片
    var ObjFloatbox=document.getElementById("floatBox");//放大镜

//ShowDetails函数的作用主要是放大镜效果

    function ShowDetails(){
//        鼠标进入ObjMark后 ObjFloatbox和ObjBigBox显示
        ObjMark.onmouseover=function(){
            ObjFloatbox.style.display="block";
            ObjBigBox.style.display="block";
        };
//        鼠标离开ObjMark后 ObjFloatbox和ObjBigBox隐藏
        ObjMark.onmouseout=function(){
            ObjFloatbox.style.display="none";
            ObjBigBox.style.display="none";
        };
//        鼠标在ObjMark上运动
        ObjMark.onmousemove=function(event){

            var event=event||window.event;//兼容ie
			var ev = document.documentElement.scrollTop || document.body.scrollTop ;

//valueX和valueY是鼠标移动后ObjFloatbox层的left和top值
//ObjMainBox.offsetLeft-ObjCon.offsetLeft是获取的ObjFloatbox距离浏览器可是区域最左边的距离
//ObjMainBox.offsetTop-ObjCon.offsetTop是获取的ObjFloatbox距离浏览器可是区域最左边的距离
//ObjFloatbox.offsetWidth/2和ObjFloatbox.offsetHeight/2的目的是保持进入ObjMark区域后 鼠标始终保持在该层正中间

           //鼠标的位置
		    var valueX=event.clientX-ObjMainBox.offsetLeft-ObjCon.offsetLeft-ObjFloatbox.offsetWidth/2;    
            var valueY=event.clientY+ev-ObjMainBox.offsetTop-ObjCon.offsetTop-ObjFloatbox.offsetHeight/2;
//边框检测
//             ObjFloatbox可以设的最大left值是ObjMainBox的宽度减去ObjFloatbox的宽度
//             ObjFloatbox可以设的最大top值是ObjMainBox的高度减去ObjFloatbox的高度
            if(valueX<0){
                valueX=0
            } else if(valueX>ObjMainBox.offsetWidth-ObjFloatbox.offsetWidth){
                valueX=ObjMainBox.offsetWidth-ObjFloatbox.offsetWidth
            }
            if(valueY<0){
                valueY=0
            } else if(valueY>ObjMainBox.offsetHeight-ObjFloatbox.offsetHeight){
                valueY=ObjMainBox.offsetHeight-ObjFloatbox.offsetHeight
            }
//给ObjFloatbox设置left和top值
            ObjFloatbox.style.left=valueX+"px";
            ObjFloatbox.style.top=valueY+"px";
//因为放大镜效果是对原图的高和宽分别进行相应的放大所以移ObjFloatbox移动，ObjBigImg也会按照高的比例和宽的比例进行移动

//            宽的比例是等于ObjBigImg和ObjMainBox宽度的比例或者是ObjFloatbox和ObjBigBox的比例；
//            高的比例计算方法和宽的比例计算方法相似

            var percentX=ObjBigImg.offsetWidth/ObjMainBox.offsetWidth;
            var percentY=ObjBigImg.offsetHeight/ObjMainBox.offsetHeight;

            ObjBigImg.style.left=-percentX*valueX+"px";
            ObjBigImg.style.top=-percentY*valueY+"px";
        }
    }
//    ChangeImg函数的作用是在鼠标进入四个小图标上时，将放大镜效果上的图片分别替换为与其本身对呀的中等图片和大图片；
    function ChangeImg(){
        for(var i=0;i<Lis.length;i++){
            Lis[i].id=i;
            Lis[i].onclick=function(){
                ObjMainImg.src=date[this.id].url1;
                ObjBigImg.src=date[this.id].url2;
            }
        }
    }
//    常用的将函数追加到window，onload中；
    function addLoadEvent(func){
        var oldonload=window.onload;
        if(typeof window.onload!="function"){
            window.onload=func;
        }else{
            window.onload=function(){
                oldonload();
                func();
            }
        }
    }
    addLoadEvent(ShowDetails);
    addLoadEvent(ChangeImg);

//数量加减
	$("a7").onclick=function(){
			var x=1;
			$("b").innerHTML=parseInt($("b").innerHTML)+x;
			x++;
	
		}
	$("a6").onclick=function(){
			var x=1;
			$("b").innerHTML=parseInt($("b").innerHTML)-x;
			x--;
			if($("b").innerHTML<=1){
				$("b").innerHTML=1;
			}
	}



