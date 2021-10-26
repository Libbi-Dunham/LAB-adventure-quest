const dragons = {
    id: 'dragons',
    title: 'task one',
    map: {
        top: '20%',
        left: '20%'
    },
    image: 'dragon.png',
    description: `
        You have entered the arena to snatch the golden egg from a nest but to get it you have to get around the dragon! What do you do?
    `,
    choices: [{
        id: 'fly',
        description: 'Fly Away!',
        result: `
            Knowing that is against the rules of the Triwizard Tournament you have lost the first task. A total of 40 gold has been taken.
        `,
        hp: 0,
        gold: -40
    }, {
        id: 'fight',
        description: 'Slay the Dragon',
        result: `
            Running away and hiding from the dragon you decide to use your wand to slay the dragon. After that you call your broom and fly off to finally circle around and get the golden egg! You are rewarded 60 gold and 10 hp!
        `,
        hp: 10,
        gold: 60
    }, {
        id: 'hide',
        description: 'Hide under your invisibility cloak',
        result: `
            Due to your actions of hiding and not praticpating in the task you loose 35 gold and 5 hp!
        `,
        hp: -5,
        gold: -35
    }]
}; 

const lake = {
    id: 'lake',
    title: 'task two',
    map: {
        top: '20%',
        left: '20%'
    },
    image: 'lake.jpg',
    description: `
        You are down at Hogwarts Lake to retrieve something valuable but there are mermaids you have to get around. What do you do?
    `,
    choices: [{
        id: 'fly',
        description: 'Fly Away!',
        result: `
        Knowing that is against the rules of the Triwizard Tournament you have lost the first task. A total of 40 gold has been taken.
    `,
        hp: 0,
        gold: -40
    }, {
        id: 'fight',
        description: 'Retrieve the Valuable',
        result: `
            After swimming through the lake and fighting off the mermaids you have reached your valuable possession and resqued him and your teammates valuable as well! You are rewarded 100 gold and 30 hp!
        `,
        hp: 100,
        gold: 30
    }, {
        id: 'hide',
        description: 'Hide under your invisibility cloak',
        result: `
            Due to your actions of hiding and not praticpating in the task you loose 35 gold and 5 hp!
        `,
        hp: -5,
        gold: -35
    }]
};

const labyrinth = {
    id: 'labyrinth',
    title: 'task three',
    map: {
        top: '20%',
        left: '20%'
    },
    image: 'maze.jpg',
    description: `
        You have entered the trap-laden labyrinth and have to make your way through and retrieve the Triwizard Cup. Although at the end once you grab the cup you relize it was a portkey and have to face Voldemort. What do you do?
    `,
    choices: [{
        id: 'fly',
        description: 'Fly Away!',
        result: `
        Knowing that, that would be a dangerous choice because there is no where to go. A total of 20 gold is take and 10 hp!.
    `,
        hp: -10,
        gold: -20
    }, {
        id: 'fight',
        description: 'Retrieve the Valuable',
        result: `
            After loosing a great friend Cedric you have no choice but to go against Voldemort. The both of you raise your wands and are battling when you let go, grap the cup, and return to the arena! A total of 200 gold is rewared but 15 hp are taken due to loosing your friend.
        `,
        hp: -15,
        gold: 200
    }, {
        id: 'hide',
        description: 'Hide under your invisibility cloak',
        result: `
            Due to your actions of hiding and not praticpating in the task you loose 35 gold and 5 hp!
        `,
        hp: -5,
        gold: -35
    }]
};

const quests = [
    dragons,
    lake,
    labyrinth,
];

export default quests;