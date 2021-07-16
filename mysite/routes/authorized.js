module.exports = function (role) {
    // console.log("wrap - authorized() called")   // 실행될 때 출력
    // const roleAuthorized = role;
    return function (req, res, next) {
        // console.log("authorized() called "+roleAuthorized); 클로저 함수
        // console.log("authorized() called " + role); 스코프를 벗어났는데도 사용가능
        if (req.session.authUser && (role !== 'ADMIN' || req.session.authUser.role == 'ADMIN')) {
            next();
            return;
        }


        if (req.accepts('html')) {
            res.redirect(req.session.authUser?'/':'/user/login');
            return;
        }
        res.send({
            result: "fail",
            data: null,
            message: "Access Deny"
        })
    }
}