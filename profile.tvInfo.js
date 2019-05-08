var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var tvInfoSchema = new Schema (
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
)

module.exports = tvInfoSchema;
