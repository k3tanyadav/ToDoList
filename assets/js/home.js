//listen for value change on task checkbox
let taskContainer = document.getElementById('task-container');

taskContainer.addEventListener('click', (e)=>{
    if(e.target.type === "checkbox"){
        let taskId = e.target.id;
        let value = e.target.checked;
        console.log(taskId, value);

        window.location.href = `/modify-task/?id=${taskId}&toggle=${value}`;
    }
})