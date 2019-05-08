var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TvInfo = require('./profile.tvInfo');



var TvInfoListSchema = new Schema[
    {
        googleId :  {
            type : String
        },
        linkedDevices : [
            TvInfo
        ]
    }
]

module.exports = TvInfoListSchema;
