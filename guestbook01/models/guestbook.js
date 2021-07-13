const dbconn = require("./dbconn");
const util = require('util');
const guestbook = require("../controllers/guestbook");

// const promisify = function(f) {
//     return function() {
//         return new Promise(function(resolve, reject){
//             f.apply(arguments, function() {

//             });
//         });
//     };
// };
// f = promisify(conn.query)
// res = await f("sql",[]);

module.exports = {
    findAll: async function () {
        const conn = dbconn();
        //const query = (sql, data) => new Promise((resolve, reject) => conn.query(sql, data, (error, rows, field) => error ? reject(error) : resolve(rows)));
        const query = util.promisify(conn.query).bind(conn);
        try {
            const results = await query('select no, name, date_format(reg_date,"%Y-%m-%d") regDate , message from guestbook order by 1 desc', []);
            return results;
        } catch (e) {
            console.error(e);
        } finally {
            conn.end();
        }
        console.log(conn);
    },
    insert: async function (guestbook) {
        console.log(guestbook);                 // 객체
        console.log(Object.values(guestbook));  // 배열
        const conn = dbconn();
        const query = util.promisify(conn.query).bind(conn);
        try {
            const results = await query("insert into guestbook values(null,?,?,now(),?)", Object.values(guestbook));
            return results;
        } catch (e) {
            console.error(e);
        } finally {
            conn.end();
        }
        console.log(conn);
    },
    delete: async function (req) {
        console.log(req);                 // 객체
        const conn = dbconn();
        const query = util.promisify(conn.query).bind(conn);
        try {
            const results = await query("delete from guestbook where no = ? and password = ?", Object.values(req));
            return results;
        } catch (e) {
            console.error(e);
        } finally {
            conn.end();
        }
        console.log(conn);
    }
}