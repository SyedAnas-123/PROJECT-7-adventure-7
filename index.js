#! /usr/bin/env node
// 1 player or aik opppent ki classs
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    //making constructor
    constructor(name) {
        this.name = name;
    }
    //for fuel decrease if 0 comes
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    //FUEL INCREASE YE SIRF PLAYER ME HOGA
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    //making constructor
    constructor(name) {
        this.name = name;
    }
    //for fuel decrease if 0 comes
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
//ASKING PLAYER NAME
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "PLEASE ENTER YOUR NAME",
    }
]);
//OPPONENT SELECT KREN USER
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "SELCT YOUR OPPPONENT",
        choices: ["SKELETON", "ALIEN", "ZOMBIE"]
    },
]);
//GATHER USER & oppnonent  DATA
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
// console.log(o1);
// console.log(p1);
//GAME CODING
do {
    //FOR SKELETON
    if (opponent.select === "SKELETON") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: "WHAT DO YOU LIKE TO DO ?",
                choices: ["ATTACK", "DRINK PORTION", "RUN FOR YOUR LIFE.."]
            }
        ]);
        //agr user ne attack choose kiya tw
        if (ask.opt == "ATTACK") {
            //we want 2 num geenrate hon 0 ,1so use random
            let num = Math.floor(Math.random() * 2); //bcz we want 0, 1 and dont need point fter values
            //PLAYER FUEL DECREASE
            if (num > 0) //o se zayda hua toh plauer ka fuel ku or 1 se kum hua toh opponent ka fuel kum toh is liye funtion bana den gen upr
             {
                p1.fuelDecrease();
                console.log(`NOW ${p1.name} FUEL IS : ${p1.fuel}`);
                console.log(`NOW ${o1.name} FUEL IS : ${o1.fuel}`);
                //FUEL 0 HOGAYA TOH PPLAYER LOOSE
                if (p1.fuel <= 0) {
                    console.log("YOU LOOSE , BETTER LUCK NEXT TIME");
                    process.exit(); //jese hi 0 hua toh wihile loop stops or ye bund hojaeega loop
                }
            }
            //OPONENT FUEL DECREASE
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`NOW ${p1.name} FUEL IS : ${p1.fuel}`);
                console.log(`NOW ${o1.name} FUEL IS : ${o1.fuel}`);
                //FUEL 0 HOGAYA TOH opponent LOOSE
                if (o1.fuel <= 0) {
                    console.log("YOU WIN , CONGRATULATIONS");
                    process.exit(); //jese hi 0 hua toh wihile loop stops or ye bund hojaeega loop
                }
            }
        }
        //INCRFEASES DRINK , JESE UPR DECREASE FUEL WALE KA FUNCTION BANAAYA IA ISII TRH  DRINK PORTION WALE KA BAANE GEN FUCNTION UPR
        if (ask.opt == "DRINK PORTION") {
            p1.fuelIncrease();
            console.log(`YOU DRINK HEALTH PORTION NOW YOUR FUEL IS ${p1.fuel}`);
        }
        //RUN FOR YOUR LIFE
        if (ask.opt == "RUN FOR YOUR LIFE..") {
            console.log("YOU LOOSE BETTER LUCK NEXT TIME ");
            process.exit();
        }
    }
    //FOR ALIEN
    if (opponent.select === "ALIEN") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: "WHAT DO YOU LIKE TO DO ?",
                choices: ["ATTACK", "DRINK PORTION", "RUN FOR YOUR LIFE.."]
            }
        ]);
        //agr user ne attack choose kiya tw
        if (ask.opt == "ATTACK") {
            //we want 2 num geenrate hon 0 ,1so use random
            let num = Math.floor(Math.random() * 2); //bcz we want 0, 1 and dont need point fter values
            //PLAYER FUEL DECREASE
            if (num > 0) //o se zayda hua toh plauer ka fuel ku or 1 se kum hua toh opponent ka fuel kum toh is liye funtion bana den gen upr
             {
                p1.fuelDecrease();
                console.log(`NOW ${p1.name} FUEL IS : ${p1.fuel}`);
                console.log(`NOW ${o1.name} FUEL IS : ${o1.fuel}`);
                //FUEL 0 HOGAYA TOH PPLAYER LOOSE
                if (p1.fuel <= 0) {
                    console.log("YOU LOOSE , BETTER LUCK NEXT TIME");
                    process.exit(); //jese hi 0 hua toh wihile loop stops or ye bund hojaeega loop
                }
            }
            //OPONENT FUEL DECREASE
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`NOW ${p1.name} FUEL IS : ${p1.fuel}`);
                console.log(`NOW ${o1.name} FUEL IS : ${o1.fuel}`);
                //FUEL 0 HOGAYA TOH opponent LOOSE
                if (o1.fuel <= 0) {
                    console.log("YOU WIN , CONGRATULATIONS");
                    process.exit(); //jese hi 0 hua toh wihile loop stops or ye bund hojaeega loop
                }
            }
        }
        //INCRFEASES DRINK , JESE UPR DECREASE FUEL WALE KA FUNCTION BANAAYA IA ISII TRH  DRINK PORTION WALE KA BAANE GEN FUCNTION UPR
        if (ask.opt == "DRINK PORTION") {
            p1.fuelIncrease();
            console.log(`YOU DRINK HEALTH PORTION NOW YOUR FUEL IS ${p1.fuel}`);
        }
        //RUN FOR YOUR LIFE
        if (ask.opt == "RUN FOR YOUR LIFE..") {
            console.log("YOU LOOSE BETTER LUCK NEXT TIME ");
            process.exit();
        }
    }
    // FOR ZOMBE
    if (opponent.select === "ZOMBIE") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: "WHAT DO YOU LIKE TO DO ?",
                choices: ["ATTACK", "DRINK PORTION", "RUN FOR YOUR LIFE.."]
            }
        ]);
        //agr user ne attack choose kiya tw
        if (ask.opt == "ATTACK") {
            //we want 2 num geenrate hon 0 ,1so use random
            let num = Math.floor(Math.random() * 2); //bcz we want 0, 1 and dont need point fter values
            //PLAYER FUEL DECREASE
            if (num > 0) //o se zayda hua toh plauer ka fuel ku or 1 se kum hua toh opponent ka fuel kum toh is liye funtion bana den gen upr
             {
                p1.fuelDecrease();
                console.log(`NOW ${p1.name} FUEL IS : ${p1.fuel}`);
                console.log(`NOW ${o1.name} FUEL IS : ${o1.fuel}`);
                //FUEL 0 HOGAYA TOH PPLAYER LOOSE
                if (p1.fuel <= 0) {
                    console.log("YOU LOOSE , BETTER LUCK NEXT TIME");
                    process.exit(); //jese hi 0 hua toh wihile loop stops or ye bund hojaeega loop
                }
            }
            //OPONENT FUEL DECREASE
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`NOW ${p1.name} FUEL IS : ${p1.fuel}`);
                console.log(`NOW ${o1.name} FUEL IS : ${o1.fuel}`);
                //FUEL 0 HOGAYA TOH opponent LOOSE
                if (o1.fuel <= 0) {
                    console.log("YOU WIN , CONGRATULATIONS");
                    process.exit(); //jese hi 0 hua toh wihile loop stops or ye bund hojaeega loop
                }
            }
        }
        //INCRFEASES DRINK , JESE UPR DECREASE FUEL WALE KA FUNCTION BANAAYA IA ISII TRH  DRINK PORTION WALE KA BAANE GEN FUCNTION UPR
        if (ask.opt == "DRINK PORTION") {
            p1.fuelIncrease();
            console.log(`YOU DRINK HEALTH PORTION NOW YOUR FUEL IS ${p1.fuel}`);
        }
        //RUN FOR YOUR LIFE
        if (ask.opt == "RUN FOR YOUR LIFE..") {
            console.log("YOU LOOSE BETTER LUCK NEXT TIME ");
            process.exit();
        }
    }
} while (true);
