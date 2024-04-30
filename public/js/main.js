const lista= "http://localhost:3031/api/movies/" 


window.onload = () => {


  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  // Aqui debemos agregar nuestro fetch



fetch(lista)
.then(response=>{
  if(!response){
    console.log("error")
  }
 return response.json()
})
.then(peliculas=>{
  console.log(peliculas)
  let data = peliculas.data;

    data.forEach((movie) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      const p = document.createElement("p");
      p.textContent = `Rating: ${movie.rating}`;

      const duracion = document.createElement("p");
      duracion.textContent = `Duración: ${movie.length}`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      if (movie.genre !== null) {
        const genero = document.createElement("p");
        genero.textContent = `Genero: ${movie.genre.name}`;
        card.appendChild(genero);
      }
      card.appendChild(duracion);




      //////////////////////////////////tuve que ponerle una estrellita hecha por chatGPT, porque no habia NINGUNA ESTRELLITA///////////




      // Crear el elemento para la estrella de favoritos
const favorito = document.createElement("span");
favorito.innerHTML = "&#9733;"; // Código HTML de una estrella sólida
favorito.classList.add("favorito"); // Agregar una clase para darle estilo con CSS

// Agregar la estrella de favoritos a la tarjeta de película
card.appendChild(favorito);



favorito.addEventListener("click", (e) => {
  favorito.style.color = "red";
  

  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];


  let movieJSON = JSON.stringify(movie);
  

  favoritos.push(movie);


  console.log("Movie:", movie);
 

  localStorage.setItem("favoritos", JSON.stringify(favoritos));


 /*  console.log("Favoritos en localStorage:", localStorage.getItem("favoritos")); */
});

    })
    console.log(localStorage.getItem("favoritos"));
})
  /** Codigo que debemos usar para mostrar los datos en el frontend */
  
};
