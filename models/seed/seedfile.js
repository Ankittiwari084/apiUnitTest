var mongoose = require('mongoose');

require('../all-models').toContext(global);


//------------------------
// ADD SEEDS BELOW
//------------------------


// suggested module for generating fake contextual data
// var Faker = require('faker');


// For Example

Users.create([
    {
        name: 'andy', age: 24,email:'andy@gmail.com',mobile:'8585858585',placementId:null,sponserId:null,placement:null,userId:'andy',password:12345,status:true,active:1
    },
    {
    name: 'ankit', age: 24,email:'ankit@gmail.com',mobile:'8574747474',placementId:'andy',sponserId:'andy',placement:'left',userId:'ankit',password:12345,status:true,active:1
    },
    {
        name: 'amit', age: 24,email:'amit@gmail.com',mobile:'8574744774',placementId:'andy',sponserId:'andy',placement:'right',userId:'amit',password:12345,status:true,active:1
    },
    {
        name: 'Sunil', age: 24,email:'suni@gmail.com',mobile:'8574747474',placementId:'ankit',sponserId:'ankit',placement:'left',userId:'suni',password:12345,status:true,active:1
    },
    {
        name: 'rakesh', age: 24,email:'rakesh@gmail.com',mobile:'8574744774',placementId:'ankit',sponserId:'ankit',placement:'right',userId:'rakesh',password:12345,status:true,active:1
    },
  
])

.then(() => {
  console.log("Seed complete!")  
  mongoose.connection.close();
});

// be sure to close the connection once the queries are done

