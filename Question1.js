// PROBLEM STATEMENTS:

// 1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

// Sample Output for the given listOfProducts will be :

// {
//   "TV": 2,
//   "AC": 2,
//   "FAN": 1
// }

function getUniqueProductCount(product){

    let res={};
    for(let i=0;i<product.length;i++){
          if(res[product[i].productName]==undefined){
           res[product[i].productName]=1
          }
          else{
          res[product[i].productName]++
          }
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
   let ans=getUniqueProductCount(listOfProducts)
  console.log(ans) 