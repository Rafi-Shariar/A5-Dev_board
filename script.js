let D = new Date();
const Today_Date = D.toDateString();
const Date_Array = Today_Date.split(' ');
document.getElementById('Day').innerText = Date_Array[0];
document.getElementById('Date').innerText = Date_Array[2] +' '+ Date_Array[1] +' '+ Date_Array[3];



function AlertFuction(){
    alert("Board Update Successfully!");
    
}

function UpdateTaskNo(){

    const element = document.getElementById('taskNo');
    let current_num = element.innerText;
    current_num = parseInt(current_num);
    let Updated_num = current_num - 1;
    if(Updated_num <0) return;
    element.innerText = Updated_num;

    const element2 = document.getElementById('ComTask');
    let current_comTask = element2.innerText;
    current_comTask = parseInt(current_comTask);
    let Updated_comtask = current_comTask + 1;
    element2.innerText = Updated_comtask;

    if(Updated_num == 0){
        alert("Congrats!! you have completed all the current task");
    }
    
    

}

function UpdateActivityLog(id){

    const div = document.createElement("Div");
    div.classList.add("bg-slate-100", "p-4", "m-6" ,"rounded-lg");

    const p = document.createElement("p");
    p.classList.add("text-base" ,"text-slate-600");

    div.appendChild(p);

    const time = new Date().toLocaleTimeString();
    const title = document.querySelector(`#${id} h1`).innerText;

    p.innerText = `You have Complete The Task ${title} at ${time}`;

    const LogList = document.getElementById('LogList');
    LogList.appendChild(div);



}

function DisableButton(id){

    document.getElementById(id).disabled = true;

}


// Activity Log
const logbtn = document.getElementById('LogBtn');
logbtn.addEventListener('click',function(){
    document.getElementById('LogList').innerHTML = '';
})

//Color Change

const Colorbtn = document.getElementById('Colorbtn');
Colorbtn.addEventListener('click',function(){

    const r = Math.floor(Math.random()*2000);
    const g = Math.floor(Math.random()*200);
    const b = Math.floor(Math.random()*200);
    
    const rgb = `rgb(${r}, ${g}, ${b})`;

    const body = document.getElementById('body');
    body.style.backgroundColor = rgb;

})
  
    

