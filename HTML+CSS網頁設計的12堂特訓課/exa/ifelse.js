//if...else判斷式

let n = Math.floor(Math.random()*100);

if (n >= 50)
{	
    console.log(n + " 大於等於50");
}else{
    console.log(n + " 小於50");
}

//使用三元運算子的寫法
n >= 50 ? (
    console.log(n + " 大於等於50")
) : (
    console.log(n + " 小於50")
);