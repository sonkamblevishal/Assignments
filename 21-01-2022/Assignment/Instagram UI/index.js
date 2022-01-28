// // console.log("Starting");


//      var btn =  document.querySelector("#likeIcon");
//      var img =  document.querySelector("#image");
//      var show =  document.querySelector("#display");

//      likeIcon.addEventListener("click", liked);
//      image.addEventListener("click", doubleliked);
//      show.addEventListener("click", display);


//     count = 0;
 
//      function liked()
//      {  
//        count = count - 1;
//        document.getElementById("likeIcon").style.backgroundColor = 'Red';
//        document.getElementById("display").innerHtml = count
     
//       //  console.log(count);
       
//      }

//      function doubleliked()
//      {
//        count = count + 1;
//        document.getElementById("likeIcon").style.backgroundColor = 'Red';
//        document.getElementById("display").innerHTML = count;
//       //  console.log(count);

//      }


     var img_arr = 
    [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' ,
      'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' ,
      'https://images.unsplash.com/photo-1623063921261-5a9914c19548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' ,

    ];

    // console.log(img_arr);



     
    //  var btn = document.getElementById("btn_click");
    //  btn.addEventListener("click", displayImages);

    //   function displayImages() 
    //   {
    //     var btn = document.getElementById("image-container");
    //     var new_images = document.createElement("imgs");
    //       new_images.src = img_arr[0];
    //       btn.appendChild(new_images);
    //       // console.log("clicked");
    //   }


    var btn = document.getElementById("btn");
    btn.addEventListener("click", showImages);
 
   function showImages()
   {
 
      var gallery_container = document.getElementById("gallery_container");
    
     // when click on button it will clear all and then print. we can avoid repeated printing using this
        gallery_container.innerText=" ";
 
 
     for(var i=0; i<img_arr.length; i++)
     {
           var new_img = document.createElement("img"); 
 
           new_img.src = img_arr[i];
 
           gallery_container.appendChild(new_img);
 
          //  new_img.addEventListener("click", imageClicked)
 
     }
    
  }
  

 