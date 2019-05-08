const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3001;

if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes'));
app.use('/api/payment', require('./routes/payment'));

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});

app.listen(port, function() {
    console.log('Listening on port ' + port);
});

module.exports = app;
