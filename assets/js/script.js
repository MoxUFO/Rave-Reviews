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
