$(document).ready(async function () {
    

    // > first phase - show country list ** done 
    await fetch("https://corona-api.com/countries")
    .then(response =>{
        let jsonReceiver = response.json() ;
        console.log(jsonReceiver);
        return jsonReceiver ;
    })
    .then(sendRespond =>{
        // console.log(sendRespond.data)
        let responded = sendRespond.data
        responded.forEach(element => {
            // console.log(element)
            
            $("#countryList").append(
                `
                <option value="${element.name}">${element.name} : ${element.code}</option>
                `
            );
        });
    })

    // > second phase - button click event ** done 

    $("#deathBtn").click(async function (e) { 
        e.preventDefault();

        let countryName = prompt("Enter The country code: ")
        // return countryName ;
        


    // countryName = "bd" ;

    // > third phase - printing the data of entered code 
    await fetch(`https://corona-api.com/countries/${countryName}`)
    .then (response =>{
        let jsonSender = response.json()
        return jsonSender ;
    })
    .then(elements =>{
        console.log(elements.data.today)
        $("#deathContainer").append(
        `
            <div class="container text-center" id="deathContainer">
                <h1 class = "display-4" > Total deaths in <p class="card-text"> ${elements.data.name}</p> </h1>
             </div>
        `
        )
        $("#deathContainer").append(
            `
            <div class="card">

            <div class="card text-left">
                <div class="card-body">
                  <h4 class="card-title">Today Total Deaths:</h4>
                  <p class="card-text"> ${elements.data.today.deaths}</p>
                <!-- <p class="card-text"> ${elements.data.name}</p> -->
                </div>
            </div>

            <div class="card text-left">
                <div class="card-body">
                  <h4 class="card-title">Corona affected Confirmed: </h4>
                  <p class="card-text">${elements.data.today.confirmed}</p>
                </div>
            </div>

            </div>

        </div>

        `
        )        
    })

    });
});