const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');

function setClock() {
  const currentDate = new Date();
  const hours = currentDate.getHours() % 12;
  const minutes = currentDate.getMinutes();
  const hoursDegree = (hours / 12) * 360;
  const minutesDegree = (minutes / 60) * 360;
  
  hourHand.style.transform = `translateX(-50%) rotate(${hoursDegree}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minutesDegree}deg)`;
}

setInterval(setClock, 1000);
setClock();
