class Phone {
  constructor(
    phoneName,
    storageLimit,
    isAndroid,
    screenSize,
    hasHeadPhoneJack
  ) {
    this.phoneName = phoneName;
    this.storageLimit = storageLimit;
    this.isAndroid = isAndroid;
    this.screenSize = screenSize;
    this.hasHeadPhoneJack = hasHeadPhoneJack;
  }

  listSpecifications() {
    for (const props in this) {
      console.log(`${props}: ${this[props]}`);
    }
  }
}

function main() {
  let iPhone = new Phone("iPhone 12", "256GB", false, "1170x2532", false);
  console.log("EX 1");
  iPhone.listSpecifications();
}

main();
