const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/carsDB");
const Schema= mongoose.Schema;

const carSchema=new Schema({
    name: String,
    rating: Number,
    review: String
});

const Car =mongoose.model("Car",carSchema);

const car =new Car({
    name:"Mehran",
    rating: 4,
    review: "Good car"
});

const corolla =new Car ({
    name:"Corolla",
    rating: 4.5,
    review: "Good car"
});

const h2r=new Car({
    name:"H2R",
    rating: 5,
    review: "Good Bike"
});

// Car.insertMany([corolla, h2r])
//   .then(function(docs) {
//     console.log("Data inserted successfully in carsDB");
//   })
//   .catch(function(err) {
//     console.error(err);
//   });



// Car.find({})
// .then(function(docs) {
//     console.log(docs);
// })
// .catch(function(err){
//     console.error(err);
// });

Car.find({})
.then(function (docs) {
    mongoose.connection.close();
    docs.forEach(function(cars){
        console.log(cars.name);
    })
})
.catch(function (err) {
    console.error(err);
});