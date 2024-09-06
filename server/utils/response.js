const sendResponse = (res, message, statusCode = null, data = null, token = null) => {
    if (data && token) {
        return res.status(statusCode).json({
            status: "success",
            message,
            token,
            data
        });
    }
    else if (data) {
        return res.status(statusCode).json({
            status: "success",
            message,
            data
        });
    } else if (!data && statusCode) {
        return res.status(statusCode).json({
            status: "success",
            message,
        });
    } else {
        return res.json({
            success: "failure",
            message
        })
    }
}

module.exports = sendResponse;