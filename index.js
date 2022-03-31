var i = 0;
var txt = 'I Love You So Much darling 🥰🥰🥰🥰🥰 ........ you can talk to me on instagram ..... my insta id is shubham__wantgf ......  \n';
var speed = 50;
        
   function yes() {
    if (i < txt.length) {
       document.getElementById("demo").innerHTML += txt.charAt(i);
       i++;
      setTimeout(yes, speed);
    }
 }

var j = 0;
var txt_n = 'tori maa ka bhosda tu apne aap ko samajhate kya be tere jaise bahut dekhe h wo to mera ek frnd humko dere deya tha isleye tumko purpose kiye nahi to tere per muh marne bhi nhai aate hum. randi sali chamkandi sakal wali..';
var speed = 50;
        
   function no() {
    if (j < txt_n.length) {
       document.getElementById("demo").innerHTML += txt_n.charAt(j);
       j++;
      setTimeout(no, speed);
    }
 }