class User {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

let users = [
    new User(1, "Anna", 15),
    new User(2, "Maria", 30),
    new User(3, "John", 45),
    new User(4, "Stiven", 60),
];


function sleep(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Done!"), timeout);
    });
}

async function getUser(user_id) {
    await sleep(2000);
    return users.find((user) => user.id == user_id);
}

const loadUsersInParallel = async (user_ids) => {
    let downloadedUsers = [];

    for (let index in user_ids) {
        let user = getUser(user_ids[index]);
        downloadedUsers.push(user);
    }
    return Promise.all(downloadedUsers);
};

const loadUsersSequentially = async (user_ids) => {
    let downloadedUsers = [];

    for (let index in user_ids) {
        await getUser(user_ids[index]).then(result => {
            console.log(`User ${user_ids[index]} downloaded`);
            downloadedUsers.push(result);
        });
    }
    return downloadedUsers;
};

console.log("Download users in parallel mode")
loadUsersInParallel([3, 1, 4])
.then(result => {
    console.log(result);
    console.log();
})
.then(() => {
    console.log("Download users in sequential mode")
    loadUsersSequentially([2, 4, 1])
    .then(result => {
        console.log(result);
    })
});


