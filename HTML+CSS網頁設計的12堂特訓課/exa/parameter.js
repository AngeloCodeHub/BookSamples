//函式參數

function grade(Name,Chi,Com) {    //設定3個參數
	console.log("引數數量：" + arguments.length );
	console.log("學生姓名："+Name+"\t國文成績："+Chi+"\t電腦成績："+Com);
	console.log()
}

grade("陳瑋婷","98","64");   //傳入3個引數
grade("王郁宜","88");       //傳入2個引數
grade("林俊豪","98","92","87"); //傳入4個引數
