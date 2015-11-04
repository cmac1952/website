/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";

/*
used to test input and output using DOM, and changing/adding/deleting elements

1.  asking for number of dice (buttons, range, select(dropdown); hiding 
    input selectors; adding dice input values (buttons); having dice input
    values 
2.  asking user to input size of table and creating table
*/
  
function myFunction(num){
    var inpNum  = Number(num);
    if (inpNum === 1){
       document.getElementById("outputDisplay").innerHTML = 
            "You are playing with one die.";
    } else {
        document.getElementById("outputDisplay").innerHTML = 
            "You are playing with " + num + " dice.";
    }
    
    //find form element
    var parentForm = document.getElementById("numDice");
    
    //removing input elements
    var childElements = document.getElementById("numDice").elements;
    var numButts = childElements.length;
    var i;
    for (i=0; i < numButts; i++){
        parentForm.removeChild(childElements[0]);
        console.log("removed a child");
    }
    
    //change instruction
    document.getElementById("instructions").innerHTML = 
            "Roll and record:";
    
    //add new input elements depending on the number of dice requested
    var low = inpNum;
    var high = (inpNum*6) + 1;
    var i;
    var tempButt;
    for (i = low; i < high; i++){
        //button input element created inside loop because when it was
        //create outside of loop it would only add one button
        tempButt = document.createElement("input");
        tempButt.type = "button";
        tempButt.value = i;
        parentForm.appendChild(tempButt);
        console.log("a button has been added");
    }
    
}