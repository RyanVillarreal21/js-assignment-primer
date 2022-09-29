export function calculateTotal (items, tax) {
  // TODO
   let itemCost = 0;
   let total = 0;

  for(let i = 0; i < items.length; i++)  {
    if(items[i].taxable) {
      if(tax > 0){
        itemCost = itemCost = items[i].price + (items[i].price * tax);
      }
      else {
        itemCost = items[i].price + (items[i].price * Math.abs(tax));
      }
      
      // console.log(itemCost);
    }
    else {
      itemCost = items[i].price;
      // console.log(itemCost);
    }

    total += itemCost;
  }

  // console.log(total);
  return total;
}

// const items = [
//   {
//     price: 100,
//     taxable: false
//   },
//   {
//     price: 50,
//     taxable: false
//   },
//   {
//     price: 250,
//     taxable: true
//   }
// ]

//  calculateTotal(items, 0.0975);