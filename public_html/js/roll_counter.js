/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";

//functionality to add:
//num of dice choice

var add = (function () {
    
    var rollTracker = {
        rollArray:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        rollCounter: 0,
        rollProb: [1/36, 2/36, 3/36, 4/36, 5/36, 6/36, 
            5/36, 4/36, 3/36, 2/36, 1/36]
    };
        
    return function(value){
        rollTracker.rollArray[value-2] ++;
        rollTracker.rollCounter ++;
        return rollTracker;
    };
})();

function updateRoll(value) {
    //object with array containing counters for each roll ("rollArray"), and
    //counter(number) for overall rolls ("rollCounter")
    var tempRollTracker = add(value);
    var rollSummaryGraph = ""; //string rep. prob. graph
    
    //containers for the different classes of table data
    var tableExpNum = document.getElementsByClassName("expNum");
    var tableExpPercent = document.getElementsByClassName("expPercent");
    var tableTheoNum = document.getElementsByClassName("theoNum");
    
    var currentValue = 0; //for use in loops to reduce number of object access
    var diceValue = 0; //for use in loops
    var theoNumRolls = 0; //use in displaying theo num of rolls
    var i, j, k;

    //populate summary table and rollSummaryGraph string
    for (i = 0; i < 11; i++) {
        diceValue = i+2;
        currentValue = tempRollTracker.rollArray[i];
        tableExpNum[i].innerHTML = currentValue;
        tableExpPercent[i].innerHTML = 
                (currentValue * 100 /
                tempRollTracker.rollCounter).toFixed(0) + "%";

        theoNumRolls = Math.floor(tempRollTracker.rollCounter *
                tempRollTracker.rollProb[i]);
        tableTheoNum[i].innerHTML = theoNumRolls + " or " + (theoNumRolls + 1);

        if (diceValue < 10) {
            rollSummaryGraph += "0" + diceValue + ":|"; 
        } else {
            rollSummaryGraph += diceValue + ":|";
        }
        k = tempRollTracker.rollArray[i];
        for (j = 0; j < k; j++) {		
                rollSummaryGraph += "~";
        }
        rollSummaryGraph += "<br>";
    }
    
    tableExpNum[i].innerHTML = tempRollTracker.rollCounter;
    tableTheoNum[i].innerHTML = tempRollTracker.rollCounter;
    tableExpPercent[i].innerHTML = "100%";
   
    document.getElementById("expRollDisplay").innerHTML = rollSummaryGraph;
}

function reloadPage() {
    location.reload();
}

/* version 2
var add = (function () {
    
    var rollTracker = {
        rollArray:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        rollCounter: 0,
        rollProb: [1/36, 2/36, 3/36, 4/36, 5/36, 6/36, 
            5/36, 4/36, 3/36, 2/36, 1/36]
    };
        
    return function(value){
        rollTracker.rollArray[value-2] ++;
        rollTracker.rollCounter ++;
        return rollTracker;
    };
})();

function updateRoll(value) {
    //object with array containing counters for each roll ("rollArray"), and
    //counter(number) for overall rolls ("rollCounter")
    var tempRollTracker = add(value);
    var rollSummaryGraph = ""; //string rep. prob. graph
    
    //containers for the different classes of table data
    var tableExpNum = document.getElementsByClassName("expNum");
    var tableExpPercent = document.getElementsByClassName("expPercent");
    var tableTheoNum = document.getElementsByClassName("theoNum");
    
    var currentValue = 0; //for use in loops to reduce number of object access
    var diceValue = 0; //for use in loops
    var i, j, k;

    //populate summary table and rollSummaryGraph string
    for (i = 0; i < 11; i++) {
            diceValue = i+2;
            currentValue = tempRollTracker.rollArray[i];
            tableExpNum[i].innerHTML = currentValue;
            tableExpPercent[i].innerHTML = 
                    (currentValue * 100 /
                    tempRollTracker.rollCounter).toFixed(0) + "%";

            //needs to be fixed...does not indicate acutal number of rolls
            tableTheoNum[i].innerHTML = (tempRollTracker.rollCounter *
                    tempRollTracker.rollProb[i]).toFixed(0);

            if (diceValue < 10) {
                    if (tempRollTracker.rollArray[i] < 10) {
                            rollSummaryGraph += "0" + diceValue + ": 0" + 
                                    tempRollTracker.rollArray[i] + " |";
                    } else {
                            rollSummaryGraph += "0" + diceValue + ": " + 
                                    tempRollTracker.rollArray[i] + " |";
                    }
            } else {
                    if (tempRollTracker.rollArray[i] < 10) {
                            rollSummaryGraph += diceValue + ": 0" + 
                                    tempRollTracker.rollArray[i] + " |";
                    } else {
                            rollSummaryGraph += diceValue + ": " + 
                                    tempRollTracker.rollArray[i] + " |";
                    }
            }
            k = tempRollTracker.rollArray[i];
            for (j = 0; j < k; j++) {		
                    rollSummaryGraph += "*";
            }
            rollSummaryGraph += "<br>";
    }
    
    tableExpNum[i].innerHTML = tempRollTracker.rollCounter;
    tableExpPercent[i].innerHTML = "100%";
    
    document.getElementById("expRollDisplay").innerHTML = rollSummaryGraph;
   
    
}

function reloadPage() {
    location.reload();
}
*/

/* Version 1.0
function updateRoll(value) {
    document.getElementById("testDisplay").innerHTML = "You rolled a " + value;
}

var rollArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var numRolls = 0;

resetCount();


function updateRoll(value) {

	var rollSummary = "";
	var diceValue;
	rollArray[value-2] ++;
	numRolls ++;

	var i, j, k;

	for (i = 0; i < 11; i++) {
		diceValue = i+2;
		if (diceValue < 10) {
			if (rollArray[i] < 10) {
				rollSummary += "0" + diceValue + ": 0" + rollArray[i] + " |";
			} else {
				rollSummary += "0" + diceValue + ": " + rollArray[i] + " |";
			}
		} else {
			if (rollArray[i] < 10) {
				rollSummary += diceValue + ": 0" + rollArray[i] + " |";
			} else {
				rollSummary += diceValue + ": " + rollArray[i] + " |";
			}
		}
                k = rollArray[i];
		for (j = 0; j < k; j++) {		
			rollSummary += "*";
		}		
		rollSummary += "<br>";
	}
	document.getElementById("rollDisplay").innerHTML = rollSummary;
	document.getElementById("numRollDisplay").innerHTML = "There have been " +
		numRolls + " rolls.";
}

function resetCount(){
        var rollSummary = "";
        var i;
        var arrayLength = rollArray.length;
        var rollValue;
	rollArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	numRolls = 0;
        
        for (i = 0; i < arrayLength; i++){
            rollValue = i + 2;
            if (rollValue < 10){
                rollSummary += "0" + rollValue + ": 00" + "<br>" ;
            } else {
                rollSummary += rollValue + ": 00" + "<br>";
            }
        }
	document.getElementById("rollDisplay").innerHTML = rollSummary;
	document.getElementById("numRollDisplay").innerHTML = "There have been " +
		numRolls + " rolls.";
}
*/
