let url = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=wAUd3TteUrno75GAGlIlbBXcvGgQurTA"

fetch(url)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})