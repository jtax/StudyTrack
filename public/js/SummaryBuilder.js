/**
 * Created by baird on 15/atraest09/2016.
 */
function SummaryBuilder(){
    this.init = function(){}
    
    this.updateData = function(){
        generateSummary();
    };
    
    var generateSummary = function() {
       generateClassSummary();
        generateTaskSummary();
    };

    var generateClassSummary = function(){
        getElemID("classSummary").innerHTML = "<h1>Classes</h1>";
        var classElems = [];
        var subjects = database.getSubjects();
        for (var code in subjects) {
            for (var _class in subjects[code].classes) {
                classElems.push(elemFactory.createClassSummary(subjects[code].classes[_class], subjects[code]));
            }
        }
        for(var elem in classElems){
            getElemID("classSummary").innerHTML += classElems[elem];
        }

    };

    var generateTaskSummary = function(){
        getElemID("taskSummary").innerHTML = "<h1>Tasks</h1>";
        var taskElems = [];
        var taskList = database.getTasks();
        for (var tasks in taskList) {
            for(var task in taskList[tasks]) {
                var subject = database.getSubject(taskList[tasks][task].subject);
                taskElems.push(elemFactory.createTaskSummary(taskList[tasks][task], subject));
            }
        }
        for(var elem in taskElems){
            getElemID("taskSummary").innerHTML += taskElems[elem];
        }
    }

}

var summaryBuilder = new SummaryBuilder();
summaryBuilder.init();