// view.js
import readline from "readline";

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export class View {
  show_list(count, items) {
    Object.entries(items).forEach(([name, price]) => {
      console.log(`${count}. ${name}: ${price}원`);
      count++;
    });
  }

  // 주문 가능한 상품 목록 출력 함수
  displayAvailableItems(items) {
    let count = 1;
    console.log("주문 가능한 상품:");
    this.show_list(count, items);
  }
  callItems() {
    return new Promise((resolve, reject) => {
      console.log("주문할 상품을 입력하세요 >");
      // 'line' 이벤트 리스너 등록
      r1.on("line", (str) => {
        resolve(str); // 'line' 이벤트 발생 시 입력된 문자열을 resolve하여 처리
      });
      // 에러 이벤트 리스너 등록
      r1.on("error", (err) => {
        reject(err); // 에러 발생 시 reject를 호출하여 처리
      });
    });
  }

  async checkproduct() {
    try {
      return await this.callItems();
    } catch {
      return "error!";
    }
  }
}
