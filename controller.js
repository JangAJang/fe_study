// controller에서 model과 view를 사용할 수 있도록 import
import { ShoppingMall } from "./shoppingmall.js";
import { View } from "./view.js";

const shoppingMall = new ShoppingMall();
const s_view = new View();


s_view.displayAvailableItems(shoppingMall.items);
s_view.callItems();
s_view.checkproduct(shoppingMall.items);