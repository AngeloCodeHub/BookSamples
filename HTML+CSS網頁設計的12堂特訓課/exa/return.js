//有回傳值的函式

function myAvg(Name='', Math = 0, Eng = 0) {  
	let score =( Math + Eng ) / 2;
	return score;  //回傳值
}

let avg = myAvg("陳大豐",86,94); //變數avg接收myAvg函式回傳值
console.log("數學及英文的平均成績：" + avg);
