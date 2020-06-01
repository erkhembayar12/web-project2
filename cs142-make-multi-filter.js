    
'use strict';

function cs142MakeMultiFilter(originalArray) {
    var currentArray = originalArray;
    function arrayFilter (filterCriteria, callback) {
        if (typeof filterCriteria !== "function") {
            return currentArray;
            console.log("currentArray:",currantArray);            
        }
        
        currentArray = currentArray.filter(filterCriteria);
        console.log("filterdew:",currentArray);
        
        if (typeof callback === "function") {
            callback.call(originalArray, currentArray);
        }
        return arrayFilter;
    }
    return arrayFilter;
