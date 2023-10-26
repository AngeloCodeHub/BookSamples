var x="5",y="4",z="3",w=null;
a=x+y+z;    //字串內容為數值時，相加仍是字串
b=x-y-z;    //字串內容為數值時，相減則為數值
c=w*100;     //變數值為null時，乘以任何數皆為0
console.log("x+y+z=", a);
console.log("x-y-z=", b);
console.log("w*100=", c);