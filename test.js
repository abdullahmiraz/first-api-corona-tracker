// $("#deathBtn").click(async function (e) { 
//     e.preventDefault();


// });

//> whatever the user sends about the country , gets the data about the country ...........

$(document).ready(async function () {

    $("#deathBtn").click(async function (e) { 
    e.preventDefault();
        let userInput = prompt("Enter country short name: example us");
        console.log(userInput) ;

        
    await fetch(`https://corona-api.com/countries/${userInput}`)
    .then(receivedData =>{
        return receivedData.json();
    })
    .then(elements =>{
        // console.log(elements.data.today)
        $("#deathContainer").append(
            `
            <div class="card">

            <div class="card text-left">
                <div class="card-body">
                  <h4 class="card-title">Today Total Deaths:</h4>
                  <p class="card-text"> ${elements.data.today.deaths}</p>
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