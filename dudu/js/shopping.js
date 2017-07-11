
//鼠标以上显示
//美味
 function $(id){
    return document.getElementById(id);
  }
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
		$("nav").style.position="relative";	
		$("shopping").style.display="none";
		$("connect").style.display="block";
	}
}

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


$("shop1").onclick=function(){
	$("shop2").style.display="block";
	$("shop1").style.display="none";
	$("jiesuan").style.backgroundColor="#E74C3C";
	
}
$("shop2").onclick=function(){
	$("shop2").style.display="none";
	$("shop1").style.display="block";
	$("jiesuan").style.backgroundColor="#bebdbb";
	
}
//轮播图

       var Li =document.getElementsByClassName("sections")[0].offsetWidth;//获取单个图片li的宽    
       var obannerimg = document.getElementsByClassName("sections");//获取
		var cbannerimg = obannerimg[0].cloneNode(true)//克隆
		$("sectionss").appendChild(cbannerimg);
		$("sectionss").style.width = Li*obannerimg.length+"px";
		
     /* 右按钮*/
      var num = 0;
       $("right").onclick = function(){
       	   num++;
       	   if(num>obannerimg.length-1){
       	   	num=1; 
       	   	$("sectionss").style.left = 0+"px";
       	   }  
       	   
       	 	move($("sectionss"),"left",-Li*num);       	 
       }   
       
       
         /* 左按钮*/
       $("left").onclick = function(){
       	   num--;
       	  
       	   if(num<0){
       	   	num=obannerimg.length-2;
       	   	$("sectionss").style.left = -Li*(obannerimg.length-1)+"px";
       	   }
       	    console.log(num)
       	   move($("sectionss"),"left",-Li*num);
       }
       
    
    /* 左右按钮的显示与隐藏*/
       $("section").onmouseover= function(){
       	  $("left").style.display = "block";
       	  $("right").style.display = "block";
     
       	};
       $("section").onmouseout = function(){
       	 $("left").style.display = "none";
       	 $("right").style.display = "none";
       };

//添加购物车
var vipName=getCookie("userName");

jQuery.ajax({	
		type:"get",
		data:{'vipName':vipName},
		url:"../php/getShoppingCart.php",
		async:true,
		success:function(data){
			let obj=eval(data);
			//将返回的内容解析，将内容插入页面
			
			jQuery(".imgs").attr({src:obj[0].goodsImg});
			jQuery(".h44").html(obj[0].goodsDesc);//说明		$("#li4").val(obj[0].goodsCount);//数量
			jQuery(".jiage").html("￥"+obj[0].goodsPrice);//价格
			jQuery(".evlPrice").html("￥"+obj[0].goodsPrice*obj[0].goodsCount)//总价格
			jQuery("#li4").html(obj[0].goodsCount);
			jQuery("#zongjiage").html("￥"+obj[0].goodsPrice*obj[0].goodsCount);//所有商品的总价格				
		}
	});












//数量增加减少
$("minus").onclick=function(){
	var x=1;
	$("li4").innerHTML=parseInt($("li4").innerHTML)+x;
	x++;
}
	$("add").onclick=function(){
		var x=1;
		$("li4").innerHTML=parseInt($("li4").innerHTML)-x;
		x--;
		if($("li4").innerHTML<=1){
			$("li4").innerHTML=1;
		}
	}	

