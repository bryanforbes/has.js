define(['../has'], function(has){
    var addtest = has.add,
        cssprop = has.cssprop;

    if(!has("dom")){ return has; }

    var script = document.createElement("script");

    addtest("script-defer", function(){
        return ("defer" in script);
    });

    addtest("script-async", function(){
        return ("async" in script);
    });

    return has;
});
