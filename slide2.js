/**
 * Created by bai on 2016/3/20.
 */
/*
 ������Ҫ���ĸĽ��Ƕ�ͼƬ����ʾ�ĸĽ��������ü򵥵ĸı�ͼƬ��display���ԣ����Ǵ���fadeIn������fadeOut����������ͨ��js����css��opacity���������,�������ﻹ��Ҫһ��setOpacity�������������ͼƬ�Ľ��뽥����
 ��һ���򵥵�demo����һ��СС��������Ǹտ�ʼ��ʱ�����û�д�����onmouseover�¼������޷�����onmouseout�¼���Ҳ���Ǹս���ҳ���ʱ��������Ҫȥ��������뿪���¼���

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
    }//���������Ҫ����IE8���µ������
}