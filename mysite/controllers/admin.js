const models = require('../models');

module.exports = {
    index: async function (req, res) {
        try {
            const site = await models.Site.findOne({
                attributes: ['title', 'welcome', 'profile', 'description']
            });
            res.render('admin/main', { site });
        } catch (e) {
            next(e);
        }
    }

}
