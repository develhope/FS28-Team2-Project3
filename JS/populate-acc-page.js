document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  const maxGuests = Math.round(Math.random() * 5 + 1);
  const beds = Math.round(Math.random() * 5 + 2);
  const baths = Math.round(Math.random() * 2 + 1);
  const taxes = document.getElementById('airbnb-service-price').innerText.replace('€');

  console.log('ID from URL:', id);


  if (id) {
    try {
      const response = await fetch('https://raw.githubusercontent.com/mario-sica/API/main/db.json');
      const data = await response.json();
      const jsonData = data.map((item, index) => ({ ...item, id: index + 1 }));
      console.log('Data fetched:', jsonData);

      const listing = jsonData.find(item => item.id === parseInt(id));
      console.log('Listing found:', listing);

      const imgContainer1 = document.getElementById('img-container1');      
      const imgContainer2 = document.getElementById('img-container2');      
      const imgContainer3 = document.getElementById('img-container3');
      
      if (imgContainer1 && listing.images[0]) {
        imgContainer1.innerHTML = `<img src="${listing.images[0].replace('../', '')}" alt="Image 1">`;
      }
      if (imgContainer2) {
        imgContainer2.innerHTML = `
          ${listing.images[1] ? `<img src="${listing.images[1].replace('../', '')}" alt="Image 2">` : ''}
          ${listing.images[2] ? `<img src="${listing.images[2].replace('../', '')}" alt="Image 3">` : ''}
        `;
      }
      if (imgContainer3) {
        imgContainer3.innerHTML = `
          ${listing.images[3] ? `<img src="${listing.images[3].replace('../', '')}" alt="Image 4">` : ''}
          ${listing.images[4] ? `<img src="${listing.images[4].replace('../', '')}" alt="Image 5">` : ''}
        `;
      }
      if(listing.loved) {
        document.getElementById('reviews-description').innerHTML = `<p>Uno degli alloggi pi&ugrave; amati dagli ospiti di Airbnb</p>`
      }
      if (listing) {
        document.getElementById('tab-title').innerHTML = `${listing.location}`
        document.getElementById('insertion-title').innerHTML = `Soggiorno nelle ${listing.category}`;
        document.getElementById('place-and-insertion-type').innerHTML = `<h2>${listing.location}. Intero alloggio: ${listing.category}</h2>`;
        document.getElementById('guests-and-rooms').innerHTML = `${maxGuests} ospiti &#183; ${beds} camere da letto &#183; ${beds} letti &#183; ${baths} bagni`;
        document.getElementById('insertion-rating').textContent = `${listing.rating}`;
        document.getElementById('num').innerHTML = Math.round(Math.random() * 75 + 23);
        document.getElementById('name').innerHTML = `${listing.host}`;
        document.getElementById('insertion-infos').innerHTML = `${listing.description}`;
        document.getElementById('host-experience').innerHTML = `Superhost &#183; ${Math.round(Math.random() * 9 + 2)} anni di esperienza come host`;
        document.getElementById('price-check-in').innerHTML = `${listing.price} €`;
        document.getElementById('price').innerHTML = `${listing.price} €`;
        document.getElementById('price-book').innerHTML = `${listing.price} € x 5 notti`;
        document.getElementById('total-price').innerHTML = `${listing.price * 5} €`;
        document.getElementById('total-price-tax').innerHTML = `${listing.price * 5 + parseInt(taxes, 10)} €`;
      } else {
        document.body.innerHTML = '<p>Listing not found</p>';
      }
    } catch (error) {
      console.error('Errore:', error);
      document.body.innerHTML = '<p>Failed to load listing details</p>';
    }
  } else {
    document.body.innerHTML = '<p>Invalid listing ID</p>';
  }
});