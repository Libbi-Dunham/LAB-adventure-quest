import { generateUser, setUser } from '../utils.js';

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