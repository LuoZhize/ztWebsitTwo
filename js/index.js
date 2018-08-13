//导入页面
$('.ztFWPro').load("./fwPro.html", function () {
    jQuery.getScript("../ztWebsitTwo/js/ztFWPro.js");
});
$('.ztProAL').load("./proAl.html", function () {
    jQuery.getScript("../ztWebsitTwo/js/ztProAL.js");
});
$('.ztNewGG').load("./newGg.html", function () {
    jQuery.getScript("../ztWebsitTwo/js/ztNewGG.js");
});
$('.ztWmWay').load("./wmWay.html", function () {
    jQuery.getScript("../ztWebsitTwo/js/ztWmWay.js");
});
var winHeight = $(window).height();//获取浏览器可视区域的高度
setPageHeight(winHeight);
$(window).scroll(function () {
    var after = $(window).scrollTop();//滚动之后的位置
    if (after > 650) {//鼠标滚动到指定位置时导航固定改变颜色
        $('.ztNav').css({'position': 'fixed', 'background': '#16233D'});
    } else if (after < 600) {
        $('.ztNav').css({'position': 'relative', 'background': 'transparent'});
    }
})
$('.ztNavList li').eq(0).click(function () {//点击切换时导航栏的颜色
    $('.ztNav').css('background', 'transparent');
}).siblings().click(function () {
    $('.ztNav').css('background', '#16233D');
})

function setPageHeight(a) {//设置每个分页的最小高度
    $('.ztHp').css('min-height', a + "px");
    $("#map").css('width', a + "px");
}