// 2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

// Sample Output for the given listOfProducts will be :

// [{
//     productName: "TV",
//     quantity: 20,
//     description: "television"
//   },
//   {
//     productName: "AC",
//     quantity: 10,
//     description: "air conditioner"
//   },
//   {
//     productName: "FAN",
//     quantity: 10,
//      description: "Ceiling Fan"
//   }
// ]

function getUniquePrducts(product){
    let res=[]
     for(let i=0;i<product.length;i++){
         check(res,product[i])
     }
       
  return res
 }
 
 const listOfProducts = [{
     productName: "TV",
     quantity: 10,
     description: "television"
   },
   {
     productName: "AC",
     quantity: 5,
     description: "air conditioner"
   },
   {
     productName: "TV",
     quantity: 10,
     description: "television"
   },
   {
     productName: "AC",
     quantity: 5,
     description: "air conditioner"
   },
   {
     productName: "FAN",
     quantity: 10,
     description: "Ceiling Fan"
   },
 
                         
 ];
 
 let result= getUniquePrducts(listOfProducts)
 console.log(result)
 
 function check(arr,curr){
    let findIndex = arr.findIndex(item => item.productName === curr.productName);
 
   if (findIndex === -1) {
     arr.push(curr)
   } else {
 
     arr[findIndex].quantity += curr.quantity
   }
   return arr;
 }