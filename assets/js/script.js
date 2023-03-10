


$('#inverted_calendar')
  .calendar({
    type: 'date'
  })
;

let searchBtn = document.getElementById("search-events");


function handleEventQuery() {
  let eventLocation = document.getElementById("location-input").value;
  let dateInput = document.getElementById("date-input").value;
  let eventType = document.getElementById("event-type").value;
  let genreList = document.getElementById("genre-list").value;
  console.log(eventLocation);
  console.log(dateInput);
  console.log(eventType);
  console.log(genreList);
}

console.log(document.getElementById("BG-img"));
let url =
  "https://app.ticketmaster.com/discovery/v2/events.json?city=&segmentName=music&apikey=wAUd3TteUrno75GAGlIlbBXcvGgQurTA";
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

$("#inverted_calendar").calendar({
  type: "date",
});

searchBtn.addEventListener("click", handleEventQuery);

// variables
var key = "wAUd3TteUrno75GAGlIlbBXcvGgQurTA"
let cityName = ""
let venueAddress = ""
let venueName = ""
let urlVenueName = ""
let ticketMasterReturn = {}
let eventInfo = {}
let tempInfo = {}
let step = 0
yelpAPIreturn = {}
let segmentName = ""
let genreId = ""

TicketMasterAPIcall()


// initial Ticketmaster API call
function TicketMasterAPIcall () {
  cityName = prompt("Please enter a city")
  fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=${key}&city=${cityName}&segmentName=${segmentName}`)
      .then(function(data) {
          return(data.json())        
      })
      .then(function(data) {
          ticketMasterReturn = data
          console.log(data)
          for (i = 0; i < 10; i++) {
              tempInfo = {}
              // finds the event name
              tempInfo['EventName'] = data._embedded.events[i].name

              // finds the venue name
              venueName = data._embedded.events[i]._embedded.venues[0].name
              tempInfo['VenueName'] = data._embedded.events[i]._embedded.venues[0].name

              // finds the event address
              venueAddress = data._embedded.events[i]._embedded.venues[0].address.line1
              tempInfo['EventAddress'] = data._embedded.events[i]._embedded.venues[0].address.line1
            
              // Event start time
              tempInfo['EventStart'] = data._embedded.events[i].dates.start.localTime

              // Event Date
              tempInfo['EventDate'] = data._embedded.events[i].dates.start.localDate

              // Ticket price range
              tempInfo['EventPrices'] = [data._embedded.events[i].priceRanges[0].min, data._embedded.events[i].priceRanges[0].max]

              // Ticket status
              tempInfo['EventStatus'] = data._embedded.events[i].dates.status.code

              // Genre Name
              tempInfo['EventGenre'] = data._embedded.events[i].classifications[0].genre.name

              // Segment Name
              tempInfo['SegmentName'] = data._embedded.events[i].classifications[0].segment.name

              // seatmap URL
              tempInfo['seatmapURL'] = data._embedded.events[i].seatmap.staticUrl

              // ticketmaster URL
              tempInfo['ticketmasterURL'] = data._embedded.events[i].url

              // finds largest img with 16_9 ratio
              let biggestImg = {}
              biggestImg['height'] = 0
              biggestImg['Url'] = ""
              for (j = 0 ; j < data._embedded.events[i].images.length; j++) {                
                if (data._embedded.events[i].images[j].ratio === "16_9"){
                  if (data._embedded.events[i].images[j].height > biggestImg['height']) {
                    biggestImg['height'] = data._embedded.events[i].images[j].height
                    biggestImg['Url'] = data._embedded.events[i].images[j].url
                  }
                }
              }
              tempInfo['imageUrl'] = biggestImg['Url']


              eventInfo[i] = tempInfo            
          }
          console.log(data)
          encodeVariables()   
      })
}      
// for each search result, perform an yelp API call using the encoded venue name
function encodeVariables() {
  for (i=0; i < 10; i++) {  
    // encodes address to function within url 
    tempURLname = eventInfo[i].VenueName.replace(/\s/g, '%20')    
    // calls yelp api
    yelpAPIcall()  
  }
}

// compares address from TicketMaster to Yelp and attempt to find a matching rating
function yelpAPIfilter() {
  failedYelpURL = yelpURL
  tempAddress = eventInfo[step].EventAddress
  tempAddress1 = eventInfo[step].EventAddress.replace(/\./g, "")
  tempAddress2 = eventInfo[step].EventAddress.replace(/Drive/g, 'Dr')
  for (j = 0; j < yelpAPIreturn.businesses.length; j++) {
    // console.log(yelpAPIreturn.businesses[j].location.address1 + " " + tempAddress + " " + tempAddress1 + " " + tempAddress2)
    if (tempAddress == yelpAPIreturn.businesses[j].location.address1 || tempAddress1 == yelpAPIreturn.businesses[j].location.address1 || tempAddress2 == yelpAPIreturn.businesses[j].location.address1) {
      eventInfo[step].rating = yelpAPIreturn.businesses[j].rating
      break   
    }   
  }
  // increases step count by 1
  step = step + 1
  console.log(eventInfo)
}

// calls yelp api using encoded venue name
function yelpAPIcall() {
  yelpURL = `https://yelp-backend.netlify.app/.netlify/functions/search?term=${tempURLname}&location=${cityName}`
  fetch(yelpURL, {})
    .then((res) => {return res.json()})
    .then((data) => {
      yelpAPIreturn = data
      // calls the yelpAPIfilter function that parses the data
      yelpAPIfilter()
      })
}