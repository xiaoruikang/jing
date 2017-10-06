
 window.onload=function () {
    function getClass(classname)   //  类的写法
   {
       //判断支持否
       if(document.getElementsByClassName)
       {
           return document.getElementsByClassName(classname);
       }
       var arr = []; //用于返回 数组
       var dom = document.getElementsByTagName("*");
       for(var i=0;i<dom.length;i++)  // 遍历所有的 盒子
       {
           var txtarr = dom[i].className.split(" "); // 分割类名 并且 转换为数组
           //  ["demo","test"];
           for(var j=0;j<txtarr.length;j++)  // 遍历 通过类名分割的数组
           {
               if(txtarr[j] == classname)
               {
                   arr.push(dom[i]); // 我们要的是 div
               }
           }
       }
       return arr;
   }

   // $("#demo")   $(".one")   $("div")
    //封装自己的$
    function $(str) {
        var s = str.charAt(0);   //  一个s 的变量 存放是 符号  #  .
        var ss = str.substr(1);  // demo
        switch(s)
        {
            case "#":
                return document.getElementById(ss);
            break;
            case ".":
                return getClass(ss);
            break;
            default :
                return document.getElementsByTagName(str);
        }
    }


	 $("#jd-close").onclick = function(){
	 	this.parentNode.style.display="none";
 	}

 	// var lis = document.getElementsByTagName("li");
         
  //   for(var i=0; i<lis.length;i++)
  //   {
  //       lis[i].innerHTML = "abc";
  //   }



 	// $("cir-item2").onmouseover = function(){
 	// 	$("slid-img").src="images/11.jpg";
 	// }
 	// $("cir-item1").onmouseover = function(){
 	// 	$("slid-img").src="images/55.jpg";
 	// }
//轮播器生成
    var circle = document.createElement("ul");
        //circle.className = "circle";
        circle.setAttribute("class","circle");
        circle.setAttribute("id","cir");
        //circle.id = "cir";
        $("#slide").appendChild(circle);
    var lis = $("#ult").children;
    for(var i=0;i<lis.length;i++)
    {
        var newli = document.createElement("li");
        newli.innerHTML = i+1;
        circle.appendChild(newli);
    }
    //第一个孩子预加class
    var lis =circle.children;
    lis[0].setAttribute("class","current");

//轮播器效果
    // var item = $("#cir").getElementsByTagName("li");
    // var lis = $("#ult").getElementsByTagName("li");
    // var as = $("#arr").getElementsByTagName('a');
    // for(var i = 0;i<item.length;i++)
    // {
    //      item[i].index = i;
    //      item[i].onmouseover = function(){
    // //         //排他思想
    //          for(var i=0;i<item.length;i++)
    //          {
    //              item[i].className ="";
    //              lis[i].className ="";
    //          }
    //          this.className = "current";
    //         //$("slid-img").src="images/"+this.index+this.index+".jpg";
    //         lis[this.index].className = "show";

    //      }
      
    //  }
// <!-- ====改进版 缓动轮播===== -->
    var jd = $("#slide");
    var ul = jd.children[0].children[0];
    var itlis = $("#cir").getElementsByTagName("li");
    var leader = 0,target = 0;
    for(var i = 0;i<itlis.length;i++)
    {
        itlis[i].index = i;//每个li上的索引号
        itlis[i].onmouseover = function()
        {
            for(var j=0;j<itlis.length;j++)
            {
                itlis[j].className ="";
            }
            this.className = "current";
            target = -730*this.index;
        }
    }

     //左右焦点轮播
    // 轮播图的盒子
    $("#slide").onmouseover = function(){
        $("#arr").style.display = "block";  // 显示三角
    }
    $("#slide").onmouseout = function(){
        $("#arr").style.display = "none";  // 隐藏三角
    }
    $("#arright").onclick = function() {
        target -= 730;

    }
    $("#arrleft").onclick = function() {
        target += 730;
    }
    //缓动方法
    setInterval(function(){
        if(target >= 0)
        {
            target = 0;
        }
        else if(target <= -3650)
        {
            target = -3650;
        }
        leader = leader + (target - leader) / 10;
        ul.style.left = leader + "px";
    },30);

   





   
    
    








    $("#login").onclick = function(){
    	$("#top-mask").style.display="block";
    	$("#top-box").style.display="block";
    }
    $("#top-sp").onclick = function(){
    	$("#top-mask").style.display="none";
    	$("#top-box").style.display="none";
    }





    //获得焦点、失去焦点事件
    // $("txt").onfocus = function(){
    //     if(this.value=="智能家居"){
    //         this.value="";
    //         this.style.color="#333";
    //     }
    // }
    // $("txt").onblur = function(){
    //     if(this.value==""){
    //         this.value="智能家居";
    //          this.style.color="#ccc";
    //     }
    // }
//判断搜索框
   
     $("#txt").oninput = $("txt").onproertychange = function(){
         if(this.value == ""){
             $("#message").style.display = "block";  
         }
         else {
             $("#message").style.display ="none";
         } 
     }
     
    var iis = $("#iconsprite").getElementsByTagName("i");
        for(var i=0;i<iis.length;i++)
        {
            iis[i].style.backgroundPosition ="right "+(-i*25)+"px";
        }
    var isli = $("#iconsprite").getElementsByTagName("li");
        for(var i=0;i<iis.length;i++)
        {
            isli[i].onmouseover = function(){
                this.className = "items";
            }
            isli[i].onmouseout = function(){
                this.className = "";
            }   
        }


//触摸变色
    var classify =$("#classify").getElementsByTagName("div");
    for(var i = 0;i<classify.length; i++)
    {
        classify[i].onmouseover = function(){
            this.className = "items";
        }
        classify[i].onmouseout = function(){
            this.className = "";
        }
    }
 }












