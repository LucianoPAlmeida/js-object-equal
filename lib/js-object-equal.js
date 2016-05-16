/**
 * Created by lucianoalmeida on 5/14/16.
 */
'user strict';

const internals = {};
internals.compare = function(value1,value2, deep){
    if (deep == undefined || typeof deep != 'boolean' || !deep){
        return value1 == value2;
    }else {
        return value1 === value2;
    }
};

//equals(obj, [deep])
//Extension added to check equality on objects.
//param obj - object to check
//param deep - boolean that indicates if equality test must be deep or not. Optional, so if not defined default is false.
Object.prototype.equals = function (obj, deep) {
    if(!obj || obj == undefined || typeof obj != 'object'){
        return false;
    }
    if(Object.keys(this).length != Object.keys(obj).length){
        return false;
    }
   
    for (var property in this){
        if(typeof this[property] != 'function'){
            if(obj[property] == undefined){
                return false;
            }
            if(typeof this[property] == 'object'){
               if(!this[property].equals(obj[property], deep)){
                   return false;
               }
            }else{
                if(!internals.compare(this[property], obj[property], deep)){
                    return false;
                }
            }
        }
        
    }
    return true;
};

//equals(array, [deep])
//Extension added to check equality on arrays.
//param obj - array to check
//param deep - boolean that indicates if equality test must be deep or not. Optional, so if not defined default is false.
Array.prototype.equals = function (array, deep){
    if (array == undefined){
        return false;
    }
    if(!Array.isArray(array)){
        return false;
    }
    if (this.length != array.length){
        return false;
    }

    for(var i = 0 ; i <  this.length ; i++){
        var value1 = this[i];
        var value2 = array[i];
        if(typeof value1 == 'object'){
            if(Array.isArray(value1)){
                if(!Array.isArray(value2)){
                    return false;
                }else{
                    if(!value1.equals(value2)){
                        return false;
                    }
                }
            }else if(!value1.equals(value2, deep)){
                return false;
            }
        }else{
            if(deep == undefined || typeof deep != 'boolean' || !deep){
                if(value1 != value2){
                    return false;
                }
            }else{
                if(value1 !== value2){
                    return false;
                }
            }
        }
    }
    return true;
};
