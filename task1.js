class User {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    printAddress() {
        return `{\n\t\tcity: ${this.address.city},\n\t\tstreet: ${this.address.street},\n\t\thouse_number: ${this.address.house}\n\t}`
    }

    print() {
        return `User {\n\tname: ${this.name},\n\tage: ${this.age},\n\taddress: ${this.printAddress()}\n}`;
    }
}

function getTotalAge(users) {
    let total_age = 0;
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        total_age += user.age;
    }
    return total_age;
}

function getUserStreets(users) {
    let users_streets = [];

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        users_streets.push(user.address["street"]);
    }
    return users_streets;
}

function getOldPeple(users) {
    let old_users = [];
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.age > 60) old_users.push(user.print());
    }
    return old_users;
}


const users = [
    new User("Konstantin", 20, { city: "Москва", street: "Левая", house: "10" }),
    new User("Evelina", 20, { city: "Москва", street: "Левая", house: "10" }),
    new User("John", 60, { city: "Москва", street: "Левая", house: "10" }),
    new User("Maria", 70, { city: "Москва", street: "Левая", house: "10" }),
]

console.log(users);
console.log("Users older than 60:\n" + getOldPeple(users));
console.log("Total user age: " + getTotalAge(users));
console.log("User streets: " + getUserStreets(users));
