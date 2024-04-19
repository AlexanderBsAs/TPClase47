
window.onload = () => {

   /*  for (let i=0;i<100;i++){ */
    // Obtener la parte de la ruta de la URL
const path = window.location.pathname;

// Remover "/detail/" de la ruta y obtener el ID de la película
const id = path.replace('/detail/', '');

/* console.log(id); // Imprimirá "2"
console.log(path) */
      let title=document.querySelector("#title")
  let rating=document.querySelector("#rating")
  let awards=document.querySelector("#awards")
  let releaseDate=document.querySelector("#release_date")
  let duracion=document.querySelector("#length")
let form=document.querySelector(".card .formulario")
    const lista= "http://localhost:3031/api/movies/"+id
  /*   if(i==id){ */
    fetch(lista)
.then(response=>{
 return response.json()
})
.then(pelicula=>{
    //console.log(pelicula)


  let data=pelicula.data
    title.value = data.title
    rating.value=data.rating
    awards.value=data.awards
    releaseDate.value=data.release_date
    duracion.value=data.length

  })  
      let editar= document.querySelector(".botonModificar")
  editar.addEventListener("click",(event)=>{
    const edit= "http://localhost:3031/api/movies/update/"+id
    let datos={
        title:title.value,
        rating:rating.value,
        awards:awards.value,
        length:duracion.value
    }
    

    fetch(edit,{
        method:"PUT",
           headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(datos)
     
    
    })
    .then(resultado=>{
         console.log(resultado)
        return resultado.json()
    })
    .catch(e=>{
        event.preventDefault()
        console.log(e)
    })
    .then(resultado=>{
        alert("se edito la pelicula")
        window.location.reload()
    })
    .catch(e=>{
        event.preventDefault()
        console.log("error: "+ e)
    })

})
const create= "http://localhost:3031/api/movies/create"

let agregar=document.querySelector(".botonAgregar")

agregar.addEventListener("click",(e)=>{
    let datosCrear={
        title:title.value,
        rating:rating.value,
        awards:awards.value,
        release_date:releaseDate.value,
        length:duracion.value
    }
    fetch(create,
        {
            method:"POST",
               headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(datosCrear)
         }
 )

.then(resultado=>{
    return resultado.json()
})
.catch(e=>{
    console.log("error: "+e)
})
.then(terminado=>{
    alert("se creo la pelicula")
    window.location.reload()
})
.catch(e=>{
    console.log("error: "+e)
})
})
    /* } */

        }
    /* } */
    
  /*   for( let i=0;i<lista)
 */

    



