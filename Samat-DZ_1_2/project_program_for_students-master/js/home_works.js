const gmail_input = document.querySelector('#gmail_input')
const gmail_button = document.querySelector('#gmail_button')
const gmail_result = document.querySelector('#gmail_result')

const regExp = /@gmail.com$/

gmail_button.addEventListener('click', () => {
    if (regExp.test(gmail_input.value)) {
        gmail_result.innerHTML = 'OK'
        gmail_result.style.color = 'green'
    } else {
        gmail_result.innerHTML = 'NOT OK'
        gmail_result.style.color = 'red'
    }
})


//Move block

const child_block = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX < 449 && positionY === 0) {
        positionX++
        child_block.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX >= 449 && positionY < 449){
        positionY++
        child_block.style.top = `${positionY}px`
        setTimeout(move, 1)
    } else if (positionX >0 && positionY >= 449){
        positionX--
        child_block.style.left = `${positionX}px`
        setTimeout(move, 1)
    }   else if (positionX >= 0 && positionY > 0){
        positionY--
        child_block.style.top = `${positionY}px`
        setTimeout(move, 1)
    }

}
move()



//COUNTER


let counterValue = 0;
let intervalId = null;
let isRunning = false;

const updateCounter = () => {
    const counterElement = document.getElementById("seconds");
    counterElement.textContent = counterValue;
};

const incrementCounter = () => {
    counterValue++;
    updateCounter();
};

document.getElementById("start").addEventListener("click", () => {
    if (!isRunning) {
        intervalId = setInterval(incrementCounter, 1000);
        isRunning = true;
    }
});

document.getElementById("stop").addEventListener("click", () => {
    if (isRunning) {
        clearInterval(intervalId);
        isRunning = false;
    }
});


document.getElementById("resume").addEventListener("click", () => {
    if (!isRunning) {
        intervalId = setInterval(incrementCounter, 1000);
        isRunning = true;
    }
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(intervalId);
    counterValue = 0;
    isRunning = false;
    updateCounter();
});
