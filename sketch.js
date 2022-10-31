var x,y; 

var safe; 

//function setup
function setup() {
  createCanvas(700, 500);
  //laden van het poppetje
  mainCharacter = loadImage('Assets/Kok.png');    
  
  x = 50;  
  y = 400;  
  safe = true;  
  textSize(24);
  stroke('black');
  
  // Het ding wat hij moet pakken
  collectItem = loadImage('Assets/redden.png'); 

  
}

function draw() {
  
  
  console.log(safe);  // Dit is om te checken of hij niet de muur raakt

  background('red');
  text('De keuken staat in brand!', 10, 40);
  
  text('Red de pannenkoeken!', 10, 80);

  image(mainCharacter, x, y, 80, 100);  
  image(collectItem, 610, 405, 90, 90); 
  
  //Keyboard lopen met pijltjes functie
  if (keyIsDown(RIGHT_ARROW)) {
    x = x + 10;  
    }
  if (keyIsDown(LEFT_ARROW)) {
    x = x - 10;  
    }
  if (keyIsDown(UP_ARROW)) {
    y = y - 10;  
    }
  if (keyIsDown(DOWN_ARROW)) {
    y = y + 10; 
    }
  
  //Muren 
  wall1 = rect(150, 140, 20, 360); 
  
  wall2 = rect(490, 0, 20, 360); 
  
  // Hij mag niet tegen deze muren aanlopen
  if (x > 100 && x <170 && y > 100) {
    safe = false;
   setup();  //spel opnieuw
    
  if (x > 450 && x <500 && y < 10) {
    safe = false;
   setup();  //spel opnieuw
  }
  }
  
  d = int(dist(x, y, 650, 450)); 
  
  
  if (d <40) {
    text('Goedzo, je hebt de pannenkoeken gered! ', 200, 300);
   
  }
  

}