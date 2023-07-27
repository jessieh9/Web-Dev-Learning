// Native MongoDB Driver

// const { MongoClient } = require('mongodb');
// // or as an es module:
// // import { MongoClient } from 'mongodb'

// // Connection URL
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'fruitsDB';

// async function main() {
//     // Use connect method to connect to the server
//     await client.connect();
//     console.log('Connected successfully to server');
//     const db = client.db(dbName);
//     const collection = db.collection('fruits');

//     const insertResult = await collection.insertMany([
//         {
//             name: "Apple",
//             score: 8,
//             review: "Okay fruit, kinda cronchy"
//         },
//         {
//             name: "Orange",
//             score: 6,
//             review: "Kinda sour and acidic"
//         },
//         {
//             name: "Banana",
//             score: 9,
//             review: "Mushy smushy love"
//         }]);
//     console.log('Inserted documents =>', insertResult);
//     const findResult = await collection.find({}).toArray();
//     console.log('Found documents =>', findResult);

//     return 'done.';
// }


// main()
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => client.close());


// Using mongoose
const mongoose = require('mongoose');

// will connect to localhost on port 27017 and try to find fruitsDB, if doesn't exist will create it
mongoose.connect('mongodb://localhost:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "What fruit is this? No name specified"]
    },
    // adding validation
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

// the 1st parameter inside model() is the collection name 
// (use singular becuase mongoose will convert it to plural automatically)
const Fruit = mongoose.model("Fruit", fruitSchema);


// creating new documents for the fruits
// const apple = new Fruit({
//     name: 'Apple',
//     rating: 7,
//     review: "Pretty solid as a fruit."
// });

// const kiwi = new Fruit({
//     name: 'Kiwi',
//     rating: 2,
//     review: "I HATE KIWIS"
// });

// const banana = new Fruit({
//     name: 'Banana',
//     rating: 7,
//     review: "Cute and versatile babey"
// });

// inserting multiple the fruits
// Fruit.insertMany([apple, kiwi, banana])
//     .then(function () {
//         console.log("Successfully saved all the fruits to fruitsDB");
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

// Triggers the required name 
// const fruit = new Fruit({
//     rating: 5,
//     review: "Peaches are so yummmyyy"
// });

const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: "JUICIEST phattest yummiest pp fruit"
});

const pear = new Fruit({
    name: "Pear",
    score: 8,
    review: "CRONCHY SMONCHY YUMMY SMOOLA"
});

pear.save();

// pineapple.save();

// Reading from DB
Fruit.find()
    .then(function (fruits) {
        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });
        // console.log(fruits);
        // mongoose.connection.close();  // closes the connection when we are done
    })

    .catch(function (err) {
        console.log(err);
    });

// fruit.save();  // saves the fruit document into the collection
// console.log("Saved Apple");

// Deleting 
// Fruit.deleteOne({ _id: "64c29840183d56a9adb11034" })
//     .then(() => {
//         console.log("Successfully Deleted");
//     })
//     .catch((err) => {
//         console.log(err);
//     });

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema    // this shows that we are embedding a fruitSchema document here
});

const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//     name: "John",
//     age: 37
// });

const person = new Person({
    name: "Amy",
    age: 12,
    favoriteFruit: pineapple
});

Person.updateOne({ name: "John" }, { favoriteFruit: pear })
    .then(() => {
        console.log("Updated John with fave fruit");
    }).catch((err) => {
        console.log(err);
    });
// person.save();
