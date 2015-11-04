/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";
/*
function testFunction(){
    console.log("start of test");

    var warDeck = new stack();
    console.log("stack object created");
    console.log("card array start with length " + warDeck.cards.length);

    warDeck.newDeck();
    console.log("stack attempted to be populated");
    var stackSize = warDeck.cards.length;
    console.log("card array now with length " + stackSize);
    
    
    warDeck.shuffle();
    console.log("deck was shuffled");
    console.log("about to start drawing");
    var i;
    for (i = 0; i < 52; i++) {
        console.log(warDeck.draw().toString());
        console.log("-- " + warDeck.cards.length + " cards remaining");
    }
    console.log("drawing complete");
    console.log(warDeck.cards.length + " cards remaining");
}
*/

function card(type, value){
    this.type = type;
    this.value = value;
    this.toString = cardToString;
}

function stack(){
    this.cards = [];
    this.newDeck = function(){
        var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        var i; //suit picker
        var j; //card value
    
        for (i = 0; i < 4; i++){
            for (j = 0; j < 13; j++){
                this.cards.push(new card(suits[i], j+1));
            }
        }
    }; 
    //not sure if/why these semicolons are needed since this isn't an
    //exicutable line of code
    this.shuffle = function(){
        var currentIndex = this.cards.length, randomIndex, tempValue;
        while (currentIndex !== 0){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex --;
            
            tempValue = this.cards[currentIndex];
            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = tempValue;
        }
    };
    this.draw = function(){
        return this.cards.pop();
    };
//    this.deal = dealCards; //takes as argument array with player stacks
//    this.play = playCard;
//    this.bottomCard = drawBottomCard;
}

function drawPile(){
    //object for a random stack of cards that can be drawn from
    var myRandomStack = new stack();
    myRandomStack.newDeck();
    myRandomStack.shuffle();
    console.log("you drew the " + myRandomStack.draw().toString());
}
 
function newOrderedStack(){
// returns an array with 52 ordered cards
    console.log("newOrderedStack called");
    alert("yo yo");
    var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
    var i; //suit picker
    var j; //card value
    
    for (i = 0; i < 4; i++){
        console.log("first for loop started");
        for (j = 0; j < 13; j++){
            this.cards.push(new card(suits[i], j+1));
        }
    }
}


/*
function drawTopCard(){
    return this.cards.shift().toString();
}
*/

function cardToString(){
    var cardString = "";
    switch (this.value){
        case 1:
            cardString = "Ace";
            break;
        case 11:
            cardString = "Jack";
            break;
        case 12:
            cardString = "Queen";
            break;
        case 13:
            cardString = "King";
            break;
        default:
            cardString += this.value;
   }
   cardString += " of " + this.type;
   return cardString;
}


/*
function deckToString(inputCardArray){
    var outputCardString = "";
    var l = inputCardArray.length;
    console.log("array lenght is " + l);
    var i;
    for (i = 0; i < l; i++){
        outputCardString += inputCardArray[i].cardValue + " of " +
            inputCardArray[i].cardType + "<br />";
    }
    return outputCardString;
}
*/

/*
function randomCard(){
//currently only outputs a static card
//add functionallity for random card

    var x = new card("clubs", 4);
    document.getElementById("demo").innerHTML = "Your card is the " + 
            x.cardValue + " of " + x.cardType + ".";
}
*/

/* attempts at creating Closures to deal with global variables
var draw = (function() {
    var deck = newOrderedDeck();
    
    return function(){
        return deck.pop();
    };
})();

var cardDeck = (function(){
    //object for a deck of cards
    var cards = newOrderedDeck();
    //function newDeck(){}
    //function shuffleDeck(){}
    return function(){
        function topCard(){
            alert("attempted top card draw");
            return cards.pop();
        }
        function bottomCard(){
            alert("attempted bottom card draw");
            return cards.shift();
        }
    };
})();
*/