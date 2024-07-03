// view.js
import * as fs from 'fs';
import * as readline from "readline";
import { ShoppingMall } from "./shoppingmall";
import {Item} from './item';
const r1 = readline.createInterface({
  // 입출력을 위한 인터페이스를 생성
  input: process.stdin,
  output: process.stdout,
});

export class View {

  show_list(count:number,items:Item[]):void {
    Object.entries(items).forEach(([name, price]) => {
      console.log(`${count}. ${name}: ${price}원`);
      count++;
    });
  }

  // 주문 가능한 상품 목록 출력 함수
  displayAvailableItems(items: Item[]):void {
    let count:number = 1;
    console.log("주문 가능한 상품:");
    this.show_list(count,items);
  }

  callItems() {
    return new Promise<string>(function (resolve, reject) {
      console.log("주문할 상품을 입력하세요 >");

      // 'line' 이벤트 리스너 등록
      r1.on("line", function (str) {
        resolve(str); // 'line' 이벤트 발생 시 입력된 문자열을 resolve하여 처리
      });

      // 에러 이벤트 리스너 등록
      r1.on("error", function (err) {
        reject(err); // 에러 발생 시 reject를 호출하여 처리
      });
    });
  }

  async checkproduct():Promise<string> {
    try {
      return await this.callItems();
    } catch {
      return "error!";
    }
  }
}
