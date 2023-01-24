//timer count
const timerCounter = (time) => {
    while (time >= 0) {
        setTimeout(timerCounter,1000);
        console.log(Math.floor(time));
        time--;
    }
}
timerCounter(10);