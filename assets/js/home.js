let taskContainer = document.getElementById('task-container');
let toggler = document.getElementById('toggle');
let body = document.getElementsByTagName('body')[0];

//listen for value change on task checkbox
taskContainer.addEventListener('click', (e)=>{
    if(e.target.type === "checkbox"){
        let taskId = e.target.id;
        let value = e.target.checked;
        console.log(taskId, value);

        window.location.href = `/modify-task/?id=${taskId}&toggle=${value}`;
    }
})

//listen for app theme toggle
toggler.addEventListener('click',(e)=>{
    let value = e.target.classList[1];
    if(value === 'fa-toggle-on'){
        e.target.classList.add('fa-toggle-off');
        body.style.backgroundColor = "lavender";
        body.style.color = "black";
    }
    else{
        e.target.classList.add('fa-toggle-on');
        body.style.backgroundColor = "#635569";
        body.style.color = "beige";
    }
    e.target.classList.remove(value);
})