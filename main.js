const $ = document.querySelector.bind(document);
const search = $(".box-search input");
const value = $(".box-value-t");
const dayAndTime = $(".temperature-title h1");
const Cloud = $(".cound span");
const Info = $(".info-s");
const Rain = $(".rain span");
const city = $(".tem .city");
const country = $(".tem .country");
const imgDemo = $(".img-demo");
const sun_day = $(".context span");
const blurs = $(".context .blurs");
const sun_day2 = $(".context2 span");
const blurs2 = $(".context2 .blurs");
const sun_day3 = $(".context3 span");
const blurs3 = $(".context3 .blurs");
const air = $(".air");
const sun_day4 = $(".context4 span");
const blurs4 = $(".context4 .blurs");
const sun_day5 = $(".context5 span");
const blurs5 = $(".context5 .blurs");
const sun_day6 = $(".context6 span");
const blurs6 = $(".context6 .blurs");
const sun_day7 = $(".context7 span");
const blurs7 = $(".context7 .blurs");
const healthy = $(".local .healthy");
const spCloud = $(".cloud-s");
const vis = $(".visibilitys");
const sunrise = $(".sunrise");
async function handSearch() {
  const defaults = search.value.trim();
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${
    defaults === "" ? "ha noi" : defaults
  }&limit=1&appid=114027820d9c3a3495fa09c176c70a78`;
  const data = await fetch(url)
    .then((r) => r.json())
    .then((data) => data);
  const lat = data[0].lat;
  const lon = data[0].lon;
  //   data
  const url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=114027820d9c3a3495fa09c176c70a78`;
  const data1 = await fetch(url1)
    .then((r) => r.json())
    .then((data) => data);
  value.innerText = Math.floor(data1.main.temp - 273.15) + "°C";
  country.innerText = data[0].country;
  city.innerText = data[0].name;
  Cloud.innerText = data1.weather[0].main;
  Rain.innerText = data1.clouds.all + "%" + " " + data1.weather[0].description;
  const setTemperature = Math.floor(data1.main.temp - 273.15);
  //
  sun_day.innerText = Math.floor(data1.main.temp - 273.15) - 1;
  blurs.innerText = Math.floor(data1.main.temp - 273.15) - 6;
  sun_day2.innerText = Math.floor(data1.main.temp - 273.15) - 2;
  blurs2.innerText = Math.floor(data1.main.temp - 273.15) - 5;
  sun_day3.innerText = Math.floor(data1.main.temp - 273.15) - 1;
  blurs3.innerText = Math.floor(data1.main.temp - 273.15) - 4;
  sun_day4.innerText = Math.floor(data1.main.temp - 273.15) - 1;
  blurs4.innerText = Math.floor(data1.main.temp - 273.15) - 3;
  sun_day5.innerText = Math.floor(data1.main.temp - 273.15) - 1;
  blurs5.innerText = Math.floor(data1.main.temp - 273.15) - 5;
  sun_day6.innerText = Math.floor(data1.main.temp - 273.15) - 2;
  blurs6.innerText = Math.floor(data1.main.temp - 273.15) - 5;
  sun_day7.innerText = Math.floor(data1.main.temp - 273.15) - 3;
  blurs7.innerText = Math.floor(data1.main.temp - 273.15) - 6;
  //
  spCloud.innerText = data1.wind.speed;
  vis.innerText = data1.visibility / 1000 - 2 + ".0";
  //   sunrise.innerText = Math.floor(new Date().getTime() / 1000.0);
  air.innerText = data1.main.humidity;
  Info.innerText = Math.floor(data1.main.temp - 270.15) + "°C";
  const dataT = Math.floor(data1.main.temp - 270.15);
  if (setTemperature >= 27) {
    imgDemo.src = "./image/sun/sun1.gif";
  } else if (setTemperature >= 18) {
    imgDemo.src = "./image/sun/sun.gif";
  } else if (setTemperature < 18) {
    imgDemo.src = "./image/sun/ngày.gif";
  }
  if (dataT >= 27) {
    healthy.innerText = "Unhealthy";
  } else if (dataT >= 18) {
    healthy.innerText = "Healthy";
  } else if (dataT < 18) {
    healthy.innerText = "Unhealthy";
  }
  console.log(healthy);
  search.value = "";
}
setInterval(() => {
  dayAndTime.innerText = new Date().toLocaleString("vn");
}, 1000);

setTimeout(() => {
  search.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      handSearch();
    }
  });
  handSearch();
}, 10);
