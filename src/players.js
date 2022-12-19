export default class Players {


  checkEquipped() {

  }

  getAttackedBy(attacker) {
    let hitPercentage = (this.dexterity * 0.5) + diceRoll();

    if (attacker.attackType === "physical") {
      if (hitPercentage >= 6) {
        this.hp -= attacker.strength - this.armor;
        attacker.exp += 15;
        attacker.levelingUp();
      }
    } else {
      if (hitPercentage >= 6) {
        this.hp -= attacker.intelligence - this.magicResistance;
        attacker.exp += 15;
        attacker.levelingUp();
      }
    }
  }

  levelingUp() {
    if (this.exp >= 100) {
      this.level +=1;
      this.exp -= 100;
      if (this.attackType === "physical") {
        this.strength += diceRoll() + 2;
        this.hp += diceRoll() + 2;
        this.dexterity += diceRoll() + 2;
        this.intelligence += diceRoll() -1;
      } else {
        this.intelligence += diceRoll() + 2;
        this.strength += diceRoll() - 1;
        this.hp += diceRoll() + 2;
        this.dexterity += diceRoll() + 2;
      }
    }
  }
}



class Warrior extends Game{
  constructor () {
    super ();
    this.level = 1;
    this.attackType = "physical";
    this.hp = Math.floor((Math.random() * 20) + 1);
    this.strength = diceRoll();
    this.intelligence = diceRoll();
    this.dexterity = diceRoll();
    this.defense = this.armor ? this.armor.defense : 0;
    this.magicResistance = this.armor ? this.armor.magicResistance : 0;
    this.exp = 0;
    this.inv = [];
    this.weapon = null;
    this.armor = null;
  }
}

class Wizard extends Game{
  constructor () {
    super ();
    this.level = 1;
    this.attackType = "magic";
    this.hp = Math.floor((Math.random() * 20) + 1);
    this.strength = diceRoll();
    this.intelligence = diceRoll(); 
    this.dexterity = diceRoll();
    this.defense = this.armor ? this.armor.defense : 0;
    this.magicResistance = this.armor ? this.armor.magicResistance : 0;
    this.exp = 0;
    this.inv = [];
    this.weapon = null;
    this.armor = null;
  }
}

function diceRoll() {
  return Math.floor((Math.random() * 10) + 1);
}
