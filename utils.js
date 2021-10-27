import quests from './data/quest-data.js';

export function generateUser(formData){
    return {
        completed: {},
        gold: 60,
        hp: 10,
        name: formData.get('name'),
        avatar: formData.get('avatar'),
    };
}

export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem('USER', userString);
}

export function findById(items, id){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function getUser(){
    const userString = localStorage.getItem('USER');
    return JSON.parse(userString);
}

export function scoreQuest(choiceObject, questId, userObject){
    userObject.hp += choiceObject.hp;
    userObject.gold += choiceObject.gold;
    userObject.completed[questId] = true;

}

export function hasCompletedAllQuests(userObject){
    for (let quest of quests){
        if (!userObject.completed[quest.id]){
            return false;
        }
    }
    return true;
}

export function loadProfile(){
    const user = getUser();
    
    const img = document.getElementById('user-image');
    img.src = `../assets/${user.avatar}.png`;
    console.log(user);
    const name = document.getElementById('user-name');
    name.textContent = user.name;
    const gold = document.getElementById('user-gold');
    gold.textContent = user.gold;
    const hp = document.getElementById('user-hp');
    hp.textContent = user.hp;
}