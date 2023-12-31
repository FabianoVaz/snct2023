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

    {"seed": 1,"name": "Imperial", "rnd": "0-0", "score": 0, "v":0, "d":0, "match":[], "status": 0, "img":"https://majors.im/images/paris2023_qual/impe.png"},
*/
//#endregion

const round_max = 2;
const vagas = 6;
const vit = 2;
const der = 2;
var round = 0;
var storage = false;

var roundResult = []
if(localStorage.getItem("rounds") != null ){
    teams = JSON.parse(localStorage.getItem("teams"));
    teams.forEach( team =>{
        team.rnd = "0-0"
        team.v = 0
        team.d = 0
        team.status = 0;
        team.score = 0
        team.match = []
    })
    let r = JSON.parse(localStorage.getItem("rounds"));
    if(r.length == round_max && r[round_max-1].match.length == teams.length/2){
        storage = true;
    }
}

const miolo = document.getElementById("ifba");
generatedMatchs();

function generatedMatchs(){
    round++;
    
    let newRnd = document.getElementById("round_"+round);
    if(newRnd == null){
        newRnd = document.createElement("div");
        newRnd.id = "round_"+round;
        newRnd.className = "round";
        miolo.style.height = "fit-content";
        miolo.appendChild(newRnd);
    }
    
    const rnd = document.getElementById("round_"+round);
    rnd.innerHTML = `<span class="round-title">Round ${round}</span>`;
    
    let groups = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    teams.forEach( t =>{
        if(t.d < der)
        switch (t.rnd) {
            case "0-0": groups[0].push(t); break;   // R1:0

            case "1-0": groups[1].push(t); break;   // R2:1
            case "0-1": groups[2].push(t); break;   // R2
            
            case "2-0": groups[3].push(t); break;   // R3:2
            case "1-1": groups[4].push(t); break;   // R3
            case "0-2": groups[5].push(t); break;   // R3
            
            case "3-0": groups[6].push(t); break;   // R4:3
            case "2-1": groups[7].push(t); break;   // R4
            case "1-2": groups[8].push(t); break;   // R4
            case "0-3": groups[9].push(t); break;   // R4

            case "3-1": groups[10].push(t); break;  // R5:4
            case "2-2": groups[11].push(t); break;  // R5
            case "1-3": groups[12].push(t); break;  // R5
            
            case "3-2": groups[13].push(t); break;  // R6:5
            case "2-3": groups[14].push(t); break;  // R6
        }
    });
    
    groups.forEach( teamsGroup => {       
        teamsGroup.sort((a, b) => (a.score > b.score) ? 1 : -1).reverse();
        let teamsGroupAux = teamsGroup;
        let indexA = 0;

        for (let count = 0; count < teamsGroup.length/2; count++) {
            if(teamsGroupAux[indexA].v == vit || teamsGroupAux[indexA].d == der) continue;
            let group = teamsGroupAux[indexA].rnd;
            let indexB = teamsGroupAux.length-1;
            let bo = (teamsGroupAux[indexA].v+1 == vit || teamsGroupAux[indexA].d+1 == der) ? 3 : 1;

            while(duplicatedMatch(teamsGroupAux[indexA], teamsGroupAux[indexB])){
                console.log(`[${group}] jogo duplicado: ${teamsGroupAux[indexA].name} x ${teamsGroupAux[indexB].name}`)
                indexB--;                 
            }

            let matchBox = document.createElement("div");
            matchBox.classList.add("match-box");
            matchBox.classList.add(`md${bo}`);
            matchBox.innerHTML = `<div class="team-cat">${group}</div>`
            let matchBoxSub = document.createElement("div");
            matchBoxSub.className = "match-box-sub"
            matchBox.appendChild(matchBoxSub);
            
            console.log(`[${round-1},${rnd.childNodes.length-1}] ${group}: ${teamsGroupAux[indexA].name} x ${teamsGroupAux[indexB].name}`);
            /* if(storage){
                let hist = JSON.parse(localStorage.getItem("rounds"));
                console.log(hist[round-1].match[rnd.childNodes.length-1]);
                var teamAVenceu = teamsGroupAux[indexA].id == hist[round-1].match[rnd.childNodes.length-1].win;
            } */

            var teamAVenceu = true;

            matchBoxSub.appendChild(createElementTeam(teamsGroupAux[indexA], (teamAVenceu ? 1 : 2)));
            matchBoxSub.appendChild(createElementTeam(teamsGroupAux[indexB], (teamAVenceu ? 2 : 1)));
            
            rnd.appendChild(matchBox);
            teamsGroupAux= teamsGroupAux.filter( team => team != teamsGroupAux[indexB]);
            teamsGroupAux = teamsGroupAux.filter( team => team != teamsGroupAux[indexA]);
        }
    });
    
    if(round == 1)
        roundResult = [structRounds(round)];
    
    roundResult[round-1] = structRounds(round);
    localStorage.setItem("rounds", JSON.stringify(roundResult));
    updateWinner();

    if(round < round_max)
        generatedMatchs();
}

function teste(){
    let r = JSON.parse(localStorage.getItem("rounds"));
    r.forEach( rodada => { // para cada round...
        let teste = document.getElementById("round_"+rodada.round);
        let jogos = teste.querySelectorAll(".match-box");
        let partida1 = jogos[0].querySelector(".match-box-sub"); // partida 1
        let teamA = partida1.childNodes[0];
        let teamB = partida1.childNodes[1];
        
        teamA.classList.remove("win");
        teamA.classList.remove("lose");
        teamB.classList.remove("win");
        teamB.classList.remove("lose");
        if(teamA.id == rodada.match[0].win)
            teamA.classList.add("win");
        else
            teamA.classList.add("lose");
        if(teamB.id == rodada.match[0].win)
            teamB.classList.add("win");
        else
            teamB.classList.add("lose");
    });
}

function duplicatedMatch(teamA, teamB){
    if(teamA.match.includes(teamB.seed))
        return true;
    return false;
}


function updateWinner(rnd){
    teams.forEach(t => {
        t.v = 0;
        t.d = 0;
        t.score = 0;
        t.status = 0;
        t.rnd = "0-0";
        t.match = [];

        roundResult.forEach((r) => {
            r.match.forEach( (m) => {
                if(t.seed == m.win){
                    if(t.v < vit){
                        t.v++;
                        t.match.push(m.lose);
                    }
                }if(t.seed == m.lose){
                    if(t.d < der){
                        t.d++;
                        t.match.push(m.win);
                    }
                }
            });
        });
    });
    //localStorage.setItem("rounds", JSON.stringify(roundResult));
    changeScore();
}

function structRounds(rnd){
    let r = document.getElementById("round_"+rnd);
    let matchs = r.querySelectorAll(".match-box-sub");
    let round_temp = {"round":rnd, "match":[]} 
    for (let index = 0; index < matchs.length; index++) {
        const element = matchs[index];
        let tWin = getTeamBySeed(parseInt(element.querySelector("div > .win").id));
        let tLose = getTeamBySeed(parseInt(element.querySelector("div > .lose").id));
        round_temp.match.push({"match": (index+1), "win": tWin.seed, "lose": tLose.seed});
    }
    return round_temp;
}

function createElementTeam(teamsAux, order){
    let team = document.createElement("div");
    team.id = teamsAux.seed
    team.className = "team-"+ ((order == 1) ? "A" : "B");
    team.classList.add(((order == 1) ? "win" : "lose"));
    team.innerHTML = `<div class="team-logo"><img src="${teamsAux.img}" alt="${teamsAux.name}"/></div>   
    <div class="team-seed">#${teamsAux.seed} | ${teamsAux.score}</div>`
    team.addEventListener('click', (evnt) => selectWinner(evnt, team))
    return team;
}


function selectWinner(evnt, team){
    let matchGame = team.parentNode;
    let teamWin, teamLose;
    if(team.id === matchGame.childNodes[0].id){
        teamWin = matchGame.childNodes[0];
        teamLose = matchGame.childNodes[1];       
    }else{
        teamWin = matchGame.childNodes[1];
        teamLose = matchGame.childNodes[0];
    }
    
    teamWin.classList.add("win"); 
    teamLose.classList.add("lose");
    
    let changeResult = false;
    let rnd_click = parseInt(team.parentNode.parentNode.parentNode.id.substring(6)); // round_X 
    if(evnt != null){
        if(teamWin.classList.contains("lose") || teamLose.classList.contains("win")) {
            changeResult = !changeResult;
            if(teamWin.classList.contains("lose")) {teamWin.classList.remove("lose");}
            if(teamLose.classList.contains("win")) {teamLose.classList.remove("win");}
        }
    }
   
    let x = round-rnd_click;
    for(let i = 0; i < x; i++) {
        roundResult.pop();
        //localStorage.setItem("rounds", JSON.stringify(roundResult));
    }
    round = rnd_click;    
    updateWinner();
    roundResult[rnd_click-1] = structRounds(rnd_click);
    localStorage.setItem("rounds", JSON.stringify(roundResult));
    updadeMatch(teamWin.id, teamLose.id, changeResult);
    if(x>0)
        generatedMatchs();
}

function updadeMatch(seedWin, seedLose, changeResult){
    seedWin = parseInt(seedWin)
    seedLose = parseInt(seedLose)
    
    let teamWin = getTeamBySeed(seedWin);
    let teamLose = getTeamBySeed(seedLose);

    if(changeResult){
        if(teamWin.v < vit) teamWin.v++;
        if(teamLose.d < der) teamLose.d++;
        teamWin.d--;
        teamLose.v--;
    }else{
        if(teamWin.v < vit){
            teamWin.match.push(teamLose.seed);
            teamWin.v++;
        }
        if(teamLose.d < der){
            teamLose.match.push(teamWin.seed);
            teamLose.d++;
        }
    }    
    changeScore();
}

function getTeamBySeed(seed){
    return teams.find( team => team.seed == seed)
}

function getGroup(team){
    return team.v + "-" + team.d
}

function getSaldo(team){
    return team.v-team.d
}

function changeScore(){
    teams.forEach( t => {
        let score = 0;
        t.rnd = getGroup(t);
        
        t.match.forEach(match => {
            let teamMatch = getTeamBySeed(match);
            score += getSaldo(teamMatch);
        }); 
        t.score = score;
    });
    localStorage.setItem("teams", JSON.stringify(teams));
    //localStorage.setItem("rounds", JSON.stringify(roundResult));
    result();
}

function result(){
    let classif = []
    teams.forEach( x => classif.push(x))
    classif.sort(function(a, b) {
        if (a.v !== b.v) {
          return b.v - a.v;
        } else if (a.d !== b.d) {
          return a.d - b.d;
        } else if (a.score !== b.score) {
          return b.score - a.score;
        } else {
          return a.seed > b.seed;
        }
      });
    
      localStorage.setItem("result", JSON.stringify(classif));

    let count = 1;
    let result = document.getElementById("result");
    result.innerHTML = ``;
    classif.forEach( t => {
        let div = document.createElement("div");
        if(vagas >= count){
            div.classList.add("qualify");
            count++;
        }else
            div.classList.add("eliminated");

        div.classList.add("result-box");
        div.innerHTML = `
        <span>${t.rnd}</span>
        <div><img src="${t.img}" alt="${t.name}"/></div>
        <span class="result-team">${t.name}</span>`
        result.appendChild(div);
        //console.log(`${t.name} - ${t.rnd} - ${t.score}`)
    });
}