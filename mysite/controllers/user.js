module.exports = {
    joinsuccess: function(req, res) {
        res.render('user/joinsuccess');
    },
    joinform: function(req, res) {
        res.render('user/joinform');
    },
    join: async function(req, res) {
        await User.create({ firstName: "Jane", lastName: "Doe" });
        res.redirect('/user/joinsuccess');
    }
}