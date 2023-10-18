/*teams = [
    {"seed": 1,"name": "Furia", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/rio2022_rmr/am/furi.png"},
    {"seed": 2,"name": "Imperial", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_qual/impe.png"},
    {"seed": 3,"name": "MIBR", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_qual/mibr.png"},
    {"seed": 4,"name": "Liquid", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/rio2022_rmr/am/liqu.png"},
    {"seed": 5,"name": "Natus Vincere", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/navi.png"},
    {"seed": 6,"name": "FaZe Clan", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/faze.png"},
    {"seed": 7,"name": "Team Vitality", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/vita.png"},
    {"seed": 8,"name": "G2 Esports", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/g2.png"},
]*/ 
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

if(localStorage.getItem("result") != null )
    teams = JSON.parse(localStorage.getItem("result"));

const ifba = document.getElementById("ifba");
teams.forEach( team => {
    ifba.innerHTML += `<div class="tb-teams">
        <div class="team-pos">${team.seed}</div>
        <img src="${team.img}">
        <div class="team-name">${team.name}</div>
        <div class="team-prev">${team.v}v ${team.d}d</div>
    </div>`
}); 