let count = 120;
let countInterval;

let start_btn = document.getElementById("start_btn");
let pause_btn = document.getElementById("pause_btn");
let reset_btn = document.getElementById("reset_btn");
let get_seconds = document.getElementById("countdown");

const handleStart = () => {
  start_btn.disable = true;
  pause_btn.disable = false;
  reset_btn.disable = false;
  countInterval = setInterval(() => {
    count = count - 1;
    if (count >= 0) {
      if (count % 60 < 10) {
        get_seconds.innerHTML = `0${Math.floor(count / 60)} : 0${Math.floor(
          count % 60
        )}`;
      } else {
        get_seconds.innerHTML = `0${Math.floor(count / 60)} : ${Math.floor(
          count % 60
        )}`;
      }
    } else {
      get_seconds.innerHTML = `0${0} : 0${0}`;
      clearInterval(countInterval);
    }
  }, 1000);
};

const handlePause = () => {
  clearInterval(countInterval);
  start_btn.disable = false;
  reset_btn.disable = false;
  pause_btn.disable = true;
};

const handleReset = () => {
  clearInterval(countInterval);
  count = 120;
  get_seconds.innerHTML = `0${Math.floor(count / 60)} : 0${Math.floor(
    count % 60
  )}`;
  start_btn.disable = false;
  reset_btn.disable = true;
  pause_btn.disable = false;
};
