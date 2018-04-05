$(document).ready(function(){
    var num;
    $('.nav_r li[id]').hover(function(){
        /*下拉框出现*/
        var Obj = $(this).attr('id');
        num = Obj.substring(3, Obj.length);
        $('#hl-'+num).slideDown(300);
    },function(){
        /*下拉框消失*/
        $('#hl-'+num).hide();
    });
//    hidden-box hover e
   /* $('.hidden-box').hover(function(){
        /!*保持图标向上*!/
        $('#li-'+num).children().removeClass().addClass('hover-up');
        $(this).show();
    },function(){
        $(this).slideUp(200);
        $('#li-'+num).children().removeClass().addClass('hover-down');
    });*/
});
