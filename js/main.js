const cards = document.getElementById("post-card")
const layover = document.getElementById("layover")
const  layoverImg= document.getElementById("image-layover")
const  buttonClose= document.getElementById("close-btn")



fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
.then((response)=>response.json())
.then((photos)=>{
  console.log(photos);

  photos.forEach((card)=>{
    cards.innerHTML +=`
     <div class="col">
                <div class="card m-5 px-3" >
                  <img src="${card.url}" class="card-img-top" alt="photo: ${card.id} " data-id="${card.id}">
                  <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                   
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
layover.classList.remove("d-none")
});











