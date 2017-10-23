function counter (index){
    return index + 1;
}

function firstSeven (context, options) { 
    var ret = ""; 
    for (var i = 0, j = 8; i < j; i++) 
    { 
        x=i+1;
        if (typeof context[i] !== "undefined") {
            ret = ret + '<strong>' + x + '.-</strong>' + options.fn(context[i]);
        }    
    } 
    return ret;
    
}
function lastEight (context, options) { 
    var ret = "";
    for (var i = 8, j = 16; i < j; i++) 
    { 
        x = i+1;
        if (typeof context[i] !== "undefined") {
            ret = ret + '<strong>' + x + '.-</strong>' + options.fn(context[i]);
        }
         
    } 
    return ret;
}