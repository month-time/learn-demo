    var canvas=document.getElementById('myCanvas');
//    创建画布并设置画布宽高
    var C_width =(document.documentElement.clientWidth)*(0.95);
    var C_height =(document.documentElement.clientHeight)*(0.95);
    canvas.width = C_width;
    canvas.height = C_height;
    var context = canvas.getContext('2d');
//    粒子对象
    var parts=[];
//    粒子颜色
    var part_color='#a5d';
//    未来位置
    var fut_pos=[];
//    运动速度
    var Speeder= 1;
//    线程组
    var thread=[];
//  预载图片
    var image={
        npc:[],
        decorate:[],
        background:[]        
    }
    var map={
        
    }
    image.background[0]=new Image();
    image.background[0].src="./img/001草地.png"
    function getRadom(max,min){
        return parseInt((Math.random()*(max-min)+min));
    }