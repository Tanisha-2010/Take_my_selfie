var speech_recognition = window.webkitSpeechRecognition;
var recogition = new speech_recognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recogition.start();
}

recogition.onresult = function run(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;

    if (content == "take my selfie") {
        speak();
    }
    speak();


}

function speak() {
    synth = window.speechSynthesis;
    //speakData = document.getElementById("textbox").value;
    speakData = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function() {
        take_snapshot();
        save();
    }, 5000)
}

function take_snapshot() {
    webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img id='selfie' src='" + data_uri + "'>"
    });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie").src;
    link.href = image;
    link.click();
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90,
});
camera = document.getElementById("camera");