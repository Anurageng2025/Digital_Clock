// const students = [
//     { name: 'David', marks: 80 },
//     { name: 'Vinoth', marks: 77 },
//     { name: 'Divya', marks: 88 },
//     { name: 'Ishitha', marks: 95 },
//     { name: 'Thomas', marks: 68 }
// ];

// function Average(students) {
//     let totalMarks = 0;
//     for (let i = 0; i < students.length; i++) {
//         totalMarks += students[i].marks;
//     }
//     return totalMarks / students.length;
// }

// function Grade(average) {
//     if (average < 60) {
//         return 'F';
//     } else if (average < 70) {
//         return 'D';
//     } else if (average < 80) {
//         return 'C';
//     } else if (average < 90) {
//         return 'B';
//     } else {
//         return 'A';
//     }
// }
// const averageMarks = Average(students);
// const grade = Grade(averageMarks);
// console.log("The average marks of the students is ",averageMarks.toFixed(2));
// console.log("The corresponding grade is ",grade );


// Switch case is alternative of if else 

// let day =6;

// let dayName ;

// switch(day){
//     case 1:
//        dayName = "Sunday";
//        break;
//     case 2: 
//        dayName = "Monday";
//        break;
//     case 3:
//         dayName = "Tuesday";
//         break;
//     case 4:
//         dayName = "Wednesday";
//         break;
//     case 5:
//         dayName  = "Thursday";
//         break;
//     case 6:
//         dayName = "Friday";
//         break;
//     case 7:
//         dayName = "Saturday";
//         break;  
//     default :
//        dayName = "You Choice a Wrong Day Nmber. Kindly Check it again Please."                     
// }

// console.log(dayName);

// Break Satatement is used to stop loop on specific condition 


// let num =20;
// for(let i=1;i<=num;i++){
//     if(i%2==0{
//         console.log(i, " is a even number");
//     })
// }

// Function : Functions are the block of code that is written once and used it many time it enhance the useability

// function Person(name,age){
//     console.log("my name is ",name ,"\n my age is ",age)
// }

setInterval(showTime, 1000);
 
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
 
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
 
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime =
        hour +
        ":" +
        min +
        ":" +
        sec +
        am_pm;
 
    document.getElementById(
        "clock"
    ).innerHTML = currentTime;
}
 
showTime();