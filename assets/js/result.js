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
    //    console.log(data._embedded.events[0].url)

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
        city = data._embedded.events[0]._embedded.venues[0].city.name
        console.log(city)
        yelpHotels(city)
        yelpFood(city)
        yelpBars(city)
      });
     }

     function yelpHotels(city){
        yelpURL = `https://yelp-backend.netlify.app/.netlify/functions/search?term=hotels&location=${city}`
        fetch(yelpURL, {})
          .then((res) => {return res.json()})
          .then((data) => {
          //   yelpAPIreturn = data
            console.log(data.businesses[3])
            // calls the yelpAPIfilter function that parses the data
            let hotelOne = document.getElementById('hotel-1')
            hotelOne.textContent = data.businesses[0].name
            let hotelOneRating = document.getElementById('hotel-1-rating')
            hotelOneRating.textContent = "Rating: " + data.businesses[0].rating
            let hotelOneAddress = document.getElementById('hotel-1-address')
            hotelOneAddress.textContent ="Location: " +  data.businesses[0].location.display_address
            let hotelOnePhone = document.getElementById('hotel-1-phone')
            hotelOnePhone.textContent ="Phone number: " +  data.businesses[0].phone

            let hotelTwo = document.getElementById('hotel-2')
            hotelTwo.textContent = data.businesses[1].name
            let hotelTwoRating = document.getElementById('hotel-2-rating')
            hotelTwoRating.textContent = "Rating: " + data.businesses[1].rating
            let hotelTwoAddress = document.getElementById('hotel-2-address')
            hotelTwoAddress.textContent ="Location: " +  data.businesses[1].location.display_address
            let hotelTwoPhone = document.getElementById('hotel-2-phone')
            hotelTwoPhone.textContent ="Phone number: " +  data.businesses[1].phone

            let hotelThree = document.getElementById('hotel-3')
            hotelThree.textContent = data.businesses[2].name
            let hotelThreeRating = document.getElementById('hotel-3-rating')
            hotelThreeRating.textContent = "Rating: " + data.businesses[2].rating
            let hotelThreeAddress = document.getElementById('hotel-3-address')
            hotelThreeAddress.textContent ="Location: " +  data.businesses[2].location.display_address
            let hotelThreePhone = document.getElementById('hotel-3-phone')
            hotelThreePhone.textContent ="Phone number: " +  data.businesses[2].phone

            let hotelFour = document.getElementById('hotel-4')
            hotelFour.textContent = data.businesses[3].name
            let hotelFourRating = document.getElementById('hotel-4-rating')
            hotelFourRating.textContent = "Rating: " + data.businesses[3].rating
            let hotelFourAddress = document.getElementById('hotel-4-address')
            hotelFourAddress.textContent ="Location: " +  data.businesses[3].location.display_address
            let hotelFourPhone = document.getElementById('hotel-4-phone')
            hotelFourPhone.textContent ="Phone number: " +  data.businesses[3].phone
            })
     }

     function yelpFood(city){
        yelpURL = `https://yelp-backend.netlify.app/.netlify/functions/search?term=restaurants&location=${city}` 
        fetch(yelpURL, {})
          .then((res) => {return res.json()})
          .then((data) => {
          //   yelpAPIreturn = data
            console.log(data.businesses[3])
            // calls the yelpAPIfilter function that parses the data
            let foodOne = document.getElementById('food-1')
            foodOne.textContent = data.businesses[0].name
            let foodOneRating = document.getElementById('food-1-rating')
            foodOneRating.textContent = "Rating: " + data.businesses[0].rating
            let foodOneAddress = document.getElementById('food-1-address')
            foodOneAddress.textContent ="Location: " +  data.businesses[0].location.display_address
            let foodOnePhone = document.getElementById('food-1-phone')
            foodOnePhone.textContent ="Phone number: " +  data.businesses[0].phone

            let foodTwo = document.getElementById('food-2')
            foodTwo.textContent = data.businesses[1].name
            let foodTwoRating = document.getElementById('food-2-rating')
            foodTwoRating.textContent = "Rating: " + data.businesses[1].rating
            let foodTwoAddress = document.getElementById('food-2-address')
            foodTwoAddress.textContent ="Location: " +  data.businesses[1].location.display_address
            let foodTwoPhone = document.getElementById('food-2-phone')
            foodTwoPhone.textContent ="Phone number: " +  data.businesses[1].phone

            let foodThree = document.getElementById('food-3')
            foodThree.textContent = data.businesses[2].name
            let foodThreeRating = document.getElementById('food-3-rating')
            foodThreeRating.textContent = "Rating: " + data.businesses[2].rating
            let foodThreeAddress = document.getElementById('food-3-address')
            foodThreeAddress.textContent ="Location: " +  data.businesses[2].location.display_address
            let foodThreePhone = document.getElementById('food-3-phone')
            foodThreePhone.textContent ="Phone number: " +  data.businesses[2].phone

            let foodFour = document.getElementById('food-4')
            foodFour.textContent = data.businesses[3].name
            let foodFourRating = document.getElementById('food-4-rating')
            foodFourRating.textContent = "Rating: " + data.businesses[3].rating
            let foodFourAddress = document.getElementById('food-4-address')
            foodFourAddress.textContent ="Location: " +  data.businesses[3].location.display_address
            let foodFourPhone = document.getElementById('food-4-phone')
            foodFourPhone.textContent ="Phone number: " +  data.businesses[3].phone
            })
     }


     function yelpBars(city){
        yelpURL = `https://yelp-backend.netlify.app/.netlify/functions/search?term=bars&location=${city}`
        fetch(yelpURL, {})
          .then((res) => {return res.json()})
          .then((data) => {
          //   yelpAPIreturn = data
            console.log(data.businesses[3])
            // calls the yelpAPIfilter function that parses the data
            let barOne = document.getElementById('bar-1')
            barOne.textContent = data.businesses[0].name
            let barOneRating = document.getElementById('bar-1-rating')
            barOneRating.textContent = "Rating: " + data.businesses[0].rating
            let barOneAddress = document.getElementById('bar-1-address')
            barOneAddress.textContent ="Location: " +  data.businesses[0].location.display_address
            let barOnePhone = document.getElementById('bar-1-phone')
            barOnePhone.textContent ="Phone number: " +  data.businesses[0].phone

            let barTwo = document.getElementById('bar-2')
            barTwo.textContent = data.businesses[1].name
            let barTwoRating = document.getElementById('bar-2-rating')
            barTwoRating.textContent = "Rating: " + data.businesses[1].rating
            let barTwoAddress = document.getElementById('bar-2-address')
            barTwoAddress.textContent ="Location: " +  data.businesses[1].location.display_address
            let barTwoPhone = document.getElementById('bar-2-phone')
            barTwoPhone.textContent ="Phone number: " +  data.businesses[1].phone

            let barThree = document.getElementById('bar-3')
            barThree.textContent = data.businesses[2].name
            let barThreeRating = document.getElementById('bar-3-rating')
            barThreeRating.textContent = "Rating: " + data.businesses[2].rating
            let barThreeAddress = document.getElementById('bar-3-address')
            barThreeAddress.textContent ="Location: " +  data.businesses[2].location.display_address
            let barThreePhone = document.getElementById('bar-3-phone')
            barThreePhone.textContent ="Phone number: " +  data.businesses[2].phone

            let barFour = document.getElementById('bar-4')
            barFour.textContent = data.businesses[3].name
            let barFourRating = document.getElementById('bar-4-rating')
            barFourRating.textContent = "Rating: " + data.businesses[3].rating
            let barFourAddress = document.getElementById('bar-4-address')
            barFourAddress.textContent ="Location: " +  data.businesses[3].location.display_address
            let barFourPhone = document.getElementById('bar-4-phone')
            barFourPhone.textContent ="Phone number: " +  data.businesses[3].phone
            })
     }

    



getParams()