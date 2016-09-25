/**
 * Created by baird on 15/atraest09/2016.
 */
function SummaryBuilder(){
    this.init = function(){}
    
    this.updateData = function(){
        generateSummary();
    };
    
    var generateSummary = function(){
        database.getLastTaskList();
    };

}

var summaryBuilder = new SummaryBuilder();
summaryBuilder.init();