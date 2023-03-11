

function getParams(){
    let searchParamsArr = document.location.search.split('=')[1]
    console.log(searchParamsArr)
    TicketMasterAPIcall(searchParamsArr)
  }

function TicketMasterAPIcall(searchParamsArr){
    let url =
      "https://app.ticketmaster.com/discovery/v2/events.json?id=" + searchParamsArr  +"&apikey=wAUd3TteUrno75GAGlIlbBXcvGgQurTA";
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
       console.log(data._embedded.events[0].url)

        let eventName =document.getElementById('event-name')
        eventName.textContent = data._embedded.events[0].name
        let venueName = document.getElementById('event-venue')
        venueName.textContent =data._embedded.events[0]._embedded.venues[0].name 
        let date = document.getElementById('event-date')
        date.textContent = data._embedded.events[0].dates.start.localDate
        let seatMap = document.getElementById('seat-map')
        let seatMapUrl = data._embedded.events[0].url
        seatMap.setAttribute('href', seatMapUrl);
        let priceRange = document.getElementById('price-range')
        priceRange.textContent = 'Price Range: ' + '$' + data._embedded.events[0].priceRanges[0].min + '-' + '$' + data._embedded.events[0].priceRanges[0].max


      });
     }
     
getParams()