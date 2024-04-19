
window.onload = () => {

   /*  for (let i=0;i<100;i++){ */
    // Obtener la parte de la ruta de la URL
const path = window.location.pathname;

// Remover "/detail/" de la ruta y obtener el ID de la película
const id = path.replace('/detail/', '');

console.log(id); // Imprimirá "2"
console.log(path)
    
    const lista= "http://localhost:3031/api/movies/"+id
  /*   if(i==id){ */
    fetch(lista)
.then(response=>{
 return response.json()
})
.then(pelicula=>{
    console.log(pelicula)
  let title=document.querySelector("#title")
  let rating=document.querySelector("#rating")
  let awards=document.querySelector("#awards")
  let releaseDate=document.querySelector("#release_date")
  let duracion=document.querySelector("#length")
  let data=pelicula.data
    title.value = data.title
    rating.value=data.rating
    awards.value=data.awards
    releaseDate.value=data.release_date
    duracion.value=data.length
  
})

    /* } */

        }
    /* } */
    
  /*   for( let i=0;i<lista)
 */

    



