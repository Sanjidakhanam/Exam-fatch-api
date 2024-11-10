
function photosData(){
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(data => displayData(data))
}
    photosData()


const displayData = (data) =>{
    const collsphotos = document.getElementById("Photos");

    data.forEach((photo) => {
        console.log(photo);
        const photosDiv = document.createElement("div");

        photosDiv.innerHTML=`
        
     <div class="card" style="width: 16rem;"> 
           <img src="img/flower.jpg" class="card-img-top" alt="...">            
        <div class="card-body">
         <h5 class="card-title">Card title</h5>
        <p class="card-text">${photo.id}</p>
        <p class="card-text">${photo.title}</p>
         <a href="#" class="btn btn-primary">Go</a>
        </div>
    </div>
        
        
        `;
        collsphotos.appendChild(photosDiv);

    });
}