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

        this.res = Math.ceil((this.minRange + this.maxRange) / 2);
        return this.res;

    }

    lower() {
        this.maxRange = this.res;

    }

    greater() {
    this.minRange = this.res;
    }
}

module.exports = GuessingGame;
