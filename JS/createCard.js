// function renderListings(filteredListing) {
//     const cardContainer = document.querySelector('.card-container');
//     cardContainer.innerHTML = ''; // Pulisce il contenuto precedente
  
//     filteredListing.forEach(listing => {
//       const card = document.createElement('div');
//       card.classList.add('card');
  
//       const imagesHTML = listing.images.map(image => `
//         <div class="swiper-slide">
//             <img src="${image.replace('../', '')}" alt="${listing.location} image">
//         </div>
//       `).join('');
  
//       card.innerHTML = `
//         <div class="card-image swiper-container">
//             <div class="swiper-wrapper swiper-slide">
//               ${imagesHTML}
//             </div>
//             <div class="swiper-button-next"></div>
//             <div class="swiper-button-prev"></div>
//         </div>
//         <div class="card-content">
//             <h2 class="location">${listing.location}</h2>
//             <p class="host">Host:${listing.host}<br>01-07 lug</p>
//             <div class="rating-price">
//               <span class="rating">${listing.rating}</span>
//               <span class="price">${listing.price}</span>
//             </div>
//         </div>
//       `;
  
//       cardContainer.appendChild(card);
  
//       // Inizializza Swiper per ogni carosello
//       new Swiper(card.querySelector('.swiper-container'), {
//           navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//           },
//       });
//     });
// }

// // Gestione del clic sulle icone per filtrare le strutture
// document.querySelectorAll('.icon').forEach(icon => {
//   icon.addEventListener('click', () => {
//       const category = icon.getAttribute('data-category');
//       const filteredListing = strutture.filter(listing => listing.category === category);
//       renderListings(filteredListing);
//   });
// });

// // Visualizza tutte le strutture all'avvio della pagina
// renderListings(strutture);


async function fetchData() {
  try {
      const response = await fetch('https://raw.githubusercontent.com/mario-sica/API/main/db.json');
      const data = await response.json();
      console.log(data); // Ora i dati sono disponibili nella variabile 'data'
      // Puoi usare 'data' come desideri, ad esempio assegnarlo a un'altra variabile
      let jsonData = data;

      function renderListings(filteredListing, maxCards = filteredListing.length) {
        const cardContainer = document.querySelector('.card-container');
        cardContainer.innerHTML = ''; // Pulisce il contenuto precedente

        const limitedListing = filteredListing.slice(0, maxCards);
      
        limitedListing.forEach(listing => {
          const card = document.createElement('div');
          card.classList.add('card');
      
          const imagesHTML = listing.images.map(image => `
            <div class="swiper-slide">
                <img src="${image.replace('../', '')}" alt="${listing.location} image">
            </div>
          `).join('');
      
          card.innerHTML = `
            <div class="card-image swiper-container">
                <div class="swiper-wrapper swiper-slide">
                  ${imagesHTML}
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
            <div class="card-content">
                <h2 class="location">${listing.location}</h2>
                <p class="host">Host:${listing.host}<br>01-07 lug</p>
                <div class="rating-price">
                  <span class="rating">${listing.rating}</span>
                  <span class="price">${listing.price}</span>
                </div>
            </div>
          `;
      
          cardContainer.appendChild(card);
      
          // Inizializza Swiper per ogni carosello
          new Swiper(card.querySelector('.swiper-container'), {
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
          });
        });
    }
    
    // Gestione del clic sulle icone per filtrare le strutture
    document.querySelectorAll('.icon').forEach(icon => {
      icon.addEventListener('click', () => {
          const category = icon.getAttribute('data-category');
          const filteredListing = strutture.filter(listing => listing.category === category);
          renderListings(filteredListing);
      });
    });
    
    // Visualizza tutte le strutture all'avvio della pagina
    renderListings(jsonData, 10);

  } catch (error) {
      console.error('Errore:', error);
  }
}

fetchData();