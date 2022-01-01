// take input from user and print maximum number

var num=[];

	var i =prompt("Enter 1st Number");
	i=parseInt(i)
	num.push(i);

                var i =prompt("Enter 2nd Number");
	i=parseInt(i)
	num.push(i);

               var i =prompt("Enter 3rd Number");
	i=parseInt(i)
	num.push(i);

	if(num[0]>=num[1] && num[0]>=num[2])
	{
	alert("Maximum Number is: " +num[0]);
	}
	else if(num[1]>=num[0] && num[1]>=num[2])
	{
	alert("Maximum Number is: " +num[1]);
	}
	else
	{
	alert("Maximum Number is: " +num[2]);
	} 
	
