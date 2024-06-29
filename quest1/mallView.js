import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const printAvailableItems = (itemDatas) => {
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

export const getOrderedItem = () => {
  return new Promise((resolve, reject) => {
    rl.question("주문할 상품을 입력하세요 > ", (answer) => {
      resolve(answer);
    });
  });
};

export const printOrderSuccess = (name) => {
  console.log(`${name} : 상품이 주문되었습니다.`);
};
