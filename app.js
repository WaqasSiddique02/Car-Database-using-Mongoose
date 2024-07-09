const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/carsDB");
const Schema= mongoose.Schema;

const carSchema=new Schema({
    name: {
        type: String,
        required:[true,'No name found']
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    review: String
});

const Car =mongoose.model("Car",carSchema);

// const car =new Car({
//     name:"Mehran",
//     rating: 4,
//     review: "Good car"
// });

// const corolla =new Car ({
//     name:"Corolla",
//     rating: 4.5,
//     review: "Good car"
// });

// const h2r=new Car({
//     name:"H2R",
//     rating: 5,
//     review: "Good Bike"
// });

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

// Car.updateOne(
//     { _id: '668cf4d28dd7a29e5bb27b45' },  
//     { $set: { name: 'BMW SR1000' } }     
// )
// .then(function(result){
//     console.log("Successful");
// })
// .catch(function(err){
//     console.error(err);
// });


Car.deleteOne({rating:5})
.then(function(result){
    console.log("Successfully deleted");
})
.catch(function(err){
    console.error(err);
});