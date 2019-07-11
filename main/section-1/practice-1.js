'use strict';


module.exports = function collectSameElements(collectionA, collectionB) {



    return collectionA.filter(n => collectionB.indexOf(n)!= -1)

}

