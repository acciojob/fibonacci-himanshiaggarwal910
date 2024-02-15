function fibonacci(num) {
// your code here
    let first = 0, second = 1;
    if (num < 3) return num;
    let ans;

    for (let i = 3; i <= num; i++) {
        ans = first + second;
        first = second;
        second = ans;
    }

    return ans;
}

module.exports = fibonacci;

	
	let n=prompt("enter the number");
	let num=parseInt(n);
	let first=0,second=1;
	if(num<3)return num;
	let ans;

	for(let i=3;i<=num;i++){
		ans=first+second;
		first=second;
		second=ans;
	}

	return ans;
	
}

module.exports = fibonacci;
