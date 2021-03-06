import quests from '../data/quest-data.js';

export function hasCompletedAllQuests(userObject){
    for (let quest of quests){
        if (!userObject.completed[quest.id]){
            return false;
        }
    }
    return true;
}

export function dead(user){
    return user.hp <= 0;
}