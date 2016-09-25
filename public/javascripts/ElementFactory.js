/**
 * Created by baird on 15/09/2016.
 */
function ElementFactory(){
    this.createTaskSummary = function(task){
        var text = "";
        var date = "";
        var classCode = "";
        var className = "";

        var startElem = "<div class='summaryElem'><div class='header'>";
        var header = "<span class='headerLeft'>" + text + "</span><span class='headerRight'>" + date + "</span></div>";
        var body = "<p>" + classCode + "</p><p>" + className + "</p></div>";
        return startElem + header + body;
    }
}