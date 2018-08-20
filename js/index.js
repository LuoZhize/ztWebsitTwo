setTimeout(function () {
    $(document).ready(function () {
        $('body').append('<audio src="../ztWebsitTwo/img/xiu.wav" autoplay=autoplay></audio>');//音效
        $('.container').show();//在dom树加载完成后在加载
        $('.ztHp').show();
        $('.zt-footer').show();
        let winHeight = $(window).height(),//获取浏览器可视区域的高度、宽度
            sevWidth = $(window).width();
        setPageHeight(winHeight);
        $(window).scroll(function () {
            let after = $(window).scrollTop();//滚动之后的位置
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

        new WOW().init();//初始化wow
        //项目案例
        let $container = $('.isotope').isotope({//初始化
            transitionDuration: '0.6s',
            itemSelector: '.element-item'
        });
        $container.imagesLoaded(function () {//预加载
            $('#filters').on('click', 'button', function () {
                let filterValue = $(this).attr('data-filter');
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
                let $item = getItemEle().add(getItemEle()).add(getItemEle());//添加图片
                $container.append($item).isotope('appended', $item);
            }, 1000)
        })

        function getItemEle() {//需要返回 获取样式和js
            let $item = $('<div class="element-item"><a><img src="../ztWebsitTwo/img/pro1.png" alt=""></a></div>');
            $item.addClass('item-info');
            return $item;
        }

        //联系我们
        let map = new BMap.Map("map");//百度地图
        let point = new BMap.Point(116.543865, 39.91278);//中心点经纬
        map.centerAndZoom(point, 15);//初始化地图①设置地图的中心点，②缩放范围3-19
        map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
        addMarker(point);

        function addMarker(point) {
            let iconSize = new BMap.Size(30, 35),//图标可视区域的大小
                iconPath = "../ztWebsitTwo/img/mapBiaoZhu.png";//图标路径
            let myIcon = new BMap.Icon(iconPath, iconSize, {
                anchor: new BMap.Size(10, 35),// 指定定位位置
            })
            let marker = new BMap.Marker(point, {icon: myIcon});//创建标注对象
            map.addOverlay(marker);//添加到地图
        }

        $('#map-p>img').click(function () {
            map.reset();//恢复地图
        });
        //点击返回顶部
        $('.up-top').click(function () {
            $('body,html').animate({scrollTop: 0}, 500);
        });
        //首页动画
        let hpText = "iphone X 拥有一块超高分辨率",
            timerr,
            p = 100,//焦点
            deg = 3,//角度
            myTimer = null,//时间
            x = sevWidth / 1.5,//left
            y,//top
            incX = -2.5;//方向
        let moveD = document.getElementById('moveD'),
            flyTail = document.getElementById('fly-tail'),
            zyHpText = document.getElementById('zt-hp-text');

        function moveObj() {//清除定时器
            if (myTimer != null) {
                window.clearInterval(myTimer);
            }
            myTimer = setInterval(goStep, 1);
        }

        function goStep() {//moveLine
            x = x + incX;
            if (x < 0) {
                incX = 1;
                return;
            } else if (x >= sevWidth / 1.5) {
                window.clearInterval(myTimer);
                myTimer = null;
                return;
            }
            y = -Math.sqrt(deg * p * x);
            if (incX == 1) {
                y = -1 * y;
                $('#moveD').css({'background': 'url("img/moveStop.png") no-repeat 100% 100%', backgroundSize: '100%'});
                window.clearInterval(myTimer);
                myTimer = null;
                return;
            }
            y += winHeight / 1.2;
            let i = 0;//首页动画字体的长度
            if (y >= winHeight / 1.33) {

                setTimeout(function () {
                    $('#moveD').animate({left: sevWidth / 2.6 + "px"}, 1500).fadeOut(500);//横走
                    $('.ztHp_animate').fadeIn(50);//显示
                    if (i == 0) {
                        setTimeout(function () {//延迟500毫秒让字体打出来
                            timerr = setInterval(function () {
                                zyHpText.innerHTML = hpText.substring(0, i);
                                i++;
                                if (zyHpText.innerHTML == hpText) {
                                    clearInterval(timerr);
                                }
                            }, 40);
                        }, 500)
                    }
                }, 1000)
                return y = winHeight / 1.33;//固定y高度
            }
            moveD.style.top = y + "px";
            moveD.style.left = x + "px";
            if (x <= sevWidth / 20) {//改变图片
            } else {
            }
            // if (x <= sevWidth / 20) {//转弯动画
            // animateNum++;
            // if (animateNum <= 1) {
            // for (let times2 = 0; times2 < 31; times2++) {
            // let a2 = sevWidth / 20.002, b2 = winHeight / 1.605, r2 = 135;//第二个a,b圆心;r半径
            // let huDu2 = 15 * (Math.PI / 360) * times2;//度数
            // let X2 = a2 - Math.sin(huDu2) * r2;
            // let Y2 = b2 - Math.cos(huDu2) * r2;
            // $('#moveD').animate({left: X2 + 'px', top: Y2 + 'px'}, 50, 'linear', function () {
            // });
            // }
            // } else {
            // }
            // } else {
            // moveD.style.top = y + "px";
            // moveD.style.left = x + "px";
            // }
        }

        //描绘
        function flyMove(a, b) {
            let divObj = document.createElement("div");
            let cssStr = "position:absolute;width:10px;height:10px;background-color:red;";
            cssStr += "left:" + a + "px;top:" + b + "px;";
            divObj.style.cssText = cssStr;
            flyTail.appendChild(divObj);
        }

        moveObj();
    });
}, 800)