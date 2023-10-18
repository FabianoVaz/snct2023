/* teams = [
    {"seed": 1,"name": "Furia", "prev": 0, "img":"https://majors.im/images/paris2023_qual/impe.png"},
    {"seed": 2,"name": "MIBR", "prev": 0, "img":"https://majors.im/images/paris2023_qual/impe.png"},
    {"seed": 3,"name": "paiN", "prev": 0, "img":"https://majors.im/images/paris2023_qual/impe.png"},
    {"seed": 4,"name": "Team One", "prev": 0, "img":"https://majors.im/images/paris2023_qual/impe.png"},
    {"seed": 5,"name": "Fluxo", "prev": 0, "img":"https://majors.im/images/paris2023_qual/flux.png"},
    {"seed": 6,"name": "00Nation", "prev": 0, "img":"https://majors.im/images/paris2023_qual/00.png"},
    {"seed": 7,"name": "9z", "prev": 0, "img":"https://majors.im/images/paris2023_qual/9z.png"},
    {"seed": 8,"name": "Imperial", "prev": 0, "img":"https://majors.im/images/paris2023_qual/impe.png"},
    {"seed": 9,"name": "Sharks", "prev": 0, "img":"https://majors.im/images/paris2023_qual/shar.png"},
    {"seed": 10,"name": "Curintians", "prev": 0, "img":"https://majors.im/images/paris2023_qual/cori.png"},
    {"seed": 11,"name": "Arctic", "prev": 0, "img":"https://majors.im/images/paris2023_qual/arct.png"},
    {"seed": 12,"name": "O Plano", "prev": 0, "img":"https://majors.im/images/paris2023_qual/plan.png"},
    {"seed": 13,"name": "Bestia", "prev": 0, "img":"https://majors.im/images/paris2023_qual/best.png"},
    {"seed": 14,"name": "Fuscão", "prev": 0, "img":"https://majors.im/images/paris2023_qual/fusc.png"},
    {"seed": 15,"name": "Oddik", "prev": 0, "img":"https://majors.im/images/paris2023_qual/odk.png"},
    {"seed": 16,"name": "Windingo", "prev": 0, "img":"https://majors.im/images/paris2023_qual/win.png"},
    {"seed": 17,"name": "INTz", "prev": 0, "img":"https://majors.im/images/paris2023_qual/intz.png"},
    {"seed": 18,"name": "Red Canids", "prev": 0, "img":"https://majors.im/images/paris2023_qual/red.png"},
] */

// @import teams.js

const ifba = document.getElementById("ifba");
preencher();
function preencher(){
    ifba.innerHTML = "";
    teams.forEach( team => {
        ifba.innerHTML += `<div class="tb-teams">
            <div class="team-pos">${team.seed}</div>
            <img src="${team.img}">
            <div class="team-name" onclick="cadastrar(${team.seed});">${team.name}</div>
            <div class="btn" onclick="subir(${team.seed});">Subir</div>
            </div>`
            /* <div class="team-prev">${team.v}v ${team.d}d</div> */
    });
    localStorage.setItem("teams", JSON.stringify(teams));
}

function cadastrar(id){
    let team = teams.find( team => team.seed == id)
    let nome = prompt("Nome", team.name);
    let img = prompt("Logo", team.img);
    team.name = nome;
    team.img = img;
    preencher();
}

function subir(seed){
    if(seed>1){
        let aux = teams[seed-2];
        teams[seed-2] = teams[seed-1];
        teams[seed-1] = aux;
        
        for (let i = 0; i < teams.length; i++)
            teams[i].seed = i+1;
        preencher();
    }
}