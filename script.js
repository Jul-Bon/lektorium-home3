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
        console.log('Привіт, я ' + this.name + '.');
    }

    walking () {
        this.health += 10;
        this.happiness += 10;
        this.eat -=20;
        this.walk +=10;
        this.hygiene -=20;
    }

    eating() {
        this.health += 5;
        this.happiness += 5;
        this.eat +=10;
        this.hygiene -=10;
    }

    cleaning() {
        this.health += 10;
        this.happiness += 10;
        this.eat -=10;
    }

    gameOver () {
        if (this.health <= 0 ||
        this.health <= 0 ||
        this.happiness <= 0 ||
        this.eat <= 0 ||
        this.walk <= 0 ||
        this.hygiene <= 0) {
            console.log('Game Over');
        }
    }
}

let myPet = new Pet('Крихта');
myPet.sayHi();
//myPet.removeHealth();