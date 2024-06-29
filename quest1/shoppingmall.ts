import { Item } from "./item.js";
import * as fs from "fs";

export class ShoppingMall {
  readonly items: Item[];

  constructor() {
    const dataJson = JSON.parse(
      fs.readFileSync("items.json", { encoding: "utf-8" })
    );
    this.items = [];
    Object.keys(dataJson).forEach((each) =>
      this.items.push(new Item(each, dataJson[each]))
    );
  }

  sellItem(name: string) {
    const itemIndex = this.items.findIndex((item) => item.name === name);

    if (itemIndex === -1) {
      throw Error("아이템이 존재하지 않습니다.");
    }

    this.items.splice(itemIndex, 1);
  }

  getItemDatas() {
    return this.items.map((each) => each.getData());
  }
}
