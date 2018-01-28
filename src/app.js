import express from 'express';
import routes from './routes';

module.exports = function () {
    const port = process.env.PORT || 3000;
    const app = express();

    routes(app);

    const server = app.listen(port, function() {
        console.log('Express server listening on port ' + port);
    });
};
