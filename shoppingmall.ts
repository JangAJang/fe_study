// shoppingmall.js
import * as fs from 'fs';

import {Item} from './item';
export class ShoppingMall {
  items : Item[];
  constructor() {
    this.items= this.loadItems(); // loadItems() 메서드 이용하여 json파일의 데이터를 받아옴
  }

  loadItems():Item[] {
    try {
      const data = fs.readFileSync("./items.json", "utf8");
      const itemsdata :{name:string, price:number}[] = JSON.parse(data);
      return itemsdata.map((item) => new Item(item.name,item.price));
    } catch (err) {
      console.error("상품을 불러오는 중 오류가 발생했습니다:", err);
      return [];
    }
  }

  cleanItems(it: string): void {
    const itemIndex = this.items.findIndex(item => item.name === it);
    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1); // 아이템 삭제
      console.log(`${it}: 상품이 판매되었습니다.`);
    } else {
      console.log("해당 아이템은 존재하지 않습니다.");
    }
  }
}
