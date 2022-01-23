// console.log("Starting");


     var btn =  document.querySelector("#likeIcon");
     var img =  document.querySelector("#image");
     var show =  document.querySelector("#display");

     likeIcon.addEventListener("click", liked);
     image.addEventListener("click", doubleliked);
     show.addEventListener("click", display);


    count = 0;
 
     function liked()
     {  
       count = count - 1;
       document.getElementById("likeIcon").style.backgroundColor = 'Red';
       document.getElementById("display").innerHtml = count
     
      //  console.log(count);
       
     }

     function doubleliked()
     {
       count = count + 1;
       document.getElementById("likeIcon").style.backgroundColor = 'Red';
       document.getElementById("display").innerHTML = count;
      //  console.log(count);

     }
