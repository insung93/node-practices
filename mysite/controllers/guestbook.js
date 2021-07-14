const models = require("../models");
module.exports = {
    index: async (req, res, next) => {
        const sq = models.sequelize.Sequelize;
        const results = await models.Guestbook.findAll({
            attributes: ["no","name","message",
            [sq.fn("date_format",sq.col("reg_date"),"%Y-%m-%d %H:%m:%s"),"regDate"]],
            order: [['no','DESC']]
    });
    console.log(results);
    res.render("guestbook/list",{guestbook : results || []});
    },
    deleteform: (req, res, next) => {
        res.render("guestbook/deleteform",{
            no : req.params.no || 0
        });
    },
    delete: async function (req, res, next) {
        const results = await models.Guestbook.destroy({
            where : {
                no : req.body.no,
                password : req.body.password
            }
        });
        if(results==0) {
            
        }
        res.redirect("/guestbook");
    },
    add: async function (req, res, next) {
        const result = await models.Guestbook.create({
            name: req.body.name,
            password: req.body.pass,
            message: req.body.content,
            regDate: new Date()
        });
        res.redirect("/guestbook");
    }
}