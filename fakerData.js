'use strict'
var faker = requiere('faker')
module.exports = {task}

function task(taskContext, events, done){
//variable
var content = faker.lorem.sentence(4,7);

taskContext.vars.content = content;

return done();
}