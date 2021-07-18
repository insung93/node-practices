const models = require('../models');

module.exports = {
    index: async function (req, res) {
        try {
            const menu = {"selected":req.params.menu}
            switch(req.params.menu){
                case "main":
                    const site = await models.Site.findOne({
                        attributes: ['title', 'welcome', 'profile', 'description']
                    });
                    res.render('admin/main', { site, menu});
                    break;
                case "guestbook":
                    res.render('admin/guestbook',{menu});
                    break;
                case "board":
                    res.render('admin/board',{menu});
                    break;
                case "user":
                    res.render('admin/user',{menu});
                    break;
            } 
        } catch (e) {
            next(e);
        }
    }

}
