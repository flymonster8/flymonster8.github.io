var pop= $('.tcb');
var index,nindex;
$(document).ready(function(){
  $('.new-menu ul li').click(function() {
    $(this).siblings('li').removeClass('nmcheck');  // 删除其他兄弟元素的样式
    $(this).addClass('nmcheck');                            // 添加当前元素的样式
    index=$(this).index();
    nindex=index+1;
    console.log(index);
    $('.nmlist>ul>li:nth-child('+nindex+')').fadeIn();
    $('.nmlist>ul>li:nth-child('+nindex+')').siblings().hide();
  });
  
  $('.cancels').click(function(){
    pop.fadeOut();
  });

  $('.service').click(function(){
    pop.fadeIn();
  });

});