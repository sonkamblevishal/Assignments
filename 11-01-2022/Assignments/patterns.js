

var n = prompt("Enter Any Number") 

var line = "";

for (var i = 0; i < n; i++)
 {
        for (var j = 0; j <= i; j++) 
        {
            line += "*";
        }
        line += "<br>";
}

document.write(line);