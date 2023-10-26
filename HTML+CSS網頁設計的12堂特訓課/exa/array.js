//Array

newspaper=new Array('1.水果日報','2.聯合日報','3.自由報', 
                     '4.中國日報','5.不需要');    //宣告陣列
for (i = 0; i<newspaper.length; i++) {   //利用length屬性取得陣列的元素個數
	console.log(`第${i+1}個陣列元素是 ${newspaper[i]}`);
}