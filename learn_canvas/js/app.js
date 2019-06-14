    window.onload=function(){
//        载入开始动画
        create_obj();
        create_fut();
        cre_part();
        thread[0]=setInterval('motion()',30);
//        载入菜单
//        略.....
        start_game();
    }
    function start_game(){
        setTimeout(function(){
            clearInterval(thread[0]);  
            document.querySelector(".monitor").style.display="none";
            context.clearRect(0,0,C_width,C_height);
            context.drawImage(image.background[0],100,400);
            context.drawImage(image.background[0],100,450);
        },2000);
    }