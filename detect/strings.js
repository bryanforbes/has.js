define(['../has'], function(has){
    var addtest = has.add,
        cssprop = has.cssprop;

    // String tests
    addtest("string-trim", function(){
        return {}.toString.call(''.trim) == "[object Function]";
    });

    return has;
});
