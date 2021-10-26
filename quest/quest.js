import quests from '../data/quest-data.js';
import { findById } from '../utils.js';

const params = new URLSearchParams(window.location.search);
console.log(params);
const questData = findById(quests, params.get('id'));

console.log(questData);

const title = document.getElementById('quest-title');
console.log(title);
title.textContent = questData.title;
const img = document.getElementById('quest-image');
img.src = `../assets/${questData.image}`;
const description = document.getElementById('quest-description');
description.textContent = questData.description;

const questChoices = document.getElementById('quest-choices');
for (let choice of questData.choices){
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.required = 'radio';
    input.value = choice.id;

    const span = document.createElement('span');
    span.textContent = choice.description;
    label.append(input, span);
    questChoices.append(label);
}
const button = document.createElement('button');
button.textContent = 'choose';
questChoices.append(button);

questChoices.addEventListener('submit', (e)=>{
    e.preventDefault();
});