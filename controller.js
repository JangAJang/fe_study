// controller.mjs

// model과 view를 사용할 수 있도록 import
import { ShoppingMall } from "./shoppingmall.js";
import { View } from "./view.js";
import { EventEmitter } from "events";

EventEmitter.defaultMaxListeners = 50; // 리스너 수를 50으로 설정하여 while문 안에서 여러 차례 값을 입력받을 수 있게 함.
const emitter = new EventEmitter();
const shoppingMall = new ShoppingMall();
const s_view = new View();

s_view.displayAvailableItems(shoppingMall.items);

async function process() {
  while (true) {
    const it = await s_view.checkproduct();
    shoppingMall.cleanItems(it);
    s_view.displayAvailableItems(shoppingMall.items);

    if (Object.entries(shoppingMall.items).length === 0) {
      console.log("모든 아이템이 판매되었습니다.");
      break;
    }
  }
}

process();
