
var pbg= $('.pay-bg');
var choose=$('.pay-choose');
var tips=$('.pay-tips');
var index,nindex;
var foot=$('.csi-foot');
/*var cnia=$('.cninfoAll');
var tb=$('.containerTb');
var zt=$('.containerZt');
var jg=$('.containerJg');*/

$(document).ready(function(){

  $('.csif-r').click(function(){
    $('html').css("overflow","hidden");
    pbg.fadeIn();
  });

  $('.pay-fs').click(function(e){
    $(e.target).children('.pfsr').children('i').removeClass('icon-noselect').addClass('icon-selected');
    $(e.target).siblings().children('.pfsr').children('i').removeClass('icon-selected').addClass('icon-noselect');
  });

  $('.pay-btn').click(function(){
    choose.hide();
    tips.fadeIn();
  });

  $('.pt-btn').click(function(){
    pbg.hide();
    foot.addClass('hide');
    console.log('已执行');
    choose.show();
    tips.hide();
    /*$('html').css("overflow","visible");
    $('body').css("padding-bottom","0");*/
  });

  
  
  $('.cntab ul li').click(function() {
    $(this).siblings('li').removeClass('cnck');  // 删除其他兄弟元素的样式
    $(this).addClass('cnck');
    index=$(this).index();
    nindex=index+1;
    console.log(index);
    $('.cnilist>ul>li:nth-child('+nindex+')').fadeIn();
    $('.cnilist>ul>li:nth-child('+nindex+')').siblings().hide();
  });

});


