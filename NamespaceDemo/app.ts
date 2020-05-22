/// <reference path="utility-functions.ts" />

let resultU = Utility.maxBooksAllowed(3);
console.log(resultU);

import util = Utility.Fees;
resultU = util.calculateLateFee(30);
console.log(resultU);