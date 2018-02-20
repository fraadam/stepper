/*Adott a következő táblázat:
* 
* |0|1|2|
* |3|4|5|
* |6|7|8|
* 
* Írjatok programot, ami a '4' pontról 2 lépést tesz és megmondja, melyik számon áll.
* Írja ki számmal és betűvel is.
* Egy lépés értékkészlete a következő lehet: up, down, left, right.
* Ha olyan pontot érünk, ami a táblázaton kívül esik, írjon ki a program X-et.
* A feladatot a switch statement segítségével oldjátok meg.
* Ha tudnátok se használjatok máshol tanult megoldásokat.
* Javaslom, hogy előbb rajzoljatok papíron. Pont mint az ősember.
* Továbbá egy tipp: Kommentben írhattok a switch-ek fölé megjegyzést magatoknak.
* Jó munkát! */

var arr = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8]];

var readlineSync = require('readline-sync');
var x = 1;
var y = 1;
var check = true;

function stepTwo () {
  var dir = readlineSync.keyIn('Which direction do you want to go?');

  switch (dir) {
    case 'q':
      x = x - 1;
      y = y - 1;  // up-left
      break;
    case 'e':
      x = x + 1;
      y = y - 1; // up-right
      break;
    case 'y':
      y = y + 1;
      x = x - 1; // down-left
      break;
    case 'c':
      y = y + 1;
      x = x + 1; // down-right
      break;
    case 'a':
      x = x - 2;    // left
      break;
    case 'd':
      x = x + 2;   // right
      break;
    case 'w':
      y = y - 2;  // up
      break;
    case 'x':
      y = y + 2;  // down
      break;
    case '0':
      check = false;
      break;
  }
}

function steps () {
  while (check) {
    stepTwo();
    console.log(arr[y][x]);
    switch (arr[y][x]) {
      case 0:
        console.log('zero');
        break;
      case 1:
        console.log('one');
        break; 
      case 2:
        console.log('two');
        break; 
      case 3:
        console.log('three');
        break; 
      case 4:
        console.log('four');
        break; 
      case 5:
        console.log('five');
        break; 
      case 6:
        console.log('six');
        break; 
      case 7:
        console.log('seven');
        break;
      case 8:
        console.log('eight');
        break;
    }
  }
}
steps();
