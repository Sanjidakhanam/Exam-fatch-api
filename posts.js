function postsData(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => displayData(data))
}
postsData();


const displayPosts = (data) =>{
  const callPosts = document.getElementById("posts");

  data.forEach((post) => {
      console.log(post)
      const div = document.createElement("div")
      
      div.innerHTML = `
         

          <div class="card"style="width: 18rem;">
                   <div class="card-body">
                       <h5 class="card-title">Card title</h5>
                       <p class="card-text text-info">${post.title}</p>
                       <p>${post.body}</p>

                      <a href="#" class="btn btn-warning">Go</a>
                  </div>
          </div>
      
      `;

      callPosts.appendChild(postsdiv);
  })


}