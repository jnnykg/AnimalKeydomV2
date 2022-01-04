let buttonCol = '#15E6C6';

let text_xpos,text_ypos,image_xpos,image_ypos;
  
let b;

let index;

function keyTyped(){
  
  textAlign(CENTER);
  imageMode(CENTER);
  

    
    if (key == 'Enter') {
      alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      letter = int(random(0, alphabet.length-1));
      message = '';
      cont = 'Click on \'PLAY SOUND\' button';
      resetAllButtonColors();
      windowImage();
      return;
    }
  
    if(flagLearnMode == 1){

    // Solved problem in overlapping text by adding background to keyTyped
    windowImage();

    // Check if correct key was pressed
    if(alphabet[letter] == key.toUpperCase()) {


      // If correct
      // Replace letter after it has been chosen
      message = 'Great job! ☺';

      if((key == 'a') || (key == 'A')){
        button_line2[0].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line2[0]),1000);

      }

      if((key == 'b') || (key == 'B')) {
        button_line3[4].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line3[4]),1000); 

      }

      if((key == 'c') || (key == 'C')) {
        button_line3[2].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line3[2]),1000); 

      }

      if((key == 'd') || (key == 'D')) {
        button_line2[2].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line2[2]),800); 

      }

      if((key == 'e') || (key == 'E')) {
        button_line1[2].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line1[2]),1500); 

      }

      if((key == 'f') || (key == 'F')) {
        button_line2[3].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line2[3]),2000); 

      }

      if((key == 'g') || (key == 'G')) {
        button_line2[4].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line2[4]),2400); 

      }

      if((key == 'h') || (key == 'H')) {
        button_line2[5].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line2[5]),1800); 

      }

      if((key == 'i') || (key == 'I')) {
        button_line1[7].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line1[7]),2000); 

      }

      if((key == 'j') || (key == 'J')) {
        button_line2[6].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line2[6]),1500); 

      }

      if((key == 'k') || (key == 'K')) {
        button_line2[7].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line2[7]),2300); 

      }

      if((key == 'l') || (key == 'L')) {
        button_line2[8].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line2[8]),2000); 

      }

      if((key == 'm') || (key == 'M')) {
        button_line3[6].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line3[6]),1000); 

      }

      if((key == 'n') || (key == 'N')) {
        button_line3[5].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line3[5]),2000); 

      }

      if((key == 'o') || (key == 'O')) {
        button_line1[8].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line1[8]),1200); 

      }

      if((key == 'p') || (key == 'P')) {
        button_line1[9].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line1[9]),1000); 

      }

      if((key == 'q') || (key == 'Q')) {
        button_line1[0].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line1[0]),1800); 

      }

      if((key == 'r') || (key == 'R')) {
        button_line1[3].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line1[3]),1000); 

      }

      if((key == 's') || (key == 'S')) {
        button_line2[1].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line2[1]),1000); 

      }

      if((key == 't') || (key == 'T')) {
        button_line1[4].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line1[4]),1500); 

      }

      if((key == 'u') || (key == 'U')) {
        button_line1[6].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line1[6]),1200); 

      }

      if((key == 'v') || (key == 'V')) {
        button_line3[3].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line3[3]),800); 

      }

      if((key == 'w') || (key == 'W')) {
        button_line1[1].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line1[1]),2000); 

      }

      if((key == 'x') || (key == 'X')) {
        button_line3[1].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line3[1]),1500);

      }

      if((key == 'y') || (key == 'Y')) {
        button_line1[5].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line1[5]),1000); 

      }

      if((key == 'z') || (key == 'Z')) {
        button_line3[0].style('background-color', buttonCol);  //Dark Green
        setTimeout(resetColor(button_line3[0]),2000); 

      }


      text_xpos = (width/2) + 150;
      text_ypos = (height/5) - 30;
      image_xpos = (width/2) -10;
      image_ypos = (height/5) + 50;

      // Text Style
      fill(70);
      fill('#39a8c5');
      textFont('Comic Sans MS');
      textSize(30);
      noStroke();



      index = myKeyVal.get(alphabet[letter]);

      //console.log(index,letter,animal_names[index]);

      animal_sounds[index].play();
      image(animal_imgs[index], image_xpos, image_ypos);
      text(animal_names[index], text_xpos, text_ypos);

      alphabet = alphabet.replace(alphabet[letter], '');
      letter = int(random(0, alphabet.length-1));

      // Show alphabet on Console every time it replaces a letter
      console.log(alphabet);

    } else {
      // If incorrect
      // Display incorrect message
      wrongBuzzer.play();
      message = 'Sorry ☹, wrong letter. Try again.';

      return;

    }
    
  }



}

// Highlight keys that were pressed
function resetColor(b) {
  return function() {        //passing instance of button DOM element
    b.style('background-color', '#7FFFD4');
  }
}
  
function resetAllButtonColors() {
  for(i=0;i<letter1.length;i++){
    button_line1[i].style('background-color', '#FFFFFF')
  }
  
  for(i=0;i<letter2.length;i++){
    button_line2[i].style('background-color', '#FFFFFF')
  }
  
  for(i=0;i<letter3.length;i++){
    button_line3[i].style('background-color', '#FFFFFF')
  }
}
