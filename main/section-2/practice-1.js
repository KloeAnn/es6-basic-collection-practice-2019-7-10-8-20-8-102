'use strict';

module.exports = function countSameElements(collection) {

  return [...new Set(collection)].map(item=>{return{key:item,count:(collection.filter(i=>i==item).length)}})
}
