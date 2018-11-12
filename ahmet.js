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
var dayname = 'SATURDAY', dayNo = 7, Aname = 'Gym Day';
var dayname = 'SUNDAY', dayNo = 8, Aname = 'Fun Day';
var PickaDay = /** @class */ (function () {
    function PickaDay(dayname, dayNo, Aname) {
        this.dayname = dayname;
        this.dayNo = dayNo;
        this.Aname = Aname;
        this.Weekend = +dayname + "for" + dayNo + " Day" + Aname + ".";
    }
    return PickaDay;
}());
function Day(weekend) {
    return weekend.dayname + "for" + weekend.dayNo + "Day" + weekend.Aname + ".";
}
var perf = new PickaDay("Sunday", 8, "Fun Day");
document.body.innerHTML = Day(0);
