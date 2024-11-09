const cards = document.getElementById("post-card")
const layover = document.getElementById("layover")
const  layoverImg= document.getElementById("image-layover")
const  buttonClose= document.getElementById("close-btn")
const buttonOpen = document.getElementById("btn-open")
const photoNumber=6

fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
.then((res)=>res.json())
.then((photos)=>{
  console.log(photos);

  photos.forEach((photo)=>{
    cards.innerHTML +=`
     <div class="col">
                <div class="card m-5 px-3 >
                  <img src="${photo.url}" class="card-img-top" alt="priima foto"  data-id="${photo.id}">
                  <div class="card-body">
                    <h5 class="card-title">${photo.title}</h5>
                   
                  </div>
                </div>
              </div>

    `
  }

  )
  
}

)


buttonClose.addEventListener("click",()=>{
  layover.classList.add("d-none")
})

cards.addEventListener("click",()=>{



  layoverImg.src = (`${photo.id}`);
  layover.classList.remove("d-none")
        
})





