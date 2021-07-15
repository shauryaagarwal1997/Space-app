var buttonPlanets, buttonConstel;
var butMer,butVen,butEar,butMar,butJup,butSat,butUra,butNep;
var bg1,bg2;
var appState=0;
var mer,ven,ear,mar,jup,sat,ura,nep;
var sky1;
var mercury,venus,earth,mars,jupiter,saturn,uranus,neptune;
var displayMercury,displayVenus,displayEarth,displayMars,displayJupiter,displaySaturn,displayUranus,displayNeptune;
var nextMer,nextVen,nextEar,nextMar,nextJup,nextSat,nextUra,nextNep;
var merPlanet,venPlanet,earPlanet,marPlanet,jupPlanet,satPlanet,uraPlanet,nepPlanet;
var merPlaneti,venPlaneti,earPlaneti,marPlaneti,jupPlaneti,satPlaneti,uraPlaneti,nepPlaneti;
var empsky;
var score=0;

function preload(){
bg2=loadImage("background/sky.jpeg");
bg1=loadImage("background/sky2.jpg");
sky1=loadImage("background/sky3.jpg");
mer=loadImage("planets/mercury.jpg");
ven=loadImage("planets/venus.jpg");
ear=loadImage("planets/earth.jpg");
mar=loadImage("planets/mars.jpg");
jup=loadImage("planets/jupiter.jpg");
sat=loadImage("planets/saturn.jpg");
ura=loadImage("planets/uranus.jpg");
nep=loadImage("planets/neptune.jpg");
empsky=loadImage("background/sky4.jpg");
merPlaneti=loadImage("planets/mercury.jpg");
getMercury();
}

function setup(){
    createCanvas(displayWidth,displayHeight-120);
    buttonPlanets=createButton('PLANETS')
    buttonPlanets.position(displayWidth/2-220,displayHeight/2-110)
    buttonPlanets.style('background','random(100,255),random(100,255),random(100,255)')
    buttonPlanets.size(350,50);

    buttonConstel=createButton('CONSTELLATIONS')
    buttonConstel.position(displayWidth/2-220,displayHeight/2-60)
    buttonConstel.style('background','yellow')
    buttonConstel.size(350,50);

    displayMercury=new pressMercury(); 
    displayVenus=new pressVenus();
    displayEarth=new pressEarth(); 
    displayMars=new pressMars(); 
    displayJupiter=new pressJupiter(); 
    displaySaturn=new pressSaturn();  
    displayUranus=new pressUranus(); 
    displayNeptune=new pressNeptune(); 

    mercury=createSprite(displayWidth/2-300,displayHeight/2+100,10,10);
    venus=createSprite(displayWidth/2+80,displayHeight/2+230,10,10);
    earth=createSprite(displayWidth/2-780,displayHeight/2+180,10,10);
    mars=createSprite(displayWidth/2+80,displayHeight/2-20,10,10);
    jupiter=createSprite(displayWidth/2-710,displayHeight/2-260,10,10);
    saturn=createSprite(displayWidth/2+700,displayHeight/2-300,10,10);
    uranus=createSprite(displayWidth/2+500,displayHeight/2-80,10,10);
    neptune=createSprite(displayWidth/2+550,displayHeight/2+220,10,10);
  
    mercury.scale=0.6;
    earth.scale=0.7;
    neptune.scale=1.6;
    uranus.scale=1.2;
    jupiter.scale=2.3
    saturn.scale=2.2;
    mars.scale=1.5
    venus.scale=1.35

    mercury.addImage(mer);
    venus.addImage(ven);
    earth.addImage(ear);
    mars.addImage(mar);
    jupiter.addImage(jup);
    saturn.addImage(sat);
    uranus.addImage(ura);
    neptune.addImage(nep);

}

function draw(){
if(appState===0){
background(bg1);
textSize(50);
fill("yellow");
stroke("black")
strokeWeight(7)
text("What will you like to check out today ?",displayWidth/2-430,displayHeight/2-150)
}
buttonPlanets.mousePressed(()=>{
appState=1;
})
buttonConstel.mousePressed(()=>{
    appState=3;
})
if(appState===1){
background(empsky);

buttonPlanets.hide();
buttonConstel.hide();
background(empsky);

appState=2;
drawSprites();
if(score===1){
    mercury.x=1000;
}
}
if(appState===2){
    textSize(50);
    fill("orange");
    stroke("black")
    strokeWeight(7)
    text("Which planet would you like to explore ?",displayWidth/2-440,displayHeight/2-450)

    displayMercury.display();
    displayVenus.display();
    displayEarth.display();
    displayMars.display();
    displayJupiter.display();
    displaySaturn.display();
    displayUranus.display();
    displayNeptune.display();
}
if(appState===3){

}
}
async function getMercury(){
    var response=await fetch("https://theskylive.com/mercury-tracker");
    var responseJSON=await response.json();
    var dataInfo=responseJSON.Constellation;
    console.log(dataInfo);
}