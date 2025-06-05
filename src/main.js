// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

// 중요한 변수 3가지다.
let timeLeft = 25 * 60; // 초를 표현한다. 1500초
let timerInterval; // 명시적 전역변수가 있어야 resetTimer와 같은, 다른 함수안에서 Timeout객체를 clear할 수 있다.
let isRunning = false; // 이 부분이 이해가 안갔단말이지. 아직. false는 플래그. 버튼을 누를때, 실행할지, 안할지를 결정하는 거야.

// 앨리먼트가 보이도록 해야한다.
const timerElement = document.getElementById('timer');
const startStopButton = document.getElementById('startStopButton');
const resetButton = document.getElementById('resetButton');

// 어떻게 표시할건지를 함수로 정의한다.
// 이 함수는 초가 마이너스가 되어야 움직일 필요가 있으니 거꾸로 말하자면 초를 변경하는 행위가 없다면
// 호출하지 않아도 된다.
function updateDisplay() {
    const seconds = timeLeft % 60;
    const minutes = Math.floor(timeLeft / 60);
    timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

function minusSeconds() {
    timeLeft--; // 초가 0보다 작은지, 아닌지를 떠나서 무조건 -1을 하니까 좋지 않다. 이미 0인 초에 -를 하는 경우도 있기 때문이다.
    if (timeLeft < 0) {
        clearInterval(); // 이상태에서 어떻게 setInterval을 지우지?
        isRunning = false;
        startStopButton.textContent = 'Start';
    } ;
    updateDisplay();
    startStopButton.textContent = 'Stop';
};

// isRunning이 작동되는 것은 알겠어.
// 근데 왜 이게 필요하지?
// on/off를 하는 용도야.
// isRunning이 없을 때는? 버튼 한번 누를 때마다 버튼의 행위를 기억해야해. 버튼이 0인지 1인지. 버튼을 눌러서 1이 되었다. 다음 누를때 1이었다면 0으로 바꾸고
// 멈추게 하고, 다시 또 버튼을 누르면 1로 바꾸고 움직이게 하고.


function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startStopButton.textContent = 'Stop';
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft --;
                updateDisplay();
            } else {
                clearInterval(timerInterval);
                isRunning = false;
                startStopButton.textContent = 'Start';
            };
        }, 1000
        ); // 함수를 호출한 다음에 할당해도 되는구나. Timeout객체가 반환된다.
    } else {
        clearInterval(timerInterval); // 반환된 
        isRunning = false;
        startStopButton.textContent = 'Start';
    };
};
// 초기화는 어떻게 할까?
// 버튼을 추가하면 되겠지?
// timerInterval을 어떻게 외부로 빼낼수 있을까?
// 이미 timerInterval의 전역변수가 9line에 설정되어있기 때문에 resetTimer에서 clearInterval를 해도 문제없다.
function resetTimer() {
    timeLeft = 25 * 60;
    startStopButton.textContent = 'Start';
    clearInterval(timerInterval);
    timerElement.textContent = "25:00";
    isRunning = false;
};


startStopButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);