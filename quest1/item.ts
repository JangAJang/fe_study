export class Item {
  readonly name: string;
  readonly price: string;

  constructor(name: string, price: string) {
    this.name = name;
    this.price = price;
  }

  getData() {
    return `${this.name} : ${this.price}`;
  }
}
