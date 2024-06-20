// view.js
import fs from "fs";
import readline from 'readline';

const r1 = readline.createInterface({ // 입출력을 위한 인터페이스를 생성
	input: process.stdin,
	output: process.stdout
});

export class View {
    // 주문 가능한 상품 목록 출력 함수
    displayAvailableItems(items) {
      let count=1;
      console.log("주문 가능한 상품:");
      Object.entries(items).forEach(([name, price]) => {
        console.log(`${count}. ${name}: ${price.toLocaleString()}원`);
        count++;
      });
    }


    callItems() {
      return new Promise(function(resolve, reject) {
        console.log('주문할 상품을 입력하세요 >');
        
        // 'line' 이벤트 리스너 등록
        r1.on('line', function(str) {
          resolve(str); // 'line' 이벤트 발생 시 입력된 문자열을 resolve하여 처리
        });
    
        // 에러 이벤트 리스너 등록
        r1.on('error', function(err) {
          reject(err); // 에러 발생 시 reject를 호출하여 처리
        });
      });
    }

    

    checkproduct(items){
      let count=0
      this.callItems()
      .then((value)=>{
        Object.entries(items).forEach(([name, price]) => {
          if (value===name){
            console.log(`${value}: 아이템이 판매되었습니다.`);
            count+=1;
          }
        });
        if (count===0){
          console.log('해당 아이템은 존재하지 않습니다.');
        }
      })
      }

    
    
}


