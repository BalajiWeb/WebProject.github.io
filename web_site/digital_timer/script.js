let ampm = document.getElementById('ampm');

function displayTime() 
{
    // create object for date time 
    let dateTime = new Date();
    let hr = padZero(dateTime.getHours());
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
    document.getElementById('hour').innerHTML = padZero(hr)
    document.getElementById('minute').innerHTML = padZero(min)
    document.getElementById('secound').innerHTML = padZero(sec)
    document.getElementById('day').innerHTML = dd;
    document.getElementById('month').innerHTML = mm;
    document.getElementById('year').innerHTML = yyyy;

    
}
function padZero(num) 
{
    return num<10?"0"+num:num
}
setInterval(displayTime,500)


