//    生成对象
    function create_obj(){        
        for(var i=0;i<30;i++){
            var part={
                x:getRadom(C_width,1),
                y:getRadom(C_height,1),
                size:getRadom(8,3)
            };
            parts.push(part);
        }
//        console.log(parts[2]);
    }
//    生成未来位置
    function create_fut(){
        for(var i=0;i<parts.length;i++){
            var fut={
                fut_x:getRadom(C_width,1),
                fut_y:getRadom(C_height,1)
            };
            fut_pos.push(fut);
        }
//        console.log(fut_pos[2]);
    }
//    绘制粒子
    function cre_part(){ 
        context.fillStyle= part_color;
        context.shadowColor = part_color;
        context.shadowBlur = 10;
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        for(var i=0;i<parts.length;i++){
            context.beginPath();
            context.arc(parts[i].x, parts[i].y,parts[i].size,0,  Math.PI * 2);
            context.fill();
//          context.stroke();
            context.closePath();
        }
    }
//    运动粒子
    function motion(){
        context.clearRect(0,0,C_width,C_height);
        context.fillStyle=part_color;
        context.shadowColor = part_color;
        for(var i=0;i<parts.length;i++){
//            计算运动偏移量
//            var px=parseInt(((parts[i].x-fut_pos[i].fut_x)/Speeder));
//            var py=parseInt(((parts[i].y-fut_pos[i].fut_y)/Speeder));
            if((parts[i].x-fut_pos[i].fut_x)<0){                
               parts[i].x =parts[i].x+Speeder;               
            }else {
               parts[i].x =parts[i].x-Speeder;              
            }            
            if((parts[i].y-fut_pos[i].fut_y)<0){
                parts[i].y =parts[i].y+Speeder;
            }else {
                parts[i].y =parts[i].y-Speeder;
            }
//             console.log('预计位置x:'+fut_pos[i].fut_x+';y:'+fut_pos[i].fut_y);
//             console.log('现在位置x:'+parts[i].x+';y:'+parts[i].y);
//            判断是否抵达预定位置
            if(parts[i].x==fut_pos[i].fut_x||parts[i].y==fut_pos[i].fut_y){
//                alert(12);
                fut_pos[i].fut_x=getRadom(C_height,1);
                fut_pos[i].fut_y=getRadom(C_height,1);
            }            
            context.beginPath();
            context.arc(parts[i].x, parts[i].y,parts[i].size,0,  Math.PI * 2);
            context.fill();
//          context.stroke();
            context.closePath();
        }
    }