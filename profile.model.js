var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var herosSchema = new Schema({
//     name :{
//         type: String,
//         unique : false,
//         required : true
//     },
//     description : {
//         type: String,
//         unique : false,
//         required : true
//     }
// }, {
//     timestamps: true
// });

// module.exports = herosSchema;



var profileSchema = new Schema
({
    cwId : {
        type : String 
    }, 
    userName : {
        type : String 
    },
    dob : {
        type : String 
    },
    mobileNumber : {
        type : String 
    },
    gender : {
        type : String 
    },
    email : {
        type : String 
    },
    genre : [
        {
            type : String
        }
    ],
    launguage : [
        {
            type : String
        }
    ],
    contentType : [
        {
            type : String
        }
    ],
    linkedDevices : [
        {
            emac : {
                type : String
            },
            boardName : {
                type : String
            },
            panelName : {
                type : String
            }
        }
    ]
});


module.exports = profileSchema;
