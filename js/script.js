document.addEventListener('DOMContentLoaded', () => {

    // === DANE DO SZAFY: OPIS + ZDJĘCIE ===
    // Obiekt przechowujący informacje o każdym elemencie szafy:
    // - text: opis elementu
    // - img: ścieżka do zdjęcia elementu
    const wardrobeData = {
        "Beżowy płaszcz": {
            text: "Klasyczny beżowy płaszcz pasuje do każdej stylizacji — idealny do jeansów i eleganckich zestawów.",
            img: "img/zdj1.jpg"
        },
        "Biała koszula": {
            text: "Ponadczasowa i elegancka. Pasuje do garnituru, jeansów i spódnicy.",
            img: "img/zdj2.jpg"
        },
        "Skórzana torebka": {
            text: "Elegancka torebka z naturalnej skóry — idealna na codzień i specjalne okazje.",
            img: "img/zdj3.jpg"
        },
        "Dżinsy straight": {
            text: "Najbardziej uniwersalny krój — nie wychodzi z mody.",
            img: "img/zdj4.jpg"
        },
        "Sweter oversize": {
            text: "Ciepły i wygodny. Idealny na jesień i zimę.",
            img: "img/zdj5.jpg"
        },
        "Botki skórzane": {
            text: "Botki dodają elegancji — pasują do płaszcza, sukienki i jeansów.",
            img: "img/zdj6.jpg"
        }
    };

    // === DANE DO SZAFY: OPIS + ZDJĘCIE ===
    // Obiekt przechowujący informacje o każdym elemencie szafy:
    // - text: opis elementu
    // - img: ścieżka do zdjęcia elementu
    document.querySelectorAll('.wardrobe-item').forEach(it => {
        it.addEventListener('click', () => {
            const item = it.dataset.item;
            const note = document.getElementById('wardrobe-note');

            if (!note || !wardrobeData[item]) return;

            note.innerHTML = `
                <h3>${item}</h3>
                <p>${wardrobeData[item].text}</p>
                <img src="${wardrobeData[item].img}" alt="${item}" style="
                    width: 240px;
                    margin-top: 12px;
                    border-radius: 12px;
                    box-shadow: 0 6px 14px rgba(0,0,0,0.1);
                ">
            `;
        });
    });

    // === USTAWIENIE DOMYŚLNEGO ELEMENTU PO ZAŁADOWANIU STRONY ===
    // Funkcja wywoływana po pełnym załadowaniu okna
    window.onload = () => {

        // Nazwa elementu, który ma być wyświetlony domyślnie
        const defaultItem = "Beżowy płaszcz";

        // Pobiera element do wyświetlania szczegółów
        const note = document.getElementById("wardrobe-note");

        // Jeśli element nie istnieje, zakończ funkcję
        if (!note) return;

        // Wstawia HTML dla domyślnego elementu
        note.innerHTML = `
            <h3>${defaultItem}</h3>
            <p>${wardrobeData[defaultItem].text}</p>
            <img src="${wardrobeData[defaultItem].img}" alt="${defaultItem}" style="
                width: 240px;
                margin-top: 12px;
                border-radius: 12px;
                box-shadow: 0 6px 14px rgba(0,0,0,0.1);
            ">
        `;
    };

    // === RESPONSYWNE MENU HAMBURGER ===
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active'); // pokaz/ukryj menu
            hamburger.classList.toggle('active'); // animacja hamburgera
        });
    }

});