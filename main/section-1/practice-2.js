'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(n => collectionB[0].indexOf(n)!= -1)
}
