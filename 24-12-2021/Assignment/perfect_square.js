
// Write a program to check the given number is a perfect square or not! (Don't use function)



	var num=prompt("Enter number");

	var count=0;	

	for( var i=1; i<num; i++)
	{
		if(num%i==0)
		count=count+1;		

	}
		if(count%2==0)
		{
			alert("Perfect Square");
		}
		else
		{
			alert("Not a  perfect Square");
		
		}
	
