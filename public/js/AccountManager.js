/**
 * Created by baird on 11/09/2016.
 */


function AccountManager() {
    var provider, token, user, counter;

    this.init = function(){
        provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope("email");
        counter = 0;
    };

    this.login = function(callback){
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            token = result.credential.accessToken;
            // The signed-in user info.
            user = result.user;
            counter = 0;
            database.setUserRef();
            callback(true);
        }).catch(function (error) {
            console.log("Auth Error: " + error);
            if(counter <5){
                counter++;
                callback(false);
            }

        });
    };

    this.getUser = function(){
        return user;
    };

    this.getToken = function(){
        return token;
    };

}

var accountManager = new AccountManager();
accountManager.init();