/**
 * Created by baird on 12/09/2016.
 */
function Sidebar() {
    var sidebar = getElemID("sidebar");
    var menuBtn = getElemID("headerMenu");
    var closeBtn = getElemID("sbClose");

    /**Add Task Form Components**/
    var addTaskBtn = getElemID("addTaskBtn");
    var addTaskForm = getElemID("addTaskForm");
    var addTaskSubmit = getElemID("submitTask");

    /**Add Class Form Components**/
    var addClassBtn = getElemID("addClassBtn");
    var addClassForm = getElemID("addClassForm");
    var addClassSubmit = getElemID("submitClass");

    /**Add Subject Form Components**/
    var addSubjectBtn = getElemID("addSubjectBtn");
    var addSubjectForm = getElemID("addSubjectForm");
    var addSubjectSubmit = getElemID("submitSubject");


    var toggleSidebar = function () {
        sidebar.classList.toggle("hide");
    };
    var toggleAddTask = function () {
        addTaskForm.classList.toggle("hide");
    };
    var toggleAddClass = function () {
        addClassForm.classList.toggle("hide");
    };
    var toggleAddSubject = function () {
        addSubjectForm.classList.toggle("hide");
    };


    var addTask = function () {
        var task = getElemID("aTTask").value;
        var deadline = getElemID("aTDeadline").value;
        var subject = getElemID("aTSubject").value;
        database.saveTask(task, subject, deadline);
    };
    var addSubject = function(){
        var name = getElemID("aSName").value;
        var lecturer = getElemID("aSLecturer").value;
        var code = getElemID("aSCode").value;
        database.saveSubject(name,lecturer,code);
    };
    var addClass = function(){
        var code = getElemID("aCCode").value;
        var day = getElemID("aCDay").value;
        var time = getElemID("aCTime").value;
        var duration = getElemID("aCDuration").value;
        var location = getElemID("aCLocation").value;
        var type = getElemID("aCType").value;
        database.saveClass(code,day,time,duration,location,type);
    };

    this.init = function () {
        menuBtn.addEventListener("click", toggleSidebar);
        closeBtn.addEventListener("click", toggleSidebar);

        addTaskBtn.addEventListener("click", toggleAddTask);
        addTaskSubmit.addEventListener("click", addTask);

        addClassBtn.addEventListener("click", toggleAddClass);
        addClassSubmit.addEventListener("click", addClass);

        addSubjectBtn.addEventListener("click", toggleAddSubject);
        addSubjectSubmit.addEventListener("click", addSubject);
    }
}

var sidebar = new Sidebar();
sidebar.init();