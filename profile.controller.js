var Heros = require('./profile.dao');
var HeroSchema = require('./profile.model');

exports.createHero = function (req, res, next) {
    var hero = {
        cwId : req.body.cwId,
        userName : req.body.userName,
        dob : req.body.dob,
        mobileNumber : req.body.mobileNumber,
        gender : req.body.gender,
        email : req.body.email,
        genre : req.body.genre,
        launguage : req.body.launguage,
        contentType : req.body.contentType,
        linkedDevices : req.body.linkedDevices
    }

    Heros.create(hero, function(err, hero) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Hero created successfully"
        })
    })
}

exports.getHeros = function(req, res, next) {
    Heros.get({}, function(err, heros) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            heros: heros
        })
    })
}

exports.getHero = function(req, res, next) {
    Heros.get({cwId: req.params.cwId}, function(err, heros) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            heros: heros
        })
    })
}

exports.updateHero = function(req, res, next) {
    var hero = {
        name: req.body.name,
        description: req.body.description
    }
    Heros.update({_id: req.params.id}, hero, function(err, hero) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Hero updated successfully"
        })
    })
}

exports.removeHero = function(req, res, next) {
    Heros.delete({_id: req.params.id}, function(err, hero) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Hero deleted successfully"
        })
    })
}