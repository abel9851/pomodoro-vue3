// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

// 중요한 변수 3가지다.
let timeLeft = 25 * 60;
let timerInterval;
let isRunning = false;

// 앨리먼트가 보이도록 해야한다.
const timerElement = document.getElementById('timer');
const startStopButton = document.getElementById('startStopButton');

// 어떻게 표시할건지를 함수로 정의한다.

function updateDisplay() {

};