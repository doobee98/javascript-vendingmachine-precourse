import CoinStorage from './storage/coinStorage.js';

class UserAgent {
  amount;

  returnedCoinStorage;

  constructor() {
    this.amount = 0;
    this.returnedCoinStorage = new CoinStorage();
  }

  charge(amount) {
    this.amount += amount;
  }

  canSpend(price) {
    return this.amount >= price;
  }

  spend(price) {
    this.amount -= price;
  }
}

export default UserAgent;
