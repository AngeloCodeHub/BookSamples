var x=3;
function cal(){     //定義cal函式
	x=6, y=3;    //x是全域變數
	console.log(x+y); //9
}
cal();   //執行cal函式
console.log(x); //6
