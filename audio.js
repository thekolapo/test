// var myContext = new (window.AudioContext || window.webkitAudioContext)();
var music;
var finishedLoadingAudio = false;
// function loadAudio(){
    //Load the sounds
    sounds.load([
    "sounds/often.mp3"
    ]);

    //Assign the callback function that should run
    //when the sounds have loaded
    sounds.whenLoaded = setup;
// }

function setup() {
    music  = sounds["sounds/often.mp3"];
    music.loop = true;
    finishedLoadingAudio = true;

    var VARONE = { myvalue: true };

    // if(VAR.myvalue){
    //     document.getElementById('overlay-main').style.display = 'none';
    // }
    setTimeout(hideLoadingScreen, 100);
}

function hideLoadingScreen(){
    // music.play();
    $("#overlay-main").fadeOut(700);
    // document.getElementById('overlay-main').style.display = 'none';
}

function mute() {
    document.getElementById('sound-on').style.display = 'none';
    document.getElementById('sound-off').style.display = 'block';

    music.pause();
}

function unmute() {
    document.getElementById('sound-off').style.display = 'none';
    document.getElementById('sound-on').style.display = 'block';
}

window.addEventListener('touchstart', function() {
        // create empty buffer
        // var buffer = myContext.createBuffer(1, 1, 22050);
        // var source = myContext.createBufferSource();
        // source.buffer = buffer;
    
        // // connect to output (your speakers)
        // source.connect(myContext.destination);
    
        // play the file
        // source.start(0);
        music.play();
    
}, false);