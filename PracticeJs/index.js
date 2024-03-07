// let a=10
// let b=5
// console.log(a+b);

// function check(){
//     document.querySelector('#demo').innerHTML="deepak";
// }
// window.alert("4+5");
// document.getElementsByName('.un').style.backgroundColor="red";
//value does not change preserve original value
//  var a=10;
// var a;
// console.log(a);
//  let a={name:"deepak",age:"19",class:12,fun:function(){
//     return this.name;
//  }};
//  console.log(a);
//  console.log(a.name);
//  console.log(a.fun());
//  //definition return
//  console.log(a.fun);

//  //string
//  let text = "ABC,D,E,FGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log(length);
// console.log(text.charAt(0));
// console.log(text.charCodeAt(0));
// console.log(text.substr(0,6));
// console.log(text.split(','));

//Array method
// let arr=["manvi","Deepak","Rani","Om"];
// let arr1=["manvi","Deepak","Rani","Om"];
// console.log(arr.length);
// console.log(arr.toString);
// console.log(arr.at(1));
// arr.join(arr1);
// console.log(arr.join('*'));
// arr.shift();
// arr.unshift("dee");
// console.log(arr);
// delete arr[0];
// console.log(arr);
// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr);
// arr.splice(2, 0, "Lemon", "Kiwi");
// console.log(arr);
// let a=arr.slice(1);
// console.log(a);
// console.log(arr);
// console.log(arr.indexOf("manvi",0));
// console.log(arr.includes("manvi"));
//find doubt
// console.log(arr.sort());
// console.log(arr.reverse());
// let a=arr.toSorted();
// console.log(a);
// let arr4=[3,2,1,3,45,5,6];
// console.log(arr4.sort(function(a, b){return a - b}));
// console.log(Math.min.apply(null,arr4));
// const cars = [
//    {type:"Volvo", year:2016},
//    {type:"Saab", year:2001},
//    {type:"BMW", year:2010}
//  ];
//  console.log(cars.sort(function(a, b){return a.year - b.year}));

// let arr1 = [2, 6, 1, 3, 4, 7, 8, 9];
// let txt = "";

// arr1.forEach(fun1);

// function fun1(value) {
//   txt += value;
//   console.log(txt);
// }

// let arr2=arr1.filter(fun2);
// function fun2( value){
//    return value>3;
// }
// console.log(arr2);
// let arr3=arr1.map(fun2);
// function fun2( value){
//    return value*3;
// }
// console.log(arr3);

 function call(a, b, fn){
    console.log('**************');
     console.log('\t', fn(a, b));
     console.log('**************');
 }



function mul(a,b){
   return a*b;
}
call(2, 4, mul);
//  prettyP(3, 6, sum)
//  prettyP(3, 6, subtract)

mp=[3,4,5,6,7];
arr3=mp.reduce(fun1,20);
function fun1(total,value){
   return value+total;
}
console.log(arr3);





 
