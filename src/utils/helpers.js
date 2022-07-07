function Response(res, statusCode, data, token) {
    return res.status(statusCode).json({
        status: 'success',
        data,
        token
    })
}

module.exports = {
    Response
}