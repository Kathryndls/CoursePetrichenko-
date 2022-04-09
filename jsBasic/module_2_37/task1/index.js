const users = require('../array'); 

    const result = {};

    for(let i = 0; i < users.length; i++) {
        result[users[i].id] = users[i];
    }

    console.log(result);

