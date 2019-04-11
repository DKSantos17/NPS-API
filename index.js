function handleFormSubmit() {
    $('form').submit (event => {
        event.preventDefault();
        let total = $('#limit').val();
        let state = $('#state').val();
        let url = "https://developer.nps.gov/api/v1/parks?stateCode=" + encodeURIComponent(state) + "&limit=" + encodeURIComponent(total) + "&api_key=4sQCDxckYnDgfcnPe4Mdc3Tre2v6B6PkLcF19T6o";
        callAPI(url)
    })
}

function callAPI(url) {
    console.log('fetching')
    fetch(url)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
}

function displayResults(jsonObject) {
    console.log('displaying')
    $('#results').empty();
    //console.log(jsonObject.data[0])
    for(let i=0; i<$('#limit').val(); i++) {
        $('#results').append("<li><a href='" + jsonObject.data[i].url + "' target='_blank'>" + jsonObject.data[i].fullName + "</a><br>" + jsonObject.data[i].description + "</li>"
        )
    }
}

handleFormSubmit()