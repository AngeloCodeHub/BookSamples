//continue and break敘述
for (let a = 0 ; a <= 10 ; a++) {
    if (a === 5){
		console.log(a);
		continue;
	}
    if (a === 7) {
		console.log(a);
         break;
	}
    console.log("a="+a);
}
