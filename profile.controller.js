var Heros = require('./profile.dao');

exports.createHero = function (req, res, next) {

    Heros.get({ cwId: req.body.cwId }, function (err, heros) {
        if (heros && heros.length) {
            res.status(400).send("User already Present");
        } else {
            var hero = {
                cwId: req.body.cwId,
                userName: req.body.userName,
                dob: req.body.dob,
                mobileNumber: req.body.mobileNumber,
                gender: req.body.gender,
                email: req.body.email,
                genre: req.body.genre,
                launguage: req.body.launguage,
                contentType: req.body.contentType,
                linkedDevices: req.body.linkedDevices,
                imageUrl: req.body.imageUrl
            }

            Heros.create(hero, function (err, hero) {
                if (err) {
                    res.status(404).json({
                        error: err
                    })
                    return;
                }
                res.status(200).json(hero);
            })
        }
    })
}

exports.getHeros = function (req, res, next) {
    Heros.get({}, function (err, heros) {
        if (err) {
            res.status(404).json({
                error: err
            })
            return;
        }
        res.status(200).json(heros);
    })
}

exports.getHero = function (req, res, next) {
    Heros.getByName({ cwId: req.params.googleId }, function (err, hero) {
        if (err) {
            res.status(404).json({
                error: err
            })
            return;
        }
        res.status(200).json(hero)
    })
}

exports.updateHero = function (req, res, next) {
    var hero = {
        cwId: req.body.cwId,
        userName: req.body.userName,
        dob: req.body.dob,
        mobileNumber: req.body.mobileNumber,
        gender: req.body.gender,
        email: req.body.email,
        genre: req.body.genre,
        imageUrl: req.body.imageUrl,
        launguage: req.body.launguage,
        contentType: req.body.contentType,
        linkedDevices: req.body.linkedDevices
    }
    Heros.update({ cwId: req.params.googleId }, hero, function (err, hero) {
        if (err) {
            res.status(404).json({
                error: err
            })
            return;
        }
        res.status(200).json(hero);
    })
}

exports.removeHero = function (req, res, next) {
    Heros.delete({ _id: req.params.id }, function (err, hero) {
        if (err) {
            res.json({
                error: err
            })
            return;
        }
        res.status(200).json(hero);
    })
}


exports.linkNewDeviceToProfile = function (req, res, next) {
    Heros.getByName({ cwId: req.params.googleId }, function (err, hero) {
        if (err) {
            res.status(404).send(err.message)
            return;
        }

        if (hero) {
            var tvInfo = {
                emac: req.body.emac,
                boardName: req.body.boardName,
                panelName: req.body.panelName
            }

            hero.linkedDevices.push(tvInfo);
            hero.save().then(function (profile) {
                res.status(200).json(profile);
            });
        }
        else {
            res.status(400).send("User Profile not Present");
            return;
        }
    });
}


exports.getLinkDevices = function (req, res, next) {
    Heros.getByName({ cwId: req.params.googleId }, function (err, profile) {
        if (err) {
            res.json({
                error: err
            })
            return;
        }
        res.status(200).json(profile.linkedDevices);
    });
}

exports.deleteLinkDevice = function (req, res, next) {
    var tvInfo = {
        emac : req.body.emac,
        boardName : req.body.boardName,
        panelName : req.body.panelName
    }
    Heros.removeLinkDevice({ cwId: req.params.googleId }, tvInfo , function(err , profile){
        if (err) {
            res.json({
                error: err
            })
            return;
        }
        res.status(200).json(profile);
    });
}


exports.getTvHeros = function(req,res , next){
    console.log("getTvHeros")
    Heros.get({"linkedDevices.emac" : req.params.tvemac}, function(err, heros){
        if (err) {
            res.status(404).json({
                error: err
            })
            return;
        }
        res.status(200).json(heros);
    });
}

