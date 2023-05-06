

//利用循环实现从1到100的求和函数，并调用该函数显示结果：
function sum1To100() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
      sum += i;
    }
    return sum;
  }
  
  console.log(sum1To100()); // 输出 5050
  

  //输入年份，判断是否是闰年
  function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(isLeapYear(2020)); 
  console.log(isLeapYear(2021)); 

  
  //熟悉常用内置函数的使用：
  // 数组的一些常用方法
let arr = [1, 2, 3, 4, 5];
console.log(arr.length); 
console.log(arr.indexOf(3)); 
console.log(arr.slice(1, 3)); 
console.log(arr.concat([6, 7])); 
console.log(arr.join("-")); 

// 字符串的一些常用方法
let str = "hello world";
console.log(str.length); 
console.log(str.indexOf("o")); 
console.log(str.slice(0, 5)); 
console.log(str.toUpperCase()); 
console.log(str.split(" ")); 

//设计回调函数的使用场景并实现之：
function showCurrentTime(callback) {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    callback(`${hours}:${minutes}:${seconds}`);
  }
  
  function displayTime(time) {
    console.log(`The current time is ${time}`);
    
    document.getElementById("time").innerHTML = time;
  }
  
  showCurrentTime(displayTime); // 输出 "The current time is 14:25:30"
  
