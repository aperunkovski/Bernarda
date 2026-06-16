
const translations = {
    hr: {
        nav_home: "Početna", nav_apartments: "Apartmani", nav_contact: "Kontakt",
        hero_title: "Dobrodošli u Apartmane Bernarda", hero_subtitle: "Vaš savršen odmor na jadranskoj obali", hero_btn: "Pogledajte Apartmane",
        ap_section_title: "Naši Apartmani", capacity: "Kapacitet", persons: "osobe",
        btn_view: "Pregledaj", btn_book: "Rezerviraj odmah", services_label: "Usluge i Sadržaji",
        book_title: "Rezervirajte Vaš Boravak", book_subtitle: "Odaberite način na koji želite stupiti u kontakt s nama:",
        badge_recommended: "Preporučeno"
    },
    en: {
        nav_home: "Home", nav_apartments: "Apartments", nav_contact: "Contact",
        hero_title: "Welcome to Apartmani Bernarda", hero_subtitle: "Your perfect vacation on the Adriatic coast", hero_btn: "View Apartments",
        ap_section_title: "Our Apartments", capacity: "Capacity", persons: "people",
        btn_view: "View Details", btn_book: "Book Now", services_label: "Services & Amenities",
        book_title: "Book Your Stay", book_subtitle: "Choose your preferred way to contact us:",
        badge_recommended: "Recommended"
    },
    it: {
        nav_home: "Home", nav_apartments: "Appartamenti", nav_contact: "Contatto",
        hero_title: "Benvenuti a Apartmani Bernarda", hero_subtitle: "La tua vacanza perfetta sulla costa adriatica", hero_btn: "Vedi Appartamenti",
        ap_section_title: "I Nostri Appartamenti", capacity: "Capacità", persons: "persone",
        btn_view: "Visualizza", btn_book: "Prenota Ora", services_label: "Servizi e Comfort",
        book_title: "Prenota il Tuo Soggiorno", book_subtitle: "Scegli il modo che preferisci per contattarci:",
        badge_recommended: "Consigliato"
    },
    de: {
        nav_home: "Startseite", nav_apartments: "Ferienwohnungen", nav_contact: "Kontakt",
        hero_title: "Willkommen im Apartmani Bernarda", hero_subtitle: "Ihr perfekter Urlaub an der Adriaküste", hero_btn: "Ferienwohnungen Ansehen",
        ap_section_title: "Unsere Ferienwohnungen", capacity: "Kapazität", persons: "Personen",
        btn_view: "Details Ansehen", btn_book: "Jetzt Buchen", services_label: "Ausstattung",
        book_title: "Buchen Sie Ihren Aufenthalt", book_subtitle: "Wählen Sie, wie Sie nos kontaktieren möchten:",
        badge_recommended: "Empfohlen"
    }
};


const apartmentDetails = {
    1: {
        images: [
            "img/apartman1.png",
            "img/apartman2.png",
            "img/apartman3.png",
            "img/apartman4.png"
        ],
        hr: { 
            name: "Apartman Premium", 
            capacity: "4 osobe", 
            services: [
                {text: "Besplatan Wi-Fi", icon: "fa-wifi"}, 
                {text: "Klima uređaj", icon: "fa-snowflake"}, 
                {text: "Terasa", icon: "fa-umbrella-beach"},
                {text: "Parking", icon: "fa-car"}, 
                {text: "Perilica rublja", icon: "fa-soap"},
                {text: "300m od plaže", icon: "fa-water"}
            ] 
        },
        en: { 
            name: "Premium Apartment", 
            capacity: "4 people", 
            services: [
                {text: "Free Wi-Fi", icon: "fa-wifi"}, 
                {text: "Air Conditioning", icon: "fa-snowflake"}, 
                {text: "Terrace", icon: "fa-umbrella-beach"},
                {text: "Parking", icon: "fa-car"}, 
                {text: "Washing machine", icon: "fa-soap"},
                {text: "300m from beach", icon: "fa-water"}
            ] 
        },
        it: { 
            name: "Appartamento Premium", 
            capacity: "4 persone", 
            services: [
                {text: "Wi-Fi gratuito", icon: "fa-wifi"}, 
                {text: "Aria condizionata", icon: "fa-snowflake"}, 
                {text: "Terrazza", icon: "fa-umbrella-beach"},
                {text: "Parcheggio", icon: "fa-car"}, 
                {text: "Lavatrice", icon: "fa-soap"},
                {text: "300m dalla spiaggia", icon: "fa-water"}
            ] 
        },
        de: { 
            name: "Premium Ferienwohnung", 
            capacity: "4 Personen", 
            services: [
                {text: "Kostenloses WLAN", icon: "fa-wifi"}, 
                {text: "Klimaanlage", icon: "fa-snowflake"}, 
                {text: "Terrasse", icon: "fa-umbrella-beach"},
                {text: "Parkplatz", icon: "fa-car"}, 
                {text: "Waschmaschine", icon: "fa-soap"},
                {text: "300m vom Strand", icon: "fa-water"}
            ] 
        }
    },
    2: {
        images: [
            "img/comforthero.png",
            "img/comfort2.png",
            "img/comfort3.png",
            "img/comfort4.png"
        ],
        hr: { 
            name: "Apartman Comfort", 
            capacity: "2 osobe", 
            services: [
                {text: "Besplatan Wi-Fi", icon: "fa-wifi"}, 
                {text: "Klima uređaj", icon: "fa-snowflake"}, 
                {text: "Terasa", icon: "fa-umbrella-beach"},
                {text: "Parking", icon: "fa-car"}, 
                {text: "Perilica rublja", icon: "fa-soap"},
                {text: "300m od plaže", icon: "fa-water"}
            ] 
        },
        en: { 
            name: "Comfort Apartment", 
            capacity: "2 people", 
            services: [
                {text: "Free Wi-Fi", icon: "fa-wifi"}, 
                {text: "Air Conditioning", icon: "fa-snowflake"}, 
                {text: "Terrace", icon: "fa-umbrella-beach"},
                {text: "Parking", icon: "fa-car"}, 
                {text: "Washing machine", icon: "fa-soap"},
                {text: "300m from beach", icon: "fa-water"}
            ] 
        },
        it: { 
            name: "Appartamento Comfort", 
            capacity: "2 persone", 
            services: [
                {text: "Wi-Fi gratuito", icon: "fa-wifi"}, 
                {text: "Aria condizionata", icon: "fa-snowflake"}, 
                {text: "Terrazza", icon: "fa-umbrella-beach"},
                {text: "Parcheggio", icon: "fa-car"}, 
                {text: "Lavatrice", icon: "fa-soap"},
                {text: "300m dalla spiaggia", icon: "fa-water"}
            ] 
        },
        de: { 
            name: "Comfort Ferienwohnung", 
            capacity: "2 Personen", 
            services: [
                {text: "Kostenloses WLAN", icon: "fa-wifi"}, 
                {text: "Klimaanlage", icon: "fa-snowflake"}, 
                {text: "Terrasse", icon: "fa-umbrella-beach"},
                {text: "Parkplatz", icon: "fa-car"}, 
                {text: "Waschmaschine", icon: "fa-soap"},
                {text: "300m vom Strand", icon: "fa-water"}
            ] 
        }
    }
};

let currentLang = 'hr';
let activeApartmentId = null;
let currentImageIndex = 0; 


function changeLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            elem.textContent = translations[lang][key];
        }
    });

    if (activeApartmentId) updateDetailsModalContent(activeApartmentId);
}

function updateDetailsModalContent(id) {
    const apData = apartmentDetails[id];
    const langData = apData[currentLang];
    
    document.getElementById('modalApName').textContent = langData.name;
    document.getElementById('modalApCapacity').textContent = langData.capacity;
    
  
    currentImageIndex = 0; 
    
  
    const mainImg = document.getElementById('modalMainImg');
    mainImg.src = apData.images[0];
    
    const thumbs = document.querySelectorAll('.modal-gallery .thumb');
    thumbs.forEach((thumb, idx) => {
        thumb.src = apData.images[idx];
        if(idx === 0) thumb.classList.add('active');
        else thumb.classList.remove('active');
        
      
        thumb.onclick = function() { changeModalImage(this, idx); };
    });

  
    const servicesGrid = document.getElementById('modalApServices');
    servicesGrid.innerHTML = '';
    langData.services.forEach(srv => {
        const div = document.createElement('div');
        div.className = 'service-item';
        div.innerHTML = `<i class="fa-solid ${srv.icon}"></i> <span>${srv.text}</span>`;
        servicesGrid.appendChild(div);
    });
}


function changeModalImage(element, idx) {
    currentImageIndex = idx; 
    document.querySelectorAll('.modal-gallery .thumb').forEach(t => t.classList.remove('active'));
    element.classList.add('active');
    
    const mainImg = document.getElementById('modalMainImg');
    mainImg.style.opacity = 0;
    setTimeout(() => {
        mainImg.src = element.src;
        mainImg.style.opacity = 1;
    }, 150);
}


const langSelector = document.getElementById('langSelector');
const langDropdown = document.getElementById('langDropdown');
const langCurrent = document.getElementById('langCurrent');

langSelector.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('show');
});

document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', (e) => {
        const lang = option.getAttribute('data-value');
        const flagSrc = option.querySelector('img').src;
        
        langCurrent.querySelector('img').src = flagSrc;
        langCurrent.querySelector('span').textContent = lang.toUpperCase();
        
        changeLanguage(lang);
        langDropdown.classList.remove('show');
    });
});

document.addEventListener('click', () => langDropdown.classList.remove('show'));


const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// --- 4. МОДАЛИ ---
const detailsModal = document.getElementById('detailsModal');
const bookModal = document.getElementById('bookModal');
const goToBookBtn = document.getElementById('goToBookBtn');

document.querySelectorAll('.open-details-btn').forEach((button, idx) => {
    button.addEventListener('click', () => {
        activeApartmentId = idx + 1;
        updateDetailsModalContent(activeApartmentId);
        detailsModal.classList.add('active');
    });
});

goToBookBtn.addEventListener('click', () => {
    detailsModal.classList.remove('active');
    setTimeout(() => { bookModal.classList.add('active'); }, 250);
});

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal') || e.target.classList.contains('close-modal')) {
            modal.classList.remove('active');
            if (modal.id === 'detailsModal') activeApartmentId = null;
        }
    });
});



const lightboxModal = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('lightboxImg');
const modalMainImg = document.getElementById('modalMainImg');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');


modalMainImg.addEventListener('click', () => {
    if (activeApartmentId) {
        const images = apartmentDetails[activeApartmentId].images;
        lightboxImg.src = images[currentImageIndex];
        lightboxModal.classList.add('active');
    }
});


function navigateLightbox(direction) {
    if (!activeApartmentId) return;
    const images = apartmentDetails[activeApartmentId].images;
    
    if (direction === 'next') {
        currentImageIndex = (currentImageIndex + 1) % images.length; 
    } else if (direction === 'prev') {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }
    
    lightboxImg.src = images[currentImageIndex];
    
   
    const thumbs = document.querySelectorAll('.modal-gallery .thumb');
    if(thumbs[currentImageIndex]) {
        changeModalImage(thumbs[currentImageIndex], currentImageIndex);
    }
}


nextArrow.addEventListener('click', (e) => { e.stopPropagation(); navigateLightbox('next'); });
prevArrow.addEventListener('click', (e) => { e.stopPropagation(); navigateLightbox('prev'); });


document.addEventListener('keydown', (e) => {
    if (lightboxModal.classList.contains('active')) {
        if (e.key === 'ArrowRight') navigateLightbox('next');
        if (e.key === 'ArrowLeft') navigateLightbox('prev');
        if (e.key === 'Escape') lightboxModal.classList.remove('active');
    }
});

lightboxModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('lightbox-modal') || e.target.classList.contains('close-lightbox')) {
        lightboxModal.classList.remove('active');
    }
});


changeLanguage('hr');