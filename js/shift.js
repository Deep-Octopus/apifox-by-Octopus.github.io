// 监听
//滑动后删除文本框原内容没做
function listening() {
    const login = document.getElementById("login_div");
    const register = document.getElementById("register_div");

    const cover = document.getElementById("id_cover");
    // ("#id_cover").add;
    // cover.classList.replace("cover","newCover");
    //左滑
    const bt = document.getElementById("btOfCover");
    if (bt.value === "Register") {
        cover.style.animation = "moveLeft 1s";
        // cover.style.marginLeft = "-30px";
        cover.style.transform="translate(-150%,-50%)"
        login.style.animation = "shrink 1s";
        register.style.animation = "enlarge 1s";

        register.style.width = "400px";
        register.style.display = "inline";
        login.style.width = "200px";
        // bt.style.content=;
        bt.value = "Login";
    } else {
        cover.style.animation = "moveRight 1s";
        // cover.style.marginLeft = "370px";
        cover.style.transform="translate(50%,-50%)"
        register.style.animation = "shrink 1s";
        login.style.animation = "enlarge 1s";
        login.style.width = "400px";
        login.style.display = "inline";
        register.style.width = "200px";
        // bt.style.content="Register";
        bt.value = "Register";
    }
    bt.onclick = function () {
        listening();
    };
    cover.innerHTML;
}

const emailStandard = /^\d{10}@[a-zA-Z\d]+\.([a-zA-Z]{2,4})$/;
const userNameStandard = /^[\da-zA-Z]{3,15}/;
const pwdStandard = /^[a-zA-Z\d]{6,20}$/;
const nickNameStandard = /[\u4e00-\u9fa5a-zA-Z\d]{3,20}/;


//注册
function register() {
    if (typeof (Storage) !== "undefined") {
        let userName = document.getElementById("user_name").value;
        let nickName = document.getElementById("nick_name").value;
        let email = document.getElementById("email").value;
        let first_pwd = document.getElementById("first_pwd").value;
        let second_pwd = document.getElementById("sec_pwd").value;

        let array;
        if (window.localStorage.userArr) {//判断是否存在
            array = JSON.parse(window.localStorage.userArr);
        } else {
            array = [];//创建一个新数组
        }

        if (checkUserName(userName, array) && checkNickName(nickName)
            && checkEmail(email, array) && checkPassword(first_pwd, second_pwd)) {
            const obj = {
                nickName: nickName,
                userName: userName,
                email: email,
                password: second_pwd,
                isOn: false
            };
            array.push(obj);
            window.localStorage.userArr = JSON.stringify(array);
            alert("注册成功！");
            // document.getElementById("user_name").innerHTML= "";
            // document.getElementById("nick_name").innerHTML= "";
            // document.getElementById("email").innerHTML= "";
            // document.getElementById("first_pwd").innerHTML= "";
            // document.getElementById("sec_pwd").innerHTML= "";
        }
    } else {
        document.getElementById("result").innerHTML = "对不起，您的浏览器不支持 web 存储。";
    }
}

//检查用户名格式
function checkUserName(userName, array) {
    if (!userNameStandard.test(userName)) {
        alert("用户名不符合格式！请重新输入！");
        return false;
    } else {
        //检查用户名
        //遍历数组进行匹配
        for (let i = 0; i < array.length; i++) {
            //判断是否有相同用户名
            if (userName == array[i].userName) {
                alert("该账号已存在");
                return false;
            }
        }
    }
    return true;
}

function checkNickName(nickName) {
    //检查昵称格式
    if (!nickNameStandard.test(nickName)) {
        alert("昵称格式不符合格式！请重新输入！");
        return false;
    }
    return true;
}

function checkEmail(email, array) {
    //检查邮箱格式
    if (!emailStandard.test(email)) {
        alert("邮箱不符合格式！请重新输入！");
        return false;
    } else {
        //检查邮箱
        //遍历数组进行匹配
        for (let i = 0; i < array.length; i++) {
            //判断是否有相同邮箱
            if (email == array[i].email) {
                alert("该邮箱已被注册");
                return false;
            }
        }

    }
    return true;
}

function checkPassword(first_pwd, second_pwd) {
    //检查密码格式
    if (!pwdStandard.test(first_pwd)) {
        alert("密码不符合格式！请重新输入！");
        return false;
    } else {
        if (first_pwd !== second_pwd) {
            alert("两次输入的密码不一样！");
            return false;
        }
    }
    return true;
}

// let on_user;
let isOn_user;
//登录
function login() {
    if (typeof (Storage) !== "undefined") {
        const userName = document.getElementById('userName').value;
        const password = document.getElementById('password').value;
        let array;
        if (window.localStorage.userArr) {//判断是否存在
            array = JSON.parse(window.localStorage.userArr);
        } else {
            array = [];//创建一个新数组
        }
        let isExist = false;//定义一个开关变量
        let index = 0; //定义一个下标确定用户
        //遍历数组进行匹配
        for (let i = 0; i < array.length; i++) {
            if (userName === array[i].userName) {//有这个账号
                isExist = true;
                index = i;
            }
        }
        if (isExist) {//如果存在
            if (password === array[index].password) {
                alert("登录成功");
                //跳转
                // on_user = userName;
                setOn(userName,true);
                setTimeout(function (){
                    window.location.href = 'planets_of_the_solar_system.html';
                },500);

            } else {
                alert("密码错误");
            }
        } else {//账号不存在或输入错误
            alert('账号不存在或输入错误');
        }
    }else {
        document.getElementById("result").innerHTML = "对不起，您的浏览器不支持 web 存储。";
    }
}

function logout(){
    let index = 0;
    let array = JSON.parse(window.localStorage.userArr);
    for (let i = 0; i < array.length; i++) {
        if (array[i].isOn){
            index = i;
        }
    }

    if (confirm("Dear " + array[index].nickName + " , Are you sure to logout?")){
        setOn(array[index].userName,false);
        setTimeout(function (){
            window.location.href = 'login.html';
        },500);

    }
}
//设置登录状态
function setOn(userName,onCase){
        let userCase = JSON.parse(window.localStorage.userArr);
        for (let i = 0; i < userCase.length; i++) {
            if (userName === userCase[i].userName) {//有这个账号
                userCase[i].isOn = onCase;
            }
        }
    window.localStorage.userArr = JSON.stringify(userCase);
}

function check(num){
    let array;
    if (window.localStorage.userArr){
        array = JSON.parse(window.localStorage.userArr);
        for (let i = 0; i < array.length; i++) {
            if (array[i].isOn){
                if (num===0)
                    window.location.href = 'planets_of_the_solar_system.html';
                return;
            }
        }
        if (num === 1)
            window.location.href = 'login.html';
    }
    else
        if (num === 1)
            window.location.href = 'login.html';

}