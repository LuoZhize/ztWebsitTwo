//导入页面
$('.ztFWPro').load("./fwPro.html",function () {
    jQuery.getScript("../ztWebsiteTwo/js/ztFWPro.js");
});
$('.ztProAL').load("./proAl.html",function () {
    jQuery.getScript("../ztWebsiteTwo/js/ztProAL.js");
});
$('.ztNewGG').load("./newGg.html",function () {
    jQuery.getScript("../ztWebsiteTwo/js/ztNewGG.js");
});
$('.ztWmWay').load("./wmWay.html",function () {
    jQuery.getScript("../ztWebsiteTwo/js/ztWmWay.js");
});
var winHeight = $(window).height();//获取浏览器可视区域的高度
// var before = $(window).scrollTop();//滚动之前的位置
// var scrollNum = 0;//记录滚动条的位置
setPageHeight(winHeight);
// // $('body')
//     .bind('mousewheel', function(event, delta) {
//         var dir = delta > 0 ? 'Up' : 'Down';
//         if (dir == 'Up') {
//             console.log("向上滚动");
//         } else {
//             console.log("向下滚动");
//         }
//     });
// $(window).scroll(function () {
//     var after = $(window).scrollTop();//滚动之后的位置
//     if (before>after) {
//         scrollNum--;
//         console.log('上');
//         before = after;
//         $('body').css('transform','translateY('+winHeight*scrollNum+'px)');
//     } else {
//         console.log('下');
//         scrollNum++;
//         before = after;
//         $('body').css('transform','translateY('+winHeight*scrollNum+'px)');
//     };
// })
function setPageHeight(a) {//设置每个分页的最小高度
    $('.ztHp').css('min-height',a+"px");
    // $('.ztFWPro').css('min-height',a+"px");
    // $('.ztProAL').css('min-height',a+"px");
    // $('.ztNewGG').css('min-height',a+"px");
    // $('.ztWmWay').css('min-height',a+"px");
}