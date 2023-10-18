var teams = [
    {"seed": 1,"name": "Furia", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/rio2022_rmr/am/furi.png"},
    {"seed": 2,"name": "Imperial", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_qual/impe.png"},
    {"seed": 3,"name": "MIBR", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_qual/mibr.png"},
    {"seed": 4,"name": "Liquid", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/rio2022_rmr/am/liqu.png"},
    {"seed": 5,"name": "Natus Vincere", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/navi.png"},
    {"seed": 6,"name": "FaZe Clan", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/faze.png"},
    {"seed": 7,"name": "Team Vitality", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/vita.png"},
    {"seed": 8,"name": "G2 Esports", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/g2.png"},
]

if(localStorage.getItem("teams") != null ){
    teams = JSON.parse(localStorage.getItem("teams"));
    console.log(teams);
}else
    localStorage.setItem("teams", JSON.stringify(teams));
