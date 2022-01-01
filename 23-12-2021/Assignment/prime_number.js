// Write a program to take an input from the user (num) and check whether it is a prime number or not.




       var num=prompt("Enter any number");

	var prime=1;
		
	for(var i=2; i<num/2; i=i+1)
	{
		if(num%i==0)
	            {	
		                    prime=0;
	            }

                 }		


			if(prime==1)
			{
		 	  alert("Prime Number");
			}
			else
			{
			 alert("Not a Prime Number")
			}
	

	



