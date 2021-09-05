var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}

Recognition.onresult = function run(event) {
    console.log(event);

    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if (content == "take my selfie") {
        console.log("Taking Selfie");
        speak();


    }


}

function speak() {
    var synth = window.speechSynthesis;

    speak_data = "Taking your selfie in 5 seconds";
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);

    camera = document.getElementById("camera");
    Webcam.set({
        width: 360,
        height: 250,
        image_format: 'jpeg',
        jpeg_quality: 90
    });
    Webcam.attach(camera);
    setTimeout(function (){
take_snapshot();
save();
    },5000)
}

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML="<img id='selfie_img' src='"+data_uri+"'/>";

    });
}

function save(){
    link=document.getElementById("link");
    img=document.getElementById("selfie_img").src;
    link.href=img;
    link.click();
}