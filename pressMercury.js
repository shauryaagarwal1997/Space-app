class pressMercury{
    constructor(){
    butMer=createButton('MERCURY');
    butVen=createButton('VENUS');
    butEar=createButton('EARTH');
    butMar=createButton('MARS');
    butJup=createButton('JUPITER');
    butSat=createButton('SATURN');
    butUra=createButton('URANUS');
    butNep=createButton('NEPTUNE');
    }
display(){
    butMer.position(displayWidth/2-280,displayHeight/2-400);
    butMer.size(200,50);
    butMer.style('background','cream');
    butVen.position(displayWidth/2-280,displayHeight/2-340);
    butEar.position(displayWidth/2-280,displayHeight/2-280);
    butMar.position(displayWidth/2-280,displayHeight/2-220);
    butJup.position(displayWidth/2,displayHeight/2-400);
    butSat.position(displayWidth/2,displayHeight/2-340);
    butUra.position(displayWidth/2,displayHeight/2-280);
    butNep.position(displayWidth/2,displayHeight/2-220);
    
    drawSprites();
    butVen.size(200,50);
    butEar.size(200,50);
    butMar.size(200,50);
    butJup.size(200,50);
    butSat.size(200,50);
    butUra.size(200,50);
    butNep.size(200,50);
    butVen.style('background','lightgreen');
    butEar.style('background','cream');
    butMar.style('background','lightgreen');
    butJup.style('background','cream');
    butSat.style('background','lightgreen');
    butUra.style('background','cream');
    butNep.style('background','lightgreen');
    
    butMer.mousePressed(()=>{
        butMer.hide();
        butVen.hide();
        butEar.hide();
        butMar.hide();
        butJup.hide();
        butSat.hide();
        butUra.hide();
        butNep.hide(); 
        venus.velocityY=-1000001;
        earth.velocityX=-1000010;
        mars.velocityY=1100000;
        jupiter.velocityX=-11000000;
        saturn.velocityX=11000000;
        uranus.velocityX=1100000;
        neptune.velocityX=1000001;
        mercury.velocityX=1000010;
        background(sky1);
        textSize(40);
        fill("red");
        stroke("black")
        strokeWeight(7)
        text("MERCURY",displayWidth/2-130,displayHeight/2-385)

        merPlanet=createSprite(displayWidth/2-550,displayHeight/2,10,10);
        merPlanet.addImage(merPlaneti);
        fill("lightgreen");
        merPlanet.scale=1.3;
        rectMode(CENTER);
        rect(displayWidth/2+100,displayHeight/2-30,1400,500);
        textSize(35);
        stroke("red");
        strokeWeight(2);
        fill("red");
        text("INTERESTING INFORMATION",displayWidth/2+50,displayHeight/2-220);
        textSize(30);
        fill("black");
        stroke(0);
        strokeWeight(2);
        text("1. Average Distance from the Sun : ",displayWidth/2-90,displayHeight/2-175);
        text("2. Length of Day : ",displayWidth/2-90,displayHeight/2-125);
        text("3. Length of Year : ",displayWidth/2-90,displayHeight/2-75);
        text("4. Planet Type : ",displayWidth/2-90,displayHeight/2-25);
        text("5. Number of Moons : ",displayWidth/2-90,displayHeight/2+25);
        text("6. Temperature : Day :                      Night : ",displayWidth/2-90,displayHeight/2+75)
        text("7. Escape Velocity : ",displayWidth/2-90,displayHeight/2+125)
        text("8. Nickname : ",displayWidth/2-90,displayHeight/2+175)
        fill("blue");
        text("0.4 AU (58 million km)",displayWidth/2+390,displayHeight/2-175);
        fill("purple");
        text("58 Earth days 15 hours 30 minutes",displayWidth/2+160,displayHeight/2-125);
        fill("blue");
        text("88 days",displayWidth/2+160,displayHeight/2-75);
        fill("purple");
        text("Rocky / terrestrial",displayWidth/2+130,displayHeight/2-25);
        fill("blue");
        text("Zero (0)",displayWidth/2+210,displayHeight/2+25);
        fill("blue");
        text("430° Celcius            -180° Celcius",displayWidth/2+210,displayHeight/2+75);
        fill("purple");
        text("4.3 km/s",displayWidth/2+180,displayHeight/2+125);
        fill("blue");
        text("The Swift Planet",displayWidth/2+100,displayHeight/2+175);
    })
     
}
}