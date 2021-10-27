import { generateUser, setUser } from './utils.js';

const userForm = document.getElementById('user-form');

userForm.addEventListener('submit', (expect)=>{
    expect.preventDefault();
    const formData = new FormData(userForm);
    const userObj = generateUser(formData);
    setUser(userObj);
    window.location.replace('./map');
});
