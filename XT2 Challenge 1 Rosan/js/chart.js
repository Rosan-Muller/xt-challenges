function afstand() {
    var afgelegdeAfstand = document.getElementById('afstand').getContext('2d');
    var grafiek = new Chart(afgelegdeAfstand, {
        // Het type van de chart wat wordt gemaakt
        type: 'line',

        // De data
        data: {
            labels: ['0', '10', '20', '30', '40', '50', '60', '80', '90', '100'],
            datasets: [{
                label: 'Afstand',
                backgroundColor: '#291b59',
                borderColor: '#8121f7',
                data: [3, 5, 45, 55, 100, 110, 140, 160, 190, 230],
            }]
        },

        // Configuratie-opties gaan hier
        options: {
            responsive: true,
            maintainAspectRatio:false,
            title:{
                display:true,
                text: 'Afstand',
            }
        }
    });
}
function drinken() {

    var taart = document.getElementById('drinken').getContext('2d');

    var drinkenGegevens = new Chart(taart, {
        type:'pie',
        data:{
            labels:['Water', 'Koffie', 'Thee', 'Appelsap', 'Cola','Melk'],
            datasets:[{

                data:[70,57,30,59,20,60],
                backgroundColor: ['#58efe8','#291b59','#541290','#8121f7','#89bfff','#cb00ef'],
            }]
        },
        options:{
            responsive: true,
            maintainAspectRatio:false,
            title:{
                display:true,
                text: 'Drinken',

            },

            legend:{
                fontColor: 'black',
                display:true
            },
            tooltips:{
                enabled:true
            }
        }
    });
}

function eten() {
    var balkEten = document.getElementById('eten').getContext('2d');

    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#291b59';

    var myFuel = new Chart(balkEten, {
        type:'horizontalBar',
        data: {
            labels:['Koekjes', 'Broodjes', 'Yoghurt', 'Pasta'],
            datasets: [{
                data: [65, 35, 80, 84, 87],
                backgroundColor: ['#58efe8','#291b59','#541290','#8121f7'],

            }]
    },
        options:{
            responsive: true,
            maintainAspectRatio:false,
            title:{
                display:true,
                text: 'Eten',

            },
            legend:{
                display:false
            },
            tooltips:{
                enabled:true
            }
        }
    });
}


function startScript(){
    afstand();
    drinken();
    eten();
}
window.onload = startScript();
