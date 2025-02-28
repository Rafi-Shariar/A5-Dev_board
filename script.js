let D = new Date();
const Today_Date = D.toDateString();
const Date_Array = Today_Date.split(' ');
document.getElementById('Day').innerText = Date_Array[0];
document.getElementById('Date').innerText = Date_Array[2] +' '+ Date_Array[1] +' '+ Date_Array[3];



