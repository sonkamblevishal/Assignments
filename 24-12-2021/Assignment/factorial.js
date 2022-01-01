//  Factorial of a number input is 5. factorial of 5 -> 5 * 4 * 3 * 2 * 1 factorial of 7 -> 7 * 6 * 5 * 4 * 3 * 2 * 1 -> Take n from the user and alert the factorial of that number.


	var n=prompt("Enter number");

	fact=1;

	for(var a=1; a<=n ; a++)
	{
	    fact=fact*a
	}
	alert("Factorial of " + n + "=" + fact);
