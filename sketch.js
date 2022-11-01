let parrotImage;
let parrotSound;
let myRec = new p5.SpeechRec(); // new P5.SpeechRec object
let foo = new p5.Speech(); // speech synthesis object

function preload() {
  //loading assets
  parrotImage = loadImage("./assets/parrot3.png");
  parrotSound = loadSound("./assets/khsound.mp3");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  //starts to take incoming audio
  myRec.start();
  fill(255);
}

function draw() {
  background(0);

  image(
    parrotImage,
    width / 2 - 210,
    height / 2 - 210,
    parrotImage.width / 1.5,
    parrotImage.height / 1.5
  );

  // instructions:
  textSize(32);
  textAlign(CENTER);
  //I have to tell the user to click first because if I don't click, the foo object won't speak. I don't know why, but this is a design workaround to solve the problem.
  //I would like this sketch to be non-looping, and working in a different way everytime I say a different word, but I can't right now. Still a lot to learn about objects and classes
  text(
    "click first and then speak to me (in italian)",
    width / 2 - 500,
    height / 2
  );
  parrotTalk();
}
function mouseClicked() {
  parrotSound.play();
}

function parrotTalk() {
  //the if true condition means if the recording has ended succesfully
  if (myRec.resultValue == true) {
    //resultString is a property of the library which contains the string of what you said
    console.log(myRec.resultString);
    foo.speak(myRec.resultString);
    fill(255);
    text("I won't stop", width / 2 - 300, height / 2 + 300);
  }
}
