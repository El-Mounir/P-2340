const count= 1500; // input countdown time in minutes
// function to count down until  0.
async function counterDown(count) {
   count--;
   while(count >= 0) {
      let minutes = Math.floor(count/60);
      let seconds = Math.floor(count- (minutes*60));
      if (minutes < 10) {
           minutes = "0" + minutes;
        }
      if (seconds < 10) {
          seconds = "0" + seconds;
        }
    console.log(`${minutes} : ${seconds}`);
    await new Promise(resolve => setTimeout(resolve,1000));
    count--;
    }
};
counterDown(count);