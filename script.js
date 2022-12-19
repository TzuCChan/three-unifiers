console.log("script loaded");
class Daimyo {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
}

let samurai1 = new Daimyo("Nobunaga", "Sword");

let samurai2 = new Daimyo("Hideyoshi", "Naginata");

let samurai3 = new Daimyo("Ieyasu", "Katanas");

class battle {
  constructor(name) {
    this.name = name;
  }
  samurais = [];
  add(warrior) {
    this.samurais.push(warrior);
  }
  fight() {
    if (
      this.samurais[0].weapon === 'Sword' &&
      this.samurais[1].weapon === 'Katanas'
    ) {
      console.log(this.samurais[0].name, 'wins')
    }
    if (
      this.samurais[0].weapon === 'Katanas' &&
      this.samurais[1].weapon === 'Naginata'
    ) {
      console.log(this.samurais[0].name, 'wins')
    }
    if (
      this.samurais[0].weapon === 'Naginata' &&
      this.samurais[1].weapon === 'Sword'
    ) {
      console.log(this.samurais[0].name, 'wins')
    }
  }
}

const battlefield = new battle("dojo");

battlefield.add(samurai1);
console.log(battlefield);

battlefield.add(samurai2);
console.log(battlefield);

battlefield.add(samurai3);
console.log(battlefield);