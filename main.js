// $("#deathBtn").click(async function (e) { 
//     e.preventDefault();


// });

$(document).ready(async function () {

    await fetch("https://corona-api.com/countries/bd")
    .then(receivedData =>{
        return receivedData.json();
    })
    .then(elements =>{
        console.log(elements.data.today)
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