/**
 * Created by baird on 12/09/2016.
 */
function LoginHandler(){
    var loginBtn, loginPara,homePara;

    var handleLogin = function(authorised){
        if(!authorised) {
            accountManager.login(handleLogin);
        }else {
            genWelcome();
        }
    };

    var genWelcome = function(){
        getElemID("displayName").innerHTML = accountManager.getUser().displayName;
        getElemID("userPic").src = accountManager.getUser().photoURL;
        loginPara.classList.add("hide");
        homePara.classList.remove("hide");
        getElemID("headerMenu").classList.remove("hide");
        getElemID("userPic").classList.remove("hide");
        getElemID("summaryList").classList.remove("hide");
        database.startListening();
    };

    this.init = function(){
        loginBtn = getElemID("loginBtn");
        loginBtn.addEventListener("click",function(){handleLogin(false)});

        loginPara = getElemID("landing");
        homePara = getElemID("loginLanding");
    };
}

var login = new LoginHandler();
login.init();