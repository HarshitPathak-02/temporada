let btn = document.querySelector("#srch_icon")
let city = document.querySelector("#city");
let ctyCrd = document.querySelector(".city_card")
let mxTmp = document.querySelector("#mx_tmp")
let mnTmp = document.querySelector("#mn_tmp")
let humd = document.querySelector("#humd")
let prsr = document.querySelector("#prssre")
let icn = document.querySelector("#icon")
let flsLike = document.querySelector("#fls_lk")
let cntry = document.querySelector("#cntry")
let cty = document.querySelector("#cty")
let day = document.querySelector("#day")
let mnth = document.querySelector("#month")
let year = document.querySelector("#year")
let temp = document.querySelector("#temperature")
let type = document.querySelector("#type")
let wndSpd = document.querySelector("#wnd_spd")
let prcptn = document.querySelector("#prcp")


let url2 = ""

let getData = async () => {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=Metric&appid=${process.env.API_KEY}`;

    let response = await fetch(url);
    let data = await response.json();

    let timeStamp = Date.now()
    let date = new Date(timeStamp)

    temp.innerHTML = data.main.temp + "&deg;C"
    type.innerHTML = data.weather[0].description.toUpperCase()
    // day.innerHTML = date.toLocaleDateString()
    // mnth.innerHTML = data.main.temp + "&deg;C"
    humd.innerHTML = data.main.humidity + " %"
    // year.innerHTML = data.main.temp + "&deg;C"
    prsr.innerHTML = data.main.pressure + " hPa"
    flsLike.innerHTML = data.main.feels_like + "&deg;C"
    wndSpd.innerHTML = data.wind.speed + " km/h"
    cty.innerHTML = data.name + ", "
    cntry.innerHTML = data.sys.country
    prcptn.innerHTML = data.clouds.all + " %"
    mnTmp.innerHTML = data.main.temp_min + "&deg;C"
    mxTmp.innerHTML = data.main.temp_max + "&deg;C"

    icn.setAttribute('src',`http://openweathermap.org/img/w/${data.weather[0].icon}.png`)
}

btn.addEventListener('click',getData)


gsap.from(".city_card", {
    y:50,
    opacity:0,
    delay:1,
    duration:1
})

gsap.from(".city_left_upper2 h3", {
    x:-50,
    opacity:0,
    stagger:0.3,
    duration:1,
    delay:1.5
})

gsap.from(".city_card_left_upper h2", {
    y:-50,
    delay:1.7,
    duration:1,
    opacity:0
})