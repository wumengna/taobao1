
//功能：正则验证

	$("phone").onblur=function(){
		var phone=document.getElementById("phone").value;			
			if(!(/^1[34578]\d{9}$/).test(phone)){ 
				$("phone1").innerHTML="请输入正确的手机号";
				$("phone2").innerHTML="";
	
			}else{  
				$("phone2").style.display="block";
				$("phone1").innerHTML="";
			}  
	}
	window.onload=function(){
		changeyzm();
	}
	$("text").onblur=function(){
			if($("text").value==$("btn1").innerHTML){
				$("photo").innerHTML="√";
			}else{
				$("photo").innerHTML="请输入正确的图形验证码";
			}
	}

//验证码
function test1(){
		changeyzm();
	}
	function changeyzm(){
		var i=0;
		var str="";
		while(i<4){
			var num1=parseInt(Math.random()*123);
			if((num1>=48 && num1<=57)||(num1>=65 && num1<=90)||(num1>=97 && num1<=122)){
				str+=String.fromCharCode(num1);
				i++;
			}
		}
		str=str.toLowerCase(str);
		document.getElementById("btn1").innerHTML=str;	
	}


//滚动条

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
	}else if(gun<=0){
		//设置菜单回到原位置
		//$("nav").style.display="none";
		$("nav").style.position="absolute";
		$("nav").style.top=72+"px";
		$("nan1").style.top=50+"px";
		$("shopping").style.display="none";
		$("connect").style.display="block";
	}
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
		
