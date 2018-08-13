//百度地图
var map = new BMap.Map("map");
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