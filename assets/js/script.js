let eventParent = document.getElementById('event-list-parent')
let introDiv = document.getElementById('intro-div')
let eventLocation = document.getElementById("location-input")
let dateInput = document.getElementById("date-input")
let eventType = document.getElementById("event-type")
let genreList = document.getElementById("genre-list")
let searchBtn = document.getElementById("search-events");

$('#inverted_calendar')
  .calendar({
    type: 'date',
    formatter: {
      date: 'YYYY-MM-DD'
    }
  });

  function genreChange(event) {
    
    let eventType = document.getElementById("event-type").value;
    if (eventType == 'music') {
    let alternative = document.createElement('option');
    let childrens = document.createElement('option');
    let classical = document.createElement('option');
    let country = document.createElement('option');
    let dance = document.createElement('option');
    let rap = document.createElement('option');
    let latin = document.createElement('option');
    let metal = document.createElement('option');
    let pop = document.createElement('option');
    let rnb = document.createElement('option');
    let religious = document.createElement('option');
    let rock = document.createElement('option');
    
    alternative.text = "alternative";
    childrens.text = "children's";
    classical.text = "classical";
    country.text = "country";
    dance.text = "dance/electronic";
    rap.text = "hip-hop/rap";
    latin.text = "Latin";
    metal.text = "metal";
    pop.text = "pop";
    rnb.text = "R&B";
    religious.text = "religious";
    rock.text = "rock";
  
    document.getElementById('genre-list').append(alternative);
    document.getElementById('genre-list').append(childrens);
    document.getElementById('genre-list').append(classical);
    document.getElementById('genre-list').append(country);
    document.getElementById('genre-list').append(dance);
    document.getElementById('genre-list').append(rap);
    document.getElementById('genre-list').append(metal);
    document.getElementById('genre-list').append(pop);
    document.getElementById('genre-list').append(rnb);
    document.getElementById('genre-list').append(religious);
    document.getElementById('genre-list').append(rock);
    document.getElementById('genre-list').append(world);
    }
  }



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
  console.log(event.target)
  // if (event.target.children[4].innerHTML == undefined){
  // } else{
    console.log(event.target.parentElement)
    queryString = './results.html?id=' + event.target.parentElement.dataset.eventId
    location.assign(queryString);
    console.log(queryString)
  // }
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
      eventCard.id = "eventCard"
      let imageDiv = document.createElement('div') 
      imageDiv.id = "imageDiv"     
      let contentDiv = document.createElement('div')
      contentDiv.id = "contentDiv"
      eventCard.append(imageDiv)     
      eventCard.append(contentDiv)      
      eventCard.classList.add('event-list-card')
      let eventHeader = document.createElement('h3')
      eventHeader.textContent = data._embedded.events[i].name
      let genreDiv = document.createElement('div')
      if (!data._embedded.events[i].classifications[0].genre) {
        genreDiv.textContent = 'undefined'
      } else{
        genreDiv.textContent = data._embedded.events[i].classifications[0].genre.name
      }
      let venueDiv = document.createElement('div')
      venueDiv.textContent = data._embedded.events[i]._embedded.venues[0].name
      let dateDiv = document.createElement('div')
      dateDiv.textContent = data._embedded.events[i].dates.start.localDate + ' ' + data._embedded.events[i].dates.start.localTime
      contentDiv.dataset.eventId = data._embedded.events[i].id
      imageDiv.dataset.eventId = data._embedded.events[i].id
      console.log(eventCard.dataset.eventId)
      let thumbnail = document.createElement('img')
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
      thumbnail.src = biggestImg['Url']
      thumbnail.id = "thumbnail"
      // console.log(eventCard)
      
      // eventId.textContent = data._embedded.events[i].id
      // eventId.classList.add('hide-me')

      contentDiv.appendChild(eventHeader)
      contentDiv.appendChild(genreDiv)
      contentDiv.appendChild(venueDiv)
      contentDiv.appendChild(dateDiv)
      // contentDiv.appendChild(eventId)
      
     

      eventDiv.appendChild(eventCard)


      imageDiv.appendChild(thumbnail)


      eventParent.appendChild(eventDiv)
      eventCard.addEventListener('click', eventDetails)
      
   
       eventLocation = document.getElementById("location-input").value = ""
       dateInput = document.getElementById("date-input").value = ""
       eventType = document.getElementById("event-type").value = ""
       genreList = document.getElementById("genre-list").value = ""
     }
    });
   }
   eventType.addEventListener('change',genreChange)
searchBtn.addEventListener("click", handleEventQuery);
