/**
 * Created by baird on 12/09/2016.
 */
function Database(){
    var snapshot;
    var userRef;

    this.setUserRef = function(){
        userRef = "users/" + accountManager.getUser().uid;
    };

    this.getLastSnapshot = function(){
        return snapshot;
    };


     var getTasks = function(classCode){
      var subject = getSubject(classCode);
        return subject.tasks;
    };
    this.getTasks = getTasks;


    var getSubject = function(classCode){
        var SubjectList = snapshot.subjects;
        return SubjectList[classCode];
    };
    this.getSubject = getSubject;

    this.getSubjects = function(){
        return snapshot.subjects;
    };

    this.init= function(){


    };

    this.startListening = function(){
        var userRef = firebase.database().ref('users/'+ accountManager.getUser().uid);
        userRef.on('value',function(snapshot){updateSummary(snapshot.val())});
    };
    this.saveTask = function (task, subject, deadline){
        firebase.database().ref('users/'+ accountManager.getUser().uid + "/subjects/" + subject + "/tasks").push({
            task:task,
            deadline:deadline
        });
    };

    var updateSummary = function(data){
        snapshot = data;
        summaryBuilder.updateData();
    };
    this.saveSubject = function (name, lecturer, code){
        firebase.database().ref('users/'+ accountManager.getUser().uid + "/subjects/" + code).update({
            name:name,
            lecturer:lecturer
        });
    };

    this.saveClass = function (code, day,time,duration,location,type){
        firebase.database().ref('users/'+ accountManager.getUser().uid + "/subjects/" + code + "/classes/").push({
            day:day,
            time:time,
            duration:duration,
            location:location,
            type:type
        });
    };


}

var database = new Database();
database.init();