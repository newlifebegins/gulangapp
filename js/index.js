/**
 * Created by zhoucc on 2016/10/15.
 */
// 侧边栏的展开和收缩
$(function(){
    var navH = $(window).height();
    $(".nav_list1").height(navH);

    $(".nav-text1").click(function(){
        $(".nav_list1").animate({right:'0'},500).siblings(".nav_list").css({'right':'-33%'});
    });
    $(".close").click(function(){
        $(".nav_list1").animate({right:'-33%'},500);
    })
})
$(function(){
    var navH = $(window).height();
    $(".nav_list2").height(navH);

    $(".nav-text2").click(function(){
        $(".nav_list2").animate({right:'0'},500).siblings(".nav_list").css({'right':'-33%'});
    });
    $(".close").click(function(){
        $(".nav_list2").animate({right:'-33%'},500);
    })
})
$(function(){
    var navH = $(window).height();
    $(".nav_list3").height(navH);

    $(".nav-text3").click(function(){
        $(".nav_list3").animate({right:'0'},500).siblings(".nav_list").css({'right':'-33%'});
    });
    $(".close").click(function(){
        $(".nav_list3").animate({right:'-33%'},500);
    })
})
$(function(){
    var navH = $(window).height();
    $(".nav_list4").height(navH);

    $(".nav-text4").click(function(){
        $(".nav_list4").animate({right:'0'},500).siblings(".nav_list").css({'right':'-33%'});
    });
    $(".close").click(function(){
        $(".nav_list4").animate({right:'-33%'},500);
    })
})
$(function(){
    var navH = $(window).height();
    $(".nav_list5").height(navH);

    $(".nav-text5").click(function(){
        $(".nav_list5").animate({right:'0'},500).siblings(".nav_list").css({'right':'-33%'});
    });
    $(".close").click(function(){
        $(".nav_list5").animate({right:'-33%'},500);
    })
})