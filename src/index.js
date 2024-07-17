function updateTime() {
  //Stuttgart
  let stuttgartElement = document.querySelector("#stuttgart");
  if (stuttgartElement) {
    let stuttgartDateElement = stuttgartElement.querySelector(".date");
    let stuttgartTimeElement = stuttgartElement.querySelector(".time");
    let stuttgartTime = moment().tz("Europe/Berlin");
    stuttgartDateElement.innerHTML =
      stuttgartTime.format("dddd Do MMMM YYYY");
    stuttgartTimeElement.innerHTML = stuttgartTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Mexico City
  let mexicoCityElement = document.querySelector("#mexico-city");
  if (mexicoCityElement) {
    let mexicoCityDateElement = mexicoCityElement.querySelector(".date");
    let mexicoCityTimeElement = mexicoCityElement.querySelector(".time");
    let mexicoCityTime = moment().tz("America/Mexico_City");
    mexicoCityDateElement.innerHTML = mexicoCityTime.format("dddd Do MMMM YYYY");
    mexicoCityTimeElement.innerHTML = mexicoCityTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Grenoble
  let grenobleElement = document.querySelector("#grenoble");
  if (grenobleElement) {
    let grenobleDateElement = grenobleElement.querySelector(".date");
    let grenobleTimeElement = grenobleElement.querySelector(".time");
    let grenobleTime = moment().tz("Europe/Paris");
    grenobleDateElement.innerHTML = grenobleTime.format("dddd Do MMMM YYYY");
    grenobleTimeElement.innerHTML = grenobleTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Bogota
  let bogotaElement = document.querySelector("#bogota");
  if (bogotaElement) {
    let bogotaDateElement = bogotaElement.querySelector(".date");
    let bogotaTimeElement = bogotaElement.querySelector(".time");
    let bogotaTime = moment().tz("America/Bogota");
    bogotaDateElement.innerHTML = bogotaTime.format("dddd Do MMMM YYYY");
    bogotaTimeElement.innerHTML = bogotaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("dddd Do MMMM YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss [<small>]A[</small>]"
        )}</div>
        </div>
        <a href="/">Home</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);