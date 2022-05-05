const input = require('sync-input');
var totalWater = 400;
var totalMilk = 540;
var totalCoffeeBeans = 120;
var totalCups = 9;
var totalMoney = 550;
var newWater = 400;
var newMilk = 540;
var newCoffeeBeans = 120;
var newCups = 9;
var newMoney = 550;
start();
function start() {
    var totalWater = newWater;
    var totalMilk = newMilk;
    var totalCoffeeBeans = newCoffeeBeans;
    var totalCups = newCups;
    var totalMoney = newMoney;
    let answer = input("Write action (buy, fill, take, remaining, exit):\n");
    if (answer === 'buy') {
        console.log();
        let typeCoffeeAnswer = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, 4 - blackCoffee, back - to main menu:\n");
        if (typeCoffeeAnswer === "1") {

            if(totalWater >= 250 && totalCoffeeBeans >= 16 && totalCups >= 1 && totalMoney >= 4) {
                console.log("I have enough resources, making you a coffee!");
                newWater = totalWater - 250;
                newMilk = totalMilk;
                newCoffeeBeans = totalCoffeeBeans - 16;
                newCups= totalCups - 1;
                newMoney = totalMoney + 4;

            } else{
                switch (true){
                    case totalWater < 250: console.log("Sorry, not enough water!"); break;
                    case totalCoffeeBeans < 16: console.log("Sorry, not coffee beans!"); break;
                    case totalCups < 1: console.log("Sorry, not enough disposable cups!"); break;
                    case totalMoney < 4: console.log("Sorry, not enough money!"); break;
                }
            }

        } else if (typeCoffeeAnswer === "2") {
            if(totalWater >= 350 && totalMilk >= 75 && totalCoffeeBeans >= 20 && totalCups >= 1 && totalMoney >= 7) {
                console.log("I have enough resources, making you a coffee!");
                newWater = totalWater - 350;
                newMilk = totalMilk - 75;
                newCoffeeBeans = totalCoffeeBeans - 20;
                newCups = totalCups - 1;
                newMoney = totalMoney + 7;

            } else {
                switch (true) {
                    case totalWater < 350: console.log("Sorry, not enough water!"); break;
                    case totalMilk < 75: console.log("Sorry, not enough milk!"); break;
                    case totalCoffeeBeans < 20: console.log("Sorry, not coffee beans!"); break;
                    case totalCups < 1: console.log("Sorry, not enough disposable cups!"); break;
                    case totalMoney < 7: console.log("Sorry, not enough money!"); break;
                }
            }
        } else if(typeCoffeeAnswer === "3") {
            if(totalWater >= 200 && totalMilk >= 100 && totalCoffeeBeans >= 12 && totalCups >= 1 && totalMoney >= 6) {
                console.log("I have enough resources, making you a coffee!");
                newWater = totalWater - 200;
                newMilk = totalMilk - 100;
                newCoffeeBeans = totalCoffeeBeans - 12;
                newCups = totalCups - 1;
                newMoney = totalMoney + 6;
            } else {
                switch (true){
                    case totalWater < 200: console.log("Sorry, not enough water!"); break;
                    case totalMilk < 100: console.log("Sorry, not enough milk!"); break;
                    case totalCoffeeBeans < 12: console.log("Sorry, not coffee beans!"); break;
                    case totalCups < 1: console.log("Sorry, not enough disposable cups!"); break;
                    case totalMoney < 6: console.log("Sorry, not enough money!"); break;
                }
            }
        } else if(typeCoffeeAnswer === "4") {
            if(totalWater >= 200 && totalCoffeeBeans >= 15 && totalCups >= 1 && totalMoney >= 4) {
                console.log("I have enough resources, making you a coffee!");
                newWater = totalWater - 200;
                newCoffeeBeans = totalCoffeeBeans - 15;
                newCups = totalCups - 1;
                newMoney = totalMoney + 4;
            } else {
                switch (true){
                    case totalWater < 200: console.log("Sorry, not enough water!"); break;
                    case totalCoffeeBeans < 15: console.log("Sorry, not coffee beans!"); break;
                    case totalCups < 1: console.log("Sorry, not enough disposable cups!"); break;
                    case totalMoney < 4: console.log("Sorry, not enough money!"); break;
                }
            }
        } else {
            console.log();
            start(newWater, newMilk, newCoffeeBeans, newCups, newMoney);
        }
        console.log();
        start(newWater, newMilk, newCoffeeBeans, newCups, newMoney);
    } else if (answer === "fill") {
        let addWater = input(`Write how many ml of water you want to add:\n`);
        let addMilk = input(`Write how many ml of milk you want to add:\n`);
        let addCoffeeBeans = input(`Write how many grams of coffee beans you want to add:\n`);
        let addCups = input(`Write how many disposable cups of coffee do you want to add:\n`);
        newWater = +totalWater + +addWater;
        newMilk = +totalMilk + +addMilk;
        newCoffeeBeans = +totalCoffeeBeans + +addCoffeeBeans;
        newCups = +totalCups + +addCups;
        newMoney = +totalMoney;
        console.log();
        start()
    } else if(answer === "take"){
        console.log();
        console.log(`I gave you $${totalMoney}`);
        newMoney = 0;
        start()
    } else if(answer === "remaining") {
        console.log(`The coffee machine has:\n${newWater} ml of water\n${newMilk} ml of milk\n${newCoffeeBeans} g of coffee beans\n${newCups} disposable cups\n$${newMoney} of money`);
        console.log();
        start(newWater, newMilk, newCoffeeBeans, newCups, newMoney);
        console.log();
    } else{

    }
}