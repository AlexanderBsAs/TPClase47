const lista= "http://localhost:3031/api/movies/1" 
window.onload = () => {

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
    }



