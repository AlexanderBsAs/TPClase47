window.onload = () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  // Aqui debemos agregar nuestro fetch
  let storage = localStorage.getItem("favoritos")
  let arrayStorage = JSON.parse(storage)
  fetch("http://localhost:3031/api/movies/")
    .then(response => {
      return response.json()
    })
    .then(data => {

      console.log("typo dato storage " + typeof arrayStorage)
      console.log("el storage : " + arrayStorage)
     if(arrayStorage!=null && arrayStorage.length>0){


       data.data.forEach((movie) => {
        for (pelicula of arrayStorage) {
          if (pelicula.title == movie.title) {
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
          }
        }

      });
     }
     
          if (arrayStorage === null || arrayStorage.length === 0) {
      document.querySelector(".main").innerHTML = "No hay películas favoritas";
    }
    })
    .catch(e => {
      console.log(e)
    })

  /** Codigo que debemos usar para mostrar los datos en el frontend */




};