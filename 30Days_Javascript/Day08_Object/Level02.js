const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
let countLoggedUser = 0
let countUserHaveThan50Point = 0
for(let user of Object.values(users)) {
    if(user.isLoggedIn){
        countLoggedUser++
    }
    if(user.points >= 50){
        countUserHaveThan50Point++
    }
}
console.log(`Logged-in users: ${countLoggedUser}`)
console.log(`Users with points >= 50: ${countUserHaveThan50Point}`)

const isMERNStackDeveloper = user => {
    const mernSkills = ['MongoDB', 'Express', 'React', 'Node'];
    return mernSkills.every(skill => user.skills.includes(skill));
};

let mernDevelopers = [];

for (let [key, user] of Object.entries(users)) {
    if (isMERNStackDeveloper(user)) {
        mernDevelopers.push(key);
    }
}

console.log(`MERN Stack Developers: ${mernDevelopers.join(', ')}`);


const newUser = {
    email: 'myemail@example.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 25,
    isLoggedIn: false,
    points: 45
};

const updatedUsers = {
    ...users,
    MyName: newUser
};
console.log(updatedUsers);

const userKeys = Object.keys(users);
console.log(`User Keys: ${JSON.stringify(userKeys)}`);

const userValues = Object.values(users);
console.log(`User Keys: ${JSON.stringify(userValues)}`);

const countries = {
    Vietnam: {
        capital: 'Hanoi',
        population: 97338579,
        languages: ['Vietnamese']
    },
    // other countries...
};

const country = 'Vietnam';
const countryInfo = countries[country];

console.log(`Country: ${country}`);
console.log(`Capital: ${countryInfo.capital}`);
console.log(`Population: ${countryInfo.population}`);
console.log(`Languages: ${countryInfo.languages.join(', ')}`);




