let D = new Date();
const Today_Date = D.toDateString();
const Date_Array = Today_Date.split(' ');
document.getElementById('Day').innerText = Date_Array[0];
document.getElementById('Date').innerText = Date_Array[2] +' '+ Date_Array[1] +' '+ Date_Array[3];



function AlertFuction(){
    alert("Board Has been Updated");
    
}

function UpdateTaskNo(){

    const element = document.getElementById('taskNo');
    let current_num = element.innerText;
    current_num = parseInt(current_num);
    let Updated_num = current_num - 1;
    element.innerText = Updated_num;

    const element2 = document.getElementById('ComTask');
    let current_comTask = element2.innerText;
    current_comTask = parseInt(current_comTask);
    let Updated_comtask = current_comTask + 1;
    element2.innerText = Updated_comtask;
    
    

}

function UpdateActivityLog(id){

    const div = document.createElement("Div");
    div.classList.add("bg-slate-100", "p-4", "m-6" ,"rounded-lg");

    const p = document.createElement("p");
    p.classList.add("text-lg" ,"text-slate-600");

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

const card1 = document.getElementById('Card1');
card1.addEventListener('click',function(event){
    event.preventDefault();
    AlertFuction();
    UpdateTaskNo();
    UpdateActivityLog('Card1');
    DisableButton("card1btn");

});

const card2 = document.getElementById('Card2');
card2.addEventListener('click',function(event){
    event.preventDefault();
    AlertFuction();
    UpdateTaskNo();
    UpdateActivityLog('Card2');
    DisableButton("card2btn");

});

const card3 = document.getElementById('Card3');
card3.addEventListener('click',function(event){
    event.preventDefault();
    AlertFuction();
    UpdateTaskNo();
    UpdateActivityLog('Card3');
    DisableButton("card3btn");

});


const card4 = document.getElementById('Card4');
card4.addEventListener('click',function(event){
    event.preventDefault();
    AlertFuction();
    UpdateTaskNo();
    UpdateActivityLog('Card4');
    DisableButton("card4btn");

});

const card5 = document.getElementById('Card5');
card5.addEventListener('click',function(event){
    event.preventDefault();
    AlertFuction();
    UpdateTaskNo();
    UpdateActivityLog('Card5');
    DisableButton("card5btn");

});

const card6 = document.getElementById('Card6');
card6.addEventListener('click',function(event){
    event.preventDefault();
    AlertFuction();
    UpdateTaskNo();
    UpdateActivityLog('Card6');
    DisableButton("card6btn");

});





// Activity Log
const logbtn = document.getElementById('LogBtn');
logbtn.addEventListener('click',function(){
    document.getElementById('LogList').innerHTML = '';
})
     