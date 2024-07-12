async function fetchData() {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/mario-sica/API/main/db.json'
    );
    const data = await response.json();
    let jsonData = data;

    // Funzione per aggiungere l'ID a ciascun oggetto nell'array
    function listingWithId(structures) {
      return structures.map((structure, index) => ({
        ...structure,
        id: index + 1
      }));
    }

    // Aggiungi l'ID a tutte le strutture nel JSON caricato
    jsonData = listingWithId(jsonData);

    function renderListings(
      filteredListing,
      maxCards = filteredListing.length
    ) {
      const cardContainer = document.querySelector('.card-container');
      cardContainer.innerHTML = ''; // Pulisce il contenuto precedente

      const limitedListing = filteredListing.slice(0, maxCards);

      limitedListing.forEach((listing) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-id', listing.id); // Aggiunge l'attributo data-id

        const imagesHTML = listing.images
          .map(
            (image) => `
            <div class="swiper-slide">
                <img src="${image.replace('../', '')}" alt="${
              listing.location
            } image">
            </div>
          `
          )
          .join('');

        card.innerHTML = `
            <div class="card-image swiper-container">
                <div class="swiper-wrapper swiper-slide">
                  ${imagesHTML}
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
            <div class="card-content">
                <div class="location fs-15">${listing.location}</div>
                <div class="host fs-15">Host: ${listing.host}</div>
                <div class="available fs-15">18-28 set</div>
                <div class="price fs-15">${listing.price} €<span> notte</span></div>
                <div class="rating fs-15"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 12px; width: 12px; fill: currentcolor;"><path fill-rule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path></svg>${listing.rating}</div>
            </div>
          `;

        cardContainer.appendChild(card);

        card.addEventListener('click', (event) => {
          const clickedElement = event.target;

          // Verifica se l'elemento cliccato è un bottone di Swiper
          if (
            clickedElement.classList.contains('swiper-button-next') ||
            clickedElement.classList.contains('swiper-button-prev')
          ) {
            return; // Interrompi l'azione se è un bottone di Swiper
          }

          // Quando la card viene cliccata, apri la pagina di destinazione e passa l'id della card
          window.location.href = `accomodation-page.html?id=${listing.id}`;
        });

        // Inizializzazione Swiper per ogni carosello
        const swiper = new Swiper(card.querySelector('.swiper-container'), {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        });

        // Blocca la propagazione dell'evento click sui bottoni di Swiper
        card.querySelector('.swiper-button-next').addEventListener('click', (event) => {
          event.stopPropagation();
        });

        card.querySelector('.swiper-button-prev').addEventListener('click', (event) => {
          event.stopPropagation();
        });
      });
    }

    // Gestione del clic sulle icone per filtrare le strutture
    document.querySelectorAll('.place-choice').forEach((place) => {
      place.addEventListener('click', () => {
        const category = place.id;
        const word = category.split(' ');
        const filteredListing = jsonData.filter((el) =>
          el.category.includes(word)
        );

        renderListings(filteredListing, 24);
      });
    });

    // Visualizza tutte le strutture all'avvio della pagina
    renderListings(jsonData, 24);
  } catch (error) {
    console.error('Errore:', error);
  }
}

fetchData();
