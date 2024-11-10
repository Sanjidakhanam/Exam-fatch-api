function AlbumsData(){
    fetch("https://jsonplaceholder.typicode.com/Albums")
    .then(response => response.json())
    .then(data => displayData(data))
}
    AlbumsData()


const displayData = (data) =>{
    const collsalbums = document.getElementById("albums");

    data.forEach((album) => {
        console.log(album);
        const albumsDiv = document.createElement("div");

        albumsDiv.innerHTML=`
        
     <div class="card" style="width: 16rem;">                 
        <div class="card-body">
         <h5 class="card-title">Card title</h5>
        <p class="card-text">${album.id}</p>
        <p class="card-text">${album.title}</p>
         <a href="#" class="btn btn-primary">Go</a>
        </div>
    </div>
        
        
        `;
        collsalbums.appendChild(albumsDiv);

    });
}