const updateClock = () =>{
    let now = new Date();
    const hour = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const second = String(now.getSeconds()).padStart(2, "0");
    const timeString = `${hour}:${minutes}:${second}`;
    let clock = document.querySelector("#clock");
    clock.innerHTML = timeString;
}
setInterval(updateClock,1000);