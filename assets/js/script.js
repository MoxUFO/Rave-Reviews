console.log(document.getElementById("BG-img"))
let url = 'https://app.ticketmaster.com/discovery/v2/events.json?city=&segmentName=&apikey=wAUd3TteUrno75GAGlIlbBXcvGgQurTA'
fetch(url)
.then (function(response){
  return response.json()

})
.then(function(data){
  console.log(data)
})


