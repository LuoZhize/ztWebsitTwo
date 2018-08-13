// $(window).scroll(function () {
//     var after = $(window).scrollTop();//滚动之后的位置
//     if (after > 160 && after < 300) {//服务项目的动画
//         fwAnimate(0);
//     } else if (after > 360 && after < 460) {
//         fwAnimate(1);
//     } else if (after > 500 && after < 600) {
//         fwAnimate(2);
//     } else if (after > 620 && after < 700) {
//         fwAnimate(3);
//     } else if (after > 810 && after < 900) {
//         fwAnimate(4);
//     } else if (after > 1000 && after < 1200) {
//         fwAnimate(5);
//     }
// })
// function fwAnimate(n) {
//     $('.zt_fw_info-animate-l').stop();
//     $('.zt-fw-item-a-animate-r').stop();
//     $('.zt_fw_info-animate-r').stop();
//     $('.zt-fw-item-a-animate-l').stop();
//     if (n % 2 == 0) {
//         $('.zt_fw_info').eq(n).addClass('zt_fw_info-animate-l');
//         $('.zt_fw_info_list').eq(n).children('a').addClass('zt-fw-item-a-animate-r');
//     } else {
//         $('.zt_fw_info').eq(n).addClass('zt_fw_info-animate-r');
//         $('.zt_fw_info_list').eq(n).children('a').addClass('zt-fw-item-a-animate-l');
//     }
//
// }
new WOW().init();