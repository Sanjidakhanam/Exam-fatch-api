function loadData(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => displayPost(data))
}
loadData();


const displayPost = (data) =>{
  const coldata = document.getElementById("posts");

  data.forEach((post) => {
      const postdiv = document.createElement("div")


      postdiv.innerHTML = `
         <div class="card" style="width: 16rem;">
               <img src="img/patha.png..."class=card-img-top" alt="img/patha.png...">
              <div class="card-body">
                <p class="card-text">${post.title}</p>
                <p>${post.body}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
         </div>
      `;

      coldata.appendChild(postdiv);
    });


};