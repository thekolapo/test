var Container = PIXI.Container,
autoDetectRenderer = PIXI.autoDetectRenderer,
loader = PIXI.loader,
resources = PIXI.loader.resources,
Sprite = PIXI.Sprite;
var y = window.innerHeight, x = window.innerWidth;

var stage = new Container(),
renderer = autoDetectRenderer(window.innerWidth, window.innerHeight, {antialias: false, transparent: true, resolution: 1});
document.body.appendChild(renderer.view);

renderer.view.style.position = "absolute"
renderer.view.style.display = "block";
renderer.autoResize = true;
// renderer.view.style.border = "10px dashed black"

// loader.add("shaqImage", "2-01 (2).png").load(setup);

var shaq, run = [], runFrown = [], shaqTexture, shaqTextureFrown;

var heightDivider = 1.55, scale = 1.4; 

var finishedLoadingTextures = false;

var frowning = false;

// loader.add("shaqImage", "shaqq.png").add("shaq-frown", "shaq-frown.png").load(setup);
loader.add(["shaq.png", "shaq-frown.png"]).load(setup);

function setup() {
    if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        heightDivider = 1.5;
        scale = 2;
    }
    else if(/iPad/i.test(navigator.userAgent)){
        heightDivider = 1.44;
        scale = 1.7;
    }

    shaqTexture = loader.resources["shaq.png"].texture;
    // run.push (new PIXI.Rectangle(0,0,90,500),new PIXI.Rectangle(90,0,90,500),new PIXI.Rectangle(190,0,90,175),new PIXI.Rectangle(290,0,90,175), new PIXI.Rectangle(190,0,90,175));
//   run.push (new PIXI.Rectangle(0,0,788,501), new PIXI.Rectangle(788,0,788,501));
//   var x = 0;
//   for(var i = 0; i < 15; i++){
//    //run.push(new PIXI.Rectangle(x, 0, 788, 501));
//     x += 788;
//   }

    var x = 0, y = 0;
    for(var i = 0; i < 15; i++){
        run.push(new PIXI.Rectangle(x, y, 700, 700));
        x += 700;

        if(x == 3500){
            x = 0;
            y += 700;
        }
    }


//   shaqTextureFrown = loader.resources["shaq-frown.png"].texture;
//   x = 0;
//   for(var i = 0; i < 15; i++){
//     runFrown.push(new PIXI.Rectangle(x, 0, 788, 501));
//     x += 788;
//   }

  shaqTexture.frame = run[0];
  shaq = new Sprite(shaqTexture);
  shaq.position.set(window.innerWidth/2, window.innerHeight/heightDivider);
//   shaq.scale.set(0.39, 0.39);
  shaq.scale.set(scale, scale);
  shaq.anchor.set(0.5, 0.5);
  stage.addChild(shaq);
  renderer.render(stage);

  finishedLoadingTextures = true;
  var VAR = { myvalue: true };
//   if(VARONE.myvalue){
//     document.getElementById('overlay-main').style.display = 'none';
//   }
}

window.addEventListener("resize", function(){
    // renderer.resize(window.innerWidth, window.innerHeight);

//     var isMobile = {
//       Android: function() {
//           return navigator.userAgent.match(/Android/i);
//       },
//       BlackBerry: function() {
//           return navigator.userAgent.match(/BlackBerry/i);
//       },
//       iOS_iPad: function() {
//           return navigator.userAgent.match(/iPad/i);
//       },
//       iOS_iPhone_iPod: function() {
//           return navigator.userAgent.match(/iPhone|iPod/i);
//       },
//       Opera: function() {
//           return navigator.userAgent.match(/Opera Mini/i);
//       },
//       Windows: function() {
//           return navigator.userAgent.match(/IEMobile/i);
//       },
//       any: function() {
//           return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS_iPad() || isMobile.iOS_iPhone_iPod || isMobile.Opera() || isMobile.Windows());
//       }
//     };

//   if(isMobile.iOS_iPad()) {
//     // alert('Mobile');
//     shaq.position.set(window.innerWidth/2, window.innerHeight/heightDivider); 1.19
//   }
//   else if(isMobile.any()){
//     shaq.position.set(window.innerWidth/2, window.innerHeight/heightDivider); 1.2
//   }
//   else{
//     shaq.position.set(window.innerWidth/2, window.innerHeight/heightDivider);
//   }

    shaq.position.set(window.innerWidth/2, window.innerHeight/heightDivider);

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return;
    }

    renderer.resize(window.innerWidth, window.innerHeight);

});

var af = 0, df = 1.7, maxFrame = 15;

function gameLoop() {
    var f = requestAnimationFrame(gameLoop);
    if (af >= maxFrame)
    {    
        af = 0;
    } 
    else {
      af += 1/df;
    }
    shaqTexture.frame = run[Math.floor(af)];
    shaq.position.set(window.innerWidth/2, window.innerHeight/heightDivider);
    renderer.render(stage);

    // if(frowning){
    //     cancelAnimationFrame(f);
    //     frowning = false;
    //     setFrownIsh();
    //     return;
    // }
  }
  
 // Start the game loop
gameLoop();

function frown(){
    frowning = true;
   
}

function setFrownIsh(){
    shaqTextureFrown.frame = runFrown[0];
    stage.removeChild(shaq);
    shaq = new Sprite(shaqTextureFrown);
    shaq.position.set(window.innerWidth/2, window.innerHeight/heightDivider);
    // shaq.scale.set(0.39, 0.39);
    shaq.anchor.set(0.5, 0.5);
    stage.addChild(shaq);
    renderer.render(stage);
    shaq.scale.set(1.6, 1.6);

    frownLoop();
}

function frownLoop() {
    var f = requestAnimationFrame(frownLoop);
    if (af >= maxFrame)
    {
        af = 0;
    } 
    else {
      af += 1/df;
    }
    shaqTextureFrown.frame = runFrown[Math.floor(af)];
    shaq.position.set(window.innerWidth/2, window.innerHeight/heightDivider);
    renderer.render(stage);
}

function splitSpriteSheet(){
    shaqTexture = loader.resources["shaqq.png"].texture;
    var x = 0;
    for(var i = 0; i < 15; i++){
        run.push(new PIXI.Rectangle(x, 0, 788, 501));
        x += 788;
    }

}


