let eventParent = document.getElementById('event-list-parent')
let introDiv = document.getElementById('intro-div')
let eventLocation = document.getElementById("location-input")
let dateInput = document.getElementById("date-input")
let eventType = document.getElementById("event-type")
let genreList = document.getElementById("genre-list")
let searchBtn = document.getElementById("search-events");
let listStart = document.getElementById('list-start')
let suggestionParent = document.getElementById('suggestion-parent')
let suggestionHeader = document.getElementById('suggestion-header')

$('#inverted_calendar')
  .calendar({
    type: 'date',
    formatter: {
      date: 'YYYY-MM-DD'
    }
  });



  function genreChange(event) {
    genreList.innerHTML = listStart
    let eventType = document.getElementById("event-type").value;
    if (eventType == 'KZFzniwnSyZfZ7v7nJ') {
    let option1 = listStart
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
    
    alternative.value = "KnvZfZ7vAvv";
    childrens.value = "KnvZfZ7vAvk";
    classical.value = "KnvZfZ7vAeJ";
    country.value = "KnvZfZ7vAv6";
    dance.value = "KnvZfZ7vAvF";
    rap.value = "KnvZfZ7vAv1";
    latin.value = "KnvZfZ7vAJ6";
    metal.value = "KnvZfZ7vAvt";
    pop.value = "KnvZfZ7vAev";
    rnb.value = "KnvZfZ7vAee";
    religious.value = "KnvZfZ7vAe7";
    rock.value = "KnvZfZ7vAeA";
  
    document.getElementById('genre-list').append(option1);
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
    } else if ( eventType == 'KZFzniwnSyZfZ7v7nE'){
    option1 = listStart
    let baseball = document.createElement('option');
    let basketball = document.createElement('option');
    let boxing = document.createElement('option');
    let football = document.createElement('option');
    let hockey = document.createElement('option');
    let motorsports = document.createElement('option');
    let soccer = document.createElement('option');
    let wrestling = document.createElement('option');
    let martialArts = document.createElement('option');
    baseball.text ='Baseball'
    basketball.text = 'Basketball'
    boxing.text = 'Boxing'
    football.text = 'Football'
    hockey.text = 'Hockey'
    motorsports.text = 'Motor Sport and Racing'
    soccer.text = 'Soccer'
    wrestling.text ='Wrestling'
    martialArts.text = 'Martial Arts'
    baseball.value ='KnvZfZ7vAdv'
    basketball.value = 'KnvZfZ7vAde'
    boxing.value = 'KnvZfZ7vAdA'
    football.value = 'KnvZfZ7vAdE'
    hockey.value = 'KnvZfZ7vAdI'
    motorsports.value = 'KnvZfZ7vA7k'
    soccer.value = 'KnvZfZ7vA7E'
    wrestling.value ='KnvZfZ7vAAk'
    martialArts.value = 'KnvZfZ7vA7d'
  // {id: 'KnvZfZ7vAdv', name: 'Baseball'
  // {id: 'KnvZfZ7vAde', name: 'Basketball'
  // {id: 'KnvZfZ7vAdA', name: 'Boxing'
  // {id: 'KnvZfZ7vAdE', name: 'Football'
  // {id: 'KnvZfZ7vAdI', name: 'Hockey'
  // {id: 'KnvZfZ7vA7k', name: 'Motorsports/Racing'
  // {id: 'KnvZfZ7vA7E', name: 'Soccer'
  // {id: 'KnvZfZ7vAAk', name: 'Wrestling'
  // {id: 'KnvZfZ7vA7d', name: 'Martial Arts'
    document.getElementById('genre-list').append(option1);
    document.getElementById('genre-list').append(baseball);
    document.getElementById('genre-list').append(basketball);
    document.getElementById('genre-list').append(boxing);
    document.getElementById('genre-list').append(football);
    document.getElementById('genre-list').append(hockey);
    document.getElementById('genre-list').append(martialArts);
    document.getElementById('genre-list').append(motorsports);
    document.getElementById('genre-list').append(soccer);
    document.getElementById('genre-list').append(wrestling);
    } else if ( eventType == 'KZFzniwnSyZfZ7v7na'){
      let option1 = listStart
      let childTheatre = document.createElement('option');
      let CircusActs = document.createElement('option');
      let classic = document.createElement('option');
      let comedy = document.createElement('option');
      let cultural = document.createElement('option');
      let danceArt = document.createElement('option');
      let magic = document.createElement('option');
      let opera = document.createElement('option');
      
      childTheatre.text = "Children's theatre";
      CircusActs.text = "Circus & Special Acts";
      classic.text = "Classical";
      comedy.text = "Comedy";
      cultural.text = "Cultural";
      danceArt.text = "Dance";
      magic.text = "Magic & Illusion";
      opera.text = "opera";
     
      childTheatre.value = "KnvZfZ7v7na";
      CircusActs.value = "KnvZfZ7v7n1";
      classic.value = "KnvZfZ7v7nJ";
      comedy.value = "KnvZfZ7vAe1";
      cultural.value = "KnvZfZ7v7nE";
      danceArt.value = "KnvZfZ7v7nI";
      magic.value = "KnvZfZ7v7lv";
      opera.value = "KnvZfZ7v7lk";
      
      document.getElementById('genre-list').append(option1);
      document.getElementById('genre-list').append(childTheatre);
      document.getElementById('genre-list').append(CircusActs);
      document.getElementById('genre-list').append(classic);
      document.getElementById('genre-list').append(comedy);
      document.getElementById('genre-list').append(danceArt);
      document.getElementById('genre-list').append(magic);
      document.getElementById('genre-list').append(opera);
    }
  }



function handleEventQuery() {
  eventParent.innerHTML = " "
  let eventLocation = document.getElementById("location-input").value;
  if (eventLocation == "") {

    return
  }
  let dateInput = document.getElementById("date-input").value;
  if (!dateInput) {
    dateInput = dateInput
  } else{
  dateInput = dateInput + "T00:00:00Z"
  }
  let eventType = document.getElementById("event-type").value;
  // if (!eventType) {
  //   alert('please choose event')
  //   return
  // }
  let genreList = document.getElementById("genre-list").value;
  introDiv.classList.add('hide-me')
  suggestionHeader.classList.add('hide-me')
  suggestionParent.classList.add('hide-me')
  eventParent.classList.remove('hide-me')
  
  saveEvent()
  TicketMasterAPIcall(eventLocation,dateInput, eventType, genreList)
}

function saveEvent(){//this functions saved searched loction in the local storage with a valid inpit checker starting on line 34
  let eventType = document.getElementById("location-input").value
  let storedLocation = JSON.parse(localStorage.getItem("event-location"));
  
  if (!storedLocation) {
    storedLocation = [];
  }
  if (storedLocation.includes(eventType)){
    return
  }
        storedLocation.push(eventType);
        localStorage.setItem("event-location", JSON.stringify(storedLocation));
 
}

function suggestEvent(){
  let storedLocation = JSON.parse(localStorage.getItem("event-location"));
// console.log(storedLocation)
  if(!storedLocation){    
    return
  }
    var suggestionsIndex = Math.floor(Math.random() * storedLocation.length)
    var suggestion = storedLocation[suggestionsIndex];
    // console.log(suggestion);
   
    let url =
    "https://app.ticketmaster.com/discovery/v2/events.json?city=" + suggestion +"&apikey=wAUd3TteUrno75GAGlIlbBXcvGgQurTA ";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let eventsArray = data._embedded.events
      // console.log(eventsArray);
      var arrayIndex = Math.floor(Math.random() * eventsArray.length)
      let randonEventObj = eventsArray[arrayIndex]
      // console.log(randonEventObj);

      let eventDiv =document.createElement('div')
      eventDiv.classList.add('content')
      let eventCard =document.createElement('div')
      eventCard.id = "eventCard"
      let imageDiv = document.createElement('div') 
      imageDiv.id = "imageDiv"     
      let contentDiv = document.createElement('div')
      contentDiv.id = "contentDiv"
      eventCard.append(imageDiv)     
      eventCard.append(contentDiv)      
      eventCard.classList.add('event-list-card')
      let eventHeader = document.createElement('h3')
      eventHeader.textContent = randonEventObj.name
      let genreDiv = document.createElement('div')
      if (!randonEventObj.classifications[0].genre) {
        genreDiv.textContent = 'undefined'
      } else{
        genreDiv.textContent = randonEventObj.classifications[0].genre.name
      }
      let venueDiv = document.createElement('div')
      venueDiv.textContent = randonEventObj._embedded.venues[0].name
      let dateDiv = document.createElement('div')
      dateDiv.textContent = randonEventObj.dates.start.localDate + ' ' + randonEventObj.dates.start.localTime
      contentDiv.dataset.eventId = randonEventObj.id
      imageDiv.dataset.eventId = randonEventObj.id
      // console.log(eventCard.dataset.eventId)
      let thumbnail = document.createElement('img')
      let biggestImg = {}
      biggestImg['height'] = 0
      biggestImg['Url'] = ""
      for (j = 0 ; j < randonEventObj.images.length; j++) {                
        if (randonEventObj.images[j].ratio === "16_9"){
          if (randonEventObj.images[j].height > biggestImg['height']) {
            biggestImg['height'] = randonEventObj.images[j].height
            biggestImg['Url'] = randonEventObj.images[j].url
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
      suggestionParent.appendChild(eventDiv)
    });
  
}

function eventDetails(event){
  // console.log(event.target)
  // if (event.target.children[4].innerHTML == undefined){
  // } else{
    console.log(event.target.parentElement)
    queryString = './results.html?id=' + event.target.parentElement.dataset.eventId
    location.assign(queryString);
    // console.log(queryString)
  // }
}

function TicketMasterAPIcall(eventLocation, dateInput, eventType,genreList){
  let url =
    "https://app.ticketmaster.com/discovery/v2/events.json?city=" + eventLocation + "&genreId=" + genreList + "&segmentId=" + eventType + "&startDateTime=" + dateInput + "&apikey=wAUd3TteUrno75GAGlIlbBXcvGgQurTA";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data._embedded.events);
      if (data._embedded == undefined) {
        console.log('no');
        $('.ui.basic.modal')
        .modal('show')
      ;
      introDiv.classList.remove('hide-me')
      }
      // console.log(url)
     for (let i = 0; i < 15; i++) {
      // console.log(data._embedded)
      // console.log('hi')
      let eventDiv =document.createElement('div')
      eventDiv.classList.add('content')
      let eventCard =document.createElement('div')
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
      // console.log(eventCard.dataset.eventId)
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
   suggestEvent()
   eventType.addEventListener('change',genreChange)
searchBtn.addEventListener("click", handleEventQuery);
