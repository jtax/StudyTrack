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


     var getTask = function(classCode){
      var taskList = snapshot.tasks;
         return taskList[classCode];
    };
    this.getTask = getTask;

    var getTasks = function(){
        var tasks = [];
        var subjects = snapshot.tasks;
        for(var subject in subjects){
            tasks.push(getTask(subject));
        }
        return tasks;
    };
    this.getTasks = getTasks;

    var getSubject = function(classCode){
        var SubjectList = snapshot.subjects;
        return SubjectList[classCode];
    };
    this.getSubject = getSubject;

    var getSubjects = function(){
        return snapshot.subjects;
    };
    this.getSubjects = getSubjects;

    this.init= function(){


    };

    this.startListening = function(){
        var userRef = firebase.database().ref('users/'+ accountManager.getUser().uid);
        userRef.on('value',function(snapshot){updateSummary(snapshot.val())});
    };
    this.saveTask = function (task, subject, deadline){
        firebase.database().ref('users/'+ accountManager.getUser().uid + "/tasks/" +subject).push({
            subject:subject,
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