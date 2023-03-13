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