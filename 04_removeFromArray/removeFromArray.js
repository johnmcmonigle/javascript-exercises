const removeFromArray = function(array, ...args) {

    for (const arg of args) {
        
        while (array.includes(arg)) {
            let index = array.indexOf(arg);
            array.splice(index, 1);
        }
    
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
