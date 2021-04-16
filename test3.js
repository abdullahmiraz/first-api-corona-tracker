
$(document).ready(async function () {
        
    await fetch(`https://corona-api.com/countries`)
    .then(receivedData =>{
        return receivedData.json();
    })
    
    .then(elements =>{
        let dataSet = elements.data
        dataSet.forEach(response => {
            // console.log(`${response.name}: ${response.code}`);
            $("#countryList").append(
                ` <option value="${response.name}">${response.name}= ${response.code} </option> `
            );
        });

    })

    

});