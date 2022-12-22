const namesOfDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота'];
const namesOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
// calendar
const day = document.querySelector('.date-day');
const dayOfMonth = document.querySelector('.date');
const month = document.querySelector('.date-month');
const year = document.querySelector('.date-year');
const digitalClock = document.querySelector('.digital-clock');
//clock
const arrowHrs = document.querySelector('.clock-hours__arrow');
const arrowMins = document.querySelector('.clock-minutes__arrow');
const arrowSeconds = document.querySelector('.clock-seconds__arrow');

setInterval(() => {
  const currentTime = new Date();
  const date = makeDate(currentTime);
  createDigitalClock(date);
  createClock(date);
  console.log(date);
}, 1000);

function createDigitalClock(date) {
  const totalTime = `Текущее время ${date.timeHour.toString().padStart(2, '0')} : ${date.timeMinutes.toString().padStart(2, '0')} : ${date.timeSeconds
    .toString()
    .padStart(2, '0')}`;

  day.textContent = date.timeDay;
  dayOfMonth.textContent = date.timeDate;
  month.textContent = date.timeMonth;
  year.textContent = date.timeYear;
  digitalClock.textContent = totalTime;
}

function createClock(date) {
  const forSeconds = date.timeSeconds * (360 / 60);
  const forMinutes = date.timeMinutes * (360 / 60);
  const forHours = date.timeHour * (360 / 12) + date.timeMinutes * (30 / 60);
  arrowSeconds.style.transform = `rotate(${forSeconds}deg)`;
  arrowMins.style.transform = `rotate(${forMinutes}deg)`;
  arrowHrs.style.transform = `rotate(${forHours}deg)`;
}

function makeDate(time) {
  const timeDay = namesOfDay[time.getDay()];
  const timeDate = time.getDate();
  const timeMonth = namesOfMonth[time.getMonth()];
  const timeYear = time.getFullYear();
  // digital-clock
  const timeHour = time.getHours();
  const timeMinutes = time.getMinutes();
  const timeSeconds = time.getSeconds();
  return {
    timeDay,
    timeDate,
    timeMonth,
    timeYear,
    timeHour,
    timeMinutes,
    timeSeconds,
  };
}
