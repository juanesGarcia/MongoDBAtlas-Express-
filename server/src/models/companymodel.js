const mongos = require('mongoose');

const companySchema = mongos.Schema({
    name:{
        type: String,
        required:true
    },
    foundation:{
        type:Number,
        required: true,
    }
})


module.exports= mongos.model('Company', companySchema);