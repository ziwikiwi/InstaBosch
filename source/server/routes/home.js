var secrets = require('../config');
var FoellingerController = require('../controllers/FoellingerController')

module.exports = function (router) {

    router.route('/').get(function (req, res) {
        res.json({ message: 'My api works' });
    });

    router.route('/foellinger').post(FoellingerController.imagePost);
    router.route('/foellinger').get(FoellingerController.imageGet);
    router.route('/foellinger/:id').get(FoellingerController.imageGetId);
    router.route('/foellinger/:id').put(FoellingerController.imageUpdate);
    router.route('/foellinger/:id').delete(FoellingerController.imageDelete);

    return router;
}
