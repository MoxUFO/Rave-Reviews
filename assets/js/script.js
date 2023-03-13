
$("document").ready(function(){


$('#inverted_calendar')
  .calendar({
    type: 'date'
  })
  ;

console.log(document.getElementById("BG-img"))
let url = 'https://app.ticketmaster.com/discovery/v2/events.json?city=&segmentName=sports&apikey=wAUd3TteUrno75GAGlIlbBXcvGgQurTA'
fetch(url)
  .then(function (response) {
    return response.json()

  })
  .then(function (data) {
    console.log(data)
  })


function createGenres(ev) {//ev is input event
  let select = ev.target;
  console.log(select.value);
  let genreType = $('option').val;
  if (this.genreType = 'sports') {
    let baseball = document.createElement('option');
    let basketball = document.createElement('option');
    let boxing = document.createElement('option');
    let hockey = document.createElement('option');
    let soccer = document.createElement('option');
    let softball = document.createElement('option');
    let tennis = document.createElement('option');
    let volleyball = document.createElement('option');

    baseball.textContent = "baseball";
    basketball.textContent = "basketball";
    boxing.textContent = "boxing";
    hockey.textContent = "hockey";
    soccer.textContent = "soccer";
    softball.textContent = "softball";
    tennis.textContent = "tennis";
    volleyball.textContent = "volleyball";

    document.getElementById('genre-list').appendChild(baseball);
    document.getElementById('genre-list').appendChild(basketball);
    document.getElementById('genre-list').appendChild(boxing);
    document.getElementById('genre-list').appendChild(hockey);
    document.getElementById('genre-list').appendChild(soccer);
    document.getElementById('genre-list').appendChild(softball);
    document.getElementById('genre-list').appendChild(tennis);
    document.getElementById('genre-list').appendChild(volleyball);
  }
  if (genreType.val = "music") {
    let alternative = document.createElement('option');
    let childrens = document.createElement('option');
    let classical = document.createElement('option');
    let country = document.createElement('option');
    let dance = document.createElement('option');
    let rap = document.createElement('option');
    let metal = document.createElement('option');
    let pop = document.createElement('option');
    let rnb = document.createElement('option');
    let religious = document.createElement('option');
    let rock = document.createElement('option');
    let world = document.createElement('option');

    alternative.textContent = "alternative";
    childrens.textContent = "children's";
    classical.textContent = "classical";
    country.textContent = "country";
    dance.textContent = "dance/electronic";
    rap.textContent = "hip-hop/rap";
    metal.textContent = "metal";
    pop.textContent = "pop";
    rnb.textContent = "R&B";
    religious.textContent = "religious";
    rock.textContent = "rock";
    world.textContent = "world";

    document.getElementById('genre-list').appendChild(alternative);
    document.getElementById('genre-list').appendChild(childrens);
    document.getElementById('genre-list').appendChild(classical);
    document.getElementById('genre-list').appendChild(country);
    document.getElementById('genre-list').appendChild(dance);
    document.getElementById('genre-list').appendChild(rap);
    document.getElementById('genre-list').appendChild(metal);
    document.getElementById('genre-list').appendChild(pop);
    document.getElementById('genre-list').appendChild(rnb);
    document.getElementById('genre-list').appendChild(religious);
    document.getElementById('genre-list').appendChild(rock);
    document.getElementById('genre-list').appendChild(world);
  }
  if (genreType.val = "casino/gaming") {
    let casino = document.createElement('option');

    casino.textContent = "casino/gaming";

    document.getElementById('genre-list').appendChild(casino);

  }
  if (genreType.val = "Comedy") {
    let comedy = document.createElement('option');

    family.textContent = "comedy";

    document.getElementById('genre-list').appendChild(comedy);
  }
  if (genreType.val = "Fairs &  Festivals") {
    let fairs = document.createElement('option');

    family.textContent = "fairs & festivals";

    document.getElementById('genre-list').appendChild(fairs);
  }
  if (genreType.val = "Community/Cultural") {
    let community = document.createElement('option');

    community.textContent = "community/cultural";

    document.getElementById('genre-list').appendChild(community);
  }
  if (genreType.val = "family") {
    let family = document.createElement('option');
    let other = document.createElement('option');

    family.textContent = "family";
    other.textContent = "other";

    document.getElementById('genre-list').appendChild(family);
    document.getElementById('genre-list').appendChild(other);

  }
  if (genreType.val = "Health/Wellness") {
    let health = document.createElement('option');

    health.textContent = "health/wellness";

    document.getElementById('genre-list').appendChild(health);
  }
  if (genreType.val = "Lecture/Seminar") {
    let lecture = document.createElement('option');

    lecture.textContent = "lecture/seminar/cultural";

    document.getElementById('genre-list').appendChild(lecture);
}
if (genreType.val = "Special Interest/Hobby") {//yes this is right.
  let garden = document.createElement('option');

  garden.textContent = "flower and garden";

  document.getElementById('genre-list').appendChild(garden);

}
}

$("option").on('input',createGenres)
});

let eventParent = document.getElementById('event-list-parent')
let introDiv = document.getElementById('intro-div')
let eventLocation = document.getElementById("location-input")
let dateInput = document.getElementById("date-input")
let eventType = document.getElementById("event-type")
let genreList = document.getElementById("genre-list")

$('#inverted_calendar')
  .calendar({
    type: 'date',
    formatter: {
      date: 'YYYY-MM-DD'
    }
  });

let searchBtn = document.getElementById("search-events");

function handleEventQuery() {
  eventParent.innerHTML = " "
  let eventLocation = document.getElementById("location-input").value;
  let dateInput = document.getElementById("date-input").value;
  if (!dateInput) {
    dateInput = dateInput
  } else{
  dateInput = dateInput + "T00:00:00Z"
  }
  let eventType = document.getElementById("event-type").value;
  let genreList = document.getElementById("genre-list").value;
  introDiv.classList.add('hide-me')
  eventParent.classList.remove('hide-me')
  TicketMasterAPIcall(eventLocation,dateInput, eventType, genreList)
}

function eventDetails(event){
  console.log(event.target.children[4].innerHTML)
  if (event.target.children[4].innerHTML == undefined){
  } else{
    queryString = './results.html?id=' + event.target.children[4].innerHTML
    location.assign(queryString);
    console.log(queryString)
  }
}

function TicketMasterAPIcall(eventLocation, dateInput, eventType,genreList){
  let url =
    "https://app.ticketmaster.com/discovery/v2/events.json?city=" + eventLocation + "&segmentName=" + eventType + "&startDateTime=" + dateInput + "&apikey=wAUd3TteUrno75GAGlIlbBXcvGgQurTA";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      // console.log(url)
     for (let i = 0; i < 15; i++) {
      // console.log(data._embedded.events)
      // console.log('hi')
      let eventDiv =document.createElement('div')
      eventDiv.classList.add('content')
      let eventCard =document.createElement('button')
      eventCard.classList.add('event-list-card')
      let eventHeader = document.createElement('h3')
      eventHeader.textContent = data._embedded.events[i].name
      let genreDiv = document.createElement('div')
      genreDiv.textContent = data._embedded.events[i].classifications[0].genre.name
      let venueDiv = document.createElement('div')
      venueDiv.textContent = data._embedded.events[i]._embedded.venues[0].name
      let dateDiv = document.createElement('div')
      dateDiv.textContent = data._embedded.events[i].dates.start.localDate + ' ' + data._embedded.events[i].dates.start.localTime
      let eventId = document.createElement('div')
      eventId.textContent = data._embedded.events[i].id
      eventId.classList.add('hide-me')
      eventCard.append(eventHeader)
      eventCard.append(genreDiv)
      eventCard.append(venueDiv)
      eventCard.append(dateDiv)
      eventCard.append(eventId)
      eventDiv.append(eventCard)
      eventParent.append(eventDiv)
      eventCard.addEventListener('click', eventDetails)
      
   
       eventLocation = document.getElementById("location-input").value = ""
       dateInput = document.getElementById("date-input").value = ""
       eventType = document.getElementById("event-type").value = ""
       genreList = document.getElementById("genre-list").value = ""
     }
    });
   }
searchBtn.addEventListener("click", handleEventQuery);
// zgEmnQtADI7tPFs1XGAEQUwY7o3h06UpHtrPNfD9exKX43XIaEFxBlyp7vziw7hYbFh7iEgPrCMTZ9i8MmlBGJLpMbU6q8JzSRP6FnF8Exu7hP6krLa1oGU6tyANZHYx
// zgEmnQtADI7tPFs1XGAEQUwY7o3h06UpHtrPNfD9exKX43XIaEFxBlyp7vziw7hYbFh7iEgPrCMTZ9i8MmlBGJLpMbU6q8JzSRP6FnF8Exu7hP6krLa1oGU6tyANZHYx
// zgEmnQtADI7tPFs1XGAEQUwY7o3h06UpHtrPNfD9exKX43XIaEFxBlyp7vziw7hYbFh7iEgPrCMTZ9i8MmlBGJLpMbU6q8JzSRP6FnF8Exu7hP6krLa1oGU6tyANZHYx
// // variables
// var key = "wAUd3TteUrno75GAGlIlbBXcvGgQurTA"
// let cityName = ""
// let venueAddress = "" 
// let venueName = ""
// let urlVenueName = ""
// let ticketMasterReturn = {}
// let eventInfo = {}
// let tempInfo = {}
// let step = 0
// yelpAPIreturn = {}
// let segmentName = "music"
// let genreId = ""
// let userdate = "2023-04-20"
// let eventStartDate = userdate + "T00:00:00Z"



// TicketMasterAPIcall()


// // initial Ticketmaster API call
// function TicketMasterAPIcall () {
//   cityName = prompt("Please enter a city")
//   fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=${key}&city=${cityName}&segmentName=${segmentName}&startDateTime=${eventStartDate}`)
//       .then(function(data) {
//           return(data.json())        
//       })
//       .then(function(data) {
//           ticketMasterReturn = data
//           console.log(data)
//           for (i = 0; i < 10; i++) {
//               tempInfo = {}
//               // finds the event name
//               tempInfo['EventName'] = data._embedded.events[i].name

//               // finds the venue name
//               venueName = data._embedded.events[i]._embedded.venues[0].name
//               tempInfo['VenueName'] = data._embedded.events[i]._embedded.venues[0].name

//               // finds the event address
//               venueAddress = data._embedded.events[i]._embedded.venues[0].address.line1
//               tempInfo['EventAddress'] = data._embedded.events[i]._embedded.venues[0].address.line1
            
//               // Event start time
//               tempInfo['EventStart'] = data._embedded.events[i].dates.start.localTime

//               // Event Date
//               tempInfo['EventDate'] = data._embedded.events[i].dates.start.localDate

//               // Ticket price range
//               if (data._embedded.events[i].hasOwnProperty("priceRanges")){
//                 tempInfo['EventPrices'] = [data._embedded.events[i].priceRanges[0].min, data._embedded.events[i].priceRanges[0].max]
//               } else {
//                 console.log("event " + i + " does not have a price range")
//               }

//               // Ticket status
//               tempInfo['EventStatus'] = data._embedded.events[i].dates.status.code

//               // Genre Name
//               tempInfo['EventGenre'] = data._embedded.events[i].classifications[0].genre.name

//               // Segment Name
//               tempInfo['SegmentName'] = data._embedded.events[i].classifications[0].segment.name

//               // seatmap URL
//               if (data._embedded.events[i].hasOwnProperty("seatmap")) {
//               tempInfo['seatmapURL'] = data._embedded.events[i].seatmap.staticUrl
//               } else {
//                 console.log("event " + i + " does not have a seatmap")
//               }

//               // ticketmaster URL
//               tempInfo['ticketmasterURL'] = data._embedded.events[i].url

//               // finds largest img with 16_9 ratio
//               let biggestImg = {}
//               biggestImg['height'] = 0
//               biggestImg['Url'] = ""
//               for (j = 0 ; j < data._embedded.events[i].images.length; j++) {                
//                 if (data._embedded.events[i].images[j].ratio === "16_9"){
//                   if (data._embedded.events[i].images[j].height > biggestImg['height']) {
//                     biggestImg['height'] = data._embedded.events[i].images[j].height
//                     biggestImg['Url'] = data._embedded.events[i].images[j].url
//                   }
//                 }
//               }
//               tempInfo['imageUrl'] = biggestImg['Url']


//               eventInfo[i] = tempInfo            
//           }
//           console.log(data)
//           encodeVariables()   
//       })
// }      
// // for each search result, perform an yelp API call using the encoded venue name
// function encodeVariables() {
//   for (i=0; i < 10; i++) {  
//     // encodes address to function within url 
//     tempURLname = eventInfo[i].VenueName.replace(/\s/g, '%20')    
//     // calls yelp api
//     yelpAPIcall()  
//   }
// }

// // compares address from TicketMaster to Yelp and attempt to find a matching rating
// function yelpAPIfilter() {
//   failedYelpURL = yelpURL
//   tempAddress = eventInfo[step].EventAddress
//   tempAddress1 = eventInfo[step].EventAddress.replace(/\./g, "")
//   tempAddress2 = eventInfo[step].EventAddress.replace(/Drive/g, 'Dr')
//   for (j = 0; j < yelpAPIreturn.businesses.length; j++) {
//     // console.log(yelpAPIreturn.businesses[j].location.address1 + " " + tempAddress + " " + tempAddress1 + " " + tempAddress2)
//     if (tempAddress == yelpAPIreturn.businesses[j].location.address1 || tempAddress1 == yelpAPIreturn.businesses[j].location.address1 || tempAddress2 == yelpAPIreturn.businesses[j].location.address1) {
//       eventInfo[step].rating = yelpAPIreturn.businesses[j].rating
//       break   
//     }   
//   }
//   // increases step count by 1
//   step = step + 1
//   if (step === 10) {
//   console.log(eventInfo)
//   }
// }

// // calls yelp api using encoded venue name
// function yelpAPIcall() {
//   yelpURL = `https://yelp-backend.netlify.app/.netlify/functions/search?term=${tempURLname}&location=${cityName}`
//   fetch(yelpURL, {})
//     .then((res) => {return res.json()})
//     .then((data) => {
//       yelpAPIreturn = data
//       // calls the yelpAPIfilter function that parses the data
//       yelpAPIfilter()
//       })
// }

