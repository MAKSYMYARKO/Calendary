function displayCurrentDateAndHolidays() {
    const today = new Date();

    const day = today.getDate();
    const month = today.toLocaleString('pl-Pl', { month: 'long' });
    const year = today.getFullYear();

    const fullDate = `${day} ${month} ${year}`;

    const holidays = {
        '8 stycznia': ['Dzień Sprzątania Biurka'],
        '18 stycznia': ['Dzień Bałwana'],
        '20 stycznia': ['Dzień Pingwinów'],
        '21 stycznia': ['Dzień Babci i Dzień Dziadka', 'Dzień doceniania wiewiórek'],
        '23 stycznia': ['Dzień Bez Opakowań Foliowych'],
        '27 stycznia': ['Dzień Pamięci o Ofiarach Holocaustu'],
        '31 stycznia': ['Dzien Zebry'],
        '1 lutego': ['Dzień bez oleju palmowego'],
        '2 lutego': ['Dzień Mokradeł'],
        '6 lutego': ['Międzynarodowy Dzień Zerowej Tolerancji dla Okaleczania Żeńskich Narządów Płciowych'],
        '11 lutego': ['Dzień Kobiet i Dziewcząt w Nauce', 'Dzień Dokarmiania Zwierzyny Leśnej'],
        '12 lutego': ['Dzień Darwina', 'Dzień Dzieci-Żołnierzy'],
        '14 lutego': ['Dzień Uzdrawiania Dźwiękiem', 'Walentynki'],
        '15 lutego': ['Dzień Wielorybów'],
        '16 lutego': ['Tłusty czwartek', 'Dzień Listonoszy i Doręczycieli Przesyłek Pocztowych'],
        '17 lutego': ['Dzień Kota'],
        '18 lutego': ['Dzień Baterii'],
        '20 lutego': ['Światowy Dzień Sprawiedliwości Społecznej'],
        '21 lutego': ['Dzień Języka Ojczystego', 'Dzień Sprzeciwu Wobec Reżimu Kolonialnego'],
        '27 lutego': ['Dzień Organizacji Społecznych', 'Dzień Niedźwiedzia Polarnego'],
        '1 marca': ['Dzień Walki Przeciw Zbrojeniom Atomowym', 'Dzień Obrony Cywilnej'],
        '3 marca': ['Dzień Wangari Maathai', 'Dzień Środowiska Afrykańskiego', 'Europejski Dzień Równych Płac', 'Dzień Dzikiej Przyrody'],
        '8 marca': ['Dzień Kobiet'],
        '14 marca': ['Dzień liczby Pi'],
        '15 marca': ['Światowy Dzień Praw Konsumenta'],
        '20 marca': ['Międzynarodowy Dzień Nowruz', 'Dzień bez Mięsa', 'Dzień Wróbla', 'Dzień Szczęścia', 'Światowy Dnia Inwalidów i Osób z Niepełnosprawnościami'],
        '21 marca': ['Dzień Kolorowej Skarpetki', 'Dzień Wierzby', 'Światowy Dzień Poezji', 'Dzień Walki z Rasizmem', 'Pierwszy Dzień Wiosny', 'Dzień Lasów'],
        '22 marca': ['Światowy Dzień Wody'],
        '23 marca': ['Dzień Meteorologii'],
        '24 marca': ['Dzień Prawa do Prawdy dotyczącej Poważnych Naruszeń Praw Człowieka i Godności Ofiar'],
        '25 marca': ['Dzień Pamięci Ofiar Niewolnictwa i Transatlantyckiego Handlu Niewolnikami'],
        '27 marca': ['Międzynarodowy Dzień Teatru'],
        '28 marca': ['Dzień Chwastów'],
        '29 marca': ['Dzień Uznania dla Manatów'],
        '30 marca': ['Dzień Świadomości o Kleszczowym Zapaleniu Mózgu'],
        '1 kwietnia': ['Dzień Ptaków'],
        '2 kwietnia': ['Dzień Książki dla Dzieci'],
        '4 kwietnia': ['Dzień Zwierząt Bezdomnych'],
        '5 kwietnia': ['Dzień Leśnika i Drzewiarza'],
        '7 kwietnia': ['Światowy Dzień Zdrowia', 'Dzień Bobrów'],
        '9 kwietnia': ['Wielkanoc'],
        '12 kwietnia': ['Światowy Dzień Czekolady', 'Międzynarodowy Dzień Dzieci Ulicy'],
        '14 kwietnia': ['Dzień Gapienia się w Niebo'],
        '16 kwietnia': ['Dzień Ochrony Słoni'],
        '18 kwietnia': ['Międzynarodowy Dzień Ochrony Zabytków'],
        '20 kwietnia': ['Międzynarodowy Dzień Wolnej Prasy'],
        '21 kwietnia': ['Eid al-Fitr'],
        '22 kwietnia': ['Dzień Ziemi'],
        '23 kwietnia': ['Światowy Dzień Książki'],
        '24 kwietnia': ['Dzień Zwierząt Laboratoryjnych'],
        '25 kwietnia': ['Dzień Walki z Malarią', 'Dzień Świadomości Zagrożenia Hałasem'],
        '27 kwietnia': ['Dzień Lekarzy Weterynarii'],
        '28 kwietnia': ['Dzień Bezpieczeństwa i Ochrony Zdrowia w Pracy'],
        '30 kwietnia': ['Dzień Sprzeciwu wobec Bicia Dzieci'],
        '1 maja': ['Święto Pracy'],
        '2 maja': ['Dzień Tuńczyka'],
        '3 maja': ['Dzień Bez Komputera'],
        '4 maja': ['Międzynarodowy Dzień Strażaka'],
        '5 maja': ['Dzień Walki z Dyskryminacją Osób Niepełnosprawnych'],
        '8 maja': ['Dzień Bibliotek', 'Dzień Czerwonego Krzyża'],
        '9 maja': ['Dzień Sprawiedliwego Handlu'],
        '10 maja': ['Dzień Drzewa Arganowego'],
        '11 maja': ['Dzień bez śmiecenia'],
        '12 maja': ['Dzień Ptaków Wędrownych'],
        '15 maja': ['Międzynarodowy Dzień Rodzin', 'Dzień Polskiej Niezapominajki'],
        '16 maja': ['Dzień siania dyni w miejscach publicznych'],
        '17 maja': ['Dzień Walki z Homofobią'],
        '19 maja': ['Dzień Dobrych Uczynków'],
        '20 maja': ['Światowy Dzień Pszczół'],
        '21 maja': ['Światowy Dzień Kosmosu', 'Dzień Różnorodności Kulturowej na rzecz Dialogu i Rozwoju'],
        '22 maja': ['Dzień Różnorodności Biologicznej'],
        '23 maja': ['Dzień Żółwia'],
        '24 maja': ['Dzień Parków Narodowych'],
        '25 maja': ['Dzień Afryki'],
        '26 maja': ['Dzień Matki'],
        '27 maja': ['Dzień Sąsiada'],
        '29 maja': ['Dzień Świadomości Wydry'],
        '31 maja': ['Dzień Bociana Białego'],
        '1 czerwca': ['Dzień Dziecka'],
        '3 czerwca': ['Dzień Roweru'],
        '4 czerwca': ['Dzień Dzieci Będących Ofiarami Agresji'],
        '5 czerwca': ['Dzień Ochrony Środowiska'],
        '8 czerwca': ['Dzień Cyrku bez Zwierząt', 'Dzień Oceanów', 'Dzień Lalki'],
        '12 czerwca': ['Dzień Sprzeciwu Wobec Pracy Dzieci'],
        '14 czerwca': ['Dzień Pustej Klasy'],
        '15 czerwca': ['Dzień Wiatru'],
        '16 czerwca': ['Dzień Dziecka Afrykańskiego'],
        '17 czerwca': ['Dzień Przeciwdziałania Pustynnieniu i Suszy'],
        '18 czerwca': ['Dzień Protestu Przeciwko GMO'],
        '19 czerwca': ['Dzień Taty'],
        '21 czerwca': ['Dzień Radości', 'Pierwszy Dzień Lata'],
        '24 czerwca': ['Dzień Księżyca'],
        '27 czerwca': ['Dzień Wody', 'Dzień Architekta'],
        '1 lipca': ['Dzień Niezapominajki'],
        '2 lipca': ['Dzień Ochrony Słoni'],
        '4 lipca': ['Dzień Niezależności Stanów Zjednoczonych'],
        '5 lipca': ['Dzień z Kosmosu'],
        '6 lipca': ['Dzień Przyjaciela'],
        '11 lipca': ['Dzień Papryki'],
        '12 lipca': ['Dzień Na Rzecz Rozwoju Zrównoważonego'],
        '14 lipca': ['Dzień Bastylia'],
        '15 lipca': ['Dzień Piżamy'],
        '16 lipca': ['Dzień Świadomości o Uszkodzeniach Mózgu'],
        '17 lipca': ['Dzień Wędkarzy'],
        '20 lipca': ['Dzień Mieszkańców Dżungli'],
        '22 lipca': ['Dzień Książki', 'Dzień Rodziny'],
        '24 lipca': ['Dzień Ogrodnika'],
        '25 lipca': ['Dzień Teściowej'],
        '26 lipca': ['Dzień Górnika'],
        '30 lipca': ['Dzień Przyjaźni'],
        '1 sierpnia': ['Dzień Pamięci o Powstaniu Warszawskim'],
        '5 sierpnia': ['Dzień Wodza'],
        '7 sierpnia': ['Dzień Niezapominajki'],
        '9 sierpnia': ['Międzynarodowy Dzień Dzieci z Raka'],
        '12 sierpnia': ['Międzynarodowy Dzień Młodzieży'],
        '15 sierpnia': ['Święto Wojska Polskiego'],
        '17 sierpnia': ['Dzień Miasta'],
        '19 sierpnia': ['Dzień Mózgu'],
        '20 sierpnia': ['Dzień Ziemi'],
        '21 sierpnia': ['Dzień Słońca'],
        '23 sierpnia': ['Dzień Praw Człowieka'],
        '24 sierpnia': ['Dzień Języka Ukraińskiego'],
        '25 sierpnia': ['Dzień Psa'],
        '26 sierpnia': ['Dzień Wniebowzięcia'],
        '28 sierpnia': ['Dzień Weteranów'],
        '30 sierpnia': ['Dzień Historii'],
        '1 września': ['Dzień Wiedzy', 'Dzień Młodzieży'],
        '3 września': ['Dzień Dziecka w Szwecji'],
        '8 września': ['Międzynarodowy Dzień Alfabetu Braille’a'],
        '10 września': ['Dzień Dobrego Humor'],
        '11 września': ['Dzień Ziemi'],
        '15 września': ['Międzynarodowy Dzień Którego'],
        '21 września': ['Dzień Pokoju'],
        '23 września': ['Dzień Bez Samochodu'],
        '24 września': ['Dzień Czerwonego Krzyża'],
        '25 września': ['Dzień Dziecka'],
        '27 września': ['Dzień Turystyki'],
        '30 września': ['Dzień Chłopaka'],
        '1 października': ['Dzień Seniora'],
        '4 października': ['Dzień Zwierząt'],
        '5 października': ['Dzień Nauczyciela'],
        '10 października': ['Dzień Zdrowia Psychicznego'],
        '15 października': ['Dzień Ręcznika'],
        '16 października': ['Dzień Żywności'],
        '24 października': ['Dzień Kundelka'],
        '31 października': ['Dzień Miast'],
    };

    const todayStr = `${day} ${month}`;
    const holidayMessages = holidays[todayStr];
    const holidayMessage = holidayMessages ? `Dzisiaj: ${holidayMessages.join(', ')}` : 'Dzisiaj nie ma świąt';

    document.getElementById('current-date').innerText = fullDate;
    document.getElementById('holiday-message').innerText = holidayMessage;
}

displayCurrentDateAndHolidays();
