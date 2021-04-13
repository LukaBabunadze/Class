class Character {
    name = '';
    role = '';
    armor = 0;
    damage = 0;
    constructor (name, role, armor, damage){
        this.name = name;
        this.role = role;
        this.armor = armor;
        this.damage = damage;
    }
    charArmor () {
        console.log(`${this.name} has ${this.armor} armor`);
        return this;
    }
    charDamage () {
        console.log(`${this.name} has ${this.damage} damage`);
        return this;
    }
}

class Mage extends Character {
    fly = true;
    constructor (name, armor, damage, fly) {
        super(name, 'Mage', armor, damage)
        this.fly = fly;
    }
}

class Support extends Mage {
    heal = 0;
    constructor (name, armor, damage, fly, heal) {
        super (name, armor, damage, fly)
        this.heal = heal;
    }
}

let gusion = new Character('Gusion', 'Assassin', 400, 100);
let jadokar = new Mage ('Jadokar', 200, 400, true);
let hilos = new Support ('Hilos', 800, 50, true, 500);

jadokar.charArmor().charDamage();
console.log(jadokar);
console.log(hilos);
console.log(gusion);
