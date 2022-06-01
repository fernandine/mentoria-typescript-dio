
enum Job {
    Vigilant,
    Secretary
}

type Client = {
    name: string,
    age: number,
    occupation: Job
}

let client1: Client = {
    name: 'Mary',
    age: 29,
    occupation: Job.Secretary
};

let client2: Client = {
    name: 'Bob',
    age: 19,
    occupation: Job.Vigilant
};

let client3: Client = {
    name: 'Alex',
    age: 32,
    occupation: Job.Secretary
};

let client4: Client = {
    name: "carl",
    age: 19,
    occupation: Job.Vigilant
}