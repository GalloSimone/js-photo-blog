const cards = document.getElementById("post-card")
const postNumber=6
fetch("https://jsonplaceholder.typicode.com/photos?_limit="+ postNumber)
.then((res)=>res.json())
.then((posts) => {
    console.log(posts);
    
    posts.forEach((post) => {
      cards.innerHTML += `
      
        <div class="col">
                <div class="card m-5 px-3>
                  <img src="${post.Url}" class="card-img-top" alt="priima foto">
                  <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                   
                  </div>
                </div>
              </div>

            
      `
    });
})