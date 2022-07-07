const X = require('../Exceptions/operational')
const {Response}=require('../utils/helpers')

exports.HomeController=(req, res, next)=>{
    Response(res,200, 'welcome to Amazon API')
}

exports.UndefinedRoutes = (req, res, next) => {
    return next(
        new X(
            `can't find this "${req.originalUrl}" on this server. Check the URL with the correct HTTP method and try again`,404
        )
    );
}