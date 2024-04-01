let speech = new SpeechSynthesisUtterance()

let voices = [];



document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})