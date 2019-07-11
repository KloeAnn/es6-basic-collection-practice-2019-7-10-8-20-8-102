'use strict';

module.exports = function countSameElements(collection) {
  let tansItem=(item)=>{
    if(item.includes("-")){
      return item.split("-")[0].repeat(item.split("-")[1])
    }else {
      return item
    }
  }
  return [...new Set(collection.map(tansItem).join("").split(""))].map(item=>{return{key:item,count:(collection.map(tansItem).join("").split("").filter(i=>i==item).length)}})
}


