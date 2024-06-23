// view.js
import fs from "fs";
import readline from "readline";
import { ShoppingMall } from "./shoppingmall.js";

const r1 = readline.createInterface({
  // 입출력을 위한 인터페이스를 생성
  input: process.stdin,
  output: process.stdout,
});

export class View {
  // 주문 가능한 상품 목록 출력 함수
  displayAvailableItems(items) {
    let count = 1;
    console.log("주문 가능한 상품:");
    Object.entries(items).forEach(([name, price]) => {
      console.log(`${count}. ${name}: ${price.toLocaleString()}원`);
      count++;
    });
  }

  a;

  callItems() {
    return new Promise(function (resolve, reject) {
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

  async checkproduct(items) {
    try {
      return await this.callItems();
    } catch {
      return "error!";
    }
  }
}
