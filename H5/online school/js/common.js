var next= $('.next');
/*var cscg= $('.cscg');*/
var index,nindex;
$(document).ready(function(){

  $('.cscg>div').click(function(){
    /*if($('.cscg i').hasClass('icon-ysc')){
        $('.cscg i').removeClass('icon-ysc');
        $('.cscg i').addClass('icon-sc');
    }else{
        $('.cscg i').removeClass('icon-sc');
        $('.cscg i').addClass('icon-ysc');
    }*/
    $(this).siblings('div').removeClass('hide');  // 删除其他兄弟元素的样式
    $(this).addClass('hide');
  });



});