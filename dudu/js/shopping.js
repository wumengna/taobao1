
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
		//alert(data)
		for(var i in obj){			
			let goodsPrice=obj[i].goodsPrice;
			let goodsImg=obj[i].goodsImg;
			let goodsDesc=obj[i].goodsDesc;
			
			let beiyong9=obj[i].beiyong9;
			let beiyong10=obj[i].beiyong10;
			let goodsName=obj[i].goodsName;			
			let beiyong1=obj[i].beiyong1;
			let beiyong2=obj[i].beiyong2;
			let evlPrice="￥"+obj[i].goodsPrice*obj[i].goodsCount;
			let goodsCount=obj[i].goodsCount;
			let goodsZongjia="￥"+obj[i].goodsPrice*obj[i].goodsCount;
			//console.log(beiyong2)
			let str="<ul class='sh1' ord='"+obj[i].goodsId+"'><li><input type='checkbox' class='check1'/></li><li><dl><dt><img src='"+goodsImg+"' class='imgs'/></dt><dd><h4 class='h44'><a href='#'>"+goodsDesc+"</a></h4><p><span>颜色：<img src='"+beiyong2+"' class='span1'></span><span class='span2'>尺码：均码</span></p><h3><img src='../imgs/gw2.png'/>品牌商发货 </h3></dd></dl></li><li class='jiage'>￥"+goodsPrice+".00</li><li class='jiajian'><span class='add' id='add'>-</span><b id='li4' class='li4'>"+goodsCount+"</b><span class='minus' id='minu'>+</span></li><li><span><i class='evlPrice'> "+evlPrice+".00</i></span></li><li id='shanchu' class='shanchu'><a href='#'><img src='"+beiyong10+"'/></a></li></ul>";				
			jQuery(".jiesuan").append(str);			
		}
		//数量加减
			
			jQuery(function() {
				totl();
				adddel();
			})
			function totl(){
				var sum=0;				
				jQuery(".evlPrice").each(function(){					
					sum+=parseFloat(jQuery(this).html().split("￥")[1]);
					jQuery("#zongjiage").text("￥"+sum+".00");					
				})					
			}
			function adddel(){
				var jians=document.getElementsByClassName("add");
				var jias=document.getElementsByClassName("minus")
				//减
				for(var j in jians){
					jians[j].onclick=function(){				
					let count=jQuery(this).next();
					//alert(count)
					let num=count.html();
					//alert(num)
					num-=1;				
					if(num<=1){
						num=1;
					}
						count.html(num);
						evlPrice=parseFloat(num)*parseFloat(jQuery(this).parent().prev().html().split("￥")[1]);
						jQuery(this).parent().next().text("￥"+Math.round(evlPrice)+".00");					
					}
					totl();
				}
				//加
				for(var j in jias){
					jias[j].onclick=function(){
					let count=jQuery(this).prev();
					let num=parseInt(count.html());
					let evlPrice=0;
						num+=1;						
						count.html(num)
						evlPrice=num*parseFloat(jQuery(this).parent().prev().html().split("￥")[1]);
	//					alert(evlPrice)
						jQuery(this).parent().next().text("￥"+Math.round(evlPrice)+".00");						
					}	
					totl()
				}
				//数量加减结束
			}
	
			//删除购物车商品
		jQuery(".sh1").delegate(".shanchu", "click", function(){ 
			console.log(this)
			var that = this;
			var ids=jQuery(this).parent().attr("ord");
			jQuery.get("../php/deleteGoods.php", { "vipName": vipName, "goodsId": ids },function(data){
					console.log(data);
				if(data=="1"){
					location.reload();
		    		jQuery(that).parents(".sh1").remove();
		    		console.log("删除成功")
				}else{
					console.log("删除失败")
				}		    		
			});		
		});
	//删除结束
	
	//改变商品数量
	//加
	jQuery(".sh1").on("click",".minus",function(){
		var counts=jQuery(this).parent().find("#li4").html();
		//console.log(counts)
		var goodsId=jQuery(this).parent().parent().attr("ord")
		//console.log(goodsId)
		
		jQuery.get("../php/updateGoodsCount.php", { "vipName": vipName, "goodsId": goodsId,"goodsCount" :counts},
			function(data){
			//console.log(data);
//			jQuery.get("../php/updateGoodsCount.php", { "vipName": vipName, "goodsId": goodsId,"goodsCount" :counts},
			
			})
						
		})
	
	//减
		jQuery(".sh1").on("click",".add",function(){
		var counts=jQuery(this).parent().find("#li4").html();
		//console.log(counts)
		var goodsId=jQuery(this).parent().parent().attr("ord")
		//console.log(goodsId)
		var sum1=0;
		jQuery.get("../php/updateGoodsCount.php", { "vipName": vipName, "goodsId": goodsId,"goodsCount" :counts},
			function(data){
			//console.log(data)					
			})							
		})
	//修改商品结束
	
	//全选
		jQuery("#all").click(function(){
			var sum=0;		
			jQuery(".sh1 :checkbox").check(this.checked);	
		})
	//全选结束
	}
});	
						

