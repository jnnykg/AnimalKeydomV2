//ICM Final3 : All running, Fonts,Colors, Wrong Buzzer

let flagLearnMode;
let flagCorrectAns;
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let cont;

// Start sketch with a starter message
let message = "Let's Begin!";

let myKeyVal; 
function setup() {
  
  createKeyValues();

  
  rectMode(CENTER);
  textFont('Comic Sans MS');
  // Randomly prompt a letter at the start of sketch once in setup
  letter = int(random(0, alphabet.length-1));
  
  background(255);

  // Randomly chooses a letter to type
  // Putting it here doesn't allow pressing a new key to change to a new letter
  
  createButtons();
  windowImage();
  flagLearnMode = 1;

}

function draw() {  
  textAlign(CENTER);
  noStroke();
  /*
  image(goldcup,0, 0);
  if(goldcup.getCurrentFrame() == goldcup.numFrames() - 1){
    
      goldcup.pause();
     
  }
  */

  if(flagLearnMode == 0){  //Game Mode
    
    // If alphabet string is empty
    // Set new message
    // Prompt cont string to reset
    if (alphabet == '') {
      //goldcup.play();
      noStroke();
      fill('HoneyDew');
      rect(width/2, height/5*3-30, width, height/8 +10); 

      fill('#F5B040');
      stroke('#FFB41E');
      strokeWeight(1);
      textStyle(BOLD);
      textSize(30);
      cont = 'WELL DONE — You did it!';
      text(cont, width/2, (height/5*3)-30);
      fill('#2791C7');
      noStroke();
      textSize(20);
      text('Press ENTER to Reset', width/2, (height/5*2.75)+46);
      message = '';


    } else { 
      noStroke();
      fill('Honeydew');
      rect(width/2, height/5*3-30, width, height/8 + 10);
      fill('#2791C7');
      textSize(30);
      
      if(cont == ''){
        
        cont = "Mouse click to select your answer ";
         
      }
      
      text(cont, width/2, (height/5*3)+10);
      textSize(22);

      if(message == "Yayy!!! You answered right ☺"){

        fill('Orange');
        text(message, width/2, height/5*2.75);


      }else if(message == "Let's Begin!"){

        fill('#39a8c5');
        text(message, width/2, height/5*2.75);

      }else {
        fill('Red');
        textSize(24);
        text(message, width/2, height/5*2.75);
      }

    }
  }else{
    
  // If alphabet string is empty
  // Set new message
  // Prompt cont string to reset
  if (alphabet == '') {
    //goldcup.play();
    noStroke();
    fill('HoneyDew');
    rect(width/2, height/5*3-30, width, height/8 +10); 

    fill('#F5B040');
    stroke('#FFB41E');
    strokeWeight(1);
    textStyle(BOLD);
    textSize(30);
    cont = 'WELL DONE — You did it!';
    text(cont, width/2, (height/5*3)-30);
    fill('#2791C7');
    noStroke();
    textSize(20);
    text('Press ENTER to Reset', width/2, (height/5*2.75)+46);
    message = '';
  
  } else { 
    noStroke();
    fill('Honeydew');
    rect(width/2, height/5*3-30, width, height/8 + 10);
    fill('#2791C7');
    textSize(30);
    cont = 'Find "' + alphabet[letter] + '" to Continue';
    text(cont, width/2, (height/5*3)+10);
    textSize(22);

    if(message == "Great job! ☺"){
 
      fill('Orange');
      text(message, width/2, height/5*2.75);
         
    }else if(message == "Let's Begin!"){
      
      fill('#39a8c5');
      text(message, width/2, height/5*2.75);
      
    }else {
      fill('Red');
      textSize(24);
      text(message, width/2, height/5*1.25);
    }
  } 
  }
}
