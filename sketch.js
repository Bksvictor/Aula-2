
var sprite1,spritet2 
var imgsprite1,imgsprite2 
var edges


function preload(){
imgsprite1 = loadImage("./images/opponent1.png")
imgsprite2 = loadImage("./images/opponent4.png")

}

function setup(){
createCanvas(500,500)
background(0)

    sprite1 = createSprite(150,100,20,20)
    sprite1.addImage(imgsprite1)
    sprite1.velocityX =2 
    sprite1.velocityY = 2
    sprite1.debug = false
    sprite1.setCollider("rectangle",0,0,1000,1300)


    spritet2 = createSprite(150,350,20,20)
    spritet2.addImage(imgsprite2)
    spritet2.velocityX = 2
    spritet2.velocityY = 2
    spritet2.debug = false
    spritet2.setCollider("rectangle",0,0,1000,1300)
  
escala(sprite1)
escala(spritet2)
edges = createEdgeSprites()
   
}

function draw(){
background(0)
spritet2.bounceOff(edges) 
sprite1. bounceOff( edges)
drawSprites()

}

 function rotateSprite(sprite){
sprite.rotation = sprite.rotation + 10

 }

function escala(spritediminuir){
spritediminuir.scale = 0.08

}

