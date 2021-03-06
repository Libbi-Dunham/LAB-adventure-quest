import { generateUser, setUser, getUser, scoreQuest, hasCompletedAllQuests } from '../utils.js';

const test = QUnit.test;

test('generateUser should return a userObject', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        completed: {},
        gold: 0,
        hp: 100,
        name: 'libbi',
        avatar: 'harry',
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const formData = new FormData();
    formData.set('name', 'libbi');
    formData.set('avatar', 'harry');

    const actual = generateUser(formData);

   
    expect.deepEqual(actual, expected);
});

test('setUser should save user to localStorage', (expect) => {
    localStorage.removeItem('USER');
    const userObject = {
        completed: {},
        gold: 0,
        hp: 100,
        name: 'libbi',
        avater: 'harry',
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    setUser(userObject);
    const actual = JSON.parse(localStorage.getItem('USER'));

   
    expect.deepEqual(actual, userObject);
});

test('getUser should return the user object from localStorage', (expect)=>{
    const userObject = {
        completed: {},
        gold: 0,
        hp: 100,
        name: 'libbi',
        avatar: 'harry',
    };

    setUser(userObject);
    const actual = getUser();
    expect.deepEqual(actual, userObject);
});

test('scoreQuest should update gold, hp and completed on the userObject', (expect)=>{
    const userObject = {
        completed: {},
        gold: 0,
        hp: 100,
        name: 'libbi',
        avatar: 'harry',
    };
    const choiceObject = {
        id: 'fly',
        description: 'Fly Away!',
        result: `
        Knowing that, that would be a dangerous choice because there is no where to go. A total of 20 gold is take and 10 hp!.
    `,
        hp: -10,
        gold: -20
    };
    const questId = 'labyrinth';

    scoreQuest(choiceObject, questId, userObject);

    expect.equal(userObject.hp, 90);
    expect.equal(userObject.gold, -20);
    expect.equal(userObject.completed[questId], true);
});

test('hasCompletedAllQuests returns true if the user has completed all quests', (expect)=>{
    const user = {
        completed: { dragons: true, lake: true, labyrinth: true },
    };
    const actual = hasCompletedAllQuests(user);
    console.log(actual);
    expect.equal(actual, true);
});

test('hasCompletedAllQuests returns false if the user has not completed all quests', (expect)=>{
    const userObject = {
        completed: { },
    };
    const actual = hasCompletedAllQuests(userObject);
    expect.equal(actual, false);
});