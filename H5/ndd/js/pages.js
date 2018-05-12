function getzz1() {
    var a1 = $(".tjl1 li");
    var zz1 =new Array(a1.length);
    for(var i=0;i <a1.length;i++){
        zz1[i]=a1[i].innerHTML;
    } //div的字符串数组付给zz
    return zz1;
}
function getzz2() {
    var a2 = $(".tjl2 li");
    var zz2 =new Array(a2.length);
    for(var i=0;i <a2.length;i++){
        zz2[i]=a2[i].innerHTML;
    } //div的字符串数组付给zz
    return zz2;
}
function getzz3() {
    var a3 = $(".tjl3 li");
    var zz3 =new Array(a3.length);
    for(var i=0;i <a3.length;i++){
        zz3[i]=a3[i].innerHTML;
    } //div的字符串数组付给zz
    return zz3;
}


function changeP1(e){
    pageno1=e;
    if(e<1){
        e=1;pageno1=1;//就等于第1页 ， 当前页为1
    }
    if(e>pageall1){  //如果输入页大于最大页
        e=pageall1;pageno1=pageall1; //输入页和当前页都=最大页
    }
    $(".tjl1").html("");//全部清空
    var html="";
    for(var i=0;i<pagesize1;i++){
        html += '<li>' + zz1[(e-1)*pagesize1+i] +'</li>';//创建一页的li列表
        if(zz1[(e-1)*pagesize1+i+1]==null) break;//超出最后的范围跳出
    }
    $(".tjl1").html(html);//给ul列表写入html
    var ye1="";
    for(var j=1;j<=pageall1;j++){
        if(e==j){
            ye1=ye1+"<span><a href='#' onClick='changeP1("+j+")' style='color:#fff;background: #e3bd4a;border: 1px solid #e3bd4a;'>"+j+"</a></span> "
        }else{
            ye1=ye1+"<a href='#' onClick='changeP1("+j+")'>"+j+"</a> "
        }
    }
    var pageContent1="";
 /*   pageContent +='第<span id=\"a2\">'+pageno+'</span>/';
    pageContent +='<span id="a1">'+pageall+'</span>页';*/
    pageContent1 +='<a href="#" onClick="changeP1(--pageno1)">上一页</a>';
    pageContent1 +='<span id="a3">'+ye1+'</span>';
    pageContent1 +='<a href="#" onClick="changeP1(++pageno1)">下一页</a>';
    pageContent1 +='<a href="#" onClick="changeP1(pageall1)">尾页</a>';
    $(".page1").html(pageContent1);
}

function changeP2(e){
    pageno2=e;
    if(e<1){
        e=1;pageno2=1;//就等于第1页 ， 当前页为1
    }
    if(e>pageall2){  //如果输入页大于最大页
        e=pageall2;pageno2=pageall2; //输入页和当前页都=最大页
    }
    $(".tjl2").html("");//全部清空
    var html="";
    for(var i=0;i<pagesize2;i++){
        html += '<li>' + zz2[(e-1)*pagesize2+i] +'</li>';//创建一页的li列表
        if(zz2[(e-1)*pagesize2+i+1]==null) break;//超出最后的范围跳出
    }
    $(".tjl2").html(html);//给ul列表写入html
    var ye2="";
    for(var j=1;j<=pageall2;j++){
        if(e==j){
            ye2=ye2+"<span><a href='#' onClick='changeP2("+j+")' style='color:#fff;background: #e3bd4a;border: 1px solid #e3bd4a;'>"+j+"</a></span> "
        }else{
            ye2=ye2+"<a href='#' onClick='changeP2("+j+")'>"+j+"</a> "
        }
    }
    var pageContent2="";
    /*   pageContent +='第<span id=\"a2\">'+pageno+'</span>/';
     pageContent +='<span id="a1">'+pageall+'</span>页';*/
    pageContent2 +='<a href="#" onClick="changeP2(--pageno2)">上一页</a>';
    pageContent2 +='<span id="a3">'+ye2+'</span>';
    pageContent2 +='<a href="#" onClick="changeP2(++pageno2)">下一页</a>';
    pageContent2 +='<a href="#" onClick="changeP2(pageall2)">尾页</a>';
    $(".page2").html(pageContent2);
}

function changeP3(e){
    pageno3=e;
    if(e<1){
        e=1;pageno3=1;//就等于第1页 ， 当前页为1
    }
    if(e>pageall3){  //如果输入页大于最大页
        e=pageall3;pageno3=pageall3; //输入页和当前页都=最大页
    }
    $(".tjl3").html("");//全部清空
    var html="";
    for(var i=0;i<pagesize3;i++){
        html += '<li>' + zz3[(e-1)*pagesize3+i] +'</li>';//创建一页的li列表
        if(zz3[(e-1)*pagesize3+i+1]==null) break;//超出最后的范围跳出
    }
    $(".tjl3").html(html);//给ul列表写入html
    var ye3="";
    for(var j=1;j<=pageall3;j++){
        if(e==j){
            ye3=ye3+"<span><a href='#' onClick='changeP3("+j+")' style='color:#fff;background: #e3bd4a;border: 1px solid #e3bd4a;'>"+j+"</a></span> "
        }else{
            ye3=ye3+"<a href='#' onClick='changeP3("+j+")'>"+j+"</a> "
        }
    }
    var pageContent3="";
    /*   pageContent +='第<span id=\"a2\">'+pageno+'</span>/';
     pageContent +='<span id="a1">'+pageall+'</span>页';*/
    pageContent3 +='<a href="#" onClick="changeP3(--pageno3)">上一页</a>';
    pageContent3 +='<span id="a3">'+ye3+'</span>';
    pageContent3 +='<a href="#" onClick="changeP3(++pageno3)">下一页</a>';
    pageContent3 +='<a href="#" onClick="changeP3(pageall3)">尾页</a>';
    $(".page3").html(pageContent3);
}