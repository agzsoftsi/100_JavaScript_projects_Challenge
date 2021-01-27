const cvs = document.getElementById("game-canva");
const ctx = cvs.getContext("2d");

let level = 0;
// create the unit
const box = 32;

let stage = 0;

// load images
const skin = new Image();
skin.src = "./media/skin1.png";
const skin2 = new Image();
skin2.src = "./media/skin2.png";
const skin3 = new Image();
skin3.src = "./media/skin3.png";
const skin4 = new Image();
skin4.src = "./media/skin4.png";
const skin5 = new Image();
skin5.src = "./media/skin5.png";
const groundEasy = new Image();
groundEasy.src = "./media/groundEasy.png";
const groundMedium = new Image();
groundMedium.src = "./media/groundMedium.png";
const groundHard = new Image();
groundHard.src = "./media/groundHard.png";

const foodImg = new Image();
foodImg.src = "./media/point.png";

const gameOver = new Image();
gameOver.src = "./media/gameover.png";

const win = new Image();
win.src = "./media/Win.png";

const gameIntro = new Image();
gameIntro.src = "./media/intro0.png";
const gameIntro1 = new Image();
gameIntro1.src = "./media/intro1.png";
const gameIntro2 = new Image();
gameIntro2.src = "./media/intro2.png";
const gameIntro3 = new Image();
gameIntro3.src = "./media/intro3.png";

// load audio files

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();
let intro = new Audio();

dead.src = "./media/audio/dead.mp3";
eat.src = "./media/audio/eat.mp3";
up.src = "./media/audio/up.mp3";
right.src = "./media/audio/right.mp3";
left.src = "./media/audio/left.mp3";
down.src = "./media/audio/down.mp3";
intro.src = "./media/audio/intro.mp3";



// create the snake
function introGame(level) {
    stage = 2;
let snake = [];

snake[0] = {
    x : 16 * box,
    y : 10 * box
};

// create the food

let food = {
    x : Math.floor(Math.random()*17+8) * box,
    y : Math.floor(Math.random()*15+3) * box
}



// create the score var

let score = 0;

//control the snake

let d;


document.addEventListener("keydown",direction);

function direction(event){
    let key = event.keyCode;
    if(stage == 2){
            if( key == 37 && d != "RIGHT"){
                left.play();
                d = "LEFT";
            }else if(key == 38 && d != "DOWN"){
                d = "UP";
                up.play();
            }else if(key == 39 && d != "LEFT"){
                d = "RIGHT";
                right.play();
            }else if(key == 40 && d != "UP"){
                d = "DOWN";
                down.play();
            }
        }
}

//constrol botones

document.getElementById("btn-up").addEventListener("click", function(){
    if(d != "DOWN"){
        d = "UP";
        up.play();
    }
});
document.getElementById("btn-down").addEventListener("click", function(){
    if(d != "UP"){
        d = "DOWN";
        down.play();
    }
});
document.getElementById("btn-left").addEventListener("click", function(){
    if(d != "RIGHT"){
        left.play();
        d = "LEFT";
    }
});
document.getElementById("btn-right").addEventListener("click", function(){
    if(d!= "LEFT"){
        d = "RIGHT";
        right.play();
    }
});

// cheack collision function
function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}

// draw everything to the canvas


function draw(){
    
    if(level == 100){
        ctx.drawImage(groundHard,224,0);
    } else if(level == 200){
        ctx.drawImage(groundMedium,224,0);
    } else {
        
            ctx.drawImage(groundEasy,224,0);
      
    }
    
    
    
    for( let i = 0; i < snake.length ; i++){
        ctx.fillStyle = ( i == 0 )? "green" : "white";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
        
        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
    
    ctx.drawImage(foodImg, food.x, food.y);
    
    // old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    // which direction
    if( d == "LEFT") snakeX -= box;
    if( d == "UP") snakeY -= box;
    if( d == "RIGHT") snakeX += box;
    if( d == "DOWN") snakeY += box;
    
    // if the snake eats the food
    if(snakeX == food.x && snakeY == food.y){
        score++;
        eat.play();
        food = {
            x : Math.floor(Math.random()*17+8) * box,
            y : Math.floor(Math.random()*15+3) * box
        }
        // we don't remove the tail
    }else{
        // remove the tail
        snake.pop();
    }
    
    // add new Head
    
    let newHead = {
        x : snakeX,
        y : snakeY
    }
    
    // game over
    
    if(snakeX < 8 * box || snakeX > 24 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead,snake)){
        clearInterval(game);
        dead.play();
        console.log("Game Over");
        ctx.drawImage(gameOver,224,0);
        stage = 3;
        
    }
    
    snake.unshift(newHead);
    
    ctx.fillStyle = "white";
    ctx.font = "36px roboto";
    ctx.fillText(score,10*box,2.3*box);

    if(score == 10){
        clearInterval(game);
        ctx.drawImage(win,224,0);
        stage = 3;
    }
};

console.log(level)

// call draw function every 100 ms
let game = setInterval(draw,level);
}

// windows load

window.onload = function() {
    intro.play();
    ctx.drawImage(skin,0,0);

    //skin changer
    let skinSelector = 0;
    document.getElementById("btn-skin").addEventListener("click", function(){
        skinSelector += 1;
        if( skinSelector == 1){
            ctx.drawImage(skin2,0,0);
        }else if(skinSelector == 2){
            ctx.drawImage(skin3,0,0);
        }else if(skinSelector == 3){
            ctx.drawImage(skin4,0,0);
        }else if(skinSelector == 4){
            ctx.drawImage(skin5,0,0);
        }else if(skinSelector == 5){
            skinSelector = 0;
            ctx.drawImage(skin,0,0);
        }
        if(stage == 1){
            ctx.drawImage(gameIntro3,224,0);
        }
        
   
        
    });
    ctx.drawImage(gameIntro,224,0);
    setTimeout(function(){ ctx.drawImage(gameIntro1,224,0); }, 300);
    setTimeout(function(){ ctx.drawImage(gameIntro2,224,0); }, 1000);
    setTimeout(function(){ ctx.drawImage(gameIntro3,224,0); }, 1400);
    
    
    //setTimeout(function(){ introGame(); }, 1800);
    stage = 1;


 
};

 // level selector for Kewyboard
document.addEventListener("keydown", function(e) {
    
    let key = e.keyCode;

    if(stage == 1 || stage == 3){
        if( key == 88){
        
            level = 300;
            introGame(level);
          
        } else if (key == 89){
            
          level = 200;
          introGame(level);
         
        } else if (key == 90){
           
          level = 100;
          introGame(level);
          
        }

        if(stage == 3) {
            if (key == 13){ 
            
                introGame(level);
            }
        }
    }
    
});


//level selection for buttons
document.getElementById("btn-x").addEventListener("click", function(){
    if(stage == 1 || stage == 3){
            level = 300;
            introGame(level);
    }
});

document.getElementById("btn-y").addEventListener("click", function(){
    if(stage == 1 || stage == 3){
            level = 200;
            introGame(level);
    }
});

document.getElementById("btn-z").addEventListener("click", function(){
    if(stage == 1 || stage == 3){
            level = 100;
            introGame(level);
    }
});


