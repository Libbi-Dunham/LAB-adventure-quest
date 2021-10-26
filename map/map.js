import quests from '../data/quest-data';

const mapLinks = document.getElementById('map-links');

for (let quest of quests){
    const a = document.createElement('a');
    a.href = `../quest/?=${quest.id}`;
    a.textContent = quest.title;

    mapLinks.appendChild(a);
}