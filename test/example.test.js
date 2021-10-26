import { generateUser, setUser, getUser, scoreQuest } from '../utils.js';

const test = QUnit.test;

test('generateUser should return a userObject', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        completed: {},
        gold: 60,
        hp: 10,
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
        gold: 60,
        hp: 10,
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
        gold: 60,
        hp: 10,
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
        gold: 60,
        hp: 10,
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

    expect.equal(userObject.hp, 0);
    expect.equal(userObject.gold, 40);
    expect.equal(userObject.completed[questId], true);
});