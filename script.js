class Pet {

    constructor (name) {
        this.name = name;
        this.health = 100;
        this.happiness = 100;
        this.eat = 100;
        this.walk = 100;
        this.hygiene = 100;
    }

    sayHi () {
        console.log('Hi, I\'m ' + this.name + '.');
    }

    walking () {
        this.health += 10;
        this.happiness += 10;
        this.eat -=20;
        this.walk +=10;
        this.hygiene -=20;
        console.log('I\'m walking');
    }

    eating() {
        this.health += 5;
        this.happiness += 5;
        this.eat +=10;
        this.hygiene -=10;
        console.log('I\'m eating');
    }

    cleaning() {
        this.health += 10;
        this.happiness += 10;
        this.eat -=10;
        console.log('I\'m cleaning up');
    }

    gameOver() {
        if (this.health <= 0 ||
        this.health <= 0 ||
        this.happiness <= 0 ||
        this.eat <= 0 ||
        this.walk <= 0 ||
        this.hygiene <= 0) {
            console.log('Game Over');
        }
    }

    life(){
        if (this.health < 20){
            console.log('I am very bad');
        }

        if (this.happiness < 40) {
            console.log('I\'m sad');
        }

        if (this.eat < 30) {
            console.log("I am very hungry");
        }

        if (this.walk < 50) {
            console.log('I want to walk');
        }

        if (this.hygiene < 30) {
            console.log('It\'s time to freshen up');
        }
    }
}

let myPet = new Pet('Tommy');
myPet.sayHi();
myPet.eating();
myPet.cleaning();

myPet.life();
myPet.gameOver();

//myPet.removeHealth();