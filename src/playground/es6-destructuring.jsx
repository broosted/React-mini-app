//object destructuring

const person = {

    name: 'John',
    age: 25,
    location: {
        city: 'PHilia',
        temp: 92
    }
};

//default value for name
const {name: firstName = 'Anonymous', age} = person;
console.log(`${firstName} is ${age}`);
//alias for city as medina
const {temp, city: medina} = person.location;
console.log(`It's ${temp} in ${medina}`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);



//array destructuring

const address = ['1299 S Juniper Street', 'Phili', 'Pennsylvania', '19147'];

//default value could be put
const [,city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00','$2.50', '$2.75'];
const [coffee,price, price1, price2] = item;
console.log(`A medium ${coffee} costs ${price1}`);