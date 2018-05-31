var td = 31;
var tm = 5;
var ty = 2018;
var bd = 1 ;
var bm = 6;
var by = 1947;
var leapYear = ty%4;
var totalDays;
var dd=td-bd;
var dm=tm-bm;
var dy=ty-by;
 if (dd<0 && ((tm===1) ||(tm===3)||(tm===5)||(tm===7)||(tm===8)||(tm===10) || (tm===12)))
      {  dd += 31; dm--; }
 else if ((dd<0) && (tm===2) && (leapYear===0))
         {dd +=29; dm--;}
  else  if ((dd<0) && (tm===2))
       {dd +=28; dm--;}
  else if ((dd<0) && ((tm=== 4) || (tm=== 6) || (tm===9) || (tm=== 11)))
        {dd+=30; dm--;}
 if (dm<0)
 	    {dy--; dm+=12;}
 	totalDays=dy*365.25+dm*30.55+dd;
alert("Your current age is found to be"+ dy+ " years "+ dm +" months and "+ dd +"  days and the number of days you lived are " + totalDays);