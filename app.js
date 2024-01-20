const startBtn = document.querySelector(".start"),
    stopBtn = document.querySelector(".stop"),
    resrtBtn = document.querySelector(".reset");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resrtBtn.addEventListener("click", reset);

function start(){
    startBtn.classList.add("active");
    
}

function stop(){
    startBtn.classList.add("active");

}

function reset(){
    startBtn.classList.add("active");

}