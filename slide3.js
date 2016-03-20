/**
 * Created by bai on 2016/3/20.
 */
function abc() {
    var lis1 = document.getElementById("slide").getElementsByTagName("li");
    var lis2 = document.getElementById("btn").getElementsByTagName("li");
    var btn = document.getElementById("btn");
    var len = lis1.length;
    var index=0;
    var lastIndex=0;
    for (var i = 0; i < len; i++) {
        (function (i) {
            lis2[i].onmouseover = function () {
                showImag(i,lastIndex);
                lastIndex=i;
            }
        })(i);
    }
    addTime = setInterval(function () {
        if(index<(len-1))
        {
            index++;
        }
        else
        {
            index=0;
        }
        showImag(index,lastIndex);
        lastIndex=index;

    }, 5000);
    btn.onmouseover = function () {
        if (addTime) {
            clearInterval(addTime);
        }
    };
    btn.onmouseout = function () {
        addTime = setInterval(function () {
            if(index<(len-1))
            {
                index++;
            }
            else
            {
                index=0;
            }
            showImag(index,lastIndex);
            lastIndex=index;

        }, 5000);
    };
    function showImag(cIndex,cLastIndex) {
        if(cIndex==cLastIndex) return;
        fadeIn(lis1[cIndex]);
        fadeOut(lis1[cLastIndex]);
        for (var j = 0; j < len; j++) {
            if (j != cIndex) {
                lis2[j].className="";
            }
            else
            {
                lis2[j].className="hot";
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