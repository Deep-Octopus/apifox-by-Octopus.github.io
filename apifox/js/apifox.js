let left = document.getElementById("bt-left");
let right = document.getElementById("bt-right");
let imgList = document.getElementById("img-list");
let smallImg = document.querySelectorAll(".small-img");
let imgS = document.querySelectorAll(".img");
//------------------------------------------------------
let topBack = document.querySelector(".top-back");
let nav = document.querySelector(".nav");
document.body.addEventListener("DOMMouseScroll", ()=>{
    topBack.style.filter= "blur(2px) contrast(50%) brightness(80%)";
    nav.style.filter= "blur(2px) contrast(50%) brightness(80%)";
})
//添加事件监听
let index = 0;
left.addEventListener("click", ()=>{
    if (index === 0) index = -15;
    else index++;
    move();
})

right.addEventListener("click", ()=>{
    if (index === -15) index = 0;
    else index--;
    move();
})
//移动
function move(){
    //金边功能
    // for (let i = 0; i <smallImg.length;i++){
    //     if (-i === index) smallImg[-index].style.border="#CDBEA5 solid";
    //     else smallImg[-index].style.border="white solid";
    // }

    smallImgMove();
    imgList.style.transform="translateX(" + index*1244 + "px)";
}
//--------------------------------------------------
//自动轮播
let time;
function timer(){
    time = setInterval(() => {
        if (index === -15) index = 1;
        index--;
        // if (index === 0) index = -15;
        move();
    }, 3000)
}
timer();
// ---------------------------------------

//小图点击轮播
function smallImgMove(){
    document.getElementById("small-img-list").style.transform="translateX(" + index*60 + "px)";
    for (let i = 0; i < smallImg.length; i++) {
        smallImg[i].style.borderColor="white";
    }
    smallImg[-index].style.borderColor="#CDBEA5";
}

// 首先我们先遍历一遍，然后获取当前点击的那个小图片按钮的值并赋值给index，这样子就可以随之跳转
for (let i = 0; i > -smallImg.length; i--) {
    smallImg[-i].addEventListener("click", () => {
        index = i;
        move();
        smallImgMove();
        //重置时间
        clearInterval(time);
        timer();
    })
}


//全屏

// let fullScree = document.getElementById("full-scree")
//
// fullScree.addEventListener("click", ()=>{
//     imgS[index].requestFullscreen();
//
// })
// <button onClick="requestFullScreen(document.documentElement)">全屏显示</button>
//
// <button onClick="exitFull()">退出全屏</button>
let downloadVersion = document.getElementById("download-version");
let buttonDesktop = document.getElementById("window-download");

buttonDesktop.addEventListener("mouseover", ()=>{
    downloadVersion.style.animation="downloadVersion-in .2s";
    downloadVersion.style.height="292px";
    // downloadVersion.style.opacity="1";
    downloadVersion.style.display="block";
    downloadVersion.addEventListener("mouseover", ()=>{
            downloadVersion.style.animation="downloadVersion-in .2s";
            downloadVersion.style.height="292px";
            downloadVersion.style.display="block";
            // downloadVersion.style.opacity="1";
        downloadVersion.addEventListener("mouseout", ()=>{
            downloadVersion.style.animation="downloadVersion-in .2s";
            downloadVersion.style.height="0";
            downloadVersion.style.display="none";
            // downloadVersion.style.opacity="0";
        })
    })
    buttonDesktop.addEventListener("mouseout", ()=>{
        downloadVersion.style.animation="downloadVersion-in .2s";
        downloadVersion.style.height="0";
        // downloadVersion.style.opacity="0";
        downloadVersion.style.display="none";
    })

})

document.querySelector(".use-web").addEventListener("click", ()=>{
    window.open('https://www.apifox.cn/web/user/login','_blank');
})

document.querySelector(".browse-more").addEventListener("click", ()=>{
    window.open("https://www.apifox.cn/help/","_blank");
})

document.getElementById("consult").addEventListener("click", ()=>{
    window.open("https://www.apifox.cn/help/app/privatization-deployment/","_self");
})

document.getElementById("download-now").addEventListener("click", ()=>{
    window.open("http://localhost:63342/Summer/apifox/html/apifox.html","_self");
})

// let block
// function getDir(ev, ele) {
//     const l = ele.getBoundingClientRect().left;
//     const t = ele.getBoundingClientRect().top;
//     const w = ele.getBoundingClientRect().width;
//     const h = ele.getBoundingClientRect().height;
//     const x = (ev.clientX - l - w / 2) * (w > h ? (h / w) : 1);
//     const y = (ev.clientY - t - h / 2) * (h > w ? (w / h) : 1);
//     const deg = Math.atan2(y, x) / (Math.PI / 180);
//     return (Math.round((deg + 180) / 90) + 3) % 4;
//     // d的值{上:0,右:1,下:2,左:3}
// }
//

// let visible = document.querySelectorAll(".api-card");
// let invisible = document.querySelectorAll(".invisible");
// for (let i = 0; i < visible.length; i++) {
//     visible[i].addEventListener("mouseover",()=>{
//         invisible[i].style.zIndex="20";
//     })
// }
// for (let i = 0; i < visible.length; i++) {
//     invisible[i].addEventListener("mouseout",()=>{
//         invisible[i].style.zIndex="-1";
//     })
//
// }

// 判断pc浏览器是否缩放，若返回100则为默认无缩放，如果大于100则是放大，否则缩小
// function detectZoom (){
//     let ratio = 0,
//         screen = window.screen,
//         ua = navigator.userAgent.toLowerCase();
//
//     if (window.devicePixelRatio !== undefined) {
//         ratio = window.devicePixelRatio;
//     }
//     else if (~ua.indexOf('msie')) {
//         if (screen.deviceXDPI && screen.logicalXDPI) {
//             ratio = screen.deviceXDPI / screen.logicalXDPI;
//         }
//     }
//     else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
//         ratio = window.outerWidth / window.innerWidth;
//     }
//
//     if (ratio){
//         ratio = Math.round(ratio * 100);
//     }
//
//     return ratio;
// }
//
let fullScree = document.getElementById("full-scree");
// 全屏事件
fullScree.addEventListener("click", ()=>{
    let element = imgS[-index];
    imgS[-index].requestFullscreen();
    if(element.fullscreen) {
        if(document.exitFullscreen) {
            document.exitFullscreen();
        }
    } else {
        if(element.requestFullscreen) {
            element.requestFullscreen();
        }
}})

//缩放
// function detectZoom() {
//     let ratio = 0,//浏览器当前缩放比
//         screen = window.screen,//获取屏幕
//         ua = navigator.userAgent.toLowerCase();//判断登陆端是pc还是手机
//
//     if (window.devicePixelRatio !== undefined) {
//         ratio = window.devicePixelRatio;
//     }
//     else if (~ua.indexOf('msie')) {
//         if (screen.deviceXDPI && screen.logicalXDPI) {
//             ratio = screen.deviceXDPI / screen.logicalXDPI;
//         }
//     }
//     else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
//         ratio = window.outerWidth / window.innerWidth;
//     }
//
//     if (ratio) {
//         ratio = Math.round(ratio * 100);
//     }
//     if (ratio!==100) {
//         return ratio;
//     }
// }
//
// function navMonitor(){
//     if (detectZoom()===200){
//
//     }
// }
//

