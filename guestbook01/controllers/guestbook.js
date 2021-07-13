const model = require("../models/guestbook");
module.exports = {
    index: async function (req, res, next) {
        const results = await model.findAll();
        //console.log(results);
        res.render("index", {
            list : results || []
        });
    },
    deleteform: function (req, res, next) {
        res.render("deleteform",{
            no : req.params.no || 0
        });
    },
    delete: async function (req, res, next) {
        const results = await model.delete(req.body);
        console.log(results);
        res.redirect("/");
    },
    add: async function (req, res, next) {
        const result = await model.insert(req.body);
        console.log(result);
        res.redirect("/");
    }
}