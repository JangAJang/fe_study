// shoppingmall.js
import fs from "fs";




export class ShoppingMall {
	constructor() {
		this.items = this.loadItems(); // loadItems() 메서드 이용하여 json파일의 데이터를 받아옴
	}

	loadItems() {
		try {
			const data = fs.readFileSync("./items.json", "utf8");
			return JSON.parse(data);
		} catch (err) {
			console.error("상품을 불러오는 중 오류가 발생했습니다:", err);
			return [];
		}
	}

}

