enum Daysoftheweek {
   SUN, MON, TUE, WED, THU, FRI, SAT
}
interface Weekend{ 
dayname: string;

}
var dayname: string = 'SATURDAY'

var dayname: string = 'SUNDAY'

class PickaDay { 
   Weekend: any
   constructor( public dayname: string)
   { this.Weekend = + "Time to rest "}
}
function  Day(weekend: any) { return weekend.dayname + "Time to rest"}

   
