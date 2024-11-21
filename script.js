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
let introHead = document.querySelector("#intro_heading")
let facility = document.querySelector("#facility")
let intro = document.querySelector(".intro")
let othrCrds = document.querySelector(".other_cards")
let banHum = document.querySelector("#crd_humd_ban")
let lonHum = document.querySelector("#crd_humd_lon")
let bangHum = document.querySelector("#crd_humd_bang")
let mumHum = document.querySelector("#crd_humd_mum")
let parHum = document.querySelector("#crd_humd_par")
let lonTemp = document.querySelector(".card_temp_lon")
let banTemp = document.querySelector(".card_temp_ban")
let bangTemp = document.querySelector(".card_temp_bang")
let parTemp = document.querySelector(".card_temp_par")
let mumTemp = document.querySelector(".card_temp_mum")
let lonWnd = document.querySelector("#crd_wndspd_lon")
let banWnd = document.querySelector("#crd_wndspd_ban")
let bangWnd = document.querySelector("#crd_wndspd_bang")
let parWnd = document.querySelector("#crd_wndspd_par")
let mumWnd = document.querySelector("#crd_wndspd_mum")
let lonCld = document.querySelector("#crd_clds_lon")
let banCld = document.querySelector("#crd_clds_ban")
let bangCld = document.querySelector("#crd_clds_bang")
let parCld = document.querySelector("#crd_clds_par")
let mumCld = document.querySelector("#crd_clds_mum")
let mumCrdImg = document.querySelector("#card_img_mum")
let parCrdImg = document.querySelector("#card_img_par")
let bangCrdImg = document.querySelector("#card_img_bang")
let lonCrdImg = document.querySelector("#card_img_lon")
let banCrdImg = document.querySelector("#card_img_ban")


let getData = async () => {

    if (city.value) {
        ctyCrd.style.display = "flex"
        othrCrds.style.display = "flex"
        intro.style.display = "none"

        gsap.from(ctyCrd,{
            opacity:0,
            scale:0.5,
            duration:1,

        })

        // gsap.from(".card", {
        //     opacity:0,
        //     x:50,
        //     stagger:0.5,
        //     scrollTrigger: {
        //         trigger:othrCrds,
        //         scroller:"body",
        //         scrub:1.5,
        //         top:"top 30%",
        //         end: "top 15%",
        //     }
        // })

        gsap.from("#card1", {
            y:250,
            opacity:0,
            duration:1,
            stagger:0.3,
            scrollTrigger: {
                scroller:"body",
                trigger:othrCrds,
                scrub:1.5,
                start: "top 50%",
                end:"top 15%",
                // markers:true
            }
        })

        gsap.from("#card2", {
            scale:0.5,
            opacity:0,
            duration:0.5,
            scrollTrigger: {
                scroller:"body",
                trigger:othrCrds,
                scrub:1.5,
                start: "top 50%",
                end:"top 10%"
            }
        })

        gsap.from("#card3", {
            y:-250,
            opacity:0,
            duration:1,
            stagger:0.3,
            scrollTrigger: {
                scroller:"body",
                trigger:othrCrds,
                scrub:1.5,
                start: "top 50%",
                end:"top 15%",
                // markers:true
            }
        })
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=Metric&appid=e3c40612576149fda5b5c02e4a0f17a6`;

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


    let url3 = 'https://api.openweathermap.org/data/2.5/weather?q=london&units=Metric&appid=e3c40612576149fda5b5c02e4a0f17a6'
    let url4 = 'https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=Metric&appid=e3c40612576149fda5b5c02e4a0f17a6'
    let url5 = 'https://api.openweathermap.org/data/2.5/weather?q=bangalore&units=Metric&appid=e3c40612576149fda5b5c02e4a0f17a6'
    let url6 = 'https://api.openweathermap.org/data/2.5/weather?q=bangkok&units=Metric&appid=e3c40612576149fda5b5c02e4a0f17a6'
    let url7 = 'https://api.openweathermap.org/data/2.5/weather?q=paris&units=Metric&appid=e3c40612576149fda5b5c02e4a0f17a6'

    let response1 = await fetch(url3);
    let data1 = await response1.json();

    let response2 = await fetch(url4);
    let data2 = await response2.json();

    let response3 = await fetch(url5);
    let data3 = await response3.json();

    let response4 = await fetch(url6);
    let data4 = await response4.json();

    let response5 = await fetch(url7);
    let data5 = await response5.json();

    lonTemp.innerHTML = data1.main.temp + "&degC"
    lonHum.innerHTML = data1.main.humidity + "%"
    lonWnd.innerHTML = data1.wind.speed + " km/h"
    lonCld.innerHTML = data1.clouds.all + "%"
    lonCrdImg.setAttribute('src',`http://openweathermap.org/img/w/${data1.weather[0].icon}.png`)

    parTemp.innerHTML = data5.main.temp + "&degC"
    parHum.innerHTML = data5.main.humidity + "%"
    parWnd.innerHTML = data5.wind.speed + " km/h"    
    parCld.innerHTML = data5.clouds.all + "%"
    parCrdImg.setAttribute('src',`http://openweathermap.org/img/w/${data2.weather[0].icon}.png`)    

    banTemp.innerHTML = data3.main.temp + "&degC"
    banHum.innerHTML = data3.main.humidity + "%"
    banWnd.innerHTML = data3.wind.speed + "km/h"
    banCld.innerHTML = data3.clouds.all + "%"
    banCrdImg.setAttribute('src',`http://openweathermap.org/img/w/${data3.weather[0].icon}.png`)

    bangTemp.innerHTML = data4.main.temp + "&degC"
    bangHum.innerHTML = data4.main.humidity + "%"
    bangWnd.innerHTML = data4.wind.speed + "km/h"
    bangCld.innerHTML = data4.clouds.all + "%"
    bangCrdImg.setAttribute('src',`http://openweathermap.org/img/w/${data4.weather[0].icon}.png`)

    mumTemp.innerHTML = data2.main.temp + "&degC"
    mumHum.innerHTML = data2.main.humidity + "%"
    mumWnd.innerHTML = data2.wind.speed + "km/h"
    mumCld.innerHTML = data2.clouds.all + "%"
    mumCrdImg.setAttribute('src',`http://openweathermap.org/img/w/${data5.weather[0].icon}.png`)

}

btn.addEventListener('click',getData)


gsap.from(introHead, {
    opacity:0,
    scale:1.5,
    duration:1,
    delay:0.2
})

gsap.from("#facility", {
    y:-50,
    opacity:0,
    duration:0.7,
    delay:0.5,
    stagger:0.5
})
