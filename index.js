refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
}

class CountdownTimer {
  constructor({onTick,selector,targetDate}) {
    this.onTick = onTick;
    this.targetDate = targetDate;
    this.selector = selector;
    
    }
          start() {
      setInterval(() => {
    
        const deltaTime = this.targetDate - new Date();
        const time = getTime(deltaTime);
  this.onTick(time)
 

}, 1000);
  }
    
  
}


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
    
  onTick: updateClockFace,
}
)
  
// Для прверки работы таймера вызвать 'timer.start' на 40 строке

// timer.start();

console.log(timer);


function updateClockFace({ days, hours, mins, secs }) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.secs.textContent = secs;
}



function getTime(time) {
  /*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  return {days, hours, mins, secs}
}
