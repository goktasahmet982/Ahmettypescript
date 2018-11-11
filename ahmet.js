var Daysoftheweek;
(function (Daysoftheweek) {
    Daysoftheweek[Daysoftheweek["SUN"] = 0] = "SUN";
    Daysoftheweek[Daysoftheweek["MON"] = 1] = "MON";
    Daysoftheweek[Daysoftheweek["TUE"] = 2] = "TUE";
    Daysoftheweek[Daysoftheweek["WED"] = 3] = "WED";
    Daysoftheweek[Daysoftheweek["THU"] = 4] = "THU";
    Daysoftheweek[Daysoftheweek["FRI"] = 5] = "FRI";
    Daysoftheweek[Daysoftheweek["SAT"] = 6] = "SAT";
})(Daysoftheweek || (Daysoftheweek = {}));
var dayname = 'SATURDAY';
var dayname = 'SUNDAY';
var PickaDay = /** @class */ (function () {
    function PickaDay(dayname) {
        this.dayname = dayname;
        this.Weekend = +"Time to rest ";
    }
    return PickaDay;
}());
function Day(weekend) { return weekend.dayname + "Time to rest"; }
