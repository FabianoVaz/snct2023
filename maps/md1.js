const root = document.documentElement;
var teams, objTeamA, objTeamB;
const teamA = document.getElementById('teamA');
const teamB = document.getElementById('teamB');
const maps = document.querySelectorAll('.map');
const desc = document.getElementById('description');
const log = document.getElementById('map-log');

teamA.addEventListener('change' , updateTeam);
teamB.addEventListener('change' , updateTeam);

function updateTeam(){
    teams.forEach(item => {
        if(item.seed==teamA.value)
        objTeamA = item;
        if(item.seed==teamB.value)
        objTeamB = item;
    });
    
    root.style.setProperty('--teamA', `url('${objTeamA.img}')`);
    root.style.setProperty('--teamB', `url('${objTeamB.img}')`);
    updatePick();
}

maps.forEach(item => {
    item.addEventListener('click', () => {selectMap(item);});
});

let selected = 0;
let choose = true
function selectMap(map){
    if(map.classList.contains('teamA') || map.classList.contains('teamB'))
        return;
    
    selected++;
    if(selected>7)
        selected=1

    map.classList.add(choose ? "teamA" : "teamB");
    choose = !choose;
    let className = 'ban'
    if(selected==7)
        className="decider";

    map.classList.add(className);
    updatePick();
    changeLog(map.id);
}

function clearMaps(){
    selected=0;
    choose = true;
    maps.forEach(item => {
        item.className = 'map';
        item.querySelector(".top-left").innerText = ''
    });
    updatePick();
    log.innerHTML = ''
}

function changeLog(mapName){
    let currentTeam = !choose ? objTeamA : objTeamB;
    /* let pick_ban = selected==3 || selected==4 ? "escolheu" : "vetou"; */
    let pick_ban = "baniu";
    if(selected==7){
        log.innerHTML += (`<span>${selected}. Sobrou ${mapName}</span>`);
        console.log(`${selected}. ${mapName} was left over`);
        desc.innerText = '';
        return;
    }
    console.log(`${selected}. ${currentTeam.name} ${pick_ban} ${mapName}`);
    log.innerHTML += (`<span>${selected}. ${currentTeam.name} ${pick_ban} ${mapName}</span>`);
}

function updatePick(){
    let currentTeam = choose ? objTeamA : objTeamB;
    //let pick_ban = selected==2 || selected==3 ? "escolhe" : "remove";
    let pick_ban = "remove";
    if(selected>=6){
        root.style.setProperty('--selectColor', `#064cb4`);
        desc.innerHTML = `<div>Selecione o mapa decisivo</div>`;
        return;
    }else
        root.style.setProperty('--selectColor', `#000`);
    /* desc.innerHTML = `<img src="${currentTeam.img}"><br><strong>${currentTeam.name}</strong> <b>${pick_ban}</b> um mapa`; */
    desc.innerHTML = `<img src="${currentTeam.img}"><br><strong>${currentTeam.name}</strong> <b>${pick_ban}</b>`;
}

loadHLTV();

function loadHLTV(){
    teams.forEach(team => {
        var option = document.createElement("option")
        option.text = team.name;
        option.value = team.seed;
        option.style = `background-image:url(${team.img});`
        teamA.add(option);
        
        var option = document.createElement("option")
        option.text = team.name;
        option.value = team.seed;
        option.style = `background-image:url(${team.img});`
        teamB.add(option);    

        if(team.seed == 2){
            option.selected = true;
        }

    });
    updateTeam();
    updatePick();
}