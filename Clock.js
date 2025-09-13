// ===== Digital Clock =====
function updateClock() {
  const now = new Date();   
  const h = String(now.getHours()).padStart(2, '0');    
  const m = String(now.getMinutes()).padStart(2, '0');   
  const s = String(now.getSeconds()).padStart(2, '0');   
  document.getElementById('clock').textContent = `${h}:${m}:${s}`; 
}

updateClock();            
setInterval(updateClock, 1000);

// ===== Stopwatch =====
let elapsed = 0;                  
let timerId = null;               
const sw = document.getElementById('stopwatch'); 
function renderStopwatch() {
  const hrs  = Math.floor(elapsed / 3600);        
  const mins = Math.floor((elapsed % 3600) / 60);
  const secs = elapsed % 60;                      
  const H = String(hrs).padStart(2, '0');
  const M = String(mins).padStart(2, '0');
  const S = String(secs).padStart(2, '0');

  sw.textContent = `${H}:${M}:${S}`;
}

renderStopwatch(); 


// ===== Buttons =====
const startBtn = document.getElementById('start');
const stopBtn  = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

// Start button
startBtn.addEventListener('click', () => {
  if (timerId) return; 
  timerId = setInterval(() => {
    elapsed += 1;         
    renderStopwatch();    
  }, 1000);
});

// Stop button
stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  timerId = null;
});

// Reset button
resetBtn.addEventListener('click', () => {
  clearInterval(timerId);
  timerId = null;
  elapsed = 0;
  renderStopwatch();
});