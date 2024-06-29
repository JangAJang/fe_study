import * as fs from "fs";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const printAvailableItems = (itemDatas: string[]) => {
  if (itemDatas.length == 0) {
    console.log("주문 가능한 상품이 없습니다.");
    return;
  }

  console.log("주문 가능한 상품");

  for (let index = 0; index < itemDatas.length; index++) {
    console.log(`${index + 1}. ${itemDatas[index]}`);
  }

  console.log("");
};

export const getOrderedItem = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    rl.question("주문할 상품을 입력하세요 > ", (answer: string) => {
      resolve(answer);
    });
  });
};

export const printOrderSuccess = (name: string) => {
  console.log(`${name} : 상품이 주문되었습니다.`);
};
