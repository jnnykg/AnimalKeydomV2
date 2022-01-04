let animal_sounds = [];
let animal_imgs = [];
let wrongBuzzer;


let animal_names= ['aardvark', 'bat', 'cat', 'duck', 'elephant', 'frigatebird', 'gharial', 'hedgehog', 'impala', 'jackal', 'koala', 'lion', 'monkey', 'narwhal', 'octopus', 'pig', 'quokka', 'raccoon', 'sturgeon', 'turkey', 'umbrellabird', 'vulture', 'wolf', 'xerus', 'yak', 'zebra'];



/*
let aardvarkI, batI, catI, duckI, elephantI, frigatebirdI, gharialI, hedgehogI, impalaI, jackalI, koalaI, lionI, monkeyI, narwhalI, octopusI, pigI, quokkaI, raccoonI, sturgeonI, turkeyI, umbrellabirdI, vultureI, wolfI, xerusI, yakI, zebraI;
*/

function preload(){

  //Load GIFs
  goldcup = loadImage("Gifs/GoldCup.gif");
  /*
  goldcup_gif = createImg("Gifs/GoldCup.gif");
  goldcup_gif.hide();
  */
  

  
  
  
  // Load Images
  animal_imgs[0] = loadImage('Images/Aardvark.png');
  animal_imgs[1]  = loadImage('Images/Bat.png');
  animal_imgs[2]  = loadImage('Images/Cat.png');
  animal_imgs[3]  = loadImage('Images/Duck.png')
  animal_imgs[4]  = loadImage('Images/Elephant.png');
  animal_imgs[5]  = loadImage('Images/Frigatebird.png');
  animal_imgs[6]  = loadImage("Images/Gharial.png");
  animal_imgs[7]  = loadImage("Images/Hedgehog.png");
  animal_imgs[8]  = loadImage("Images/Impala.png");
  animal_imgs[9]  = loadImage("Images/Jackal.png");
  animal_imgs[10]  = loadImage("Images/Koala.png");
  animal_imgs[11]  = loadImage("Images/Lion.png");
  animal_imgs[12]  = loadImage("Images/Monkey.png");
  animal_imgs[13]  = loadImage("Images/Narwhal.png");
  animal_imgs[14]  = loadImage("Images/Octopus.png");
  animal_imgs[15]  = loadImage("Images/Pig.png");
  animal_imgs[16]  = loadImage("Images/Quokka.png");
  animal_imgs[17]  = loadImage("Images/Raccoon.png");
  animal_imgs[18]  = loadImage("Images/Sturgeon.png");
  animal_imgs[19]  = loadImage("Images/Turkey.png");
  animal_imgs[20]  = loadImage("Images/Umbrellabird.png");
  animal_imgs[21]  = loadImage("Images/Vulture.png");
  animal_imgs[22]  = loadImage("Images/Wolf.png");
  animal_imgs[23]  = loadImage("Images/Xerus.png");
  animal_imgs[24]  = loadImage("Images/Yak.png");
  animal_imgs[25]  = loadImage("Images/Zebra.png");
  
  // Load Sounds
  animal_sounds[0] = loadSound('Sounds/Aardvark.mp3');
  animal_sounds[1] = loadSound("Sounds/Bat.mp3");
  animal_sounds[2] = loadSound("Sounds/Cat.mp3");
  animal_sounds[3] = loadSound("Sounds/Duck.mp3");
  animal_sounds[4] = loadSound("Sounds/Elephant.mp3");
  animal_sounds[5] = loadSound("Sounds/Frigatebird.mov");
  animal_sounds[6] = loadSound("Sounds/Gharial.mp3");
  animal_sounds[7] = loadSound("Sounds/Hedgehog.mp3");
  animal_sounds[8] = loadSound("Sounds/Impala.mp3");
  animal_sounds[9] = loadSound("Sounds/Jackal.mp3");
  animal_sounds[10] = loadSound("Sounds/Koala.mp3");
  animal_sounds[11] = loadSound("Sounds/Lion.mp3");
  animal_sounds[12] = loadSound("Sounds/Monkey.mp3");
  animal_sounds[13] = loadSound("Sounds/Narwhal.mp3");
  animal_sounds[14] = loadSound("Sounds/Octopus.mp3");
  animal_sounds[15] = loadSound("Sounds/Pig.mp3");
  animal_sounds[16] = loadSound("Sounds/Quokka.mp3");
  animal_sounds[17] = loadSound("Sounds/Raccoon.mp3");
  animal_sounds[18] = loadSound("Sounds/Sturgeon.mp3");
  animal_sounds[19] = loadSound("Sounds/Turkey.mp3");
  animal_sounds[20] = loadSound("Sounds/Umbrellabird.mp3");
  animal_sounds[21] = loadSound("Sounds/Vulture.mp3");
  animal_sounds[22] = loadSound("Sounds/Wolf.mp3");
  animal_sounds[23] = loadSound("Sounds/Xerus.mp3");
  animal_sounds[24] = loadSound("Sounds/Yak.mp3");
  animal_sounds[25] = loadSound("Sounds/Zebra.mp3");
  wrongBuzzer = loadSound("Sounds/WrongBuzzer.wav");
}
