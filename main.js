const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second'); // Jarum detik

function setClock() {
  const currentDate = new Date();
  const hours = currentDate.getHours() % 12;
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // Perhitungan untuk menggerakkan jarum jam
  const hoursDegree = (hours * 30) + (minutes / 60) * 30; // Setiap jam = 30 derajat
  const minutesDegree = (minutes / 60) * 360; // Setiap menit = 6 derajat
  const secondsDegree = (seconds / 60) * 360; // Setiap detik = 6 derajat

  hourHand.style.transform = `translateX(-50%) rotate(${hoursDegree}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minutesDegree}deg)`;
  secondHand.style.transform = `translateX(-50%) rotate(${secondsDegree}deg)`; // Menggerakkan jarum detik
}

setInterval(setClock, 1000);
setClock();
