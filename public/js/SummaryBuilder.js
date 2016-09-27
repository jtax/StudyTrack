/**
 * Created by baird on 15/atraest09/2016.
 */
function SummaryBuilder(){
    this.init = function(){}
    
    this.updateData = function(){
        generateSummary();
    };
    
    var generateSummary = function() {
        var classElems = [];
        var subjects = database.getSubjects();
        for (var code in subjects) {
            for (var _class in subjects[code].classes) {
                classElems.push(elemFactory.createClassSummary(subjects[code].classes[_class], subjects[code]));
            }
        }
        for(var elem in classElems){
            getElemID("classSummary").innerHTML += classElems;
        }

    }

}

var summaryBuilder = new SummaryBuilder();
summaryBuilder.init();