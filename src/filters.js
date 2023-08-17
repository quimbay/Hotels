import { consultarHoteles } from "./apiHotels.js";

const hotels = [
    { name: 'Hotel A', price: $, rooms: 2 },
    { name: 'Hotel B', price: $$, rooms: 3 },
    { name: 'Hotel C', price: $$$, rooms: 4 },
    { name: 'Hotel D', price: $$$$, rooms: 5 },
    
]

const filters_price = document.getElementById('filers_price')
const filters_room = document.getElementById('filters_room')
const hotelCards = document.getElementById('hotelCards')
const filters_btn = document.getElementById('filters_btn')

const renderHotels = () => {
  const filterHotels = hotels.filter(hotel =>
      (filters_price.value === "" || hotel.price <= parseInt(filters_price.value)) &&
      (filters_room.value === "" || hotel.rooms >= parseInt(filters_room.value))

  )

  hotelCards.innerHTML = ""
  filterHotels.forEach(hotel => {
      const card = document.createElement('div')
      card.className = "hotel-card"
      card.innerHTML = `
          <h3> ${hotel.name}</h3>
          <p>Precio ${hotel.price}</p>
          <p>Habitaciones:${hotel.rooms}</p>
      `;
      hotelCards.appendChild(card)
  })

 }

renderHotels()
filters_price.addEventListener("change", renderHotels)
filters_room.addEventListener("change", renderHotels)

filters_btn.addEventListener("click", () => {
    filters_price.value = ""
    filters_room.value = ""
    renderHotels()
  })