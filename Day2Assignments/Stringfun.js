console.log("String Functions")
let s1 = "LetsUpgrader";
let s2 = "Hello everyone";
let s3 = "Mumbai";
console.log("Serch fun: ",s1.search("U"));
console.log("Sclice Fun: ",s3.slice(1,4));
console.log("Concat() fun ",s1.concat(s2));
console.log("startsWith() fun: ",s3.startsWith("M"))
console.log("includes() fun: ",s1.includes("s"));
console.log("match() fun: ",s2.match(/llo/g));
console.log("repeat() fun: ",s3.repeat(2));
console.log("replace() fun: ",s3.replace("a","i"));
console.log("substr() fun: ",s3.substr(0,3));
console.log("substring() fun: ",s3.substring(0,3));
console.log("toString() fun: ",s2.toString());
console.log("toLocalLowerCase() fun: ",s2.toLocaleLowerCase());
console.log("toLocalUpperCase() fun: ",s2.toLocaleUpperCase());
let fruit = " Mango ";
console.log("trim() fun: ",fruit.trim());
console.log("valueOf() fun: ",s2.valueOf());
var res = String.fromCharCode(65);
console.log("fromCharCode() fun: ",res)