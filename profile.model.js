var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TvInfo = require('./profile.tvInfo');

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
    imageUrl : {
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
        TvInfo
    ]
});


module.exports = profileSchema;
