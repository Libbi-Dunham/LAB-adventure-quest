import quests from '../data/quest-data.js';

const mapLinks = document.getElementById('map-links');
console.log(mapLinks);

for (let quest of quests){
    console.log(quest);
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;

    mapLinks.appendChild(a);
}