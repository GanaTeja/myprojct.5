function preload(){
farmerimg=loadImage("images/download.png")
treeimg=loadImage("images/tree.png")
basketimg=loadImage("images/basket.png")
appleimg=loadImage("images/apple.png")

}
function setup(){
    createCanvas(1200,500)
 farmer =createSprite(600,100)
    farmer.addImage(farmerimg)
    farmer.scale=.5
    appleGarden=createSprite(200,200)

}

function draw (){
background(0)
drawSprites();
if(keyDown(UP_ARROW)){
farmer.y=farmer.y-5

}
if(keyDown(DOWN_ARROW)){
    farmer.y=farmer.y+5
    
    }
    if(keyDown(LEFT_ARROW)){
        farmer.x=farmer.x-5
        
        }
        if(keyDown(RIGHT_ARROW)){
            farmer.x=farmer.x+5
            
            }
            if (farmer.isTouching(appleGarden)){
                bg1=createSprite(600,250,1200,500)
                bg1.shapeColor="black";
                tree=createSprite(600,250)
                tree.addImage(treeimg)
                basket=createSprite(500,450)
                basket.addImage(basketimg)
                basket.scale=.3
                basket.x=mouseX
            }
}