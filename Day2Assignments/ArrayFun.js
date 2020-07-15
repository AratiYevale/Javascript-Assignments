console.log("Array Functions")
let a = ["one","two","three",1,["5,6"],2,3];
let b = ["abc","hiii",["9",10],6];
let f = ["apple","Orange","banana"];
let no =[2,5,8,3,8];
console.log(a);
console.log(b);
console.log(f);
console.log(no);
console.log(f.copyWithin(0,3));
console.log(f.fill("mango"));
let c = Array.from("MyProgram");
console.log(c);
console.log(b.includes("bye"));
let d = f.join();
console.log(d);
console.log(b.lastIndexOf(6));
console.log(b.pop());
f.push("Kiwi");
console.log(f);
let t = no.sort();
console.log(t);
var h1 = ["Bala", "Origin", "Application", "Man"];
h1.splice(20, "loan", "Keerthi");
console.log(h1)
console.log(no.toString());
let tp=no.valueOf()
console.log(tp);
console.log(Array.isArray(a));
console.log(a.indexOf(1));
console.log(b.indexOf("hiii"));
console.log(no.concat(f));
console.log(a.reverse());
