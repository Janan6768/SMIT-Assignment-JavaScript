
console.log('---------push() method---------');
// push() method add the elements in the last of the array single or multiple elements
let array = ['Janan', 'Khan',];
console.log(`array = ${array}`);  //outPut = array = Janan,Khan
let lastName = array.push('Zohaib','Abdullah','M.shah')
console.log(`array = ${array}`);  //outPut = array = Janan,Khan,Zohaib,Abdullah,M.shah
console.log(`lastName = ${lastName}`);  //outPut = lastName = 5
console.log(`arrayLength = ${array.length}`); //outPut = arrayLength = 5

console.log('---------pop() method---------');
// pop() method remove the element in the last of the array only single elemnts
let array2 = ['Janan', 'Khan','Zohaib','Abdullah','M.shah'];
console.log(`array2 = ${array2}`);  //outPut = array2 = Janan,Khan,Zohaib,Abdullah,M.shah
let LastName = array2.pop()
console.log(`After pop() method array2 = ${array2}`); 
//outPut = After pop() method array2 = Janan,Khan,Zohaib,Abdullah
console.log(`LastName = ${LastName}`);  //outPut = LastName = M.shah
console.log(`array2Length = ${array2.length}`);  //outPut = array2Length = 4

console.log('---------shift() method---------');
// shift() method remove the first element in the array
let array3 = ['Janan', 'Khan','Zohaib','Abdullah','M.shah'];
console.log(`array3 = ${array3}`);  //outPut = array3 = Janan,Khan,Zohaib,Abdullah,M.shah
let firstName = array3.shift()
console.log(`After shift() method array3 = ${array3}`); 
//outPut = After shift() method array3 = Khan,Zohaib,Abdullah,M.shah
console.log(`firstName = ${firstName}`);  //outPut = firstName = Janan
console.log(`array3Length = ${array3.length}`);  //outPut = array3Length = 4

console.log('---------unshift() method---------');
// unshift() method add the elements in the beginning of the array single or multiple elements
let array4 = ['Janan', 'Khan','Zohaib'];
console.log(`array4 = ${array4}`);  //outPut = array4 = Janan,Khan,Zohaib
let addInStart = array4.unshift('Abdullah','M.shah')
console.log(`After unshift() method array4 = ${array4}`);
//outPut = After unshift() method array4 = Abdullah,M.shah,Janan,Khan,Zohaib
console.log(`addInStart = ${addInStart}`);  //outPut = addInStart = 5
console.log(`array4Length = ${array4.length}`);  //outPut = array4Length = 5

console.log('---------splice() method---------');
// splice() method remove elements from start or end of array
// lets try remove the two elements from last
let array5 = ['Janan', 'Khan','Zohaib'];
console.log(`array4 = ${array5}`);  //outPut = array5 = Janan,Khan,Zohaib
let remove = array5.splice(-2)
console.log(`remove = ${remove}`);  //outPut = remove = khan,Zohaib
console.log(`array5 = ${array5}`);  //outPut = array5 = Janan

console.log('---------splice() method---------');
// splice() method add or remove elements from start or end of array
// lets try remove three elements from the beginning
let array6 = [5, 6, 7, 8, 9, 10];
console.log(array6);  //outPut = [5, 6, 7, 8, 9, 10]
let startElements = array6.splice(0,3);
console.log(`startElements = ${startElements}`);  //outPut = startElements = 5,6,7
console.log(`array6 = ${array6}`);  //outPut = 8,9,10

