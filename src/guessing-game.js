class GuessingGame {
    constructor() {
        minRange = 0;
        maxRange = 0;
    }

    setRange(min, max) {
        minRange = min;
        maxRange = max;

    }

    guess() {

        res = Math.floor((minRange + maxRange) / 2);
        return res;

    }

    lower() {
        minRange = guess();

    }

    greater() {
    maxRange = guess();
    }
}

module.exports = GuessingGame;
