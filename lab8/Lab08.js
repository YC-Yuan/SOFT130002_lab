/*请在该区域内声明或者获取所要使用的全局变量*/

/********************************************begin************************************/

/*Global Variable Area */

//当前图片序号
let imgIndex = 1;

//表示是否正在轮换动画中
let animating = false;
let buttons = document.getElementsByTagName("span");


/*********************************************end*************************************/

/* 任务一
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击左箭头prev和右箭头next的时候，可以切换到前一张图片和下一张图片。（左右箭头为html中的a标签）
 * ②每切换一张图片，右下角的数字标记对应变化。
 *      如：一开始，第1张图片显示出来，右下角的1-5的数值中，数值1位红色，2-4为绿色，表示当前显示第1张图片。
 *      点击next箭头，图片切换到第2张，同时，右下角红色数值从1切换为2，数值1,3,4,5为绿色。
 * ③当当前图片为第1张时，点击prev箭头，切换到第5张图片，且数值5置为红色。
 * 当当前图片为第5张时，点击next箭头，切换到第1张图片，且数值1置为红色。
 * ④切换图片的过程不要求，可直接切换，也可动画切换，但要求保证一定的切换动画合理性，不能出去明显的衔接不当。
 * ⑤本部分只能使用原生JS。
 */

/********************************************begin************************************/

/*Code Here*/
arrowPlay();

//为箭头添加事件
function arrowPlay() {
    let arrowLeft = document.getElementsByClassName("arrow")[0];
    let arrowRight = document.getElementsByClassName("arrow")[1];
    arrowLeft.addEventListener("click", function () {
        if (!animating) {
            imgIndex = indexDecrease(imgIndex);
            imgAnimate(600);
        }
    }, false);
    arrowRight.addEventListener("click", function () {
        if (!animating) {
            imgIndex = indexIncrease(imgIndex);
            imgAnimate(-600);
        }
    }, false);
}

function indexIncrease(index) {
    if (index === 5) return 1;
    return index + 1;
}

function indexDecrease(index) {
    if (index === 1) return 5;
    return index - 1;
}

//动画结束后更换图片、调回画框范围、修改小按钮颜色
function imgUpdate(imgIndex) {
    let imgPre = document.getElementById("imgPre");
    let imgCurrent = document.getElementById("imgCurrent");
    let imgNext = document.getElementById("imgNext");
    imgPre.src = indexDecrease(imgIndex) + ".jpg";
    imgPre.alt = indexDecrease(imgIndex);
    imgCurrent.src = imgIndex + ".jpg";
    imgCurrent.alt = imgIndex;
    imgNext.src = indexIncrease(imgIndex) + ".jpg";
    imgNext.alt= indexIncrease(imgIndex);
    let wrap = document.getElementsByClassName("wrap")[0];
    wrap.style.left = -600 + "px";
    for (let i = 0; i < 5; i++) {
        buttons[i].className = "";
    }
    buttons[imgIndex - 1].className = "on";
}

//图片更换动画
function imgAnimate(number) {
    animating = true;
    let wrap = document.getElementsByClassName("wrap")[0];
    let origin = parseInt(wrap.style.left);
    if (number >= 0) {
        let interval = setInterval(function () {
            wrap.style.left = parseInt(wrap.style.left) + 5 + "px";
            if (Math.abs(parseInt(wrap.style.left) - origin) >= number) {
                clearInterval(interval);
                imgUpdate(imgIndex);
                animating = false;
            }
        }, 1);
    }
    if (number < 0) {
        let interval = setInterval(function () {
            wrap.style.left = parseInt(wrap.style.left) - 5 + "px";
            if (Math.abs(parseInt(wrap.style.left) - origin) >= -number) {
                clearInterval(interval);
                imgUpdate(imgIndex);
                animating = false;
            }
        }, 1);
    }
}

/*********************************************end*************************************/

/* 任务二
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①轮播可以自动播放，切换图片间隔为2s，每一次切换的效果与点击next箭头的效果一致。
 * ②当鼠标移入轮播区域内时，停止自动播放。
 * ③当鼠标不在轮播区域内时，开始自动播放。
 * ④页面刚加载完成时，如果鼠标不在轮播区域内，自动开始自动播放；否则，等待直到鼠标移出轮播区域，再进行自动播放。
 * ⑤本部分只能使用原生JS。
 */

/********************************************begin************************************/

/*Code Here*/
autoPlay();

function autoPlay() {
    let intervalID;
    let wrap = document.getElementsByClassName("wrap")[0];
    wrap.addEventListener("mouseout", function (event) {
        let outTag = event.relatedTarget.tagName;
        if (outTag !== "SPAN" && outTag !== "A" && event.relatedTarget !== buttons) {
            intervalID = setInterval(function () {
                if (!animating) {
                    imgIndex = indexIncrease(imgIndex);
                    imgAnimate(-600);
                }
            }, 2000);
        }
    }, false);
    wrap.addEventListener("mouseover", function () {
        clearInterval(intervalID);
    }, false);
}

/*********************************************end*************************************/


/* 任务三
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击右下角的任意一个数值，能够切换到对应图片，且相应数值变为红色。
 * ②进行①操作过后，是否自动播放，其规则与上一个任务一致。
 * ③本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
buttonPlay();

function buttonPlay() {
    for (let i = 0; i < 5; i++) {
        buttons[i].addEventListener("click", function () {
            imgIndex = i + 1;
            imgUpdate(imgIndex);
        }, false);
    }
}

/*********************************************end*************************************/


/*任务四
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击某一非表头的单元格，可以编辑其内容，编辑完毕后点击其他部位，可以在界面上显示修改后的内容。
 * ②点击单元格后，光标自动定位于单元格的首个字符或者汉字前。
 * ③本部分可以使用jQuery，也可以使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
tableChange();

function tableChange(){
    let td=document.getElementsByTagName("td");
    for(let i=0;i<9;i++){
        td[i].addEventListener("click",function () {
            let value=td[i].textContent;
            let input=document.createElement("input");

            td[i].textContent="";
            td[i].appendChild(input);
            input.value=value;
            input.style.border="none";
            input.style.outline="medium";
            input.style.fontSize="14px";
            input.select();
            input.focus();

            input.setSelectionRange(0,0);

            input.addEventListener("click",function(event){
                event.stopPropagation();
            },false);

            input.addEventListener("blur",function () {
                td[i].textContent=input.value;
                td[i].style.display="table-cell";
                td[i].removeChild(input);
            },false);
        },false);
    }
}

/*********************************************end*************************************/