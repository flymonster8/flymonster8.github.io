
var pg= $('.zzc');
var g,gg,index,nindex;
/*var pg= $('.zzc');*/

$(document).ready(function(){

  $('.firs').click(function(){
    $('html').css("overflow","hidden");
    pg.fadeIn();
  });

  $('.zclt li').click(function(e) { // 在页面任意位置点击而触发此事件
    $(e.target).addClass('ckc');
    $(e.target).siblings().removeClass('ckc');
    g= $(e.target).html();
    index=$(e.target).index();
    nindex=index+2;
    $('.firs').html(''+g+'&nbsp;'+'<i class="iconfont icon-xiala-copy">'+'</i>').addClass('ckc');
    console.log(g+','+index+','+nindex);// e.target表示被点击的目标
    $('.gr-all div:nth-child('+nindex+')').fadeIn();
    $('.gr-all div:nth-child('+nindex+')').siblings('.zcrt').hide();
    $('.gr-all div:nth-child('+nindex+') li').click(function(e) { // 在页面任意位置点击而触发此事件
      $(e.target).addClass('ckc');
      $(e.target).siblings().removeClass('ckc');
      //$('zcrt:nth-of-type(1)>ul>li')不生效
      gg= $(e.target).html();
      $('.firs').html(''+g+gg+'&nbsp;'+'<i class="iconfont icon-xiala">'+'</i>');
      $('html').css("overflow","visible");
      pg.fadeOut();
    });
  });

  $('.secs').click(function(){
    $('html').css("overflow","hidden");
    pg.fadeIn();
  });

  /*$('.cancels').click(function(){
    pop.fadeOut();
  });*/

});


