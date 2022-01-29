var container = document.getElementById("container");
var table = document.getElementById("table");

  var url = "http://universities.hipolabs.com/search?country=india"

    fetch(url)
    .then((response) => {
        console.log("response first resolved");
        return response.json();
    })
  .then((data) => {
      console.log("response seconnd resolved");
      console.log(data);

        for(let i = 0; i < data.length; i++)
        {

            tr = document.createElement("tr");

           var td = document.createElement("td");
           var td1 = document.createElement("td");
          var  td2 = document.createElement("td");


            td.innerText = data[i].name;
            td1.innerText = data[i].domains[0];
            td2.innerText = data[i]["state-province"];

            tr.append(td,td1,td2)
            table.appendChild(tr)
           
        }
  })



  .catch((error) => console.log("API has failed"))

// domains: ['davietjal.org', 'abhsihek'] 
// // add only first element of this array
// name
// state-province