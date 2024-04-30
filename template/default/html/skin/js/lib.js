$(document).ready(function() {
    $('.menuBtn').append('<b></b><b></b><b></b>');
    $('.menuBtn').click(function(event) {
        $(this).toggleClass('open');
        if ($(this).hasClass('open')) {
            $('.hdr').stop().slideDown(300);
        } else {
            $('.hdr').stop().slideUp(300);
        }
    });
    $(window).scroll(function() {
        var topp = $(document).scrollTop();
        if (topp > 0) {
            $('.header').addClass('on');
        } else {
            $('.header').removeClass('on');
        }
    });
    if ($(window).width() > 1000) {
        $('.ul-nav li').mouseenter(function() {
            $(this).find('.sub').stop().slideDown(300);
        });
        $('.ul-nav li').mouseleave(function() {
            $(this).find('.sub').stop().slideUp(300);
        });
        $('.hd-link .so').click(function() {
            $(this).siblings('.box').stop().slideToggle(300);
        });
        $(document).mouseup(function(e) {
            var con = $(".hd-link .so_box");
            if (!con.is(e.target) && con.has(e.target).length === 0) {
                $('.hd-link .so_box .box').stop().slideUp(300);
            }
        })
    } else {
        $('.ul-nav li').unbind('mouseenter mouseleave');
        $('.ul-nav .arr').click(function() {
            $(this).toggleClass('on').siblings('.sub').stop().slideToggle(300).parent().addClass('on').siblings().removeClass('on').find('.arr').removeClass('on').siblings('.sub').stop().slideUp(300);
        });
        $('.ul-nav .arr2').click(function() {
            $(this).toggleClass('on').siblings('.txt').stop().slideToggle(300);
        });
    }
    $('.g-tab .lab').click(function() {
        var index = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $(this).parent().siblings('.g-tabinfo').find('.item').eq(index).addClass('on').siblings().removeClass('on');
    });
    // 初始化wow.js
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    });
    wow.init();

    // 小图标拖动
    var drag = document.querySelector(".ul-snv"); //获取元素
    //鼠标按下事件，获取起点位置信息
    drag.onmousedown = function(e1) {
        var x1 = e1.clientX; //可显示出事件发生时鼠标指针的横坐标：
        var y1 = e1.clientY; //可显示出事件发生时鼠标指针的纵坐标：
        var l1 = this.offsetLeft;
        var t1 = this.offsetTop;
        //查找变量时有个就近原则  形参就是局部变量
        //   鼠标移动事件，计算差值，drag重新定位
        window.onmousemove = function(e2) {
            var x2 = e2.clientX; //移动旧的位置
            var y2 = e2.clientY;
            var l2 = l1 + (x2 - x1); //原来的位置加上移动的距离就是移动之后的位置(坐标)
            var t2 = t1 + (y2 - y1);
            //边界处理 防止越界 （）优先级最高
            l2 = l2 < 0 ? 0 : (l2 > window.innerWidth - drag.offsetWidth ? window.innerWidth - drag.offsetWidth : l2);
            t2 = t2 < 0 ? 0 : (t2 > window.innerHeight - drag.offsetHeight ? window.innerHeight - drag.offsetHeight : t2);
            drag.style.left = l2 + 'px';
            drag.style.top = t2 + 'px';
        }
    }
    //当鼠标抬起时，去掉mousemove事件
    drag.onmouseup = function() {
        window.onmousemove = null;
    }
});