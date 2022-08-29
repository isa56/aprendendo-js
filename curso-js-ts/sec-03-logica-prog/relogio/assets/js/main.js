function clockAdm() {
  // Elements:
  const clock = document.querySelector(".relogio");
  const beginBtn = document.querySelector(".iniciar");
  const pauseBtn = document.querySelector(".pausar");
  const zeroBtn = document.querySelector(".zerar");

  // Vars:
  let seconds = 0;
  let timer;

  // EventListerners:
  beginBtn.addEventListener("click", beginClock);

  pauseBtn.addEventListener("click", pauseClock);

  zeroBtn.addEventListener("click", zeroClock);

  // Functions:
  function getTimeFromSeconds(seconds) {
    return new Date(seconds * 1000).toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "GMT",
    });
  }

  function beginClock() {
    clock.classList.remove("pausado");
    timer = setInterval(() => {
      seconds++;
      clock.innerText = getTimeFromSeconds(seconds);
    }, 1000);
  }

  function pauseClock() {
    clock.classList.add("pausado");
    clearInterval(timer);
  }

  function zeroClock() {
    clock.classList.remove("pausado");
    seconds = 0;
    clock.innerText = "00:00:00";
    clearInterval(timer);
  }
}

clockAdm();
