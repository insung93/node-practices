const models = require('../models');
const moment = require('moment');
const sequelize = require('sequelize');

module.exports = {
    index: async function (req, res, next) {
        const board = await models.Board.findAll({
            include: {
                model: models.User,
                required: true
            },
            order: [
                ['no', 'desc']
            ],
        })
        res.render('board/list', { board, moment });
    },
    view: async function (req, res, next) {
        const board = await models.Board.findOne({
            where: {
                no: req.params.no
            },
            include: {
                model: models.User,
                required: true
            }
        });
        await models.Board.update(
            {hit : board.hit + 1 },
            {
                where: {
                    no: req.params.no
                },
                returning:true,
                plain: true
            }
        );
        res.render('board/view', { board });
    },
    modify: async function (req, res, next) {
        const board = await models.Board.findOne({
            where: {
                no: req.params.no
            }
        })
        res.render('board/modify', { board });
    },    
    _modify: async function (req, res, next) {
        await models.Board.update(
            Object.assign(req.body),
            {
                where: {
                no: req.params.no
            }}
        )
        res.redirect('/board/view/'+req.params.no);
    },
    write: async function (req, res, next) {
        res.render('board/write');
    },
    _write: async function (req, res, next) {
        const maxValue = await models.Board.max('groupNo');
        const result = await models.Board.create({
            title : req.body.title,
            contents : req.body.contents,
            hit : 0,
            groupNo : isNaN(maxValue) ? 1 : maxValue + 1,
            orderNo : 1,
            depth : 0,
            userNo : req.session.authUser.no
        })
        console.log(result);
        res.redirect('/board/view/'+result.dataValues.no);
    },
}