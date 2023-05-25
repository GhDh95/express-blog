const error = (req, res, next) => {
    res.locals.error = req.session.error || null;
    delete req.session.error;
    next();

}

module.exports = error;