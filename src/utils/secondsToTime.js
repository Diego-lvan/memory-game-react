const secondsToTime = (seconds) => {
  let min = Math.floor(seconds / 60);
  seconds -= min * 60;
  let time = "";
  if (min < 1) {
    time = "00";
  } else if (min <= 9) {
    time += `0${min}`;
  } else {
    time = min;
  }

  time += ":";
  if (seconds === 0) {
    time += "00";
  } else if (seconds <= 9) {
    time += `0${seconds}`;
  } else {
    time += seconds;
  }
  return time;
};

export default secondsToTime;
