/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 400; // x-positie van speler
var spelerY = 200; // y-positie van speler

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler

  // vijand

  // kogel
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand

  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function draw() {
 
  // achtergrond
  fill(150, 250, 50);
  rect(0, 0, width + 2 * 20, height + 2 * 20);
  
  if(spelerX < 25) {spelerX = spelerX + 10}
  if(spelerX > 1255) {spelerX = spelerX - 10}
  if(spelerY < 25) {spelerY = spelerY + 10}
  if(spelerY > 620) {spelerY = spelerY - 10}




  
  // vijand

  // kogel

  // speler
   fill("white");
  rect(spelerX, spelerY + 70, 10, 30)
  rect(spelerX - 10, spelerY + 70, 10, 30)
 rect(spelerX - 15, spelerY + 20, 30, 50)
  ellipse(spelerX, spelerY , 50, 50)
   if(keyIsDown(37)) {spelerX -= 10;}
  if(keyIsDown(39)) {spelerX += 10;}
  if(keyIsDown(38)) {spelerY -= 10;}
  if(keyIsDown(40)) {spelerY += 10;}

  

  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}



 
 if(keyIsDown(LEFT_ARROW)) {spelerX -= 10;}
  if(keyIsDown(RIGHT_ARROW)) {spelerX += 10;}
  if(keyIsDown(UP_ARROW)) {spelerY -= 10;}
  if(keyIsDown(DOWN_ARROW)) {spelerY += 10;}
