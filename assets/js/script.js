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
