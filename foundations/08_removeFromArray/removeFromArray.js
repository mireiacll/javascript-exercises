const removeFromArray = function(arr,...exc) {

    return arr.filter(val => !exc.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
