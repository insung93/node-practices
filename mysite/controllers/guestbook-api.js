module.exports = {
    create: async function(req, res, next) {
        console.log(req.body);
        // sql insert
        res.status(200).send({
            result: 'success',
            data : Object.assign(req.body,{
                no: 10,
                password: '',
                regDate: new Date()
            }),
            message: null
        });
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