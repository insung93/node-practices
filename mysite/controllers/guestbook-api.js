const moment = require('moment');
const models = require('../models');
const { Op } = require("sequelize");

module.exports = {

    create: async function (req, res, next) {
        try {
            const result = await models.Guestbook.create(req.body);
            console.log(req.body);
            res.status(200).send({
                result: 'success',
                data: result,
                message: null
            });
        } catch (e) {
            next(e);
        }
    },

    read: async function (req, res, next) {
        const startNo = req.params.sno || 0;
        const results = await models.Guestbook.findAll({
            attributes: ['no', 'name', 'message'],
            where: 
                (startNo > 0) ? {no : {[Op.lt]:startNo}}:{}
            ,
            order: [
                ['no', 'DESC']
            ],
            limit: 3
        })
        res.status(200).send({
            result: 'success',
            data: results
        })

    },
    delete: async function (req, res, next) {
        console.log(req.params.no + ":" + req.body.password);
        // sql delete
        const results = await models.Guestbook.destroy({
            where: req.body
        });
        res.status(200).send({
            result: 'success',
            data: req.params.no,
            message: null
        })
    }

}
/*
(READ)
GET /api/guestbook?sno=10&cnt=5
--------------------

(DELETE)
delete /api/guestbook/10
----------------------
password=1234

(CREATE)
post /api/guestbook
---------------------
{
        name:"둘리",
        password: '1234',
        message: '호이'
}

(Update)
put /api/guestbook/10
----------------------
{
        password : '12345',
        message : '호이2'
}
*/