import { consultarHoteles } from "./apiHotels.js";




const cardContainer = document.getElementById("filters_btn");
const main = document.querySelector("Main");

// cardContainer.addEventListener("click", async () => {
  async function cargarHotel() { 
  const respuesta = await consultarHoteles();
  const data = await respuesta.json();
  // console.log(data);
  

  data.forEach((hotel) => {
    const cardHotel = document.createElement("div");
    cardHotel.className = "card"
    main.appendChild(cardHotel)
  
    const imagenHotel = document.createElement("img");
    imagenHotel.setAttribute("src", hotel.photo);
    imagenHotel.setAttribute("alt", hotel.name);
    cardHotel.appendChild(imagenHotel);
  
    const nombreHotel = document.createElement("h1");
    nombreHotel.className = "hotel-name";
    nombreHotel.textContent = hotel.name; // Agrega el nombre del hotel
    cardHotel.appendChild(nombreHotel);
  
    const paisHotel = document.createElement("p");
    paisHotel.className = "hotel-country";
    paisHotel.textContent  = hotel.country;
    cardHotel.appendChild(paisHotel);


    const descripcionHotel = document.createElement("p");
    descripcionHotel.className = "hotel-description";
    descripcionHotel.textContent = hotel.description; // Agrega la descripción del hotel
    cardHotel.appendChild(descripcionHotel);

    


    const precioHotel = document.createElement("p");
    precioHotel.className = "hotel-price";
    precioHotel.textContent = `precio: ${hotel.price} ${hotel.currency}`; // Agrega el precio y la moneda del hotel
    cardHotel.appendChild(precioHotel);

   

    // nombreHotel.className = "hotel-name";
    // cardHotel.appendChild(nombreHotel);
  });


  


}
cargarHotel();
