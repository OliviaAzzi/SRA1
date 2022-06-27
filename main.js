Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot() {
    Webcam.snap(function(src_of_image) {
        document.getElementById("result").innerHTML="<img id='captured' src='"+src_of_image+"'/>";
    });
}
console.log("ml5 version is",ml5.version);
model5=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZTiN5xxUJ/model.json",model_loaded);
function model_loaded() {
    console.log("The Model has been loaded");
}
function check(){
    var img=document.getElementById("captured_image");
    model5.classify(img,gotResult);
}
 function gotResult(){
    if (error) {
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("name").innerHTML=result[0].label;
    }
}