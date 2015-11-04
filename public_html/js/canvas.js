/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var w = c.width;
var h = c.height;

function testFunction(){
    ctx.clearRect(0,0,w,h);
    var x = Math.floor(Math.random()*(w-70));
    var y = Math.floor(Math.random()*(h-55));
    var d = new Date();
    var second = d.getSeconds();
    ctx.font = "60px Courier New";
    ctx.fillStyle = "white";
    ctx.textBaseline = "top";
    ctx.fillText(second.toString(), x, y);
}

function testFunction2() {
    
}

function testFunction3() {
    
}