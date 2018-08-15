setTimeout(function () {
    $(document).ready(function () {
        $('.container').show();//在dom树加载完成后在加载
        $('.ztHp').show();
        $('.zt-footer').show();
        var winHeight = $(window).height();//获取浏览器可视区域的高度
        setPageHeight(winHeight);
        $(window).scroll(function () {
            var after = $(window).scrollTop();//滚动之后的位置
            if (after > 650) {//鼠标滚动到指定位置时导航固定改变颜色
                $('.ztNav').css({'position': 'fixed', 'background': '#16233D'});
            } else if (after < 600) {
                $('.ztNav').css({'position': 'relative', 'background': 'transparent'});
            }
            if (after > 1000) {//返回顶部
                $('.up-top').css('display', 'block');
            } else {
                $('.up-top').css('display', 'none');
            }
        })
        $('.ztNavList li').eq(0).click(function () {//点击切换时导航栏的颜色
            $('.ztNav').css('background', 'transparent');
        }).siblings().click(function () {
            $('.ztNav').css('background', '#16233D');
        })

        function setPageHeight(a) {//设置每个分页的最小高度
            $('.ztHp').css('min-height', a + "px");
            $("#map").css('min-width', a + "px");
        }

//初始化wow
        new WOW().init();
//项目案例
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

//联系我们
        var map = new BMap.Map("map");//百度地图
        var point = new BMap.Point(116.543865, 39.91278);//中心点经纬
        map.centerAndZoom(point, 15);//初始化地图①设置地图的中心点，②缩放范围3-19
        map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
        addMarker(point);

        function addMarker(point) {
            var iconSize = new BMap.Size(30, 35);//图标可视区域的大小
            var iconPath = "../ztWebsitTwo/img/mapBiaoZhu.png";//图标路径
            var myIcon = new BMap.Icon(iconPath, iconSize, {
                anchor: new BMap.Size(10, 35),// 指定定位位置
            })
            var marker = new BMap.Marker(point, {icon: myIcon});//创建标注对象
            map.addOverlay(marker);//添加到地图
        }

        $('#map-p>img').click(function () {
            map.reset();//恢复地图
        });
        //点击返回顶部
        $('.up-top').click(function () {
            $('body,html').animate({scrollTop: 0}, 500);
        });
    });
}, 100)