// Write a program to print all even numbers less than or equal to n (n is an input which we take using prompt).




	var n=prompt("Enter any number");
	console.log("Even number in between:" + n); 
	
	for(var a=0; a<=n; a++)
	{
	
	if(a%2==0)
	{
	console.log(a);
	}
	}


