function usersData(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => displayData(data))
}
usersData()

const displayData =(data) =>{
    const collsusers = document.getElementById("Users");

    data.forEach((user) => {
        console.log(user);
        const usersDiv = document.createElement("div");


        usersDiv.innerHTML=`
             <div class="card" style="width: 16rem;">   
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">${user.id}</p>
                    <p class="card-text">${user.name}</p>
                    <a href="#" class="btn btn-primary">Go</a>
                </div>
            <div>
        
        
        
        `;
        collsusers.appendChild(usersDiv);
    });
}