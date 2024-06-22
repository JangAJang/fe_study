import fs from "fs";
import { Item } from "./item.js";

export class ShoppingMall {
  items;

  constructor() {
    const dataJson = JSON.parse(
      fs.readFileSync("items.json", { encoding: "utf-8" })
    );
    this.items = [];
    Object.keys(dataJson).forEach((each) =>
      this.items.push(new Item(each, dataJson[each]))
    );
  }

  containsItem(name) {
    return this.items.filter((each) => each.name === name).length > 0;
  }

  sellItem(name) {
    if (this.containsItem(name)) {
      this.items = this.items.filter((each) => each.name !== name);
      return;
    }

    throw Error("아이템이 존재하지 않습니다.");
  }

  getItemDatas() {
    return this.items.map((each) => each.getData());
  }
}
