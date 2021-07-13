const dbconn = require("./dbconn");
const util = require('util');
const emaillist = require("../controllers/emaillist");

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
            const results = await query("select first_name as firstName, last_name as lastName, email from emaillist order by no desc", []);
            return results;
        } catch (e) {
            console.error(e);
        } finally {
            conn.end();
        }
        console.log(conn);
    },
    insert: async function (emaillist) {
        console.log(emaillist);                 // 객체
        console.log(Object.values(emaillist));  // 배열
        const conn = dbconn();
        const query = util.promisify(conn.query).bind(conn);
        try {
            const results = await query("insert into emaillist values(null,?,?,?)", Object.values(emaillist));
            return results;
        } catch (e) {
            console.error(e);
        } finally {
            conn.end();
        }
        console.log(conn);
    },
    delete: function () {

    }
}