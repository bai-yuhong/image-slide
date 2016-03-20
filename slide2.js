/**
 * Created by bai on 2016/3/20.
 */
/*
 我这里要做的改进是对图片的显示的改进不再是用简单的改变图片的display属性，而是创建fadeIn（）和fadeOut（）方法，通过js操作css的opacity属性来完成,所以这里还需要一个setOpacity（）函数来完成图片的渐入渐出。
 第一个简单的demo还有一个小小的问题就是刚开始的时候如果没有触发过onmouseover事件，则无法进行onmouseout事件，也就是刚进入页面的时候我们需要去触发鼠标离开的事件。

 * */
function abc() {
    var lis1 = document.getElementById("slide").getElementsByTagName("li");
    var lis2 = document.getElementById("btn").getElementsByTagName("li");
    var btn = document.getElementById("btn");
    var len = lis1.length;
    var lastIndex;
    for (var i = 0; i < len; i++) {
        (function (i) {
            lis2[i].onmouseover = function () {
                showImag(i);
            }
        })(i);
    }
    addTime = setInterval(function () {
        showImag(index);
        index++;
        if (index == len) {
            index = 0;
        }

    }, 5000);
    var index = 0;
    btn.onmouseover = function () {
        if (addTime) {
            clearInterval(addTime);
        }
    };
    btn.onmouseout = function () {
        addTime = setInterval(function () {
            showImag(index);
            index++;
            if (index == len) {
                index = 0;
            }

        }, 5000);
    };
    function showImag(index) {
        // lis1[index].setAttribute("style", "display:block");
        fadeIn(lis1[index]);
        lis2[index].className="hot";
        for (var i = 0; i < len; i++) {
            if (i != index) {
                fadeOut(lis1[i]);
                lis2[i].className="not";
            }
        }
    }
    function fadeIn(elem)
    {
        setOpacity(elem,0);
        for(var i=0;i<=20;i++)
        {
            (function(){
                var pos=i*5;
                setTimeout(function(){
                        setOpacity(elem,pos);
                    }

                    ,i*25);
            })(i);
        }
    }
    function fadeOut(elem)
    {
        for(var i=0;i<=20;i++)
        {
            (function(){
                var pos=100-i*5;
                setTimeout(function(){setOpacity(elem,pos)},i*25);
            })(i)
        }
    }
    function setOpacity(elem,value)
    {
        if(elem.filters)
        {
            elem.style.filter="alpha(opacity="+value+")";
        }
        else
        {
            elem.style.opacity=value/100;
        }
    }//这个函数需要区分IE8以下的浏览器
}