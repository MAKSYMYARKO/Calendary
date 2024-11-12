const apiKey = "ce5f8c50f73c3ad5f141de506a888a92";
const city = "Cracow";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=cracow&lang=pl`;


async function getWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    const data = await response.json();

    const sunriseUTC = data.sys.sunrise * 1000;
    const sunsetUTC = data.sys.sunset * 1000;

    const localSunrise = new Date(sunriseUTC).toLocaleTimeString("pl-PL", { timeZone: "Europe/Warsaw" });
    const localSunset = new Date(sunsetUTC).toLocaleTimeString("pl-PL", { timeZone: "Europe/Warsaw" });

    console.log("Wschód słońca:", localSunrise);
    console.log("Zachód słońca:", localSunset);


    const isDay = isDaytime(sunriseUTC, sunsetUTC);
    changeBackground(isDay);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    const weatherCondition = data.weather[0].main;
    const description = data.weather[0].description;
    document.querySelector(".weather-condition").innerHTML = `Pogoda:  ${description}`;
    changeWeatherImage(weatherCondition);
}


function isDaytime(sunrise, sunset) {
    const now = new Date().getTime();
    console.log("Sunrise:", sunrise, "Sunset:", sunset, "Now:", now);
    return now >= sunrise && now <= sunset;
}


function changeBackground(isDay) {
    const boxElement = document.querySelector('.box');
    if(!boxElement){
        console.error("box nie znaleziony");
        return;
    }
    console.log("Is it day?", isDay); 

    if (isDay) {
        boxElement.style.background = "linear-gradient(135deg, #87CEEB, #ffffff) !important";
    } else {
        boxElement.style.background = "linear-gradient(135deg, #2C3E50, #1a1a1a) !important";
    }
}
function changeWeatherImage(weatherCondition) {
    const weatherIcon = document.querySelector(".weather-icon");
    if (weatherCondition === "Clear") {
        weatherIcon.src = "https://github.com/MAKSYMYARKO/Calendary/raw/main/assets/img/clear.webp"; 
    } else if (weatherCondition === "Clouds") {
        weatherIcon.src = "https://github.com/MAKSYMYARKO/Calendary/raw/main/assets/img/clouds.webp"; 
    } else if (weatherCondition === "Rain") {
        weatherIcon.src = "https://github.com/MAKSYMYARKO/Calendary/raw/main/assets/img/rain.webp";  
    } else {
        console.error("Nieznany warunek pogodowy");
    }
}




//  FUNKCJA DO WYPISYWANIA DNIA I SWIETA

function displayCurrentDateAndHolidays() {
    const today = new Date();

    const day = today.getDate();
    const month = today.toLocaleString('pl-Pl', { month: 'long' });
    const year = today.getFullYear();

    const fullDate = `${day} ${month} ${year}`;

    const holidays = {
        '8-01': ['Dzień Sprzątania Biurka'],
        '12-01': ['Urodziny Kochanej Twórcy tej strony'],
        '18-01': ['Dzień Bałwana'],
        '20-01': ['Dzień Pingwinów'],
        '21-01': ['Dzień Babci i Dzień Dziadka', 'Dzień doceniania wiewiórek'],
        '23-01': ['Dzień Bez Opakowań Foliowych'],
        '27-01': ['Dzień Pamięci o Ofiarach Holocaustu'],
        '31-01': ['Dzień Zebry'],
        '1-02': ['Dzień bez oleju palmowego'],
        '2-02': ['Dzień Mokradeł'],
        '6-02': ['Międzynarodowy Dzień Zerowej Tolerancji dla Okaleczania Żeńskich Narządów Płciowych'],
        '11-02': ['Dzień Kobiet i Dziewcząt w Nauce', 'Dzień Dokarmiania Zwierzyny Leśnej'],
        '12-02': ['Dzień Darwina', 'Dzień Dzieci-Żołnierzy'],
        '14-02': ['Dzień Uzdrawiania Dźwiękiem', 'Walentynki'],
        '15-02': ['Dzień Wielorybów'],
        '16-02': ['Tłusty czwartek', 'Dzień Listonoszy i Doręczycieli Przesyłek Pocztowych'],
        '17-02': ['Dzień Kota'],
        '18-02': ['Dzień Baterii'],
        '20-02': ['Światowy Dzień Sprawiedliwości Społecznej'],
        '21-02': ['Dzień Języka Ojczystego', 'Dzień Sprzeciwu Wobec Reżimu Kolonialnego'],
        '27-02': ['Dzień Organizacji Społecznych', 'Dzień Niedźwiedzia Polarnego'],
        '1-03': ['Dzień Walki Przeciw Zbrojeniom Atomowym', 'Dzień Obrony Cywilnej'],
        '3-03': ['Dzień Wangari Maathai', 'Dzień Środowiska Afrykańskiego', 'Europejski Dzień Równych Płac', 'Dzień Dzikiej Przyrody'],
        '8-03': ['Dzień Kobiet'],
        '14-03': ['Dzień liczby Pi'],
        '15-03': ['Światowy Dzień Praw Konsumenta'],
        '20-03': ['Międzynarodowy Dzień Nowruz', 'Dzień bez Mięsa', 'Dzień Wróbla', 'Dzień Szczęścia', 'Światowy Dzień Inwalidów i Osób z Niepełnosprawnościami'],
        '21-03': ['Dzień Kolorowej Skarpetki', 'Dzień Wierzby', 'Światowy Dzień Poezji', 'Dzień Walki z Rasizmem', 'Pierwszy Dzień Wiosny', 'Dzień Lasów'],
        '22-03': ['Światowy Dzień Wody'],
        '23-03': ['Dzień Meteorologii'],
        '24-03': ['Dzień Prawa do Prawdy dotyczącej Poważnych Naruszeń Praw Człowieka i Godności Ofiar'],
        '25-03': ['Dzień Pamięci Ofiar Niewolnictwa i Transatlantyckiego Handlu Niewolnikami'],
        '27-03': ['Międzynarodowy Dzień Teatru'],
        '28-03': ['Dzień Chwastów'],
        '29-03': ['Dzień Uznania dla Manatów'],
        '30-03': ['Dzień Świadomości o Kleszczowym Zapaleniu Mózgu'],
        '1-04': ['Dzień Ptaków'],
        '2-04': ['Dzień Książki dla Dzieci'],
        '4-04': ['Dzień Zwierząt Bezdomnych'],
        '5-04': ['Dzień Leśnika i Drzewiarza'],
        '7-04': ['Światowy Dzień Zdrowia', 'Dzień Bobrów'],
        '9-04': ['Wielkanoc'],
        '12-04': ['Światowy Dzień Czekolady', 'Międzynarodowy Dzień Dzieci Ulicy'],
        '14-04': ['Dzień Gapienia się w Niebo'],
        '16-04': ['Dzień Ochrony Słoni'],
        '18-04': ['Międzynarodowy Dzień Ochrony Zabytków'],
        '20-04': ['Międzynarodowy Dzień Wolnej Prasy'],
        '21-04': ['Eid al-Fitr'],
        '22-04': ['Dzień Ziemi'],
        '23-04': ['Światowy Dzień Książki'],
        '24-04': ['Dzień Zwierząt Laboratoryjnych'],
        '25-04': ['Dzień Walki z Malarią', 'Dzień Świadomości Zagrożenia Hałasem'],
        '27-04': ['Dzień Lekarzy Weterynarii'],
        '28-04': ['Dzień Bezpieczeństwa i Ochrony Zdrowia w Pracy'],
        '30-04': ['Dzień Sprzeciwu wobec Bicia Dzieci'],
        '1-05': ['Święto Pracy'],
        '2-05': ['Dzień Tuńczyka'],
        '3-05': ['Dzień Bez Komputera'],
        '4-05': ['Międzynarodowy Dzień Strażaka'],
        '5-05': ['Dzień Walki z Dyskryminacją Osób Niepełnosprawnych'],
        '8-05': ['Dzień Bibliotek', 'Dzień Czerwonego Krzyża'],
        '9-05': ['Dzień Sprawiedliwego Handlu'],
        '10-05': ['Dzień Drzewa Arganowego'],
        '11-05': ['Dzień bez śmiecenia'],
        '12-05': ['Dzień Ptaków Wędrownych'],
        '15-05': ['Międzynarodowy Dzień Rodzin', 'Dzień Polskiej Niezapominajki'],
        '16-05': ['Dzień siania dyni w miejscach publicznych'],
        '17-05': ['Dzień Walki z Homofobią'],
        '19-05': ['Dzień Dobrych Uczynków'],
        '20-05': ['Światowy Dzień Pszczół'],
        '21-05': ['Światowy Dzień Kosmosu', 'Dzień Różnorodności Kulturowej na rzecz Dialogu i Rozwoju'],
        '22-05': ['Dzień Różnorodności Biologicznej'],
        '23-05': ['Dzień Żółwia'],
        '24-05': ['Dzień Parków Narodowych'],
        '25-05': ['Dzień Afryki'],
        '26-05': ['Dzień Matki'],
        '27-05': ['Dzień Sąsiada'],
        '29-05': ['Dzień Świadomości Wydry'],
        '31-05': ['Dzień Bociana Białego'],
        '1-06': ['Dzień Dziecka'],
        '3-06': ['Dzień Roweru'],
        '4-06': ['Dzień Dzieci Będących Ofiarami Agresji'],
        '5-06': ['Dzień Ochrony Środowiska'],
        '8-06': ['Dzień Cyrku bez Zwierząt', 'Dzień Oceanów', 'Dzień Lalki'],
        '12-06': ['Dzień Sprzeciwu Wobec Pracy Dzieci'],
        '14-06': ['Dzień Pustej Klasy'],
        '15-06': ['Dzień Wiatru'],
        '16-06': ['Dzień Dziecka Afrykańskiego'],
        '17-06': ['Dzień Przeciwdziałania Pustynnieniu i Suszy'],
        '18-06': ['Dzień Protestu Przeciwko GMO'],
        '19-06': ['Dzień Taty'],
        '21-06': ['Dzień Radości', 'Pierwszy Dzień Lata'],
        '24-06': ['Dzień Przytulania'],
        '25-06': ['Dzień Smerfa'],
        '26-06': ['Dzień Pomocy Ofiarom Tortur', 'Dzień Zapobiegania Narkomanii'],
        '1-07': ['Dzień Psa'],
        '2-07': ['Dzień Dziennikarza Sportowego'],
        '11-07': ['Dzień Ludności', 'Dzień Mleka Czekoladowego'],
        '14-07': ['Dzień Rekina'],
        '15-07': ['Dzień bez Telefonu Komórkowego'],
        '18-07': ['Dzień Nelsona Mandeli'],
        '20-07': ['Dzień Księżyca'],
        '26-07': ['Dzień Babi Letni'],
        '1-08': ['Dzień Pamięci o Powstaniu Warszawskim'],
        '8-08': ['Dzień Kota'],
        '12-08': ['Dzień Młodzieży'],
        '19-08': ['Dzień Fotografii'],
        '23-08': ['Dzień Pamięci Ofiar Handlu Ludźmi'],
        '1-09': ['Rozpoczęcie Roku Szkolnego'],
        '21-09': ['Dzień Pokoju'],
        '23-09': ['Dzień Święta Dyni'],
        '1-10': ['Dzień Seniora'],
        '4-10': ['Dzień Zwierząt'],
        '5-10': ['Dzień Nauczyciela'],
        '10-10': ['Dzień Zdrowia Psychicznego'],
        '15-10': ['Dzień Ręcznika'],
        '16-10': ['Dzień Żywności'],
        '24-10': ['Dzień Kundelka'],
        '28-10': ['Dzień Odpoczynku dla Zszarganych Nerwów'],
        '31-10': ['Halloween', 'Dzień Miast'],
        '1-11': ['Wszystkich Świętych'],
        '11-11': ['Dzień Niepodległości'],
        '21-11': ['Dzień Życzliwości'],
        '25-12': ['Boże Narodzenie'],
        '26-12': ['Dzień Świętego Szczepana'],
    };

    const todayStr = `${day}-${today.getMonth() + 1}`;

    const holidayMessages = holidays[todayStr];
    const holidayMessage = holidayMessages ? `Dzisiaj: ${holidayMessages.join(', ')}` : 'Dzisiaj nie ma świąt';

    document.getElementById('current-date').innerText = fullDate;
    document.getElementById('holiday-message').innerText = holidayMessage;
}

displayCurrentDateAndHolidays();
getWeather();

