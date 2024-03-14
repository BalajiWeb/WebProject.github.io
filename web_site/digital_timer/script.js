let ampm = document.getElementById('ampm');

function displayTime() 
{
    // create object for date time 
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    // date property of js 
    let dd = dateTime.getDate();
    let mm = dateTime.getMonth()+1;
    let yyyy = dateTime.getFullYear();
    
    if(hr > 12) 
    {
        hr = hr - 12
        ampm.innerHTML = 'PM'
    }
    document.getElementById('hour').innerHTML = hr
    document.getElementById('minute').innerHTML = min
    document.getElementById('secound').innerHTML = sec
    document.getElementById('day').innerHTML = addZero(dd);
    document.getElementById('month').innerHTML = addZero(mm);
    document.getElementById('year').innerHTML = yyyy;

    
}
function padZero(num) 
{
    return num<10?"0"+num:num
}
function addZero(num) 
{
    return num<10?"0"+num:num
}
setInterval(displayTime,500)

// count the laps 

