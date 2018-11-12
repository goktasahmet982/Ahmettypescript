enum Daysoftheweek {
   SUN, MON, TUE, WED, THU, FRI, SAT
}
interface Weekend{ 
dayname: string;
dayNo: number;

}
var dayname: string = 'SAT',
dayNo: number = 7,
Aname: string = 'Gym Day';

var dayname: string = 'SUN',
dayNo: number = 8,
Aname: string = 'Fun Day';

class PickaDay { 
   Weekend: any
   constructor( public dayname: string, public dayNo: number, public Aname: string)
   { this.Weekend = + dayname + "for" + dayNo + " Day" + Aname + ".";
}
}
function  Day(weekend: any) {
    return weekend.dayname + "for" + weekend.dayNo + "Day" + weekend.Aname + ".";
   }
   let perf = new PickaDay("SUN", 8, "Fun Day");
    
   document.body.innerHTML = Day(0);

