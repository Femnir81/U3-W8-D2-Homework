"use strict";
class Account {
    constructor(account) {
        this.balanceInit = 0;
        this.account = account;
    }
    deposit(money) {
        this.balanceInit = this.balanceInit + money;
        console.log(`Il bilancio di ${this.account} è di ${this.balanceInit}`);
    }
    withdraw(money) {
        this.balanceInit = this.balanceInit - money;
        console.log(`Il bilancio di ${this.account} è di ${this.balanceInit}`);
    }
}
class MotherAccount extends Account {
    addInterest() {
        this.balanceInit = Math.floor(this.balanceInit * 1.1);
        console.log(`Il bilancio di ${this.account} è di ${this.balanceInit}`);
    }
}
class SonAccount extends Account {
}
let mother1 = new MotherAccount('Sarah');
let figlio1 = new SonAccount('Saro');
mother1.deposit(600);
mother1.withdraw(200);
mother1.addInterest();
figlio1.deposit(100);
figlio1.withdraw(30);
console.log(`Il bilancio di ${mother1.account} è di ${mother1.balanceInit} e Il bilancio di ${figlio1.account} è di ${figlio1.balanceInit}`);
