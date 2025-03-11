// Assignment-3 Questions but solve with Function...

// Assignment-4 start from line No.44

// Class Practice before Going for Assignment-4

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
        { id: 1, color: "black", price: 55000, quantity: 5 },
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
  
// 1. Find a Product by ID
// solution
function findProductById(products, searchId) {
  var product = products.find(p => p.id === searchId);

  if(product) console.log('Product Found : ',product);
  else console.log('Product NOooT Found : ',product);
  
}
var searchId = parseInt(prompt('Search by Product'));
findProductById(products, searchId);
console.log('------------------------------');

// 2. List All Product Titles
// solution
function listAllProductTitle(products){
  // for(let i=0; i<products.length; i++) {
  //   console.log('Title is : ', products[i].title);
  // }
  let titles = products.map(product => product.title);
  console.log("Available Products:", titles.join(", "));
}
listAllProductTitle(products);
console.log('------------------------------');

// 3. Find Available Colors of a Product
// solution
function availableColors(products) {
  var colors = products.flatMap(product => product.variations.map(variation => variation.color));
  console.log('Availible Colors Are : ',[...new Set(colors)]);
  
}
availableColors(products);
console.log('------------------------------');

// 4. Get Total Quantity of a Product
// solution
function getTotalQuantities(products, productId) {
  let product = products.find(p => p.id === productId);
  if(!product) {
    console.log(`Product with ID ${productId} not found.`);
    return;
  }
  
  let totalQuantity = 0;
  
  for(let i=0; i<product.variations.length; i++) {
    totalQuantity += product.variations[i].quantity
  }
  console.log(`Total Quantity of "${product.title}": ${totalQuantity}`);
}
let productId = parseInt(prompt('Get Total Quantity of a product by ID :'));
getTotalQuantities(products,productId);
console.log('------------------------------');