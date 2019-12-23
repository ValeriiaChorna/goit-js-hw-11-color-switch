const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const refs = {
  body: document.body,
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]')
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorSwitch = {
    isActive: false,
    timerId: 0,
    start(){
        if (this.isActive) {return;};
        this.isActive = true;
        this.timerId = setInterval(() => {
            const randomColor = selectRandomColor(colors);
            refs.body.style.backgroundColor = randomColor;
          console.log(`color was changed to ${randomColor}`);
        },1000);
    },
    stop(){
        this.isActive = false;
        clearInterval(this.timerId);
        console.log('color stop changing');
    },
};

refs.btnStart.addEventListener("click", colorSwitch.start.bind(colorSwitch));
refs.btnStop.addEventListener("click", colorSwitch.stop.bind(colorSwitch));

function selectRandomColor(colors){
    const someRandomColor = colors[randomIntegerFromInterval(0,colors.length-1)];
    return someRandomColor;
 }