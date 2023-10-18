//#region 
/* Regras:
    - Os times são agrupados por placar (R1: 0-0 | R2: 1-0, 0-1 | R3: 2-0, 1-1, 0-2 | R4: 2-1, 1-2 | R5: 2-2)
    - Um time não pode enfretar outro 2x
    - Maior SCORE¹ contra menor, em caso de empate:
        - Melhor SEED contra pior

    ¹Score é a soma do BU dos oponentes anteriores (V=1, D=-1)
    Ex: Time A tem SCORE de -2, jogou contra X e Y
        o time X perdeu 2 (0v-2d == -2)
        o time Y venceu 1 (1v-1d == 0)
    
    Vagas x Round
    5 vagas - 4 rounds  (3-0 | 3-1)
    6 vagas - 5 rounds  (3-0 | 3-1 | 3-2) com 2 3-2 eliminados
    7 vagas - 6 rounds  (3-0 | 3-1 | 3-2) com 1 3-2 eliminado
    8 vagas - 5 rounds  (3-0 | 3-1 | 3-2)

    {"seed": 1,"name": "Imperial", "img":"https://majors.im/images/paris2023_qual/impe.png"},
*/
//#endregion

//result = [
    /* [1,4,5,8,2,3,6,7] */
    
    /* {"seed": 1,"name": "Furia", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/rio2022_rmr/am/furi.png"},
    {"seed": 4,"name": "Liquid", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/rio2022_rmr/am/liqu.png"},
    {"seed": 5,"name": "Natus Vincere", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/navi.png"},
    {"seed": 8,"name": "G2 Esports", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/g2.png"},
    {"seed": 2,"name": "Imperial", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_qual/impe.png"},
    {"seed": 3,"name": "MIBR", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_qual/mibr.png"},
    {"seed": 6,"name": "FaZe Clan", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/faze.png"},
    {"seed": 7,"name": "Team Vitality", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_rmr/vita.png"}, */
    
    /*{"seed": 1,"name": "Furia", "img":"https://majors.im/images/rio2022_rmr/am/furi.png"},
    {"seed": 4,"name": "Complexy", "img":"https://majors.im/images/paris2023_qual/col.png"},
    {"seed": 5,"name": "Imperial", "img":"https://majors.im/images/paris2023_qual/impe.png"},
    {"seed": 8,"name": "MIBR", "img":"https://majors.im/images/paris2023_qual/mibr.png"},
    
    {"seed": 2,"name": "Liquid", "img":"https://majors.im/images/rio2022_rmr/am/liqu.png"},
    {"seed": 3,"name": "BESTIA", "img":"https://majors.im/images/paris2023_qual/best.png"},
    {"seed": 6,"name": "paiN", "img":"https://majors.im/images/paris2023_qual/pain.png"},
    {"seed": 7,"name": "Fluxo", "img":"https://majors.im/images/paris2023_qual/flux.png"},*/

    /* {"seed": 9,"name": "Flamengo", "img":"https://majors.im/images/paris2023_qual/flam.png"},
    {"seed": 10,"name": "yur", "img":"https://majors.im/images/paris2023_qual/yur.png"},
    {"seed": 11,"name": "Paquetá", "img":"https://majors.im/images/paris2023_qual/paqu.png"},
    {"seed": 12,"name": "Detonte", "img":"https://majors.im/images/paris2023_qual/dtn.png"},
    {"seed": 13,"name": "Fuscão", "img":"https://majors.im/images/paris2023_qual/fusc.png"},
    {"seed": 14,"name": "Nouns", "img":"https://majors.im/images/paris2023_qual/noun.png"},
    {"seed": 15,"name": "OONation", "img":"https://majors.im/images/paris2023_qual/00.png"},
    {"seed": 16,"name": "TeamOne", "img":"https://majors.im/images/paris2023_qual/los.png"}, */
    /* {"seed": 17,"name": "Heroic", "img":"https://majors.im/images/paris2023_rmr/hero.png"},
    {"seed": 18,"name": "Cloud9", "img":"https://majors.im/images/paris2023_rmr/c9.png"},
    {"seed": 19,"name": "Team Spirit", "img":"https://majors.im/images/paris2023_rmr/spir.png"},
    {"seed": 20,"name": "BIG", "img":"https://majors.im/images/paris2023_rmr/big.png"},
    {"seed": 21,"name": "ENCE", "img":"https://majors.im/images/paris2023_rmr/ence.png"},
    {"seed": 22,"name": "Team Vitality", "img":"https://majors.im/images/paris2023_rmr/vita.png"},
    {"seed": 23,"name": "Ninjas in Pyjamas", "img":"https://majors.im/images/paris2023_rmr/nip.png"},
    {"seed": 24,"name": "G2 Esports", "img":"https://majors.im/images/paris2023_rmr/g2.png"},
    {"seed": 25,"name": "Eternal Fire", "img":"https://majors.im/images/paris2023_rmr/ef.png"},
    {"seed": 26,"name": "Astralis", "img":"https://majors.im/images/paris2023_rmr/astr.png"},
    {"seed": 27,"name": "Aurora Gaming", "img":"https://majors.im/images/paris2023_rmr/auro.png"},
    {"seed": 28,"name": "Virtus.pro", "img":"https://majors.im/images/paris2023_rmr/vp.png"},
    {"seed": 29,"name": "FaZe Clan", "img":"https://majors.im/images/paris2023_rmr/faze.png"},
    {"seed": 30,"name": "Fnatic", "img":"https://majors.im/images/paris2023_rmr/fnat.png"},
    {"seed": 31,"name": "Natus Vincere", "img":"https://majors.im/images/paris2023_rmr/navi.png"},
    {"seed": 32,"name": "OG", "img":"https://majors.im/images/paris2023_rmr/og.png"}, */
//]

//[1,4,5,8,2,3,6,7]
var players = [];
var result = JSON.parse( localStorage.getItem("result") );
if(localStorage.getItem("result") != null ){
    result = JSON.parse(localStorage.getItem("result"));
    players.push(result[0]);
    players.push(result[3]);
    players.push(result[4]);
    players.push(result[7]);
    
    players.push(result[1]);
    players.push(result[2]);
    players.push(result[5]);
    players.push(result[6]);
}else{
    players.push(teams[0]);
    players.push(teams[3]);
    players.push(teams[4]);
    players.push(teams[7]);
    
    players.push(teams[1]);
    players.push(teams[2]);
    players.push(teams[5]);
    players.push(teams[6]);
}

const groups = 2;
let round_max = 1;

getRounds(players.length/groups);

function getRounds(rnd) {
    rnd /= groups;
    if(rnd > groups)
        getRounds(rnd);
        round_max++;
}
console.log(`Times: ${players.length}, Grupos de ${players.length/groups}, Rounds: ${round_max}`);

const main = document.getElementById("ifba");

/* var groupAresult = players.slice(0,players.length/groups);
var groupBresult = players.slice(players.length/groups); */


for (let groupId = 1; groupId <= groups; groupId++) {
    let groupDiv = document.createElement("div");
    groupDiv.id = "group_" + groupId;
    if(groupId%2 == 0){
        for (let roundId = round_max; roundId >= 1; roundId--)
            groupDiv.appendChild(createRounds(roundId));
    }else{
        for (let roundId = 1; roundId <= round_max; roundId++)
            groupDiv.appendChild(createRounds(roundId));
    }
    
    main.appendChild(groupDiv);
    if(groupId == groups/2)
        main.appendChild(createRounds(0));

    generatedMatchups(players.slice(((players.length/groups)*groupId)-(players.length/groups), ((players.length/groups)*groupId)), groupId);
}

function createRounds(roundId) {
    let col = document.createElement("div");
    col.className ="col";
    let roundDiv = document.createElement("div");
    roundDiv.id = "round_" + roundId;
    roundDiv.className = "round";

    if(roundId==0){
        roundDiv.innerHTML = `<div class="champion"><span>?</span></div>`
        let matchBox = document.createElement("div");
        matchBox.className = "match-box-sub final";
        matchBox.innerHTML = `<div class="team-A"><span class="team-logo"></span><span class="team-seed"></span></div>`;
        matchBox.innerHTML += `<div class="team-B"><span class="team-logo"></span><span class="team-seed"></span></div>`;
        roundDiv.appendChild(matchBox);
    }else{
        let matchups = players.length/groups;
        for (let x = 0; x < roundId; x++)
            matchups /= 2;
        for (let i = 0; i < matchups; i++) {
            let matchBox = document.createElement("div");
            matchBox.className = "match-box-sub";
            matchBox.innerHTML = `<div class="team-A"><span class="team-logo"></span><span class="team-seed"></span></div>`;
            matchBox.innerHTML += `<div class="team-B"><span class="team-logo"></span><span class="team-seed"></span></div>`;
            roundDiv.appendChild(matchBox);
        }
    }
    col.appendChild(roundDiv);    
    return col;
}

var rnd1 = document.querySelector("#round_1");
const root = document.documentElement;
root.style.setProperty('--height', rnd1.getBoundingClientRect().height+'px');

function generatedMatchups(resultGroup, groupId){
    const element = document.getElementById("group_"+groupId);
    const rnd = element.querySelector("#round_1");
    for (let index = 0; index < resultGroup.length/2; index++) {
        let indexB = resultGroup.length - index - 1;
        let teamA = resultGroup[index];
        let teamB = resultGroup[indexB];

        let matchBox = rnd.querySelectorAll(".match-box-sub")[index];
        
        createMatchupTeam(matchBox, teamA, "team-A");
        createMatchupTeam(matchBox, teamB, "team-B");
    }
}

function createMatchupTeam(matchBox, team, key) {
    let element = matchBox.querySelector("."+key);
    element.id = team.seed;
    element.innerHTML = `
        <div class="team-logo"><img src="${team.img}" alt="${team.name}"></div>
        <div class="team-seed">${team.name}</div>`

    element.addEventListener('click', () => {selectWinner(element);});
    return element;
}

function selectWinner(teamWin){
    let matchGame = teamWin.parentNode;
    let rnd = matchGame.parentNode;
    let rndNum = parseInt(rnd.id.substring(6));
    let teamLose;

    if(teamWin.id == matchGame.querySelector(".team-A").id)
        teamLose = matchGame.querySelector(".team-B");
    else
        teamLose = matchGame.querySelector(".team-A");
    
    teamWin.classList.add("win");
    teamLose.classList.add("lose");

    if(teamWin.classList.contains("lose")) {teamWin.classList.remove("lose");}
    if(teamLose.classList.contains("win")) {teamLose.classList.remove("win");}

    
    let team;
    players.forEach(item => {
        if(item.seed == teamWin.id)
        team = item;
    });
    
    if(matchGame.classList.contains("final")){
        let champ = document.querySelector(".champion");
        champ.innerHTML = `<img src="${team.img}" alt="${team.name}" title="${team.name}"><span>${team.name}</span>`
        return;
    }

    if(rndNum <= round_max)
        nextRound(rndNum, team, teamWin);
}


function nextRound(rndNum, team, teamWin){
    let group = teamWin.parentNode.parentNode.parentNode.parentNode;
    let round = group.querySelector("#round_"+(rndNum));
    round = round.querySelectorAll(".match-box-sub");
    
    for (let i = 0; i < round.length; i++) {
        if(round[i].querySelector(".team-A").id == team.seed || round[i].querySelector(".team-B").id == team.seed){
            let slot = i+1;
            let nextSlot = Math.trunc((slot / 2 + (slot % 2)));
            let item;
            
            if(rndNum == round_max){
                let grpNum = parseInt(group.id.substring(6));
                let final = document.querySelector(".final");
                item = grpNum % 2 != 0 ? final.querySelector(".team-A") : final.querySelector(".team-B");
                
            }else{  
                let rnd = group.querySelector("#round_"+(rndNum+1));
                let mat_r2 = rnd.querySelectorAll(".match-box-sub")[nextSlot-1];
                
                item = slot % 2 != 0 ? mat_r2.querySelector(".team-A") : mat_r2.querySelector(".team-B");
            }
            item.id = team.seed;
            item.innerHTML = `<span class="team-logo"><img src="${team.img}" alt="${team.name}"></span>
            <span class="team-seed">${team.name}</span>`
            item.addEventListener('click', () => {selectWinner(item);});
        }
    }
    
}