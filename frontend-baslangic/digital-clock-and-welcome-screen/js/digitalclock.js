let welcometxt = document.querySelector(".welcome-text"); // ekran içinde gösterilecek textin seçilmesi
let username = prompt("Please enter your name"); // açılışta kullanıcıdan isim girilmesi istenmesi
welcometxt.innerHTML += username; // alınan ismin seçilen texte atanması
let CLOCKICON = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
<path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
<path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
</svg>` // svg olarak alarm ikonunun bir değişkende tutulması

// sayfa içinde yer alan textlerin değişkenler tarafından seçilmesi işlemleri
let clockIcon = document.querySelector("#clock-icon");
clockIcon.innerHTML = CLOCKICON;
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
let mon = document.querySelector("#mon");
let tue = document.querySelector("#tue");
let wed = document.querySelector("#wed");
let thu = document.querySelector("#thu");
let fri = document.querySelector("#fri");
let sat = document.querySelector("#sat");
let sun = document.querySelector("#sun");
let day = "";
let pmam = document.querySelector("#pm");
// sayfa içinde yer alan textlerin değişkenler tarafından seçilmesi işlemleri

function formatTime(time) { //0-9 arasında yer alan saniyelerin gösteriminin tek haneli yerine başına 0 eklenerek çift haneli gösterilmesi
    if (time < 10) {
        return '0' + time;
    }
    return time;
}

function getTime() { // saatin alınması ve seçilen textlere atanma fonksiyonu
    const h = new Date();
    day = h.getDay().toString();
    switch (day) { // switch-case yapısı ile bulunulan günün textinin beyaz olarak stillendirilmesi
        case '0':
            sun.style.color = "#fff";
            break;
        case '1':
            mon.style.color = "#fff";
            break;
        case '2':
            tue.style.color = "#fff";
            break;
        case '3':
            wed.style.color = "#fff";
            break;
        case '4':
            thu.style.color = "#fff";
            break;
        case '5':
            fri.style.color = "#fff";
            break;
        case '6':
            sat.style.color = "#fff";
            break;
    }
    (h.getHours() >= 0 && h.getHours() <= 12) ? pmam.innerHTML = "AM" : pmam.innerHTML = "PM";
    hour.innerHTML = formatTime(h.getHours());
    minute.innerHTML = formatTime(h.getMinutes());
    second.innerHTML = formatTime(h.getSeconds());
}

setInterval(getTime, 1000); // her saniye fonksiyonun yeniden çağrılması