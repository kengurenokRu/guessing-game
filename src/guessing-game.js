class GuessingGame {
    constructor() {
        this.minRange = 0;
        this.maxRange = 0;
        this.res = 0;
    }

    setRange(min, max) {
        this.minRange = min;
        this.maxRange = max;

    }

    guess() {

        this.res = Math.floor((this.minRange + this.maxRange) / 2);
        return this.res;

    }

    lower() {
        this.minRange = guess();

    }

    greater() {
    this.maxRange = guess();
    }
}

module.exports = GuessingGame;
