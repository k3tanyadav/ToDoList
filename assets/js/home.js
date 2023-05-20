let taskContainer = document.getElementById('task-container');
let theme = document.querySelector('#toggle i');
let body = document.getElementsByTagName('body')[0];

//listen for value change on task checkbox
taskContainer.addEventListener('click', (e)=>{
    if(e.target.type === "checkbox"){
        let taskId = e.target.id;
        let value = e.target.checked;
        console.log(taskId, value);

        //task update handled by modify task in home_controller file
        window.location.href = `/modify-task/?id=${taskId}&toggle=${value}`;
    }
})

//listen for app theme toggle
theme.addEventListener('click',(e)=>{
    body.classList.toggle('dark');
    theme.classList.toggle('fa-toggle-on');
    localStorage.setItem("toggle",theme.classList[2]);
})

// retain theme when the page reloads due to task deletion or updation using local storage
window.addEventListener('DOMContentLoaded', (e)=>{
    let value = localStorage.getItem("toggle");
    if(value != "undefined"){
        body.classList.toggle('dark');
        theme.classList.toggle('fa-toggle-on');
    }
})