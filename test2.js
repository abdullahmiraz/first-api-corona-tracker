// $("#deathBtn").click(async function (e) { 
//     e.preventDefault();


// });

$(document).ready(async function () {

    // $("#deathBtn").click(async function (e) { 
    // e.preventDefault();
    //     let userInput = prompt("Enter country short name: example us");
    //     console.log(userInput) ;

        
    await fetch(`https://corona-api.com/countries`)
    .then(receivedData =>{
        return receivedData.json();
    })
    
    .then(elements =>{
        // console.log(elements.data)
        let dataSet = elements.data
        dataSet.forEach(response => {
            // console.log(`${response.name}: ${response.code}`);
            $("#countryList").append(
                `
                <option value="${response.name}">${response.name}= ${response.code} </option>

                `
            );
            

        });
        // $("#deathContainer").append(
        //     `
        //     <div class="card">

        //     <div class="card text-left">
        //         <div class="card-body">
        //           <h4 class="card-title">Today Total Deaths:</h4>
        //           <p class="card-text"> ${elements.data.today.deaths}</p>
        //         </div>
        //     </div>

        //     <div class="card text-left">
        //         <div class="card-body">
        //           <h4 class="card-title">Corona affected Confirmed: </h4>
        //           <p class="card-text">${elements.data.today.confirmed}</p>
        //         </div>
        //     </div>

        //     </div>

        // </div>

        //     `
        // )
    })

// });


});