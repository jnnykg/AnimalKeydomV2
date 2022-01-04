//ICM Final4 : All running, Fonts,Colors, Wrong Buzzer, Game/Learn mode
//Right & Wrong answer, For GameMode highlighted Identified characters.

let index_answer;
let optionHt=120;

let buttonCol1 = '#7FFFD4';

let game_img_xpos = [];
let game_img_ypos;
let game_text_xpos = [];
let game_text_ypos;

let optionVal = 1;
function selectLearnMode(){
  
  windowImage();
  
  learnMode.style('background-color','#F0FFC5');  //LearnMode Button Selected
  gameMode.style('background-color','#F0FFFF');

  flagLearnMode =1;

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  message = '';
  resetAllButtonColors();
  
  playSound.hide();
 

}

function selectGameMode(){
  
  windowImage();
  
  
  learnMode.style('background-color','#F0FFFF');  
  gameMode.style('background-color','#F0FFC5');  //GameMode Button Selected
  flagLearnMode =0;

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  cont = 'Click on \'PLAY SOUND\' button';
  resetAllButtonColors();

  flagCorrectAns = 0;
  playSound.show();

}

function selectPlaySound(){
  
  flagCorrectAns = 0;
  
  imageMode(CORNER);
  text(CORNER);
  
  cont = '';  
  message = '';
  
  game_img_xpos = [((windowWidth/2) -220),((windowWidth/2) -70),((windowWidth/2)+80)];
  game_img_ypos = (windowHeight/3)-80;

  game_text_xpos = [((windowWidth/2) -160),((windowWidth/2) -10),((windowWidth/2) +140)];
  game_text_ypos = (windowHeight/3)+40;

   
  playSound.style('background-color','#F0FFC5');  //GameMode Button Selected

  
  
  windowImage();
  
  letter = int(random(0, alphabet.length-1)); 
  index = myKeyVal.get(alphabet[letter]);
  optionVal = int(random(0,3));
  
  //letter_to_identify = alphabet[letter];
  
  //alphabet = alphabet.replace(alphabet[letter],'');
  
  console.log(optionVal,index, animal_names[index],alphabet);
  
  animal_sounds[index].play();
  image(animal_imgs[index],game_img_xpos[optionVal], game_img_ypos, optionHt, optionHt);
  fill('#2791C7');
  textSize(18);
  text(animal_names[index],game_text_xpos[optionVal], game_text_ypos);

  let myArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
  
  myArray.splice(index,1);  //Remove index value
  
  console.log(myArray);
  
  for(i=0;i<3;i++){
    
    if(i == optionVal){
      continue;
    }
    
    array_index = int(random(0, myArray.length-1));
    index = myArray[array_index];
    myArray.splice(array_index,1);
    //animal_sounds[index].play();
    image(animal_imgs[index],game_img_xpos[i], game_img_ypos, optionHt, optionHt);
    fill('#2791C7');
    textSize(18);
    text(animal_names[index],game_text_xpos[i], game_text_ypos);
    
  }
  
  console.log(myArray);
    

}

function mousePressed(){
  
  if((!flagLearnMode)&&(!flagCorrectAns)){  //GameMode
    
    if((optionVal == 0) && 
         (mouseX > ((windowWidth/2) -220)) && (mouseX < ((windowWidth/2) -100)) && 
         (mouseY > (windowHeight/3)-120) && (mouseY < (windowHeight/3)+40)) {
        //Leftmost option right//Leftmost Option selected
        
        message = "Yayy!!! You answered right ☺";
        cont = 'Click on \'PLAY SOUND\' button';
        flagCorrectAns = 1;
        playSound.style('background-color','#F0FFFF');
      
        setLetterIdentified(alphabet[letter]);
        
      
        alphabet = alphabet.replace(alphabet[letter],'');
        
      
    }else if((optionVal == 1) &&
         (mouseX > ((windowWidth/2) - 70)) && (mouseX < ((windowWidth/2) + 50)) && 
         (mouseY > (windowHeight/3)-120) && (mouseY < (windowHeight/3)+40)) {
        //Middle option right //Middle Option selected
        
        message = "Yayy!!! You answered right ☺";
        cont = 'Click on \'PLAY SOUND\' button';
        flagCorrectAns = 1;
        playSound.style('background-color','#F0FFFF'); 
      
        setLetterIdentified(alphabet[letter]);
      
        alphabet = alphabet.replace(alphabet[letter],'');
        
      
    }else if((optionVal == 2) && 
         (mouseX > ((windowWidth/2) + 80)) && (mouseX < ((windowWidth/2) + 200)) && 
         (mouseY > (windowHeight/3)-120) && (mouseY < (windowHeight/3)+40)) {
        //Rightmost option right //Right Option selected
        
        message = "Yayy!!! You answered right ☺";
        cont = 'Click on \'PLAY SOUND\' button';
        flagCorrectAns = 1;
        playSound.style('background-color','#F0FFFF'); 
      
        setLetterIdentified(alphabet[letter]);
      
        alphabet = alphabet.replace(alphabet[letter],'');
        
      
    }else if((mouseX > ((windowWidth/2) - 260)) && (mouseX < ((windowWidth/2) + 240)) && 
         (mouseY > (windowHeight/3)-120) && (mouseY < (windowHeight/3)+40)) {
        //in anwer selection options area but wrong option selected
        
        message = 'Sorry ☹, wrong option. Try again.';
        cont = "Mouse click to select your answer ";
      
     
      
    }else{
      
      message = '';
    }
    
  }
}

function setLetterIdentified(xx){
      if(xx == 'A'){
        button_line2[0].style('background-color', buttonCol1);  


      }

      if(xx == 'B') {
        button_line3[4].style('background-color', buttonCol1);  
 

      }

      if(xx == 'C') {
        button_line3[2].style('background-color', buttonCol);  
 

      }

      if(xx =='D') {
        button_line2[2].style('background-color', buttonCol); 


      }

      if(xx == 'E') {
        button_line1[2].style('background-color', buttonCol1);  

      }

      if(xx == 'F') {
        button_line2[3].style('background-color', buttonCol1); 
      }

      if(xx == 'G') {
        button_line2[4].style('background-color', buttonCol1);  

      }

      if(xx == 'H') {
        button_line2[5].style('background-color', buttonCol1); 

      }

      if(xx == 'I') {
        button_line1[7].style('background-color', buttonCol1);  

      }

      if(xx == 'J') {
        button_line2[6].style('background-color', buttonCol1);  

      }

      if(xx == 'K') {
        button_line2[7].style('background-color', buttonCol1);  

      }

      if(xx == 'L') {
        button_line2[8].style('background-color', buttonCol1);  

      }

      if(xx == 'M') {
        button_line3[6].style('background-color', buttonCol1);  
      }

      if(xx == 'N') {
        button_line3[5].style('background-color', buttonCol1);  

      }

      if(xx == 'O') {
        button_line1[8].style('background-color', buttonCol1);  

      }

      if(xx == 'P') {
        button_line1[9].style('background-color', buttonCol1);  

      }

      if(xx == 'Q') {
        button_line1[0].style('background-color', buttonCol1);  

      }

      if(xx == 'R') {
        button_line1[3].style('background-color', buttonCol1);  

      }

      if(xx == 'S') {
        button_line2[1].style('background-color', buttonCol1);  

      }

      if(xx == 'T') {
        button_line1[4].style('background-color', buttonCol1);  

      }

      if(xx =='U') {
        button_line1[6].style('background-color', buttonCol1);  
      }

      if(xx == 'V') {
        button_line3[3].style('background-color', buttonCol1);  

      }

      if(xx == 'W') {
        button_line1[1].style('background-color', buttonCol1);  

      }

      if(xx == 'X') {
        button_line3[1].style('background-color', buttonCol1);  

      }

      if(xx == 'Y') {
        button_line1[5].style('background-color', buttonCol1);  

      }

      if(xx == 'Z') {
        button_line3[0].style('background-color', buttonCol1); 

      }
  
}
