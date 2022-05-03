const clock = document.getElementById('clock');

//date가 함수 밖에 있으면 고정값이됨;
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// getClock(); //바로 호출하고, 필수!
getClock();
setInterval(getClock, 1000); //매초마다 호출