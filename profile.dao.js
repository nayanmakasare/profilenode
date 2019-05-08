var mongoose = require('mongoose');
var herosSchema = require('./profile.model');

herosSchema.statics = {
    create : function(data, cb) {
        var hero = new this(data);
        hero.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByName: function(query, cb) {
        this.findOne(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    },

    addNewDevice: function(query, tvInfoData , cb){
        this.findOneAndUpdate(query, {$push : tvInfoData}, cb);
    },

    removeLinkDevice: function(query, tvInfoData , cb){
        this.findOneAndUpdate(query,{$pull: {linkedDevices: tvInfoData}},cb);
    }
}

var herosModel = mongoose.model('Heros', herosSchema);
module.exports = herosModel;