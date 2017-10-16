/**
 * Created by Administrator on 2017/3/14.
 */
$(function () {



    //首页tab
    var _index;
   $(".head div").click(function () {

       _index=$(this).index();
       $(this).addClass("active").siblings().removeClass("active");
       $(".task").eq(_index).show().siblings().hide();
   })  ;




     // 弹出框


       $(".alert").on("click",function (event) {
           $(this).hide();
           event.stopPropagation() ;
       });

    $(".load").on("click",function (event) {
        // $(this).hide();
        event.stopPropagation() ;
    });

    $(".alertbox").on("click",function (event) {
        // $(".alert").show();
        event.stopPropagation()
    });
    $(".off1").on("click",function (event) {
        $(".alert").hide();
        event.stopPropagation();
    });

    $(".yes").on("click",function (event) {
        $(".alert").hide();
        event.stopPropagation();
    });
    $(".alertbtn").on("click",function (event) {
        $(".alert").hide();
        event.stopPropagation();
    });
    $(".alertbtn2").on("click",function (event) {
        $(".alert").hide();
        event.stopPropagation();
    });

    // footer

    $(".tubiao").on("click",function () {
        $(this).addClass("cur").siblings().removeClass("cur");

    });

    // 返回
    $(".back").on("click",function () {
        window.history.back() ;
    })
    $(".refresh").on("click",function () {
        window.location.reload();
    })
    //提现页面
    $(".m2").on("click",function () {
        $(".m2").removeClass("m1");
        $(this).addClass("m1");

    });
    var jinzhi=0;
    document.addEventListener("touchmove",function(e){
        if(jinzhi==1){
            e.preventDefault();
            e.stopPropagation();
        }
    },false);

    orient();




});
function orient() {


    if (window.orientation == 90 || window.orientation == -90) {

        alert("横屏内容太少啦，请使用竖屏观看！")

        return false;
    }
}



$(window).bind( 'orientationchange', function(e){
    orient();
});


//页面未完全刷新的时候显示

document.onreadystatechange = subSomething;
function subSomething()
{
    if(document.readyState != "complete") {

        $("<div class='load'><div class='loading'></div></div>").appendTo($("body"));
    }else {
        $(".load").hide();
    }


}


window.onload=function(){


    if(document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
        bodyTag = document.getElementsByTagName('body')[0];
        bodyTag.style.height = document.documentElement.clientWidth / screen.width * screen.height + 'px';
    };
    setTimeout(function() {
        window.scrollTo(0, 10)
    }, 0);
};