import quests from '../data/quest-data.js';
import { getUser, hasCompletedAllQuests, loadProfile } from '../utils.js';

const mapLinks = document.getElementById('map-links');
console.log(mapLinks);

const user = getUser();
loadProfile();

if (hasCompletedAllQuests(user)){
    window.location.replace('../win');
}

if (user.hp <= 0){
    window.location.replace('../gameover');
}
// if (user.hp <= 0 || hasCompletedAllQuests(user)){
//     window.location.replace('../gameover');
// }

for (let quest of quests){
    console.log(quest.id);
    console.log(user);

    if (user.completed[quest.id]){
        displaySpan(quest);
    } else {
        displayLink(quest);
    }
} 

function displayLink(quest){
    // console.log(quest);
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;
    a.classList.add('quest');
    a.style.top = quest.map.top;
    a.style.left = quest.map.left;

    mapLinks.appendChild(a);
}

function displaySpan(quest){
    const span = document.createElement('span');
    span.textContent = quest.title;
    span.classList.add('quest');
    span.style.top = quest.map.top;
    span.style.left = quest.map.left;

    mapLinks.appendChild(span);
}