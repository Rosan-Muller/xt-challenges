let datum = document.getElementById("datum")
let digital = document.getElementById("digitaal");


let statusText = document.getElementById("statustekst");

let ontbijtFase = document.getElementById("ontbijten");
let lunchFase = document.getElementById("lunch");
let avondetenFase = document.getElementById("avondeten");
let borrelFase = document.getElementById("borrel");

function current() {
    let date = new Date();

    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();

    datum.innerHTML = day + '/' + month + '/' + year;

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hour = update(hour);
    minute = update(minute);
    second = update(second);

    digital.innerHTML = hour + " : " + minute + " : " + second;
    var time = setTimeout(function(){ current() }, 1000);

    if(hour >= 8 && hour <= 11){
        ontbijtFase.style.fill = "#6fffe9";
        lunchFase.style.fill = "#2d00f7";
        avondetenFase.style.fill = "#2d00f7"
        borrelFase.style.fill = "#2d00f7"
        statusText.innerHTML = "Ontbijten";
    }
    else if(hour >= 12 && hour <= 17){
        ontbijtFase.style.fill = "#2d00f7";
        lunchFase.style.fill = "#6fffe9";
        avondetenFase.style.fill = "#2d00f7"
        borrelFase.style.fill = "#2d00f7"
        statusText.innerHTML = "Lunchen";
    }
    else if(hour >= 18 && hour <= 21){
        ontbijtFase.style.fill = "#2d00f7";
        lunchFase.style.fill = "#2d00f7";
        avondetenFase.style.fill = "#6fffe9"
        borrelFase.style.fill = "#2d00f7"
        statusText.innerHTML = "Avondeten";
    }  
    else {
        ontbijtFase.style.fill = "#2d00f7";
        lunchFase.style.fill = "#2d00f7";
        avondetenFase.style.fill = "#2d00f7"
        borrelFase.style.fill = "#6fffe9"
        statusText.innerHTML = "Borrel";
    }

    change(second)
}

function update(t) {
    if (t < 10) {
        return "0" + t;
      }
      else {
        return t;
      }
}

current()




