
class CountDown{
    // constructor (expired date, onRender, onComplete)
    constructor(expiredDate, onRender, onComplete){

        this.onComplete = onComplete;
        this.onRender = onRender;
    }
    setExpiredDate(expiredDate){
        // obtain the current time in milliseconds
        const currentTime = new Date().getTime();
        // calculate the remaining time
        this.remainingTime = expiredDate.getTime() - currentTime;

        // invoke the complete method when the remaining time is less or equal to 0
        // invoke the start method when the remaining time is greater than 0
        this.remainingTime <= 0 ? this.complete() : this.start();
    }
    complete(){
        // checks the typeof the property given and if its of type function it should invoke the 
        // callback method onComplete.
        if(typeof this.onComplete === "function"){
            onComplete(); // a callback invoked when the countdown is complete
        }
    }
    start(){
        const intervalId = setInterval(() => {
            // update the countdown
            this.update();
            // updating the remaining time by decrementing it by one
            this.remainingTime -= 1000;

            // invoke the complete method when the remaining time is less than 0
            if(this.remainingTime < 0){
                complete();
                clearInterval(intervalId); // clearing the timer
            }else{
                this.update();
            }
        }, 1000);
    }
    getTime(){
        // returns a date object
        return {
            days: Math.floor(this.remainingTime/1000/60/60/24),
            hours: Math.floor(this.remainingTime/1000/60/60) % 24,
            minutes: Math.floor(this.remainingTime/1000/60) % 60,
            seconds: Math.floor(this.remainingTime/1000) % 60,
        }
    }
    update(){
        // invokes the onRender callback with getTime as its argument
        if(typeof this.onRender === "function"){
            this.onRender(this.getTime());
        }
    }
}