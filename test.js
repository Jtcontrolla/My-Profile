// var myNum = 25
// var myNum = 90
// var myNum = 80
// var myNum = 70
// var myNum = 85

// if ( myNum <= 20){
//     document.write("Yes correct number")
// } else if(myNum == 22){
//     console.log("this okay")
// }else if(){
//     console.log("error")
// }



// if ( myNum >= 20 && myNum <= 15  && myNum) {
//     document.write("Yes correct number")
// } else {
//     console.log("error")
// }


// var age = 5;

// while (age <= 10 ){
//     console.log("your age is less than 10");
//     age++;
// }
// document.write("you are now over 10")



// for(age = 10; age < 20; age++){
//     console.log("your age is less than 20");
// }
// document.write("you are over 20");

// for (i = 0; i < 10; i++){

//     if(i === 4 || i === 5){
//         continue;
//     }

//     console.log(i);

//     if (i === 7){
//         break;
//     }
// }
// console.log("i have broken out of the loop");

// function getAverage (a,b,c,d){
//     var average = (a + b + c + d) / 4;  //local variable
//     console.log(average);
//     return average;
// }

// var myResult = getAverage(10,20,16,40);  //global variable
// console.log( myResult);

// function logResult(){
//     console.log("the average is " + myResult + "but inside a function");
// }
// logResult(); 

// var myString = "I am a legend"

// console.log(myString.length);
// console.log(myString.indexOf("legend"));
// console.log(myString.indexOf("move"));

// var Naths = "Good life"

// var newNath = Naths.split(",");

// console.log(newNath); 

// var myArray = [2,5,67,8,9,5];

// var myArray = [];
// myArray[0] = 5;
// myArray[1] = 10;
// myArray[2] = "yes";

// console.log(myArray)


// var content = document.getElementById("content");
// var myButton = document.getElementById("show-more");

// myButton.onclick = function() {
//     if (content.className == "open"){

//         //shrink the box
//         content.className = "";
//         myButton.innerHTML = "Show More";
//     } else{
//         //expand the box
//         content.className = "open";
//         myButton.innerHTML = "Show Less";
//     }
// }



var colourChanger = document.getElementById("colour-changer");
var colours = ["red", "blue", "green", "purple"];
var counter = 0;

function changeColour(){
    if(counter >= colours.length){
        counter = 0;
    }

    colourChanger.style.background = colours[counter];
    counter++;
}

var myTimer = setInterval(changeColour, 3000);

colourChanger.onclick = function(){
    clearInterval(myTimer);
    colourChanger.innerHTML = "Timer Stopped";
}

