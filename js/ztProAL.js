$(document).ready(function () {
    var $container = $('.isotope').isotope({//初始化
        transitionDuration: '0.6s',
        itemSelector: '.element-item'
    });
    $container.imagesLoaded(function () {//预加载
        $('#filters').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $container.isotope({filter: filterValue});
        });
    });
    $('.button-group>button').click(function () {//导航栏的颜色
        $(this).addClass("new-btn").siblings().removeClass("new-btn");
    })
    $('.load-more').on('click', function () {//加载更多
        setTimeout(function () {
            $('.zt-new-loader').show();
        }, 100)
        setTimeout(function () {//动画
            $('.zt-new-loader').hide();
            var $item = getItemEle().add(getItemEle()).add(getItemEle());//添加图片
            $container.append($item).isotope('appended', $item);
        }, 1000)
    })

    function getItemEle() {//需要返回 获取样式和js
        var $item = $('<div class="element-item"><a><img src="../ztWebsitTwo/img/pro1.png" alt=""></a></div>');
        $item.addClass('item-info');
        return $item;
    }

});
