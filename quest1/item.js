export class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getData() {
    return `${this.name} : ${this.price}`;
  }
}
