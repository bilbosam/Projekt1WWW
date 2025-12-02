document.addEventListener('DOMContentLoaded', () => {

    // === NEWSLETTER (mock) ===
    const subscribeBtn = document.getElementById('subscribe-btn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', () => {
            const email = document.getElementById('newsletter-email')?.value || '';
            if (!email.includes('@')) { alert('Podaj poprawny email.'); return; }
            alert('Dziękujemy! (mock)');
            document.getElementById('newsletter-email').value = '';
        });
    }

    // === DANE DO SZAFY: OPIS + ZDJĘCIE ===
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


    // === OBSŁUGA KLIKANIA W ELEMENTY SZAFY ===
    document.querySelectorAll('.wardrobe-item').forEach(it => {
        it.addEventListener('click', () => {
            const item = it.dataset.item;
            const note = document.getElementById('wardrobe-note');

            if (!note || !wardrobeData[item]) return;

            // generowanie HTML
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
    window.onload = () => {
        const defaultItem = "Beżowy płaszcz";
        const note = document.getElementById("wardrobe-note");

        if (!note) return;

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

    // === FORMULARZ KONTAKTOWY (mock) ===
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const message = document.getElementById('message')?.value.trim();
            const status = document.getElementById('form-status');
            if (!name || !email || !message) { if (status) status.textContent = 'Uzupełnij wszystkie pola.'; return; }
            if (status) status.textContent = 'Wysyłanie...';
            setTimeout(() => { if (status) status.textContent = 'Wiadomość wysłana!'; form.reset(); }, 800);
        });
    }

});