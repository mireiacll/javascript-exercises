const leapYears = function(year) {
    res4=year%4;
    res100=year%100;
    res400=year%400;
    if ((res4==0&&res100!=0)||res400==0){
        return true;
    }
    else{
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
