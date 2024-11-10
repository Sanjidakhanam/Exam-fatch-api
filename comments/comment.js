function commentsData(){
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(data => displayData(data))
}
    commentsData()


const displayData = (data) =>{
    const collscomments = document.getElementById("Comments");

    data.forEach((comment) => {
        console.log(comment);
        const commentsDiv = document.createElement("div");

        commentsDiv.innerHTML=`
        
     <div class="card" style="width: 16rem;">                 
        <div class="card-body">
         <h5 class="card-title">Card title</h5>
        <p class="card-text">${comment.id}</p>
        <p class="card-text">${comment.name}</p>
         <a href="#" class="btn btn-primary">Go</a>
        </div>
    </div>
        
        
        `;
        collscomments.appendChild(commentsDiv);

    });
}