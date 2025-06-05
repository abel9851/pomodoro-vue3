// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

// 중요한 변수 3가지다.
let timeLeft = 25 * 60; // 초를 표현한다. 1500초
let timerInterval; // Interval은 호출되면 첫번째에 설정한 함수를 두번째에 설정한 ms, 
let isRunning = false; // 이 부분이 이해가 안갔단말이지. 아직. false는 플래그. 버튼을 누를때, 실행할지, 안할지를 결정하는 거야.

// 앨리먼트가 보이도록 해야한다.
const timerElement = document.getElementById('timer');
const startStopButton = document.getElementById('startStopButton');

// 어떻게 표시할건지를 함수로 정의한다.
function updateDisplay() {
    const seconds = timeLeft % 60;
    const minutes = Math.floor(timeLeft / 60);
    timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

