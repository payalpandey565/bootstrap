
const taskContainer=document.querySelector(".task_container");
const globalStore=[];
console.log(taskContainer);
const generateNewCard=(taskData) =>
  `

    <div class="col-sm-12 col-md-6 col-lg 4" id=${taskData.id}>
      <div class="card">
   <div class="card-header d-flex justify-content-end gap-2">
     <button type="button" class="btn btn-outline-success"><i class="fa-solid fa-pencil"></i></button>
   <button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
   </div>
   <div class="card-body">
       <img class="card-img-top" src=${taskData.imageUrl}  alt="...">
     <h5 class="card-title  font-weight-bold text-primary">${taskData.taskTitle}</h5>
     <p class="card-text">${taskData.taskDescription}</p>
     <a href="#" class="btn btn-primary">${taskData.taskType}</a>
   </div>
  </div>
   </div>
  `;


const loadInitialCardData= ()=>{

const getCardData=localStorage.getItem("tasky");

const {cards}=JSON.parse(getCardData);

cards.map((cardObject) => {
  taskContainer.insertAdjacentHTML("beforeend",generateNewCard(cardObject));
  globalStore.push(cardObject);
}
)

};

 
const saveChanges= () => {
  const taskData = {
    id: `${Date.now()}`,
    imageUrl:document.getElementById("imageurl").value,
    taskTitle:document.getElementById("tasktitle").value,
    taskType:document.getElementById("tasktype").value,
    taskDescription:document.getElementById("taskdescription").value
  };


taskContainer.insertAdjacentHTML("beforeend",generateNewCard(taskData));

globalStore.push(taskData);
localStorage.setItem("tasky", JSON.stringify({cards:globalStore}));

};




//$(xyz)
