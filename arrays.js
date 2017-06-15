


//arrays
var harrisSellerId = ["a", "b"];

var harrisSku = [1, 2, 3, 4, 5];

var newUrls = [];
var newUrls2 = [];
for(var i = 0; i < harrisSellerId.length; i++) {
  newUrls.push(`https://shop.harristeeter.com/store/${harrisSellerId[i]}#/product/sku/`);
    for(var j = 0; j < harrisSku.length; j++) {
      newUrls2.push(newUrls[i]+harrisSku[j]);
    }
};
