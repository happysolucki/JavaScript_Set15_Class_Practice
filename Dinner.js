class Dinner {
  constructor(dishName, protein, veggie, price) {
    this.dishName = dishName;
    this.protein = protein;
    this.veggie = veggie;
    this.price = `$${price}`;
  }

  listProperties() {
    for (const props in this) {
      console.log(`${props}: ${this[props]}`);
    }
  }
}

function main() {
  let luxuryDinner = new Dinner("Wagyu Steak", "Beef", "Asperagus", 48.99);
  console.log("EX 2");
  luxuryDinner.listProperties();
}

main();
