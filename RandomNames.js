const fs = require('fs');
const { faker } = require('@faker-js/faker');

fs.writeFileSync('Fake-Names.txt', 'Random Names' + "\r\n\r\n",function(err,data){
    if (err){
        console.log ("Error.");
    }
        else{
        console.log(data);
        }
    }
);

for (i = 0; i<1001; i++){
    const randomName = faker.name.findName();
    fs.appendFileSync('Fake-Names.txt', randomName + "\r\n");
}
console.log ("Random Names Created.");