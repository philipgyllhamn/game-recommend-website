import axios from 'axios'

var genres;
var themes;

axios.get('https://localhost:44370/api/genres')
.then(function (response){
    genres = response;
});

axios.get('https://localhost:44370/api/themes')
.then(function (response){
    themes = response;
});

/*
 var xhttp = new XMLHttpRequest();

 xhttp.open('GET','https://localhost:44370/api/genres', false)
 xhttp.send()
 var genres = JSON.parse(xhttp.response);

 xhttp.open('GET','https://localhost:44370/api/themes', false)
 xhttp.send()
 var themes = JSON.parse(xhttp.response);*/

var prefApp = new Vue({
    
    el: '#PrefApp',
    data: {
        genres,
        themes,
        checkedGenres: [],
        checkedThemes: [],
    },
    methods:{
        RecommendGame: function (e){
            var yearFrom = document.getElementById('inputYearFrom').value;
            var yearTo = document.getElementById('inputYearTo').value;
            var selectedGenres = this.checkedGenres;
            var selectedThemes = this.checkedThemes;

            var gamingSystem = GetGamingSystem();

            window.alert(yearFrom + yearTo + selectedThemes + selectedGenres + gamingSystem)

            xhttp.open('POST', 'https://localhost:44370/api/Recommend', false )
            xhttp.setRequestHeader("Content-Type", "application/json")
            xhttp.send(JSON.stringify({ 
                "YearFrom": yearFrom, 
                "YearTo": yearTo, 
                "Selected Genres": selectedGenres,
                "Selected Themes": selectedThemes, 
                "Gaming System": gamingSystem 
            }));
        } 
    }
})

function GetGamingSystem(){
    var pc = document.getElementById('syspc')
    var ps4 = document.getElementById('sysps4')
    var xone = document.getElementById('sysxone')
    var nswitch = document.getElementById('sysswitch')
    var mac = document.getElementById('sysmac')
    var phone = document.getElementById('syssmart')

    var systems = "";

    if (pc.checked === true) {
        systems += " , " + document.getElementById('pctext').innerText;
    }

    if (ps4.checked === true) {
        systems += " , " + document.getElementById('ps4text').innerText;
    }

    if (xone.checked === true) {
        systems += " , " + document.getElementById('xonetext').innerText;
    }

    if (nswitch.checked === true) {
        systems += " , " + document.getElementById('switchtext').innerText;
    }

    if (mac.checked === true) {
        systems += " , " + document.getElementById('mactext').innerText;
    }

    if (phone.checked === true) {
        systems += " , " + document.getElementById('smarttext').innerText;
    }
    
    return systems;
}
