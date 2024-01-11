const endDate = "11 March 2024 12:00 AM";
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    // console.log(diff);
    inputs[0].value = Math.floor(diff/ 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff/ 60) % 60;
    inputs[3].value = Math.floor(diff) %  60;
    // convert into days;

}

clock();

/*
1 day 24 hours
1 hours 60 mints
1 mints 60 sec
*/
setInterval(
    ()=>{
        clock();
    },
    1000
)