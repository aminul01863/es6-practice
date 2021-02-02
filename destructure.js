const person = { name: 'aminul', age: '20', job: 'developer', address: 'borisHal', phone: '133244895' }
// const name = person.name;
// const phone = person.phone
// const { name, phone, job, salary } = person;
// console.log(name, phone, job, salary);
// console.log(name, phone, job, salary);

const friends = ['shakib khan', 'amin khan', 'amir khan', 'salman khan'];
const [first, next, ...rest] = friends;
console.log(rest);