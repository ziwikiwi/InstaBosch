var secrets = require('../config');
var FoellingerController = require('../controllers/FoellingerController')
var UnionController = require('../controllers/UnionController')

module.exports = function (router) {

    router.route('/').get(function (req, res) {
        res.json({ message: 'My api works' });
    });

    router.route('/foellinger').post(FoellingerController.imagePost);
    router.route('/foellinger').get(FoellingerController.imageGet);
    router.route('/foellinger/:id').get(FoellingerController.imageGetId);
    router.route('/foellinger/:id').put(FoellingerController.imageUpdate);
    router.route('/foellinger/:id').delete(FoellingerController.imageDelete);
    router.route('/foellinger/month/:id').get(FoellingerController.imageGetMonth);
    router.route('/foellinger/date/:id').get(FoellingerController.imageGetDate);
    router.route('/foellinger/day/:id').get(FoellingerController.imageGetDay);

    router.route('/union').post(UnionController.imagePost);
    router.route('/union').get(UnionController.imageGet);
    router.route('/union/:id').get(UnionController.imageGetId);
    router.route('/union/:id').put(UnionController.imageUpdate);
    router.route('/union/:id').delete(UnionController.imageDelete);
    router.route('/union/month/:id').get(UnionController.imageGetMonth);
    router.route('/union/date/:id').get(UnionController.imageGetDate);
    router.route('/union/day/:id').get(UnionController.imageGetDay);
    return router;
}
