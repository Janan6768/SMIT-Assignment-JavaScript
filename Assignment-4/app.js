// Assignment-3 Questions but solve with Function...

// Assignment-4 start from line No.233

// Class Practice before Going for Assignment-4


// calculator using arrow function
// let cal = (x,y,op) => op(x,y);
// let sum = (x,y) => x+y;
// let sub = (x,y) => x-y;
// let mul = (x,y) => x*y;
// let divi = (x,y) => x/y;
// let max = (x,y) => (x>y ? x:y)
// let min = (x,y) => (x<y ? x:y)

// let ans = cal(4,5,max);
// console.log(ans);


// ----------------------------------------
//  function calculator(x,y,opt) {
//     if(opt === '+'){
//         return x + y;
//     }
//     if(opt === '-'){
//         return x - y;
//     }
//     if(opt === '*'){
//         return x * y;
//     }
//     if(opt === '/'){
//         return x / y;
//     }
// }
// let sum = calculator(20,30,'+');
// let minus = calculator(20,10,'-');
// let multiply = calculator(20,4,'*');
// let divide = calculator(20,4,'/');

// console.log('Sum : ', sum);
// console.log('minus : ', minus);
// console.log('multiply : ', multiply);
// console.log('divide : ', divide);


// ------------------------
// function sum(a,b){
//     return a + b;
// }
// let result = sum(5,5)
// console.log(result);

// -------------------------
// function add(a,b){
//     return a - b;
// }
// console.log(add(38,8));

// Here is a sample data you can use for the exercises.
// var products = [
//     {
//       id: 101,
//       title: "Sony LED 40 inch",
//       variations: [
//         { id: 1, color: "black", price: 50000, quantity: 5 },
//         { id: 2, color: "red", price: 50000, quantity: 1 },
//         { id: 3, color: "silver", price: 55000, quantity: 8 },
//       ],
//       reviews: [
//         {
//           id: 1,
//           user: "Ahmad",
//           rating: 4.0,
//           title: "Good Product",
//           comments: "It is a very good product ....",
//           date: "06-02-2021",
//           status: true,
//         },
//         {
//           id: 2,
//           user: "Zubair",
//           rating: 4.5,
//           title: "Very Good Product",
//           comments: "zubair It is a very good product ....",
//           date: "05-02-2021",
//           status: false,
//         },
//         {
//           id: 3,
//           user: "Ali",
//           rating: 5.0,
//           title: "bad Product",
//           comments: "ali It is a very good product ....",
//           date: "04-02-2021",
//           status: true,
//         },
//       ],
//     },
//     {
//       id: 102,
//       title: "Mobile",
//       variations: [
//         { id: 1, color: "black", price: 50000, quantity: 5 },
//         { id: 2, color: "red", price: 50000, quantity: 1 },
//         { id: 3, color: "silver", price: 55000, quantity: 8 },
//       ],
//       reviews: [
//         {
//           id: 1,
//           user: "Ahmad",
//           rating: 4.0,
//           title: "Good Product",
//           comments: "It is a very good product ....",
//           date: "06-02-2021",
//           status: true,
//         },
//         {
//           id: 2,
//           user: "Zubair",
//           rating: 4.5,
//           title: "Very Good Product",
//           comments: "zubair It is a very good product ....",
//           date: "05-02-2021",
//           status: false,
//         },
//         {
//           id: 3,
//           user: "Ali",
//           rating: 5.0,
//           title: "bad Product",
//           comments: "ali It is a very good product ....",
//           date: "04-02-2021",
//           status: true,
//         },
//       ],
//     },
//     {
//       id: 103,
//       title: "Bike",
//       variations: [
//         { id: 1, color: "black", price: 55000, quantity: 5 },
//         { id: 2, color: "red", price: 50000, quantity: 1 },
//       ],
//       reviews: [
//         {
//           id: 1,
//           user: "Ahmad",
//           rating: 4.0,
//           title: "Good Product",
//           comments: "It is a very good product ....",
//           date: "06-02-2021",
//           status: true,
//         },
//         {
//           id: 2,
//           user: "Zubair",
//           rating: 3.0,
//           title: "Very Good Product",
//           comments: "zubair It is a very good product ....",
//           date: "05-02-2021",
//           status: false,
//         },
//       ],
//     },
//   ];
  
// 1. Find a Product by ID
// solution
// function findProductById(products, searchId) {
//   var product = products.find(p => p.id === searchId);

//   if(product) console.log('Product Found : ',product);
//   else console.log('Product NOooT Found : ',product);
  
// }
// var searchId = parseInt(prompt('Search by Product'));
// findProductById(products, searchId);
// console.log('------------------------------');

// 2. List All Product Titles
// solution
// function listAllProductTitle(products){
//   let titles = products.map(product => product.title);
//   console.log("Available Products:", titles.join(", "));
// }
// listAllProductTitle(products);
// console.log('------------------------------');

// 3. Find Available Colors of a Product
// solution
// function availableColors(products) {
//   var colors = products.map(product => product.variations.map(variation => variation.color));
//   console.log('Availible Colors Are : ',colors);
  
// }
// availableColors(products);
// console.log('------------------------------');

// 4. Get Total Quantity of a Product
// solution
// function getTotalQuantities(products, productId) {
//   let product = products.find(p => p.id === productId);
//   if(!product) {
//     console.log(`Product with ID ${productId} not found.`);
//     return;
//   }

//   let totalQuantity = 0;

//   for(let i=0; i<product.variations.length; i++) {
//     totalQuantity += product.variations[i].quantity
//   }
//   console.log(`Total Quantity of "${product.title}": ${totalQuantity}`);
// }
// let productId = parseInt(prompt('Get Total Quantity of a product by ID :'));
// getTotalQuantities(products,productId);
// console.log('------------------------------');

// 5. Filter Products with Low Stock
// solution
// function productWithLowStock(products) {
//   return products.map(product => ({
//     title : product.title,
//     lowStockVariation : product.variations.filter(variation => variation.quantity < 2)
//   }))
//   .filter(product => product.lowStockVariation.length > 0 )
// }
// console.log(productWithLowStock(products));
// console.log('------------------------------');


// Here is a sample data you can use for the exercises. ******
var products = [
  {
    id: 101,
    title: "Sony LED 40 inch",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 102,
    title: "Mobile",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 103,
    title: "Bike",
    variations: [
      { id: 1, color: "black", price: 55000, quantity: 2 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 3.0,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
    ],
  },
];


// 1. Solution
const producTitles = (products) => {
  let title = products.map(p => p.title);
  return title;
}
// console.log(producTitles(products));

// 2. Solution
const productsVariationWithBlack = (products) => {
  let product = products.filter(p => p.variations.filter(v => 
    v.color === 'black').length);
  return product
}
// console.log(productsVariationWithBlack(products));

// 3. Solution
const totalStockOfAllProucts = (products) => {
  const totalStock = products.reduce((sum, p) => 
    sum + p.variations.reduce((total, v) => 
    total + v.quantity, 0), 0);
return totalStock
}
// console.log(totalStockOfAllProducts(products));

// 3.-------------------------------------------------------
// let product = products.reduce((prev , curr) => {
// let totalQuantity = curr.variations.reduce((prev2 , curr2) => prev2 + curr2.quantity , 0)
// return totalQuantity + prev;
// } , 0)
// console.log(product);

// 4.solution
const averageRatingOfEachProduct = (products) => {
  const approvedRewies = products.map(p => {
    const filterProduct = p.reviews.filter(r => r.status)
    const totalRewies = filterProduct.reduce((prev,curr) => (prev + curr.rating),0)
    const avgerage = totalRewies / filterProduct.length
    const result = {
      Title : p.title,
      AverageApprovedRewies : avgerage
    }
    return result
  })
  return approvedRewies
}
// console.log(averageRatingOfEachProduct(products));
    
// 4. without Function---------------------------------------------
let product = products.map(p => {
  let filteredProduct = p.reviews.filter(r => r.status);
  let totalReviews = filteredProduct.reduce((prev , curr) => (prev + curr.rating) , 0);
  let averageReviews = totalReviews / filteredProduct.length;
  let result = {
    title : p.title,
    averageRating : averageReviews
  };
  return result
})
// console.log(product)

// 5.solution
const rewiesWithRatingOfFive = (products) => {
  return products.filter(p => p.reviews.some(r => r.rating >= 5.0));
}
console.log(rewiesWithRatingOfFive(products));

// 6.solution
const varaitionsWithProductName = (products) => {
  const product = products.map(p => ({
    title : p.title,
    variations : p.variations.map(v => ({
      color : v.color,
      price : v.price,
      quantity : v.quantity
    }))
  }))
  return product
}
// console.log(varaitionsWithProductName(products));

// 7.solution
const totalRevenueOfAllItems = (products) => {
  const product = products.reduce((prev,curr) => {
  const totalRevenue = curr.variations.reduce((prev2,curr2) => {
    return prev2 + (curr2.price * curr2.quantity)
  },0)
  return prev + totalRevenue
},0)
return product
}
// console.log(totalRevenueOfAllItems(products));

// 8. solution
const moreThenFiveItemsInVariation = (products) => {
  return products.filter(p => p.variations.some(v => v.quantity >= 5))
}
console.log(moreThenFiveItemsInVariation(products));

// 9. solution
const totalVariationAndTotalRewies = () => {
  return products.map(p => ({
    Title : p.title,
    TotalVariation : p.variations.length,
    TotalRewies : p.reviews.length
  }))
}
// console.log(totalVariationAndTotalRewies(products));

// 10.Solution
