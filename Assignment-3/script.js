// Assignment-3 Start from line  No:99

//Practice, Before Giong for Assignment-3

// Find (sum) & (average) of array
marks = [20, 30, 40, 50];

// solution for sum
var sum = 0;
for (var i = 0; i<marks.length; i++) {
    // sum = sum + marks[i];
    sum += marks[i];
}
// console.log(`Sum of Array : ${sum}`);

//solution for avg
var avg = sum/marks.length;
// console.log(`Average of Array : ${avg}`);

// Find Total Quantity
var product = {
    id: 101,
    title: "Wireless Headphones",
    variations: [
      { id: 1, color: "black", price: 500, quantity: 4 },
      { id: 2, color: "red", price: 1000, quantity: 2 },
      { id: 3, color: "green", price: 1500, quantity: 1 },
      { id: 4, color: "gold", price: 2000, quantity: 10 },
    ],
  };
//   solution
// console.log(product.variations.length);

totalQuantity = 0;
for(i = 0; i<product.variations.length; i++) {
    // console.log(product.variations[i]);
    totalQuantity += product.variations[i].quantity;
}
// console.log(`Total Quantity : ${totalQuantity}`);

// find average rating of reviews
var product = {
  id: 101,
  title: "Wireless Headphones",
  variations: [
    { id: 1, color: "black", price: 500, quantity: 4 },
    { id: 2, color: "red", price: 1000, quantity: 2 },
    { id: 3, color: "green", price: 1500, quantity: 1 },
    { id: 4, color: "gold", price: 2000, quantity: 10 },
  ],
  reviews: [
    {
      id: 1001,
      name: "Ahmed",
      comment: "Very good product!",
      rating: 4.5,
      date: "2-28-2025",
      status: true,
    },
    {
      id: 1002,
      name: "Ali",
      comment: "Very good product!",
      rating: 4,
      date: "2-28-2025",
      status: true,
    },
    {
      id: 1004,
      name: "Zubair",
      comment: "Very bad product!",
      rating: 2,
      date: "2-28-2025",
      status: false,
    },
    {
      id: 1004,
      name: "Mujtaba",
      comment: "Very bad product!",
      rating: 2.5,
      date: "2-28-2025",
      status: false,
    },
  ],
};

// solution
var sum = 0;
for(i=0; i<product.reviews.length; i++) {
    // console.log('Rating : ' + product.reviews[i].rating);
    sum += product.reviews[i].rating
}
// console.log('Total Rating : ' + sum);

var avrRating = sum/product.reviews.length;
// console.log('Average Rating : ' + avrRating);


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

var searchID = parseInt(prompt('Enter Product ID '));
var found = false;

for(var i=0; i<products.length; i++){
  if(products[i].id===searchID) {
    console.log(products[i]);
    found = true;
    break;
  }
}
if(!found) {
  console.log('not found ' + searchID);
}

// 2. List All Product Titles
// solution

for(var i=0; i<products.length; i++) {
  console.log(products[i].title);
}

// 3. Find Available Colors of a Product
// solution
var searchID = parseInt(prompt('Find Availible Colors search by ID '));
var found = false;

for(var i=0; i<products.length; i++) {
  if(products[i].id === searchID) {
    found = true;

    var availibleColors = [];
    for(var j=0; j<products[i].variations.length; j++) {
      availibleColors.push(products[i].variations[j].color)
    }
    console.log(`Availible Colors ${availibleColors}`);
    break;
  }
  if(!found) {
    console.log('Not an Id from list ' + searchID);
  }
  
}

// 4. Get Total Quantity of a Product
// solution

var searchID = parseInt(prompt('Get Total Quantity of a Product '));
var totalQuantity = 0;
var found = false;

for(var i=0; i<products.length; i++) {
  if(products[i].id === searchID) {
    found = true;

    for(var j=0; j<products[i].variations.length; j++){
      totalQuantity+=products[i].variations[j].quantity;
    }
    console.log(`Total Quantity of a Product is ${totalQuantity}`);
    break;
  }
    
  }
  if(!found) {
    console.log('ID Not found...');
}

// 5. Filter Products with Low Stock
// solution
var lowStock = [];
for(i=0; i<products.length; i++) {

  for(var j=0; j<products[i].variations.length; j++) {

    var stock = products[i].variations[j].quantity;

    if(stock < 2) {
      lowStock.push(products[i]);
    }
  }
  
}
console.log('LowStock : ', lowStock);

// 6. Find the Highest Rated Product
// solution
var highestRatedProduct = null;
var highestRating = 0;
for(var i=0; i<products.length; i++) {

  var totaRating = 0;
  var reviewCount = products[i].reviews.length;

  for(var j=0; j<reviewCount; j++) {
    totaRating += products[i].reviews[j].rating;
  }
  var avrRating = totaRating / reviewCount;

  if(avrRating > highestRating) {
    highestRating = avrRating;
    highestRatedProduct = products[i];
  }
}
console.log("Highest Rated Product:", highestRatedProduct);
console.log("Average Rating:", highestRating);

// 7. Filter Active Reviews for a Product
// solution
for (var i = 0; i < products.length; i++) {
  var activeReviews = [];

  for (var j = 0; j < products[i].reviews.length; j++) {
    if (products[i].reviews[j].status === true) {
      activeReviews.push(products[i].reviews[j]);
    }
  }
  console.log("Active Reviews:", activeReviews);
}
// 8. Find the Most Expensive Variation of Each Product
// solution
for (var i = 0; i < products.length; i++) {
  var maxPriceVariation = products[i].variations[0];

  for (var j = 1; j < products[i].variations.length; j++) {
    if (products[i].variations[j].price > maxPriceVariation.price) {
      maxPriceVariation = products[i].variations[j];
    }
  }
  console.log("Most Expensive Variation:", maxPriceVariation);
}

// 9. Calculate Total Stock Value
// solution
var totalStockValue = 0;

for (var i = 0; i < products.length; i++) {
  var productStockValue = 0;

  for (var j = 0; j < products[i].variations.length; j++) {
    var variation = products[i].variations[j];
    productStockValue += variation.price * variation.quantity;
  }

  console.log(`Product: ${products[i].title}, Stock Value: ${productStockValue}`);
  totalStockValue += productStockValue;
}

console.log("Total Stock Value:", totalStockValue);


