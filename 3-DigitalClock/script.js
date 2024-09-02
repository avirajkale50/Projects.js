//Project 3 : Time display
/*
1.This project is simple but yet important as it asked in many interview
2.Also the method like setInterval and time method are important here 
3.Here we get to know how to display time
*/

const clock = document.getElementById('clock')


setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)