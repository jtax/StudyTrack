/**
 * Created by baird on 15/09/2016.
 */
function ElementFactory(){
    this.createTaskSummary = function(task, subject){
        var text = task.task;
        var date = task.deadline;
        var classCode, className ;

        if(subject) {
             classCode = subject.code;
             className = subject.name;
        }else{
             classCode = task.subject;
             className = "";
        }

        var classLabel = classCode + " " + className;

        return createSummaryElement(task,"TASK",text,date,classLabel,"");
    };

    this.createClassSummary = function(_class, subject){
        var classLabel = subject.code + " " + subject.name;
        var time = _class.time;
        var location = _class.location;
        var type = _class.type;
        return createSummaryElement(_class,"CLASS",classLabel,time,location,time);
    };

    var createSummaryElement = function(id,type,titleLeft,titleRight,bodyLeft,bodyRight){
        var startElem = "<div class='summaryElem "+type+" ' id='"+id+"'><div class='header'>";
        var header = "<span class='headerLeft'>" + titleLeft + "</span><span class='headerRight'>" + titleRight + "</span></div>";
        var body = "<p>" + bodyLeft + "</p><p>" + bodyRight + "</p></div>";
        return startElem + header + body;
    }
}
var elemFactory = new ElementFactory();