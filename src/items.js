export default class Inventory {

  drinkPotion() {
    
  }

  equipWeapon() {
    this.equipped = true;
  }

  equipArmor() {
    this.equipped = true;
  }
}

class Armor extends Inventory {
  constructor(tier) {
    super ();
    if (tier === "common") {
      this.equipped = false;
      this.defense = diceRoll();
    } else if (tier === "rare") {
      this.equipped = false;
      this.defense = diceRoll() + diceRoll();
      this.magicResistance = diceRoll();
    } else if (tier === "legendary") {
      this.equipped = false;
      this.defense = diceRoll() + 15;
      this.magicResistance = diceRoll() + diceRoll();
      this.ricochet = diceRoll() - 5;
    }
  } 
}

class Sword extends Inventory {
  constructor(tier) {
    super ();
    if (tier === "common") {
      this.equipped = false;
      this.strength = diceRoll();
    } else if (tier === "rare") {
      this.equipped = false;
      this.strength = diceRoll() + diceRoll();
    } else if (tier === "legendary") {
      this.equipped = false;
      this.strength = diceRoll() + 15;
      this.ricochet = diceRoll() - 5;
    }
  }
}

class Staff extends Inventory {
  constructor(tier) {
    super ();
    if (tier === "common") {
      this.equipped = false;
      this.intelligence = diceRoll();
    } else if (tier === "rare") {
      this.equipped = false;
      this.intelligence = diceRoll() + diceRoll();
      this.magicResistance = diceRoll();
    } else if (tier === "legendary") {
      this.equipped = false;
      this.intelligence = diceRoll() + 15;
      this.magicResistance = diceRoll() + diceRoll();
      this.ricochet = diceRoll() - 5;
    }
  }
}

class Potions extends Inventory {
  constructor(tier) {
    super ();
    if (tier === "common") {
      this.healing = diceRoll();
    } else if (tier === "rare") {
      this.healing = diceRoll() + diceRoll();
    } else if (tier === "legendary") {
      this.healing = diceRoll() + 15
    }
  }
}
