// console.log("Running");

var url = "https://api2.binance.com/api/v3/ticker/24hr";

var container1 = document.getElementById("container1");

var table1 = document.getElementById("table1");


fetch(url).then((res) => res.json())
.then((finalResult) => 
{
        for( var i=0 ; i < 22 ; i++ )
        
        {
            //    console.log(finalResult[i])
            
            tr = document.createElement("tr");

            td1 = document.createElement("td");
            td2 = document.createElement("td");
            td3 = document.createElement("td");


            td1.innerText = finalResult[i].symbol;
            td2.innerText = finalResult[i].openPrice;
            td3.innerText = finalResult[i].count;

            tr.append(td1,td2,td3);
            
            table1.appendChild(tr);

        }
});


fetch(url).then((res) => res.json())
.then((finalResult) => 
{
        for( var i=0 ; i < 22 ; i++ )
        
        {
            //    console.log(finalResult[i])
            
            tr = document.createElement("tr");

            td1 = document.createElement("td");
            td2 = document.createElement("td");
            td3 = document.createElement("td");


            td1.innerText = finalResult[i].symbol;
            td2.innerText = finalResult[i].openPrice;
            td3.innerText = finalResult[i].count;

            tr.append(td1,td2,td3);
            
            table2.appendChild(tr);

        }
});


fetch(url).then((res) => res.json())
.then((finalResult) => 
{
        for( var i=0 ; i < 22 ; i++ )
        
        {
            //    console.log(finalResult[i])
            
            tr = document.createElement("tr");

            td1 = document.createElement("td");
            td2 = document.createElement("td");
            td3 = document.createElement("td");


            td1.innerText = finalResult[i].symbol;
            td2.innerText = finalResult[i].openPrice;
            td3.innerText = finalResult[i].count;

            tr.append(td1,td2,td3);
            
            table3.appendChild(tr);

        }
});


fetch(url).then((res) => res.json())
.then((finalResult) => 
{
        for( var i=0 ; i < 22 ; i++ )
        
        {
            //    console.log(finalResult[i])
            
            tr = document.createElement("tr");

            td1 = document.createElement("td");
            td2 = document.createElement("td");
            td3 = document.createElement("td");


            td1.innerText = finalResult[i].symbol;
            td2.innerText = finalResult[i].openPrice;
            td3.innerText = finalResult[i].count;

            tr.append(td1,td2,td3);
            
            table4.appendChild(tr);

        }
});


