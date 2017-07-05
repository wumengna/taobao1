 
  /*function $(x){
          return document.querySelector(x);
        }
        function $s(x){
          return document.querySelectorAll(x);
        }
        var Price=0;
        var btns=$s("li [type=checkbox]");
        var btn=$("#all");
        var display=$("#allPrice");
        var adds=$s('.add');
        var minus=$s('.minus');
        var shanchu=$s("li div a");

        var length=btns.length;
        // 计算总价
        function allPrice(){
            Price=0;
            for(var i=0;i<length;i++){
                if(btns[i].checked){
                    Price += parseInt($s("[num='']")[i].value) * parseInt($s("li i")[i].innerHTML);
                }
            }
            display.value=Price;
        }
        // 全选按钮
        btn.onclick=function(){
            for(var i=0;i<length;i++){
               btns[i].checked=this.checked;
            }
            if(this.checked){
                allPrice();
            }else{
                Price = 0;
                display.value = 0;
            }
        }
        // 添加商品数量和减少商品数量
        for(var i=0;i<adds.length;i++){
            adds[i].index=i;
            minus[i].index=i;
            adds[i].onclick=function(){
                var num=$s("[num='']")[this.index].value;
                $s("[num='']")[this.index].value = ++num;
                btns[this.index].checked=true;
                allPrice();
                panduan();
            }
            minus[i].onclick=function(){
                var num=$s("[num='']")[this.index].value;
                if(num <=1){
                    $s("[num='']")[this.index].value = 1;
                }
                else{
                    $s("[num='']")[this.index].value= --num;
                    btns[this.index].checked=true;
                }
                allPrice();
                panduan();
            }
        }
        for(var i=0;i<length;i++){
            btns[i].onclick=function(){
                panduan();
            }
        }

        // 根据商品复选框的条件判断来判断全选框是否全选
        function panduan(){
            for(var i=0;i<length;i++){
                var isTrue=true;
                if(btns[i].checked==false){
                    btn.checked=false;
                }
                else if(btns[i].checked==true){
                    for(var i=0;i<length;i++){
                        if(btns[i].checked==false){
                            isTrue=false; 
                        }
                    }
                    if(!isTrue){
                        btn.checked=false;
                    }
                    else{
                        btn.checked=true;
                    }
                }
                allPrice();
            }
        }
        // 删除商品
        for(var i=0;i<shanchu.length;i++){
            shanchu[i].index=i;
            shanchu[i].onclick=function(){
                $s("li")[this.index].style.display = 'none';
                $s("li [type='checkbox']")[this.index].checked = false;
                allPrice();
            }
        }

*/
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
