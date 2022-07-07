module.exports=function ErrorHandler(err, req, res, next) {
    res.status(err.statusCode || 500).json({
        status: err.status,
        message:err.message
    })
}


