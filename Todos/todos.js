function todosData(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => displayData(data))
}

todosData()

const displayData = (data) =>{
    const collstodos = document.getElementById("Todos");


    data.forEach((todo) => {
        console.log(todo);
        const todosDiv = document.createElement("div");


        todosDiv.innerHTML=`
           <div class="card" style="width: 16rem;">   
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">${todo.id}</p>
                    <p class="card-text">${todo.title}</p>
                    <a href="#" class="btn btn-primary">Go</a>
                </div>
            <div>
        
        
        
        `;
        collstodos.appendChild(todosDiv);

    });
  
}