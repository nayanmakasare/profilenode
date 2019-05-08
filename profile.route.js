var Heros = require('./profile.controller');

module.exports = function(router) {
    router.post('/profile', Heros.createHero);
    router.get('/profile/:googleId', Heros.getHero);
    router.put('/profile/:googleId', Heros.updateHero);
    router.delete('/remove/:id', Heros.removeHero);
    router.put('/linkdevice/:googleId', Heros.linkNewDeviceToProfile);
    router.get('/linkdevice/:googleId' , Heros.getLinkDevices);
    router.delete('/linkdevice/:googleId', Heros.deleteLinkDevice);
    router.get('/allProfile/:tvemac', Heros.getTvHeros);
}