
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
	
	$("name1").onblur=function(){
		var name1=document.getElementById("name1").value;			
			if(!(/^[a-zA-Z_]\d|\w{5,14}$/).test(name1)){ 
				alert("请输入正确的用户名")
			}
		
	}
		$("password1").onblur=function(){
		var name2=document.getElementById("password1").value;			
			if(!(/[a-zA-Z_]\d|\w{6,14}$/).test(name2)){ 
				$("span").innerHTML="请输入正确的密码";			
			} else{
				$("span").innerHTML="";	
			}
			
	}
		$("password2").onblur=function(){
		var name3=document.getElementById("password2").value;
		var name2=document.getElementById("password1").value;			
			if(name3!=name2){
				$("span2").innerHTML="请再次确认密码是否一致";	
			}else{
				$("span2").innerHTML="";
			}			
	}


	//验证码
	window.onload=function(){		
		changeyzm();		
	}
	$("text").onblur=function(){
			if($("text").value==$("btn1").value){
				$("photo").innerHTML="√";
			}else{
				$("photo").innerHTML="请输入正确的图形验证码";
			}
	}
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
		document.getElementById("btn1").value=str;	
		}
//提交时的验证	

$("submit").onclick=function(){
	
	if($("phone").value.length<=0 && $("name1").value.length<=0 && $("password1").value.length<=0 && ($("password2").value!=$("password1").value) && (($("text").value)!=($("btn1").value))){		
		$("showmeg").innerHTML="请确认信息是否完善";
	}else{
		if(!((/^1[34578]\d{9}$/).test($("phone").value))){
			$("phone1").innerHTML="请输入正确的手机号";
			$("phone2").innerHTML="";
		}else if(!((/^[a-zA-Z_]\d|\w{5,14}$/).test($("name1").value))){
			$("phone2").style.display="block";
			$("phone1").innerHTML="";
			alert("请输入正确的用户名")	
		}else if(!((/[a-zA-Z_]\d|\w{6,14}$/).test($("password1").value))){
			$("span").innerHTML="请输入正确的密码";							
		}else if(($("password2").value)!=($("password1").value)){
			$("span").innerHTML="√";	
			$("span2").innerHTML="请再次确认密码是否一致";	
			
		}else if($("text").value!=$("btn1").value){
			$("span2").innerHTML="√";
			$("photo").innerHTML="请输入正确的图形验证码";						
		}else{
			$("photo").innerHTML="√";
				jQuery.ajax({
				url:"../php/zhuce.php",
				async:true,
				data:"userName="+jQuery('#name1').val()+"&userPass="+jQuery("#password").val()+"&userPhone ="+ jQuery("#phone").val(),
				type:"post",                                                                       
				success:function(data){
					console.log(data)
					if(data=="1"){
						//保存cookie
						saveCookie("userName",jQuery("#name1").val(),7);
						saveCookie("userPass",jQuery("#password").val(),7);
						$("warn1").innerHTML = "";
						$("showmeg").innerHTML="";
						location.href="denglu.html";											
					}else{
						$("warn1").innerHTML = "亲，请检查所写信息是否正确！";
						$("showmeg").innerHTML="";
					}
				}		
			})

		}
			
	}
}						
//滚动条
//localhost.href="denglu.html";
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



//jQuery.ajax({
//			url:"login.php",
//			async:true,
//			data:"userName="+jQuery('#user').val()+"&userPass="+jQuery("#psw").val(),
//			type:"post",
//			success:function(data){
//				console.log(data)
//				if(data=="1"){
//					//保存cookie
//					saveCookie("userName",jQuery("#user").val(),7);
//					saveCookie("userPass",jQuery("#psw").val(),7);
//					location.href="index.html";
//				}else{
//					$("warn1").innerHTML = "亲，用户名或者密码错误，登录失败，请想好再输！";
//				}
//			}		
//		});	
