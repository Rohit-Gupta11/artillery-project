const faker = require('faker');
const fs = require('fs');
const _ = require('lodash');

let csvHeaders = {
    Email: faker.internet.exampleEmail(),
    Password: faker.internet.password(10)
}

let stream = fs.createWriteStream("signup.csv");

stream.write(Object.keys(csvHeaders).toString()+ "\n");

let csvBody = [];
for (let i = 0; i < 100; i++) {
    _.forEach(csvHeaders, function(value, key){
        csvBody.push(value);
    })
    
    stream.write(csvBody.toString()+ "\n");
    csvBody = [];


}

stream.end(); 