import { getOrderedItem, printAvailableItems } from "./mallView.js";
import { ShoppingMall } from "./shoppingmall.js";

const mall = new ShoppingMall();

while (true) {
  printAvailableItems(mall.getItemDatas());
  const buyingItem = await getOrderedItem();

  try {
    mall.sellItem(buyingItem);
    console.log(`${buyingItem} : 아이템이 판매되었습니다`);
  } catch (e) {
    console.log(e.message);
  }
}
