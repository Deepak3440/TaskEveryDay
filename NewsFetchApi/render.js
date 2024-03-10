import { callAPI } from './index.js';
let a=document.getElementById('btn');
let tableCreated = false;
const options = {
    headers:{
        'Access-Control-Allow-Origin': '*',
    }
};



a.addEventListener('click',
function GiveData() {
    const cityInput = document.getElementById('city');
        const cityName = cityInput.value.trim();

        if (cityName === '') {
            console.log('Please enter a city name.');
            return;
        }
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=Q9MZV6LNNVHHCCWHZD2A9E3GG`;


    const request = callAPI(url, options);

    request
        .then((res) => res.json())
        .then((data) => {
            if (!tableCreated)
            { 
                takeOutdays(data);
                tableCreated = true; 
            }
        })
        .catch((err) => {
            console.log("Error occurred", err);
        });
});





function takeOutdays(data){
    let days=data.days;
    console.log(days);
    const parent=document.getElementById('root');
    if (!tableCreated) 
    { 
        const table = createTable(days);
        parent.appendChild(table);
        tableCreated = true; 
    }
}



function createTable(days){
    const table=document.createElement('table');
    const headingrow=createHeadingRow();
    table.appendChild(headingrow);
    for(let i = 0; i < days.length; i++){
        const row = createRow(days[i]);
        table.appendChild(row);
    }
    table.style='border: 1px solid brown; border-collapse: collapse';
    return table;



}


function createRow(data){
    const row=document.createElement('tr');
    createCell(data.datetime,row);
    createCell(data.tempmin,row);
    createCell(data.tempmax,row);
    createCell(data.temp,row);
    createCell(data.icon,row);
    return row;

}

function createHeadingRow(){
    const row=document.createElement('tr');
    createCell('Date',row,'th');
    createCell('Min temp',row,'th');
    createCell('Max-temp',row,'th');
    createCell('Avg-Temp',row,'th');
    createCell('Description',row,'th');
    return row;

}


function createCell(t,row,type='td'){
    const cell=document.createElement(type);
    cell.innerText=t;
    cell.style='border: 1px solid brown; padding: 4px 6px;';
    row.appendChild(cell);
    return cell;
}