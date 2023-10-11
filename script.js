(()=>{
    const btn = doument.querySelector('[data-form-btn]')
    const createTask =(evento)=>{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const input2 = document.querySelector('[data-form-input2]')
    console.log(input.value);
    const value = input.value;
    const value2 = input2.value;
    const list = document.querySelector('[data-table]');
    const task = document.createElement('tr');
    input.value = '';
    input2.value ='';
    const taskcontent = document.createElement('tr');
    const titletask = document.createElement('td');
    const titletask2 = document.createElement('td');
    const titletaskp = document.createElement('p');
    const titletask2p = document.createElement('p');
    titletaskp.innerText = value
    titletask2p.innerText = value2;
    
    titletask.appendChild(titletaskp);
    titletask2.appendChild(titletask2p);
    taskcontent.appendChild(titletask);
    taskcontent.appendChild(titletask2);
    list.appendChild(taskcontent);

};
btn.addEventListener('click', createTask);
})
    


