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