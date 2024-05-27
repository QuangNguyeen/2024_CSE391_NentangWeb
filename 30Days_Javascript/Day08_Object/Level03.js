const personAccount = {
    firstName: 'Nguyen Van',
    lastName: 'Quang',
    income: 100000,
    expenses: 5000,

    totalIncome: function (){
        return this.income
    },
    totalExpenses: function (){
        return this.expenses
    },
    accountInfo: function (){
        return this.firstName + ' ' + this.lastName
    },
    addIncome: function (newIncome){
        this.income.push(newIncome)
    },
    addExpense: function (newExpense){
        this.expenses.push(newExpense)
    },
    accountBalance: function (){
        return this.income - this.expenses
    }

}
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]
function generateId() {
    return Math.random().toString(36).substr(2, 6);
}
function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' });
}
function signUp(username, email, password) {
    const userExists = users.some(user => user.email === email);
    if(userExists){
        console.log('User already exists');
        return
    }

    const newUser = {
        _id: generateId(),
        username: username,
        email: email,
        password: password,
        createdAt: getCurrentDateTime(),
        isLoggedIn: false
    }
    users.push(newUser)
    console.log('User successfully signed up.')
}
function signIn(email, password) {
    const user = users.find(user => user.email === email);
    if(!user){
        console.log('User not found');
        return
    }
    if(user.password !== password){
        console.log('Incorrect password');
        return
    }

    user.isLoggedIn = true
    console.log('User successfully signed in.')
}

signUp('John', 'john@john.com', '123456')
signIn('john@john.com', '123456')